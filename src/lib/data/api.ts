import type { App } from "@/server"
import { hc } from "hono/client"
import { cache } from "react/server"

export const api = hc<App>(
	`http://localhost:${process.env.APP_PUBLIC_PORT}/api`,
)

export type ItemResult = Awaited<ReturnType<typeof fetchItem>>

async function getItem(id: string) {
	const out = await api.item[":id"].$get({ param: { id } })
	if (out.ok) return out.json()
	throw new Error(out.statusText)
}

export const fetchItem = cache(getItem)

export const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms))

export const fetchItemLong = cache(async (id: string, time: number) => {
	await sleep(time)
	return fetchItem(id)
})

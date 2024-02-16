import type { Action } from "@pkxp/bun-rsc/types"

const state = {
	val: "xyz432",
}

export type SetServerState = Action<typeof setState>
export type GetServerState = Action<typeof getState>

export function setState(param: string) {
	"use server"
	state.val = param
	return state.val
}
export function getState() {
	"use server"
	return state.val
}

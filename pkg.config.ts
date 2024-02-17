import type { Context } from "hono"
import { HTTPException } from "hono/http-exception"

export const config = {
	static: "static",
	staticOut: "pkg",
	tmp: "out",
	server: {
		errorHandler: async (err: Error, ctx: Context) => {
			console.info(`\x1b[4m\x1b[31mError in path -> ${ctx.req.path}\x1b[0m`)
			console.error(err.message, err.stack)
			if (err instanceof HTTPException) {
				return err.getResponse()
			}
			return ctx.text(err.message, 500)
		},
		notFound: async (ctx: Context) => {
			return ctx.text("Not Found", 404)
		},
		port: 3000,
		hostname: "localhost",
		cors: {
			"*": {
				origin: "*",
			},
			"/api": {
				origin: "http://rsc.localhost",
			},
		},
	},
	watch: process.env.NODE_ENV !== "production",
	dev: process.env.NODE_ENV !== "production",
}

import { Hono } from "hono"

const routes = new Hono().get("/item/:id", (c) => {
	return c.json({
		id: c.req.param("id"),
		value: Math.random().toString(36).slice(2),
	})
})

export default routes

export type App = typeof routes

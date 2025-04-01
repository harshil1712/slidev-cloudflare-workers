import { Hono } from 'hono';

// Create Hono app
const app = new Hono<{ Bindings: Env }>();

app.get('/auth', (c) => {
	return c.text(c.env.PASSWORD);
});

export default app;

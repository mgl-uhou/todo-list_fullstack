import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/db/schema.js",
	out: "./src/db/migrations",
	driver: "libsql",
	dialect: "sqlite",
	dbCredentials: {
		url: "database.sqlite",
	},
});

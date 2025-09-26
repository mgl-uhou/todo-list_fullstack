/* import { migrate}  from "drizzle-orm/better-sqlite3/migrator";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import path from "path";

const sqlite = new Database("database.sqlite");
const db = drizzle(sqlite);

async function main() {
	console.log("Running migrations...");

	await migrate(db, {
		migrationsFolder: path.join(__dirname, "migrations"),
	});

	console.log("Migrations completed!");
}

main().catch(console.error); */

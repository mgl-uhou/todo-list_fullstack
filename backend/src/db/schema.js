/* import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

const tasks = sqliteTable("tasks", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	titulo: text("titulo").notNull(),
	status: text("status").default("pendente"),
	created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`)
});

export default tasks;
 */
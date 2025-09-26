import prisma from "../db/connection.js";

const tasksModel = {
	getAll: async () => {
		return await prisma.task.findMany();
	},

	createTask: async (task) => {
		return await prisma.task.create({
			data: {
				titulo: task.titulo,
			},
		});
	},

	deleteTask: async (id) => {
		return await prisma.task.delete({
			where: { id: Number(id) },
		});
	},

	updateTasks: async (id, task) => {
		return await prisma.task.update({
			where: { id: Number(id) },
			data: {
				titulo: task.titulo,
				status: task.status,
			},
		});
	},
};

export default tasksModel;

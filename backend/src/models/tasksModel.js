const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {
    const { titulo } = task;
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks (titulo, status, created_at) VALUES (?, ?, ?)';

    const [createdTask] = await connection.execute(query, [titulo, 'pendente', dateUTC]);
    
    return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [ id ]);
    return removedTask;
}

const updateTasks = async (id, tasks) => {
    const { titulo, status } = tasks;
    const query = 'UPDATE tasks SET titulo = ?, status = ? WHERE id = ?';

    const updatedTasks = await connection.execute(query, [titulo, status, id]);
    return updatedTasks;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTasks
};
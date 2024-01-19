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

module.exports = {
    getAll,
    createTask
};
const tbody = document.querySelector('tbody');

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
    return tasks;
};

const createElement = (tag, innerText = "") => {
    const element = document.createElement( tag );
    element.innerText = innerText;
    return element;
}

const task = {
    id: 1,
    titulo: 'Comer',
    status: 'pendente',
    created_at: '15 de Fevereiro de 2024'
}

const createRow = (task) => {
    const { id, titulo, status, created_at } = task;

    const tr = createElement( 'tr' );
    const tdTitle = createElement( 'td', titulo );
};

createRow(task);
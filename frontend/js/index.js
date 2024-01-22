const tbody = document.querySelector( 'tbody' );
const addForm = document.querySelector( '.flex.mb-12.gap-4.w-full' );
const inputTask = document.querySelector( '.input-origin' )

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
    return tasks;
};

const addTask = async (event) => {
    event.preventDefault();

    const task = { titulo: inputTask.value}

    await fetch('http://localhost:3333/tasks', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    });

    loadTasks();
    inputTask.value = "";
};

const deleteTask = async (id) => {
    await fetch(`http://localhost:3333/tasks/${id}`, {method: 'delete'});
    
    loadTasks();
};

const updateTask = async ({ id, titulo, status }) => {
    await fetch(`http://localhost:3333/tasks/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify( { titulo, status } )
    });

    loadTasks();
}

const formatDate = (dateUTC) => {
    const options = {
        dateStyle: 'long',
        time: 'short'
    }
    const date = new Date(dateUTC).toLocaleString('pt-br', options);

    return date;
};

const createElement = (tag, innerText = "", innerHTML = "", classe = '') => {
    const element = document.createElement( tag );
    
    if (innerText){
        element.innerText = innerText;
    }

    if(innerHTML){
        element.innerHTML = innerHTML;
    }

    element.classList.add( classe );
    return element;
}

const createSelect = (value) => {
    const options = `
        <option value="pendente">pendente</option>
        <option value="em andamento">em andamento</option>
        <option value="concluida">concluída</option>
    `;

    const select = createElement('select', '', options, 'select-origin')

    select.value = value;

    return select;
}

const createRow = (task) => {
    const { id, titulo, status, created_at } = task;

    const tr = createElement( 'tr', "", '', 'even:bg-gray-100' );
    const tdTitle = createElement( 'td', titulo, '', 'td-th' );
    const tdCreatedAt = createElement( 'td', formatDate(created_at), '', 'td-th' );
    const tdStatus = createElement( 'td', '', '', 'td-th' );
    const tdActions = createElement( 'td', '', '', 'td-th' );

    const select = createSelect(status);

    select.addEventListener('change', ({ target }) => updateTask({ ...task, status: target.value}))

    const editButton = createElement( 'button', '', '<span class="material-symbols-outlined">edit</span>', 'btn-action' );
    const deleteButton = createElement( 'button', '', '<span class="material-symbols-outlined">delete</span>', 'btn-action' );

    deleteButton.addEventListener('click', () => deleteTask(id));

    tdStatus.appendChild( select );

    tdActions.appendChild( editButton );
    tdActions.appendChild( deleteButton );

    tr.appendChild( tdTitle );
    tr.appendChild( tdCreatedAt );
    tr.appendChild( tdStatus );
    tr.appendChild( tdActions );

    return tr;
};

const loadTasks = async () => {
    const tasks = await fetchTasks();

    tbody.innerHTML = "";

    tasks.forEach((task) => {
        const tr = createRow( task );
        tbody.appendChild( tr );    
    });
};

addForm.addEventListener('submit', addTask);

loadTasks();
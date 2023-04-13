// Посилання на код

const refs = {
    form: document.querySelector('.js-form'),
    input: document.getElementById('newTask'),
    taskListEl: document.querySelector('#taskList'),
}
//////////////////////////////////////

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (refs.input.value.length === 0) {
        return alert("Введіть завдання");
    }

    refs.input.value = '';

    const itemLi = document.createElement('li');

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';

    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete';

    const taskText = document.createElement('p')
    taskText.textContent = refs.input.value;

    itemLi.append(inputCheckbox, taskText, buttonDelete);

    refs.taskListEl.appendChild(itemLi);
})
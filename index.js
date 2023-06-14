// import { Todo } from './JS/Todo.js';
// import { Element } from './JS/Element.js';
// import { Input } from './JS/Input.js';
// import { List } from './JS/List.js';

// const { inputnput, button, list } = data;

// const root = document.querySelector('#root');

// root.insertAdjacentHTML('beforeend', Input);
// root.insertAdjacentHTML('beforeend', Button);
// root.insertAdjacentHTML('beforeend', Element);
// root.insertAdjacentHTML('beforeend', List);

 const addTodo = () => {
  const input = document.getElementById('input');
  const inputText = input.value;
  const list = document.getElementById('list');

  if (inputText === '') {
      alert('Вы должны ввести задачу');
  } {
    let newItem =document.createElement('li');
    newItem.appendChild(document.createTextNode(inputText));
    list.appendChild(newItem);
  };
};






 

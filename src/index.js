document.addEventListener("DOMContentLoaded", () => { 
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    thelist(e.target.new_task_description.value, e.target.priorities.value, e.target.duedate.value);
    form.reset();
  });
});

function thelist(item, priority, time) {
  let newitem = document.createElement('li');
  //let ebttn = document.createElement('button');
  let bttn = document.createElement('button');

  //ebttn.addEventListener('click', editbttn);
  bttn.addEventListener('click', deletebttn);
  //ebttn.textContent = 'Edit';
  bttn.textContent = 'X';

  newitem.textContent = `${item} by ${time} `;
  //newitem.appendChild(ebttn);
  newitem.appendChild(bttn);
  
  if (priority === 'High') {
    newitem.style.color = '#FF0000';
    document.querySelector('#HighP').appendChild(newitem);
  }
  else if (priority === 'Medium') {
    newitem.style.color = '#FFFF00';
    document.querySelector('#MedP').appendChild(newitem);
  }
  else {
    newitem.style.color = '#00FF00';
    document.querySelector('#LowP').appendChild(newitem);
  }
};

function deletebttn(e) {
  e.target.parentNode.remove();
};

/*function editbttn(e) {
  e.target.parentNode.remove();
}*/
const btn = document.getElementById('btn');
const ul = document.getElementById('items');
const box = document.getElementById('box');
// btn.addEventListener('click', (e) =>
// {
//     console.log(e.target);
// });

// ul.addEventListener('mousemove', (e) =>
// {
//     console.log(e.target);
// });
// box.addEventListener('mousemove', (e) =>
// {
//     document.getElementById('title').innerText = 'X: ' + e.clientX + ' Y: ' + e.clientY
//     // console.log(e.clientY);
//     // box.style.background = 'rgb('+ e.offsetX + ','+ e.clientY + ', 0)';
// })

//keyboardEvent
const input = document.getElementById('input');

// input.addEventListener('keyup', (e)=>{
//     if (input.value.length <= 8) {
//         input.style.borderColor = 'red'
//     } else {
//         input.style.borderColor = 'green'
//     }
// });

//form event
const form = document.querySelector('form');

form.addEventListener('submit', (e) =>
{

    if (input.value.length > 0) {
        let li = document.createElement('li');
        let link = document.createElement('a');

        li.className = 'list-group-item';
        li.classList.add('d-flex');
        li.classList.add('justify-content-between');
        link.className = 'delete';

        // link.innerText = '<i class="fa-solid fa-x delete text-danger"></i>'

        let text = document.createTextNode(input.value);
        link.appendChild(document.createTextNode('X'));

        li.appendChild(text);
        li.appendChild(link);
        ul.appendChild(li);
        saveToLocalStorage(input.value);
    } else {
        console.log('Please Fill the input');
    }


    input.value = '';
    e.preventDefault();
});

ul.addEventListener('click', (e) =>
{
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }
});

btn.addEventListener('click', (e) =>
{
    ul.innerHTML = '';
    localStorage.clear()
});

function saveToLocalStorage(name)
{
    let users;
    if (localStorage.getItem('users') != null) {
        users = JSON.parse(localStorage.getItem('users'));
    } else {
        users = [];
    }
    users.push(name);

    localStorage.setItem('users', JSON.stringify(users));
}

window.addEventListener('DOMContentLoaded', () =>
{
    const users = JSON.parse(localStorage.getItem('users'));
    users.forEach((user) =>
    {
        let li = document.createElement('li');
        let link = document.createElement('a');

        li.className = 'list-group-item';
        li.classList.add('d-flex');
        li.classList.add('justify-content-between');
        link.className = 'delete';

        // link.innerText = '<i class="fa-solid fa-x delete text-danger"></i>'

        let text = document.createTextNode(user);
        link.appendChild(document.createTextNode('X'));

        li.appendChild(text);
        li.appendChild(link);
        ul.appendChild(li);
    })
});
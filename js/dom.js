// let dom;
// document.title = "Welcome";
// // dom = document.title;
// // dom = document.URL
// // dom = document.location;
// // console.log("hello world");
// // setTimeout(() =>
// // {
// //     dom.reload();
// // }, 5000);
// // var i = 10;
// // const interval = setInterval(() =>
// // {

// // }, 500);

// // dom = document.all
// dom = document.getElementById('header-title');
// // const li = document.getElementsByClassName('list-group-item')
// const li = document.querySelectorAll('.list-group-item:nth-child(odd)');
// // dom.innerHTML = "<a href='/'>next page</a>"
// // dom.classList.add('text-primary')
// // dom.classList.remove('text-primary')
// // dom.classList.add('text-primary')
// // dom.classList.toggle('text-primary')
// // dom.style.color= 'yellow'
// dom.className = 'text-primary'
// dom.id = 'text-primary'
// dom.setAttribute('src', 'text-primary')
// dom.removeAttribute('src')

// // for (var i = 0; i < li.length; i++){
// //     li[i].style.background = 'red'
// //     li[i].classList.add('mb-3')
// //     console.log(li[i]);
// // }
// li.forEach(e =>
// {
//     e.style.background = 'red'
// })
// // li.style.background = 'red'
// console.log(li);

const ul = document.getElementById('items');
let elem;
// elem = ul.parentElement
// elem = ul.children;


// elem = ul.parentNode.previousElementSibling;
// elem.style.color = 'red';
// for (var i = 0; i < elem.length; i++){
//     elem[i].style.background = 'red'
// }
// elem.childNode
for (var i = 5; i < 11; i++) {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    let text = document.createTextNode('Item ' + i);
    li.appendChild(text);
    ul.appendChild(li);
}
// console.log(li);
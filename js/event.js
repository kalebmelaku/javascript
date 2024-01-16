const btn = document.getElementById('btn');
const ul = document.getElementById('items');
const box = document.getElementById('box')
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
    console.log("form submitted");
    input.value = ''

    e.preventDefault();
})
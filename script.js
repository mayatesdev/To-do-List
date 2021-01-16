const inputEl = document.querySelector('#input');
const btn = document.querySelector('#addBTN');
const divElist = document.querySelector('#list');
const valueInpt = [];

btn.addEventListener('click',()=>{
   const el = createitem(inputEl.value);
   divElist.appendChild(el)
})



function createitem(input){
const divEl = document.createElement('div');
divEl.innerHTML = `<p>${input}<p>`;
return divEl;
}

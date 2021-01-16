const inputEl = document.querySelector('#input');
const btn = document.querySelector('#addBTN');
const divElist = document.querySelector('#list');
const valueInpt = [];

btn.addEventListener('click',()=>{
   valueInpt.push(inputEl.value)
   const el = createitem(inputEl.value);
   divElist.appendChild(el)
   console.log(valueInpt);
})



function createitem(input){
const divEl = document.createElement('div');
divEl.innerHTML = `<p>${input}<p>`;
return divEl;
}

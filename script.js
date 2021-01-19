const inputEl = document.querySelector('#input');
const btn = document.querySelector('#addBTN');
const divElist = document.querySelector('#list');
const valueInpt = [];

btn.addEventListener('click',()=>{
   if(inputEl.value.length > 0){
      valueInpt.push(inputEl.value)
      const el = createitem(inputEl.value);
      divElist.appendChild(el)
      console.log(valueInpt);
      inputEl.value = ""
   }else{
      alert("eneter your task")
   }
})



function createitem(input){
const divEl = document.createElement('div');
divEl.classList.add('itemList');
divEl.innerHTML = `<p>${input}<p>`;

divEl.addEventListener('click', ()=>{
   if(divEl.className === 'itemList'){
      divEl.classList.toggle('itemList');
      divEl.classList.toggle('itemListRemove');
   }else{
     divEl.classList.toggle('itemList');
      divEl.classList.toggle('itemListRemove'); 
   }
})
return divEl;
}



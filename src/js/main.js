import { App } from "./App";

const bodyEl = document.querySelector('body');

bodyEl.append(new App().el);


const gridIconEl = document.querySelector('.grid-icon');
const listIconEl = document.querySelector('.list-icon');


gridIconEl.addEventListener('click',()=>{
  gridIconEl.classList.toggle('hide');
  listIconEl.classList.toggle('hide');
})

listIconEl.addEventListener('click',()=>{
  gridIconEl.classList.toggle('hide');
  listIconEl.classList.toggle('hide');
})
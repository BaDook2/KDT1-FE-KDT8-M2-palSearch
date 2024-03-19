import {App} from "./App";
import FlexContainer from "./component/FlexContainer";
import palStore from "./Store/palInfo";

const bodyEl = document.querySelector('body');

bodyEl.append(new App().el);

// Header
const headerComponent = document.querySelector('header');

// Search Container
const searchIconEl = headerComponent.querySelector('.search--icon');
const searchInputEl = headerComponent.querySelector('.search--input');

// Search Event
const flexContainerEl = document.querySelector('.flex-container');

searchInputEl.addEventListener('keydown', (event) => {
  const searchPal = (palObjectArr, inputValue) => {
    let palFilteredStorage = [];
    palObjectArr.forEach((palObj) => {
      if (Object.values(palObj).includes(inputValue)) {
        palFilteredStorage.push(palObj);
      }
    })
    return palFilteredStorage;
  }

  if (event.keyCode === 13) {
    let inputValue = searchInputEl.value;
    const newPalStorage = searchPal(new palStore().el,inputValue);
    flexContainerEl.innerHTML = '';
    flexContainerEl.append(new FlexContainer(newPalStorage).el);
}})


// MANAGE Container
const manageComponent = headerComponent.querySelector('.manage');
const manageSubButtons = headerComponent.querySelectorAll('.manage__button--sub');

const modifyOpenButton = manageSubButtons[1];
const deleteOpenButton = manageSubButtons[2];

const gridIconEl = headerComponent.querySelector('.grid-icon');
const listIconEl = headerComponent.querySelector('.list-icon');

manageComponent.addEventListener('click', () => {
  manageComponent.classList.toggle('moveup');
  manageSubButtons.forEach(button => button.classList.toggle('hide'));
})

// Manage Enroll
const enrollOpenButton = document.querySelector('.enroll');
const enrollConfirmButton = document.querySelector('.enroll__button');
const enrollCloseButton = document.querySelector('.enroll__modal .close-icon');
const enrollModal = document.querySelector('.enroll__modal')

enrollOpenButton.addEventListener('click', () => {
  enrollModal.classList.toggle('hide');
  modifyButtonEls.forEach(button => button.classList.add('hide'));
  profileCloseIconEls.forEach(el => el.classList.add('hide'));
})

enrollConfirmButton.addEventListener('click', () => {
  
  const idInputEl = document.querySelector('.id__input');
  const keyInputEl = document.querySelector('.key__input');
  const nameInputEl = document.querySelector('.name__input');
  const flexItem = document.createElement('div');

  flexItem.classList.add('flex-item', 'profile');
  flexItem.innerHTML = /* html */ `
  <img src = "../../../api/public/images/paldeck/001.png"
   alt="photo" class = "profile__photo">
      <div class = "profile__description">
        <span>id = ${idInputEl.value}</span>
        <span>key = ${keyInputEl.value}</span>
        <span>name = ${nameInputEl.value}</span>
      </div>
  `
  flexContainerEl.append(flexItem);
})

enrollCloseButton.addEventListener('click', () => {
  enrollModal.classList.add('hide');
})

// Manage Modify
const modifyButtonEls = document.querySelectorAll('.modify__button');
modifyOpenButton.addEventListener('click', () => {
  modifyButtonEls.forEach(button => button.classList.toggle('hide'));
  profileCloseIconEls.forEach(el => el.classList.add('hide'));
  enrollModal.classList.add('hide');
})

modifyButtonEls.forEach(button => button.addEventListener('click', {

}))

// Manage Delete
const profileEls = document.querySelectorAll(`.profile`);
const profileCloseIconEls = document.querySelectorAll('.close-icon');

deleteOpenButton.addEventListener('click', () => {
  profileCloseIconEls.forEach(el => el.classList.toggle('hide'));
  modifyButtonEls.forEach(button => button.classList.add('hide'));
  enrollModal.classList.add('hide');
})
profileEls.forEach(el => el.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-icon')) {
    const clickedEl = event.target;
    const targetEl = clickedEl.parentNode;
    targetEl.remove();
  }
}))


// ICON
gridIconEl.addEventListener('click', () => {
  gridIconEl.classList.toggle('hide');
  listIconEl.classList.toggle('hide');
})

listIconEl.addEventListener('click', () => {
  gridIconEl.classList.toggle('hide');
  listIconEl.classList.toggle('hide');
})
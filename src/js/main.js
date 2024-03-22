import {
  App
} from "./App";
import FlexItem from "./component/FlexItem";
import FlexContainer from "./component/FlexContainer";
import palStore from "./Store/palInfo";

const bodyEl = document.querySelector('body');

bodyEl.append(new App().el);

// 로딩화면을 위한 setTimeout
// (async () => {
//   await new Promise(resolve => {
//       setTimeout(() => {
//           resolve();
//       }, 2000); // 2초 후에 실행
//   });



// Header
const headerComponent = document.querySelector('header');

// Search Container
// const searchIconEl = headerComponent.querySelector('.search--icon');
const searchInputEl = headerComponent.querySelector('.search--input');

// Search Event
const flexContainerEl = document.querySelector('.flex-container');

searchInputEl.addEventListener('keydown', (event) => {
  const searchPal = (palObjectArr, inputValue) => {
    if (inputValue === '') return palObjectArr;
    let palFilteredStorage = [];
    palObjectArr.forEach((palObj) => {
      if (Object.values(palObj).includes(inputValue)) {
        palFilteredStorage.push(palObj);
      }
    })
    return palFilteredStorage;
  }
  if (event.keyCode === 13) {
    const inputValue = searchInputEl.value;
    const newPalStorage = searchPal(new palStore(["id", "key", "name"]).el, inputValue);
    flexContainerEl.innerHTML = '';
    flexContainerEl.append(new FlexContainer(newPalStorage).el);
  }
})


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
const enrollModal = document.querySelector('.enroll__modal');
const uploadImagebutton = enrollModal.querySelector('.upload__image');
const enrollConfirmButton = enrollModal.querySelector('.enroll__button');
const enrollCloseButton = enrollModal.querySelector('.close-icon');
const fake__box = document.querySelector('.fake__box');

fake__box.addEventListener('click', (event) => {
  event.target.parentNode.querySelector('input').click();
});


enrollOpenButton.addEventListener('click', () => {
  enrollModal.classList.toggle('hide');
  modifyButtonEls.forEach(button => {
    button.classList.add('hide');
    button.parentNode.querySelector('.modify--confirm__button').classList.add('hide');
    button.parentNode.querySelector('.close-icon').classList.add('hide');
  });
  const inputEls = document.querySelectorAll('.temporary-input');
  inputEls.forEach(input => input.parentNode.removeChild(input));
  profileDeleteIconEls.forEach(el => el.classList.add('hide'));
})

const previewImg = enrollModal.querySelector('.preview__image');

const fileUpload = () => {
  const selectedFile = uploadImagebutton.files[0];
  const fileReader = new FileReader();

  fileReader.onload = () => {
    previewImg.src = fileReader.result;
  }
  if (selectedFile) {
    fileReader.readAsDataURL(selectedFile);
  }
}
uploadImagebutton.addEventListener('change', fileUpload);


enrollConfirmButton.addEventListener('click', () => {
  const idInputEl = enrollModal.querySelector('.id__input');
  const keyInputEl = enrollModal.querySelector('.key__input');
  const nameInputEl = enrollModal.querySelector('.name__input');

  const flexItem = new FlexItem({
    "image": `${previewImg.src}`,
    "id": `${idInputEl.value}`,
    "key": `${keyInputEl.value}`,
    "name": `${nameInputEl.value}`,
  }).el;

  flexContainerEl.prepend(flexItem);
  modifyButtonEls = document.querySelectorAll('.modify__button');
  profileDeleteIconEls = document.querySelectorAll('.delete-icon');
  const targetModifyButton = flexItem.querySelector('.modify__button');
  const targetModifyConfirmButton = flexItem.querySelector('.modify--confirm__button');
  const targetCloseModifyIcon = flexItem.querySelector('.close-icon');


  targetModifyButton.addEventListener('click', () => {
    const inputEl = document.createElement('input');
    inputEl.classList.add('temporary-input');
    targetModifyConfirmButton.classList.remove('hide');
    targetCloseModifyIcon.classList.remove('hide');
    targetModifyConfirmButton.classList.remove('hide');
    const targetItems = flexItem.querySelectorAll('.value-change');
    targetItems.forEach(el => {
      const inputEl = document.createElement('input');
      inputEl.classList.add('temporary-input');
      el.innerHTML = ''; // 기존 내용 제거
      el.appendChild(inputEl);
    })
  })

  targetCloseModifyIcon.addEventListener('click', () => {
    targetModifyConfirmButton.classList.add('hide');
    targetCloseModifyIcon.classList.add('hide');
    flexItem.querySelectorAll('input').forEach(inputEl => {
      inputEl.parentNode.innerHTML = `${inputEl.value}`
    })
  })

  targetModifyConfirmButton.addEventListener('click', () => {
    flexItem.querySelectorAll('input').forEach(inputEl => {
      inputEl.parentNode.innerHTML = `${inputEl.value}`
    })
  })
  const targetDeleteIcon = flexItem.querySelector('.delete-icon');
  targetDeleteIcon.addEventListener('click',()=>{
    flexItem.remove();
  })
  // profileEls.forEach(el => el.addEventListener('click', (event) => {
  //   if (event.target.classList.contains('delete-icon')) {
  //     const clickedEl = event.target;
  //     const targetEl = clickedEl.parentNode;
  //     targetEl.remove();
  //   }
  // }))


})



enrollCloseButton.addEventListener('click', () => {
  enrollModal.classList.add('hide');
})



// Manage Modify
let modifyButtonEls = document.querySelectorAll('.modify__button');

// modify 버튼을 클릭했을 때 다른 요소들은 hide, 
// profile에 있는 modify만 rmove('.hide')
modifyOpenButton.addEventListener('click', () => {
  modifyButtonEls.forEach(button => {
    button.classList.toggle('hide');
    const buttonParentEl = button.parentNode;
    buttonParentEl.querySelector('.modify--confirm__button').classList.add('hide');
    buttonParentEl.querySelector('.close-icon').classList.add('hide');
  });

  enrollModal.classList.add('hide');
  const inputEls = document.querySelectorAll('.temporary-input');
  inputEls.forEach(input => input.parentNode.removeChild(input));
  profileDeleteIconEls.forEach(el => el.classList.add('hide'));
})

// 각 profile에 있는 modify Button이 눌렸을 때
modifyButtonEls.forEach(modifyButton => {
  modifyButton.addEventListener('click', (event) => {
    const clickedParentEl = event.target.parentNode;
    const modifyConfirmButton = clickedParentEl.querySelector('.modify--confirm__button');
    const closeModifyIcon = clickedParentEl.querySelector('.close-icon');

    modifyConfirmButton.classList.remove('hide');
    closeModifyIcon.classList.remove('hide');

    clickedParentEl.querySelectorAll('.value-change').forEach(el => {
      const inputEl = document.createElement('input');
      inputEl.classList.add('temporary-input');
      el.innerHTML = ''; // 기존 내용 제거
      el.appendChild(inputEl); // input 요소를 추가
    });
  });

  const closeModifyIcon = modifyButton.parentNode.querySelector('.close-icon');

  closeModifyIcon.addEventListener('click', () => {
    const clickedParentEl = closeModifyIcon.parentNode;
    const modifyConfirmButton = clickedParentEl.querySelector('.modify--confirm__button');
    const inputEls = clickedParentEl.querySelectorAll('input').forEach(inputEl => {
      inputEl.parentNode.innerHTML = `${inputEl.value}`
    })
    modifyConfirmButton.classList.add('hide');
    closeModifyIcon.classList.add('hide');
  });
});

let modifyConfirmButtonEls = document.querySelectorAll('.modify--confirm__button');

modifyConfirmButtonEls.forEach(confirmButton => {
  confirmButton.addEventListener('click', () => {
    const targetItem = confirmButton.parentNode;
    targetItem.querySelectorAll('input').forEach(inputEl => {
      inputEl.parentNode.innerHTML = `${inputEl.value}`
    })
  })
});

// Manage Delete
let profileEls = document.querySelectorAll(`.profile`);
let profileDeleteIconEls = document.querySelectorAll('.delete-icon');

deleteOpenButton.addEventListener('click', () => {
  profileDeleteIconEls.forEach(el => el.classList.toggle('hide'));

  modifyButtonEls.forEach(button => {
    button.classList.add('hide');
    button.parentNode.querySelector('.modify--confirm__button').classList.add('hide');
    button.parentNode.querySelector('.close-icon').classList.add('hide');
  });
  enrollModal.classList.add('hide');
  const inputEls = document.querySelectorAll('.temporary-input');
  inputEls.forEach(input => input.parentNode.removeChild(input));
})

profileEls.forEach(el => el.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-icon')) {
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


// })();
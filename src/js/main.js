import {
  App
} from "./App";
import FlexItem from "./component/FlexItem";
import FlexContainer from "./component/FlexContainer";
import palStore from "./Store/palInfo";

const bodyEl = document.querySelector('body');

bodyEl.append(new App().el);

// 로딩화면을 위한 setTimeout
(async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000); // 2초 후에 실행
  });

  // Header
  const headerComponent = document.querySelector('header');

  // Search Container
  const searchInputEl = headerComponent.querySelector('.search--input');

  // Search Event
  let flexContainerEl = document.querySelector('.flex-container');

  searchInputEl.addEventListener('keydown', (event) => {
    const searchPal = (palObjectArr, inputValue) => {
      if (inputValue === '') return palObjectArr;
      let palFilteredStorage = [];
      palObjectArr.forEach((palObj) => {
        if (Object.values(palObj).toString().includes(inputValue)) {
          palFilteredStorage.push(palObj);
        }
      })
      return palFilteredStorage;
    }
    if (event.keyCode === 13) {
      const mainInner = document.querySelector('.main-inner');
      const inputValue = searchInputEl.value;
      const newPalStorage = searchPal(new palStore(["id", "key", "name"]).el, inputValue);
      flexContainerEl.remove();
      mainInner.prepend(new FlexContainer(newPalStorage).el)
      flexContainerEl = document.querySelector('.flex-container');
      // flexContainerEl.append(new FlexContainer(newPalStorage).el);
    }
  })


  // MANAGE Container
  const manageComponent = headerComponent.querySelector('.manage');
  const manageSubButtons = headerComponent.querySelectorAll('.manage__button--sub');

  const enrollOpenButton = manageSubButtons[0];
  const modifyOpenButton = manageSubButtons[1];
  const deleteOpenButton = manageSubButtons[2];

  const gridIconEl = headerComponent.querySelector('.grid-icon');
  const listIconEl = headerComponent.querySelector('.list-icon');

  manageComponent.addEventListener('click', () => {
    manageComponent.classList.toggle('moveup');
    manageSubButtons.forEach(subButton => subButton.classList.toggle('hide'));
  })

  // Manage Enroll
  const enrollModal = document.querySelector('.enroll__modal');
  const uploadImagebutton = enrollModal.querySelector('.upload__image');
  const enrollConfirmButton = enrollModal.querySelector('.enroll__button');
  const enrollModalCloseIcon = enrollModal.querySelector('.modal__close-icon');
  const fake__box = enrollModal.querySelector('.fake__box');

  enrollModalCloseIcon.addEventListener('click', () => {
    enrollModal.classList.add('hide');
  })

  // fake__box가 click된다면 fake__box에 가려진 버튼이 클릭
  fake__box.addEventListener('click', (event) => {
    event.target.parentNode.querySelector('input').click();
  });

  // enroll Open Button을 눌렀을 때,
  // enroll Modal이 나오며,
  // 다른 Manage Elemnet들을 전부 숨긴다.(classList.add('hide))
  enrollOpenButton.addEventListener('click', () => {
    enrollModal.classList.toggle('hide');

    // 각 modifyButton의 부모요소에 있는 
    // confirm버튼과  close-icon을 숨기기하기 위해 forEach 사용
    modifyButtonEls.forEach(modifyButton => {
      modifyButton.classList.add('hide');
      modifyButton.parentNode.querySelector('.modify--confirm__button').classList.add('hide');
      modifyButton.parentNode.querySelector('.modify__close-icon').classList.add('hide');
    });

    // Manage에 있는 enroll을 클릭하면 modify 중이던 input과
    // 프로필을 삭제하는 아이콘을 숨긴다.
    const inputEls = enrollModal.querySelectorAll('.temporary-input');
    inputEls.forEach(input => input.parentNode.removeChild(input));
    profileDeleteIconEls.forEach(el => el.classList.add('hide'));
  })

  const previewImg = enrollModal.querySelector('.preview__image');
  // 이미지 업로드 함수
  const imageUpload = () => {
    const selectedFile = uploadImagebutton.files[0];
    const fileReader = new FileReader();
    const previewImg = enrollModal.querySelector('.preview__image');

    fileReader.onload = () => {
      previewImg.src = fileReader.result;
    }
    if (selectedFile) {
      fileReader.readAsDataURL(selectedFile);
    }
  }
  uploadImagebutton.addEventListener('change', imageUpload);

  // modify -> confirm 버튼을 클릭하여
  // 새로운 프로필을 등록했을 때, 해당 프로필에도 modify, delete에
  // 해당하는 event listener를 추가해야함
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

    // modify와 delete 이벤트를 만들기 위한 변수
    modifyButtonEls = document.querySelectorAll('.modify__button');
    profileDeleteIconEls = document.querySelectorAll('.delete-icon');
    const itemModifyButton = flexItem.querySelector('.modify__button');
    const itemModifyConfirmButton = flexItem.querySelector('.modify--confirm__button');
    const itemCloseModifyIcon = flexItem.querySelector('.modify__close-icon');


    itemModifyButton.addEventListener('click', () => {
      // 임의로 input을 넣을 input태그 만들기
      const inputEl = document.createElement('input');
      inputEl.classList.add('temporary-input');

      // confirm 버튼, modify close icon 보이기
      itemModifyConfirmButton.classList.remove('hide');
      itemCloseModifyIcon.classList.remove('hide');

      // item의 모든 value-change 태그를 선택한 후 input태그로 교채
      const itemModifyInput = flexItem.querySelectorAll('.value-change');
      itemModifyInput.forEach(el => {
        const inputEl = document.createElement('input');
        inputEl.classList.add('temporary-input');
        el.innerHTML = ''; // 기존 내용 제거
        el.appendChild(inputEl);
      })
    })

    // item modify close icon을 눌렀을 때
    // confirm button, close icon을 숨기고(hide)
    // input에 넣은 value값을 각각의 item에 넣기
    itemCloseModifyIcon.addEventListener('click', () => {
      itemModifyConfirmButton.classList.add('hide');
      itemCloseModifyIcon.classList.add('hide');
      flexItem.querySelectorAll('input').forEach(inputEl => {
        inputEl.parentNode.innerHTML = `${inputEl.value}`
      })
    })

    itemModifyConfirmButton.addEventListener('click', () => {
      flexItem.querySelectorAll('input').forEach(inputEl => {
        inputEl.parentNode.innerHTML = `${inputEl.value}`
      })
    })

    // Manage Element에서 delete를 눌렀을 때 생성한 flexItem 삭제
    const itemDeleteIcon = flexItem.querySelector('.delete-icon');
    itemDeleteIcon.addEventListener('click', () => {
      flexItem.remove();
    })
  })



  // Manage Modify
  let modifyButtonEls = document.querySelectorAll('.modify__button');

  // modify 버튼을 클릭했을 때 
  // 각각의 프로필에 있는 modify 버튼은 remove(.hide)
  // 다른 요소들은 hide
  modifyOpenButton.addEventListener('click', () => {
    modifyButtonEls.forEach(modifyButton => {
      modifyButton.classList.toggle('hide');
      const buttonParentEl = modifyButton.parentNode;
      buttonParentEl.querySelector('.modify--confirm__button').classList.add('hide');
      buttonParentEl.querySelector('.modify__close-icon').classList.add('hide');
    });

    // modify 중이던 요소가 있으면 input을 그냥 삭제
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
      const closeModifyIcon = clickedParentEl.querySelector('.modify__close-icon');

      modifyConfirmButton.classList.remove('hide');
      closeModifyIcon.classList.remove('hide');

      clickedParentEl.querySelectorAll('.value-change').forEach(el => {
        const inputEl = document.createElement('input');
        inputEl.classList.add('temporary-input');
        el.innerHTML = ''; // 기존 내용 제거
        el.appendChild(inputEl); // input 요소를 추가
      });
    });

    const closeModifyIcon = modifyButton.parentNode.querySelector('.modify__close-icon');

    closeModifyIcon.addEventListener('click', () => {
      const clickedParentEl = closeModifyIcon.parentNode;
      const modifyConfirmButton = clickedParentEl.querySelector('.modify--confirm__button');
      clickedParentEl.querySelectorAll('input').forEach(inputEl => {
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
      button.parentNode.querySelector('.modify__close-icon').classList.add('hide');
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

  const saveLocalStorage = headerComponent.querySelector('.save');
  saveLocalStorage.addEventListener('click', () => {
    const idEls = document.querySelectorAll('.pal-id');
    const keyEls = document.querySelectorAll('.pal-key');
    const nameEls = document.querySelectorAll('.pal-name');
    const palImage = document.querySelectorAll('.pal-image');

    const data = [];
    for (let i = 0; i < idEls.length; i++) {
      const item = {
        id: idEls[i].textContent,
        key: keyEls[i].textContent,
        name: nameEls[i].textContent,
        image: palImage[i].src
      };
      data.push(item);
    }
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify(data));
  })
})();
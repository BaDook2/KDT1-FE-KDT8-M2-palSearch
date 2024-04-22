import MaterialSymbol from "/src/js/Component/MaterialSymbol";
import Component from "/src/js/core";

class Modal extends Component {
  constructor() {
    super({
      tagName: 'dialog'
    });
    this.el.setAttribute('open', '');
    this.el.classList.add('modal', 'hide');
  }
  render() {

  }
}

export default class EnrollModal extends Modal {
  render() {
    this.el.classList.add('enroll__modal');
    this.el.innerHTML = /* html */ `
    <div class = "photo__container">
      <img src="../../img/pal_image/paldeck/001.png" alt="photo" class = "preview__image">
      <div class = "fake__box">Upload Image</div>
      <input type = "file" alt="input_photo" class = "upload__image">
    </div>
  <div class="information__container">
    <div class='container id__cotainer'>
      <span class='id'>ID</span>
      <input type="text" class='id__input'>
    </div>
    <div class='container key__cotainer'>
      <span class='key'>Key</span>
      <input type="text" class='key__input'>
    </div>
    <div class='container name__cotainer'>
      <span class='name'>Name</span>
      <input type="text" class='name__input'>
    </div>
    <button class='enroll__button'>Enroll</button>
  </div>
    `
    const closeIcon = new MaterialSymbol().el;
    closeIcon.classList.add('modal__close-icon');
    closeIcon.textContent = "close";
    this.el.append(closeIcon);
  }
}

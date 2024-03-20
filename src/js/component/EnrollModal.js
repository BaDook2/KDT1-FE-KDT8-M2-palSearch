import MaterialSymbol from "./MaterialSymbol";
import Component from "../core/core";

class Modal extends Component {
  constructor() {
    super({
      tagName: 'dialog'
    });
    this.el.setAttribute('open','');
    this.el.classList.add('modal', 'hide');
  }
  render(){
    
  }
}

export default class EnrollModal extends Modal {
  render() {
    this.el.classList.add('enroll__modal');
    this.el.innerHTML = /* html */ `
  <img src="../../../api/public/images/paldeck/001.png"
    alt="photo">
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
    closeIcon.classList.add('close-icon');
    closeIcon.textContent = "close";
    this.el.append(closeIcon); 
  }
}

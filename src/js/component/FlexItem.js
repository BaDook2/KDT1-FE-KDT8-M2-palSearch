import { Store } from "../core/core";
import MaterialSymbol from "./MaterialSymbol";


export default class FlexItem extends Store {
  constructor(palObj) {
    super({
      tagName: 'li',
    });
    this.el.classList.add('flex-item', 'profile');
    this.render(palObj);
  }

  render(palObj) {
    this.el.innerHTML = /* html */ `
    <img src = "${palObj["image"]}" alt="${palObj["name"]}_photo" class = "profile__photo pal-image">
    <div class = "profile__description">
    <span>id =<span class = "value-change pal-id">${palObj["id"]}</span>
    </span>
    <span>key =<span class = "value-change pal-key">${palObj["key"]}</span>
    </span>
    <span>name =<span class = "value-change pal-name">${palObj["name"]}</span>
    </span>
    </div>
    <button class = "modify__button hide">Modify</button>
    <button class = "modify--confirm__button hide">Confirm</button>
    `
    
    const deleteItemIcon = new MaterialSymbol().el;
    const closeModifyIcon = new MaterialSymbol().el;
    deleteItemIcon.classList.add('delete-icon', 'hide');
    closeModifyIcon.classList.add('modify__close-icon', 'hide');

    deleteItemIcon.textContent = "close";
    closeModifyIcon.textContent = "close";
    this.el.append(deleteItemIcon, closeModifyIcon);

    return this.el;
  }
}
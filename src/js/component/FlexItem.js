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
    <img src = "../../../api${palObj["image"]}" alt="${palObj["name"]}_photo" class = "profile__photo">
    <div class = "profile__description">
    <span>id =<span class = "value-change">${palObj["id"]}</span>
    </span>
    <span>key =<span class = "value-change">${palObj["key"]}</span>
    </span>
    <span>name =<span class = "value-change">${palObj["name"]}</span>
    </span>
    </div>
    <button class = "modify__button hide">Modify</button>
    <button class = "modify--confirm__button hide">Confirm</button>
    `

    const deleteItemIcon = new MaterialSymbol().el;
    const closeModifyIcon = new MaterialSymbol().el;
    deleteItemIcon.classList.add('delete-icon', 'hide');
    closeModifyIcon.classList.add('close-icon', 'hide');

    deleteItemIcon.textContent = "close";
    closeModifyIcon.textContent = "close";
    this.el.append(deleteItemIcon, closeModifyIcon);

    return this.el;
  }
}
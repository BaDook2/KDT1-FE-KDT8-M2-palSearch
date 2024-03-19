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
    <img src = ${palObj["image"]} alt="photo" class = "profile__photo">
    <div class = "profile__description">
    <span>id = ${palObj["id"]}</span>
    <span>key = ${palObj["key"]}</span>
    <span>name = ${palObj["name"]}</span>
    </div>
    <button class = "modify__button hide">Modify</button>
    <button class = "modify--confirm__button hide">Confirm</button>
    `
    const closeIcon = new MaterialSymbol().el;
    closeIcon.classList.add('close-icon', 'hide');
    closeIcon.textContent = "close";
    this.el.append(closeIcon);

    return this.el;
  }
}
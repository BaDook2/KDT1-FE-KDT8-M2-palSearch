import { Store } from "/src/js/core";

import MaterialSymbol from "/src/js/component/MaterialSymbol";

export default class FlexItem extends Store {
  constructor(palObj) {
    super({
      tagName: "li",
    });
    this.el.classList.add("flex-item", "profile");
    this.render(palObj);
  }

  render(palObj) {
    const { id, key, image, name } = palObj;
    this.el.innerHTML = /* html */ `
    <img src = "${image}" alt = "${name}_photo" class = "profile__photo pal-image">
      <dl class = "profile__description">
      <div>
        <dt>id</dt>
        <dd><span class = "value-change pal-id"> = ${id}</span></dd>
      </div>
      <div>
        <dt>key</dt>
        <dd><span class = "value-change pal-key"> = ${key}</span></dd>
        </div>
      <div>
        <dt>name</dt>
        <dd><span class = "value-change pal-name"> = ${name}</span></dd>
      </div>
    </dl>
    <button class = "modify__button hide">Modify</button>
    <button class = "modify--confirm__button hide">Confirm</button>
    `;

    const createIcon = (className, text) => {
      const icon = new MaterialSymbol().el;
      icon.classList.add(className, "hide");
      icon.textContent = text;
      return icon;
    };

    const deleteItemIcon = createIcon("delete-icon", "close");
    const closeModifyIcon = createIcon("modify__close-icon", "close");
    this.el.append(deleteItemIcon, closeModifyIcon);

    return this.el;
  }

}

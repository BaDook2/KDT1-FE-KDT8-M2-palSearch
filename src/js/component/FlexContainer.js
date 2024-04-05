import {
  Store
} from "/src/js/core";

import FlexItem from "/src/js/component/FlexItem";
import palStore from "/src/js/Store/palInfo";

export default class FlexContainer extends Store {
  constructor(palObjArr = new palStore().el = palObjArr.length) {
    super({
      tagName: 'ul'
    });
    this.el.classList.add('flex-container');
    this.render(palObjArr);
  }
  render(palObjArr) {
    const fragment = document.createDocumentFragment();
    for (let i = 0, max = palObjArr.length; i < max; i++) {
      const flexItem = new FlexItem(palObjArr[i]);
      fragment.append(flexItem.el);
    }
    this.el.append(fragment);
  }
}

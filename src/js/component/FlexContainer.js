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
    for (let i = 0; i < palObjArr.length; i++) {
      this.el.append(new FlexItem(palObjArr[i]).el);
    }
  }
}

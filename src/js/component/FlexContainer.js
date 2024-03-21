import {
  Store
} from "../core/core";
import FlexItem from "./FlexItem";

export default class FlexContainer extends Store {
  constructor(palObjArr = {}) {
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

import Component from "../core/core";
import GridContainer from "./GridContainer";
import Inner from "./Inner";
import FlexContainer from "./FlexContainer";
import palStore from "../Store/palInfo";

export default class Main extends Component {
  constructor() {
    super({tagName: 'Main'})
  }
  render() {
    const innerEl = new Inner().el;
    innerEl.classList.add('main-inner');
    this.el.append(innerEl);
    // innerEl.append(new GridContainer().el);
    const itemStorage = new palStore().el;
    innerEl.append(new FlexContainer(itemStorage).el);
  }
}
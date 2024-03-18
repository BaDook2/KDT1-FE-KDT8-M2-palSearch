import Component from "../core/core";
import GridList from "./GridContainer";
import Inner from "./Inner";

export default class Main extends Component {
  constructor() {
    super({tagName: 'Main'})
  }
  render() {
    const innerEl = new Inner().el;
    innerEl.classList.add('main-inner');
    this.el.append(innerEl);
    innerEl.append(new GridList().el);
  }
}
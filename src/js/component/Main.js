import Component from "/src/js/core";
import GridContainer from "./GridContainer";
import Inner from "/src/js/component/Inner";
import FlexContainer from "/src/js/component/FlexContainer";
import palStore from "/src/js/Store/palInfo";
import ViewMore from "/src/js/component/ViewMore";

export default class Main extends Component {
  constructor() {
    super({
      tagName: 'Main'
    })
  }
  render() {
    const innerEl = new Inner().el;
    innerEl.classList.add('main-inner');
    this.el.append(innerEl);
    // innerEl.append(new GridContainer().el);
    const itemStorage = new palStore().el;
    // innerEl.append(new FlexContainer(itemStorage).el, new ViewMore().el);
    const isLocalStorage = localStorage.getItem('data');
    // console.log(isLocalStorage);
    if (isLocalStorage) {
      const localStorageData = JSON.parse(localStorage.getItem('data'));
      innerEl.append(new FlexContainer(localStorageData).el, new ViewMore().el);
    } else {
      innerEl.append(new FlexContainer(itemStorage).el, new ViewMore().el);
    }
  }
}
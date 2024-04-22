import Component from "/src/js/core";
import GridContainer from "./GridContainer";
import Inner from "/src/js/component/Inner";
import FlexContainer from "/src/js/component/FlexContainer";
import palStore from "/src/js/Store/palInfo";
import ViewMore from "/src/js/component/ViewMore";

export default class Main extends Component {
  constructor() {
    super({
      tagName: "Main",
    });
  }
  render() {
    const innerEl = new Inner().el;
    innerEl.classList.add("main-inner");
    this.el.append(innerEl);
    const itemStorage = new palStore().el;
    const isLocalStorage = localStorage.getItem("data");
    if (isLocalStorage) {
      let localStorageData;
      try {
        JSON.parse(localStorage.getItem("data"));
      } catch (error) {
        console.error("Error parsing JSON data from localStorage:", error);
      }
      innerEl.append(new FlexContainer(localStorageData).el, new ViewMore().el);
    } else {
      innerEl.append(new FlexContainer(itemStorage).el, new ViewMore().el);
    }
  }
}

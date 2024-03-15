import Component from "../core/core";
import GridBox from "./GridBox";
import Inner from "./Inner";
import MaterialSymbol from "./MaterialSymbol";
import Manage from "./Manage";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header'
    });
  };
  render() {

    const innerEl = new Inner().el;
    this.el.append(innerEl);
    innerEl.append(
      new CompanyLogo().el,
      new utils().el
    )
  }
}

class CompanyLogo extends Component {
  constructor() {
    super({
      tagName: 'img'
    });
    this.el.src = "./img/company_logo.svg";
    this.el.alt = "company_logo"
    this.el.height = 36;
    this.el.width = 100;
  }
}

class utils extends Component {
  render() {
    this.el.classList.add("utils");
    const searchIcon = new MaterialSymbol().el;
    const manageEl = new Manage().el;
    searchIcon.classList.add('search', 'underline');
    searchIcon.textContent = 'search';
    manageEl.classList.add('underline');
    manageEl
    this.el.append(
      new Manage().el,
      searchIcon,
      new GridBox().el);
  }
}

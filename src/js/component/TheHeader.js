import Component from "../core/core";
import GridContainer from "./GridIcon";
import ListIcon from "./ListIcon";
import Inner from "./Inner";
import MaterialSymbol from "./MaterialSymbol";
import Manage from "./Manage";
import GridIcon from "./GridIcon";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header'
    });
  };
  render() {

    const innerEl = new Inner().el;
    innerEl.classList.add('header-inner');
    this.el.append(innerEl);
    innerEl.append(
      // new CompanyLogo().el,
      new utils().el
    )
  }
}

// class CompanyLogo extends Component {
//   constructor() {
//     super({
//       tagName: 'img'
//     });
//     this.el.src = "./img/company_logo.svg";
//     this.el.alt = "company_logo"
//     this.el.height = 36;
//     this.el.width = 100;
//   }
// }

class utils extends Component {
  render() {
    this.el.classList.add("utils");
    const searchIcon = new MaterialSymbol().el;
    const manageEl = new Manage().el;
    searchIcon.classList.add('search', 'underline');
    searchIcon.textContent = 'search';
    manageEl.classList.add('underline');
    
    this.el.append(
      new Manage().el,
      searchIcon,
      new GridIcon().el,
      new ListIcon().el
      );
  }
}

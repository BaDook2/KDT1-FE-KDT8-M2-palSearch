import Component from "../core/core";
import GridContainer from "./GridIcon";
import ListIcon from "./ListIcon";
import Inner from "./Inner";
import Manage from "./Manage";
import GridIcon from "./GridIcon";
import SearchContainer from "./Search";
import headerImg from "../../../img/pal_image/paldeck/010.png";

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
      new Logo().el,
      new Utils().el
    )
  }
}
class Logo extends Component{
  constructor(){
    super({tagName:'img'});
  };
  render(){
    this.el.classList.add('logo');
    this.el.src = `${headerImg}`
  }
}
class Utils extends Component {
  render() {
    this.el.classList.add("utils");
    
    const manageEl = new Manage().el;
    
    manageEl.classList.add('underline');
    
    this.el.append(
      new Manage().el,
      new SearchContainer().el,
      new GridIcon().el,
      new ListIcon().el
      );
  }
}

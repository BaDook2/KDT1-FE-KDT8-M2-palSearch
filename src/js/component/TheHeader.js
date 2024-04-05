import Component from "/src/js/core";
import ListIcon from "/src/js/component/ListIcon";
import Inner from "/src/js/component/Inner";
import Manage from "/src/js/component/Manage";
import GridIcon from "/src/js/component/GridIcon";
import SearchContainer from "/src/js/component/Search";
import headerImg from "/img/palworld_logo.png";

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

import MaterialSymbol from "./MaterialSymbol";
import Component from "../core/core";
export default class SearchContainer extends Component{
  constructor(){
    super();
    this.el.classList.add('search__container');
    this.el.append(new SearchIcon().el, new SearchWindow().el);
  }
}

class SearchIcon extends MaterialSymbol {
  constructor() {
    super();
    this.el = new MaterialSymbol().el;
    this.el.classList.add('search--icon');
    this.el.textContent = 'search';
  }
  render(){
  }
}

class SearchWindow extends Component{
  constructor() {
    super({tagName:'input'});
    this.el.classList.add('search--input');
    this.el.textContent = 'search';
  }
  
}
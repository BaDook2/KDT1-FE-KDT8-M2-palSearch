import Component from "../core/core"

export default class MaterialSymbol extends Component{
  constructor(){
    super({tagName:'a'})
    this.el.classList.add("material-symbols-outlined");    
  }
}
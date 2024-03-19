import Component from "../core/core"

export default class MaterialSymbol extends Component{
  constructor(){
    super({tagName:'button'})
    this.el.classList.add("material-symbols-outlined");    
  }
}
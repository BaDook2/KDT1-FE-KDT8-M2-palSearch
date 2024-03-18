import Component from "../core/core";

export default class GridIcon extends Component{
  constructor(){
    super({tagName:'a'})
    this.el.classList.add('grid-icon')
    this.el.classList.add('hide')
    
    this.el.innerHTML = /* html */`
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    `
  }
}
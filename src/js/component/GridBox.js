import Component from "../core/core";

export default class GridBox extends Component{
  constructor(){
    super({tagName:'a'})
    this.el.classList.add('gridbox')
    this.el.innerHTML = /* html */`
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    `
  }
}
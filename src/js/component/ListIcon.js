import Component from "../core/core";

export default class ListIcon extends Component{
  constructor(){
    super({tagName:'a'})
    this.el.classList.add('list-icon')
    this.el.innerHTML = /* html */`
    <div></div>
    <div></div>
    <div></div>
    <!-- <div></div> -->
    `
  }
}
import Component from "../core/core"

export default class Manage extends Component{
  constructor(){
    super({tagName: 'a'})
    this.el.classList.add('manage')
    this.el.textContent = "Manage";
  }
}
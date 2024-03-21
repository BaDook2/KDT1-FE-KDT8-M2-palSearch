import Component from "../core/core";

export default class ViewMore extends Component{
  constructor(){
    super({
      tagName: 'button'
    })
    this.el.classList.add('view--more');
  }
  render(){
    this.el.textContent = "Give Me More Pal";
  }
}
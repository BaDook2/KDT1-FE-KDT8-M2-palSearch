import Component from "../core/core";

export default class ViewMore extends Component{
  constructor(){
    super({
      tagName:'section'
    })
    this.el.classList.add('view--more');
  }
  render(){
    this.el.textContent = "Give Me More Pal";
    this.el.innerHTML = /* html */`
    <button class = "more__button">Give me more pal
  </button>
    `
  }
}
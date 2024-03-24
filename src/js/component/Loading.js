import Component from "../core/core";

export default class Loading extends Component{
  constructor(){
    super({tagName:'section'});
    this.el.classList.add('loading');
  }
  render(){
    this.el.innerHTML = /* html */`
    <div class = "loadingEl">
      <img src="KDT8-M2/img/pal_image/paldeck/010.png" alt="pal_photo">
    </div>
    <span>Please Wait!</span>
    `
  }
}
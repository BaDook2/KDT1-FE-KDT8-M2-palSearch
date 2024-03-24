import Component from "../core/core";
import loadingImg from "../../../img/pal_image/paldeck/010.png";

export default class Loading extends Component{
  constructor(){
    super({tagName:'section'});
    this.el.classList.add('loading');
  }
  render(){
    this.el.innerHTML = /* html */`
    <div class = "loadingEl">
      <img src="${loadingImg}" alt="pal_photo">
    </div>
    <span>Please Wait!</span>
    `
  }
}
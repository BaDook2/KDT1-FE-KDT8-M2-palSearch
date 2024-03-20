import Component from "../core/core";

export default class Loading extends Component{
  constructor(){
    super();
    this.el.classList.add('loading');
  }
  render(){
    this.el.innerHTML = /* html */`
    <div class = "loadingEl">
      <img src="../../../api/public/images/paldeck/010.png" alt="pal_photo">
    </div>
    <span>Please Wait!</span>
    `
  }
}
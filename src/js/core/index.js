export default class Component{
  constructor(payload = {}){
    const {tagName = "div"} = payload;
    this.el = document.createElement(tagName);
    this.render();
  }
  render(){}
}

export class Store{
  constructor(payload = {}){
    const {tagName = "div"} = payload;
    this.el = document.createElement(tagName);
  }
  render(){}
}

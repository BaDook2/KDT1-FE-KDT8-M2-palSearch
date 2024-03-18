import Component from "../core/core"

class GridCircle extends Component{
  constructor(){
    super({tagName: 'li'});
    this.el.classList.add('grid-circle');
  }
}

export default class GridList extends Component{
  constructor(){
    super({tagName:'ul'})
  }
  render(){
  }
}
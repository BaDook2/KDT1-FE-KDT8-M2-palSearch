import Component from "../core/core"


class GridItem extends Component{
  constructor(){
    super({tagName: 'li'});
    this.el.classList.add('grid-circle');
  }
}

export default class GridContainer extends Component{
  constructor(){
    super({tagName:'ul'})
    this.el.classList.add('grid-container')
  }
  render(){
  }
}
import Component from "/src/js/core";
export default class Inner extends Component{
  constructor(){
    super({tagName: 'section'});
  }
  render(){
  this.el.classList.add('inner');
  }
}

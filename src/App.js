import { Component } from "./core/core";
import TheFooter from "./component/TheFooter";
import TheHeader from "./component/TheHeader";

export class App extends Component{
  constructor(){
    super();
    this.el.classList.add('App')
  }
  render(){
    const theHeader = new TheHeader().el; 
    const theFooter = new TheFooter().el;
    const routerView = document.createElement("router-view");

    this.el.append(theHeader,routerView,theFooter);
  }
}
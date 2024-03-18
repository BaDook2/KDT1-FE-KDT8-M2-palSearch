import Component from "./core/core";
import TheFooter from "./component/TheFooter";
import TheHeader from "./component/TheHeader";
import Main from "./component/Main";

export class App extends Component{
  render(){
    this.el.classList.add('App')
    const theHeader = new TheHeader().el; 
    const theFooter = new TheFooter().el;
    const routerView = document.createElement("router-view");
    routerView.append(new Main().el);

    this.el.append(theHeader,routerView,theFooter);
  }
}
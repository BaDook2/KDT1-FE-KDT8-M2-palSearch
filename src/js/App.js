import Component from "./core/core";
import TheFooter from "./component/TheFooter";
import TheHeader from "./component/TheHeader";
import Main from "./component/Main";
import Loading from "./component/Loading";


export class App extends Component {
  async render() {
    this.el.classList.add('App');

    const loading = new Loading().el;
    const theHeader = new TheHeader().el;
    const theFooter = new TheFooter().el;
    const routerView = document.createElement("router-view");
    routerView.append(new Main().el);

    

    this.showLoadingScreen = ()=>{
      this.el.innerHTML='';
      this.el.append(loading);
    }
    this.showMainScreen =  ()=>{
      this.el.innerHTML = '';
      this.el.append(theHeader, routerView, theFooter);
    }

    // this.showLoadingScreen();
    // setTimeout(()=>this.showMainScreen(),2000);
    this.showMainScreen();
  }
}

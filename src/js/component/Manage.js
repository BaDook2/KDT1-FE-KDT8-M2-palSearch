import Component from "../core/core"
import EnrollModal from "./EnrollModal";


export default class Manage extends Component{
  render(){
    this.el.classList.add("manage__container");
  this.el.innerHTML = /*html*/`
  <button class = "manage__button--main manage">Manage</button>
  <button class = "manage__button--sub hide enroll">Enroll</button>
  <button class = "manage__button--sub hide modify">Modify</button>
  <button class = "manage__button--sub hide delete">Delete</button>
  <button class = "manage__button--sub hide save">Save LocalStorage</button>
  `;
  this.el.append(new EnrollModal().el);
  }
}

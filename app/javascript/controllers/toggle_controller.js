import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static classes = ["change"]
  static targets = ["element", "btn"]

  connect() {
    // console.log(this.elementTargets)
    // // this.elementTarget.classList.toggle(this.changeClass)
    // this.update() // start being displayed
  }

  update() {
    console.log("should toggle class here")
    this.elementTargets.forEach(element => {
      element.classList.toggle(this.changeClass)
    });
  }
}

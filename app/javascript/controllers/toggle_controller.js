import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static classes = ["change"]
  static targets = ["title", "btn"]

  connect() {
    console.log(this.titleTargets)
    // this.titleTarget.classList.toggle(this.changeClass)
    this.update()
  }

  update() {
    console.log("should toggle class here")
    this.titleTargets.forEach(element => {
      element.classList.toggle(this.changeClass)
    });
  }
}

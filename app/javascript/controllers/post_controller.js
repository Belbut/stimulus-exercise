import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="post"
export default class extends Controller {
  static targets = ["input"]

  connect() {
    console.log(this.inputTarget)
  }

  warning() {
    let current_text_size = this.inputTarget.value.length
    
    if (current_text_size == 160) {
      alert("Maximum text input is 180")
    }
  }
}

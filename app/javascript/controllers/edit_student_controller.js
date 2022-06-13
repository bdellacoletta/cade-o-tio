import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["form"];

  connect() {
    // console.log('okok');
  }

  displayForm() {
    // this.contentTarget.classList.add("d-none")
    this.formTarget.classList.remove("d-none")
  }
}

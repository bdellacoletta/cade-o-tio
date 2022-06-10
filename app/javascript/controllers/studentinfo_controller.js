import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["content"]

  connect() {
    // console.log(this.contentTarget)
    // console.log('CONECTADO')
  }

  revealContent(event) {
    event.preventDefault()
    // console.log(this.contentTarget.classList.value)

    if (this.contentTarget.classList.value == 'd-none') {
      // console.log(event.currentTarget);
      // console.log(this.contentTarget);
      this.contentTarget.classList.remove("d-none");
    } else {
      this.contentTarget.classList.add("d-none")
    }
  }

  // concealContent() {
  //   console.log(this.contentTarget)
  // }
}

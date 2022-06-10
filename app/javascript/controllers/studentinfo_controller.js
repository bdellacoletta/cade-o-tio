import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["content"]

  connect() {
    // console.log(this.contentTarget)
    // console.log('CONECTADO')
  }

  revealContent() {
    console.log(this.contentTarget)
    this.contentTarget.classList.remove("d-none")
  }
}

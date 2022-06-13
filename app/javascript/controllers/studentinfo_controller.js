import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["content", "icon"]

  connect() {
    // console.log(this.contentTarget)
    // console.log('CONECTADO')
  }

  revealContent(event) {
    event.preventDefault();
    // console.log(event.target.classList.value.includes("test"))
    if (!event.target.classList.value.includes("test")) {
      this.contentTargets.forEach ((target) => {
        if (target.dataset.id === event.currentTarget.dataset.id) {
          if (target.classList.value.includes("d-none")) {
            // console.log(target);
            target.classList.remove("d-none");
            this.iconTarget.classList.remove("d-none");
          } else {
            target.classList.add("d-none");
            this.iconTarget.classList.add("d-none");
          }
        }
      })
    } else {
      this.iconTargets.forEach ((icon) => {
        if (icon.dataset.id === event.currentTarget.dataset.id) {
          // console.log(icon.dataset.id);
          // console.log(event.currentTarget.dataset.id);
          if (icon.classList.value.includes("d-none")) {
            icon.classList.remove("d-none");

          }
        }
      })
    }
  }

  // concealContent() {
  //   console.log(this.contentTarget)
  // }
}

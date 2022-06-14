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
            this.iconTargets.forEach((icon) => {
              if (icon.dataset.id === event.currentTarget.dataset.id){
                icon.classList.remove("d-none");
              }
            })
          } else {
            target.classList.add("d-none");
            this.iconTarget.classList.add("d-none");
          }
        }
      })
    }
  }

  // concealContent() {
  //   console.log(this.contentTarget)
  // }
}

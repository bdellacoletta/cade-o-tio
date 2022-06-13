import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["content", "icon"]

  connect() {
    // console.log(this.contentTarget)
    // console.log('CONECTADO')
  }

  revealContent(event) {
    event.preventDefault();
    console.log(event.target.classList.value.includes("test"))
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
    }
    // console.log(this.currentTarget);
    // id
    // console.log(event.currentTarget.dataset.id);
    // console.log(this.contentTargets);

    // if (this.contentTarget.classList.value == 'd-none') {
    //   // console.log(this.contentTarget);

    //   this.contentTarget.classList.remove("d-none");
    // } else {
    //   this.contentTarget.classList.add("d-none")
    // }
  }

  // concealContent() {
  //   console.log(this.contentTarget)
  // }
}

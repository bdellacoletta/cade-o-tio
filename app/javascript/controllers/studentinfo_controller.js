import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["content"]

  connect() {
    // console.log(this.contentTarget)
    // console.log('CONECTADO')
  }

  revealContent(event) {
    event.preventDefault();
    // console.log(this.currentTarget);
    // id
    // console.log(event.currentTarget.dataset.id);
    // console.log(this.contentTargets);
    this.contentTargets.forEach ((target) => {
      if (target.dataset.id === event.currentTarget.dataset.id) {
        if (target.classList.value == 'd-none') {
          // console.log(target);
          target.classList.remove("d-none");
        } else {
          target.classList.add("d-none");
        }
      }
    })

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

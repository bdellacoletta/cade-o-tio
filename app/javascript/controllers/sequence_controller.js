import Sortable from 'sortablejs';
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "passenger" ]
  saveSequence(attributes) {
    console.log(attributes)
  };

  connect() {
    this.passengerTargets.forEach((passenger) => {
      new Sortable(passenger, {
          group: 'Sequence', // set both lists to same group
          animation: 300,
          onEnd: this.saveSequence
      });
    });
  }
}

import Sortable from 'sortablejs';
import { Controller } from "@hotwired/stimulus"
import Rails from '@rails/ujs';

export default class extends Controller {
  // static targets = [ "passenger" ]
  // saveSequence(attributes) {
  //   console.log(attributes)
  // };

  connect() {
    this.sortable = Sortable.create(this.element, {
      // filter: '.static',
      animation: 300,
      direction: 'vertical',
      onEnd: this.end.bind(this)
    })

  }

  end(event) {
    console.log(event.item);
    let id = event.item.dataset.id
    // console.log(event.item);
    // console.log(event.currentTarget);
    let data = new FormData()

    data.append("position", event.newIndex + 1)

    Rails.ajax({
      url: this.data.get("url").replace(":id", id),
      type: 'PATCH',
      data: data
    })
  }
}

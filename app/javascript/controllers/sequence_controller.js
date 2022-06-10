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
      onEnd: this.end.bind(this)
    })
  }

  end(event) {
    let id = event.item.dataset.id
    // console.log(event.item);
    let data = new FormData()

    data.append("position", event.newIndex + 1)

    Rails.ajax({
      url: this.data.get("url").replace(":id", id),
      type: 'PATCH',
      data: data
    })
  }
}

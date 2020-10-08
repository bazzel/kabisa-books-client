import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class BookModalComponent extends Component {
  @service router;
  @action
  closeModal() {
    this.router.transitionTo("books");
  }
}

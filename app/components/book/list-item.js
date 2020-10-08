import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class BookListItemComponent extends Component {
  @tracked isExpanded = false;
  @service router;

  @action toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

  @action openModal(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.router.transitionTo("books.book", this.args.book);
  }
}

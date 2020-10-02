import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class BookListItemComponent extends Component {
  @tracked isExpanded = false;

  @action toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}

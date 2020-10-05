import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class NavDrawerComponent extends Component {
  @tracked isOpen = false;

  @action
  openMenu() {
    this.isOpen = true;
  }

  @action
  closeMenu() {
    this.isOpen = false;
  }
}

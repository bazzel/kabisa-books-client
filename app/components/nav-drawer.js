import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class NavDrawerComponent extends Component {
  @service navDrawer;

  @action
  openMenu() {
    this.navDrawer.openMenu();
  }

  @action
  closeMenu() {
    this.navDrawer.closeMenu();
  }
}

import Route from "@ember/routing/route";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ApplicationRoute extends Route {
  @service navDrawer;

  @action
  didTransition() {
    this.navDrawer.closeMenu();
    return true;
  }
}

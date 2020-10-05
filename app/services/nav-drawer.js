import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class NavDrawerService extends Service {
  @tracked isOpen = false;

  openMenu() {
    this.isOpen = true;
  }

  closeMenu() {
    this.isOpen = false;
  }
}

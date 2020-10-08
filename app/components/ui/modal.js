import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class UiModalComponent extends Component {
  @action
  handleCancelClick() {
    this.args.onCancel();
  }

  @action
  registerKeyDown() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  @action
  unregisterKeyDown() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  @action
  handleKeydown(evt) {
    if (evt.keyCode == 27) {
      this.args.onCancel();
    }
  }
}

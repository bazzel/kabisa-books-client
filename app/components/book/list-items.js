import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class BookListItemsComponent extends Component {
  @service store;

  @action
  async loadMore() {
    await this.store.query("book", {
      page: {
        offset: 10,
        limit: 10,
      },
      totalPagesParam: "meta.page-count",
    });
  }
}

import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class BooksRoute extends Route {
  @service infinity;

  model() {
    return this.infinity.model("book", {
      perPage: 20,
      startingPage: 1,
      perPageParam: "page[size]",
      pageParam: "page[number]",
      totalPagesParam: "meta.page-count",
      include: "writers",
    });
  }
}

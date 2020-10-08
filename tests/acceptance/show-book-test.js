import { module, test } from "qunit";
import { visit, currentURL, click } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | show book", function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("show book", async function (assert) {
    this.server.createList("book", 10);

    await visit("/books");
    await click(".container ul li:first-child");

    await click(".container ul li:first-child a");
    assert.equal(currentURL(), "/books/1");
  });
});

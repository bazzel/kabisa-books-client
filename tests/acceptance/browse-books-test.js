import { module, test } from "qunit";
import { visit, currentURL, click } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | browse books", function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("browse books", async function (assert) {
    this.server.createList("book", 10);

    await visit("/");
    await click("nav button[aria-label='Open Menu']");
    assert.dom("aside.translate-x-0").exists();

    await click("aside li:nth-child(1) a");
    assert.equal(currentURL(), "/books");
    assert.dom("aside.-translate-x-full").exists();
  });
});

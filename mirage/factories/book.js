import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  title() {
    return faker.lorem.word();
  },
  summary() {
    return faker.lorem.sentences(3);
  },
  coverUrl() {
    return faker.image.imageUrl();
  },
});

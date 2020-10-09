import Model, { attr, belongsTo } from "@ember-data/model";

export default class WriterModel extends Model {
  @attr name;
  @belongsTo("book") book;
}

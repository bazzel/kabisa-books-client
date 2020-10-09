import Component from "@glimmer/component";

export default class BookWrittenByComponent extends Component {
  get writersNames() {
    return this.args.writers.map((writer) => writer.name);
  }
}

import Component from "@glimmer/component";

export default class BookFilterComponent extends Component {
  get results() {
    let { books, query } = this.args;
    let regex = new RegExp(query, "i");

    if (query) {
      books = books.filter((book) => {
        const writerNames = book.writers.map((w) => w.name);
        return (
          regex.test(book.title) ||
          regex.test(book.summary) ||
          writerNames.some((name) => regex.test(name))
        );
      });
    }

    return books;
  }
}

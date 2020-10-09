export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList("book", 100).forEach((book) => {
    server.createList("writer", 3, { book });
  });
}

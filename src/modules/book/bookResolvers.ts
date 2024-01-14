export const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = {
        title: title,
        author: author,
      };
      books.push(newBook);
      return books;
    },
  },
};

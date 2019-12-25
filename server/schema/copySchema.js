// const graphql = require("graphql");
// // const _ = require("lodash"); lodash was removed
// const Book = require("../models/book");
// const Author = require("../models/author");
// const {
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLSchema,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLList,
//   GraphQLNonNull
// } = graphql;

// const AuthorType = new GraphQLObjectType({
//   name: "Author",
//   fields: () => ({
//     id: { type: GraphQLString },
//     name: { type: GraphQLString },
//     age: { type: GraphQLInt },
//     books: {
//       type: new GraphQLList(BookType),
//       resolve(parent, args) {
//         // return _.filter(books, { authorId: parent.id });
//       }
//     }
//   })
// });

// const BookType = new GraphQLObjectType({
//   name: "Book",
//   fields: () => ({
//     id: {
//       type: GraphQLID
//     },
//     name: { type: GraphQLString },
//     genre: { type: GraphQLString },
//     author: {
//       type: AuthorType,
//       resolve(parent, args) {
//         // return _.find(authors, { id: parent.authorId });
//       }
//     }
//   })
// });
// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     book: {
//       type: BookType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         // console.log(typeof args.id)
//         // return _.find(books, { id: args.id });
//       }
//     },
//     author: {
//       type: AuthorType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         // return _.find(authors, { id: args.id });
//       }
//     },
//     books: {
//       type: new GraphQLList(BookType),
//       resolve(parent, args) {
//         // return books;
//       }
//     },
//     authors: {
//       type: new GraphQLList(AuthorType),
//       resolve(parent, args) {
//         // return authors;
//       }
//     }
//   }
// });
// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: () => ({
//     addAuthor: {
//       type: AuthorType,
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) },
//         age: { type: GraphQLNonNull(GraphQLInt) }
//       },
//       resolve: (parent, args) => {
//         let author = new Author(args);
//         console.log(author);
//         return author.save();
//         // const uModel = new Author(args);
//         // const newAuthor = await uModel.save();
//         // if (!newAuthor) {
//         //   throw new Error("Error");
//         // }
//         // return newAuthor;
//       }
//     },
//     addBook: {
//       type: BookType,
//       args: {
//         name: { type: GraphQLString },
//         genre: { type: GraphQLString },
//         authorId: { type: GraphQLString }
//       },
//       resolve: (parent, args) => {
//         let book = new Book(args);
//         return book.save();
//       }
//     }
//   })
// });

// module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

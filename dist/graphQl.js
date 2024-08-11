import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import Movies from "./api/Movies.mjs";
import Stream from "./api/Stream.mjs";
import FAQ from "./api/FAQ.mjs";
const schema = buildSchema(`
    type Movies {
      id: String!
      genre: String!
      image: String!
    }

    type Stream {
      id:String!
      streamTitle:String!
      image:String!
    }

    type FAQ {
      id:String!
      faq:String!
      faqNum:String!
    }
  
    type Query {
      movie: [Movies]
      stream: [Stream]
      faq:[FAQ]
    }
  
  `);
const root = {
  movie: () => {
    return Movies;
  },
  stream: () => {
    return Stream;
  },
  faq: () => {
    return FAQ;
  }
};
const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
});
export default graphqlMiddleware;
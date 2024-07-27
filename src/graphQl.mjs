import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import Movies from "./Movies/Movies.mjs";

const schema = buildSchema(`
    type Movies {
      id: String!
      genre: String!
      image: String!
    }
  
    type Query {
      movie: [Movies]
    }
  `);

const root = {
  movie: () => {
    return Movies;
  },
};

const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

export default graphqlMiddleware;

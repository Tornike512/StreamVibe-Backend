import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import Movies from "./Movies/Movies.mjs";
import Stream from "./Movies/Stream.mjs";

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
  
    type Query {
      movie: [Movies]
      stream:[Stream]
    }
  
  `);

const root = {
  movie: () => {
    return Movies;
  },

  stream: () => {
    return Stream;
  },
};

const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

export default graphqlMiddleware;

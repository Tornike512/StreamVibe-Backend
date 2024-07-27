import express from "express";
import cors from "cors";
import graphqlMiddleware from "./graphQl.mjs";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/graphql", graphqlMiddleware);

app.listen(PORT, () => {
  console.log("running");
});

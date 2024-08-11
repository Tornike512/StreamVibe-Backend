import express from "express";
import cors from "cors";
import path from "path";
import graphqlMiddleware from "./graphQl.mjs";
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));
const PORT = process.env.PORT || 3000;
app.use("/graphql", graphqlMiddleware);
app.listen(PORT, () => {
  console.log("running");
});
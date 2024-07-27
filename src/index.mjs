import express from "express";
import Movies from "./Movies/Movies.mjs";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/movies", (req, res) => {
  res.send(Movies);
});

app.listen(PORT, () => {
  console.log("running");
});

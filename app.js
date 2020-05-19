const express = require("express");
const Post = require("./api/models/posts");
const postData = new Post();
const app = express();

app.get("/api/posts", (req, res) => {
  res.status(200).send(postData.get());
});

app.get;
app.listen(4000, () => console.log(`Listening on: http://localhost:4000`));

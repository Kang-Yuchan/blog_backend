const express = require("express");
const app = express();

const posts = [
  {
    id: "1581461442206",
    title: "This is a New Blog Post",
    content: "This is the content! ",
    post_image: "uploads/post-image-1581461442199.jpg",
    added_date: "1581461442206",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Hello! express");
});

app.get("/api/posts", (req, res) => {
  res.status(200).send(posts);
});

app.listen(4000, () => console.log(`Listening on: http://localhost:4000`));

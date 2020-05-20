const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const multer = require("multer");
const postData = new Post();

var upload = multer({ dest: "uploads/" });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/uploads", express.static("uploads"));

app.get("/api/posts", (req, res) => {
  res.status(200).send(postData.get());
});

app.get("/api/posts/:postId", (req, res) => {
  const postId = req.params.postId;
  const posts = postsData.get();
  const foundPost = posts.find((post) => post.id == postId);
  if (foundPost) {
    res.status(200).send(foundPost);
  } else {
    res.status(404).send("Not Found!");
  }
});

app.post("/api/posts", upload.single("post_image"), (req, res) => {
  const newPost = {
    id: `${Date.now()}`,
    title: req.body.title,
    content: req.body.content,
    post_image: req.body["post_image"],
    added_date: `${Date.now()}`,
  };
  postData.add(newPost);
  res.status(201).send(newPost);
});

app.listen(4000, () => console.log(`Listening on: http://localhost:4000`));

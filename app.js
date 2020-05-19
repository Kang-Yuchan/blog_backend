const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const postData = new Post();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/uploads", express.static("uploads"));

app.get("/api/posts", (req, res) => {
  res.status(200).send(postData.get());
});

app.get("/api/posts/:post_id", (req, res) => {
  const postId = req.params.post_id;
  const foundPost = postData.getIntividualBlog(postId);
  if (foundPost) {
    res.status(200).send(foundPost);
  } else {
    res.status(404).send("Not Found!");
  }
});

app.post("/api/posts", upload.single("post-image"), (req, res) => {
  const newPost = {
    id: `${Date.now()}`,
    title: req.body.title,
    content: req.body.content,
    post_image: req.body["post-image"],
    added_date: `${Date.now()}`,
  };
  postData.add(newPost);
  res.status(201).send("Ok!!");
});

app.listen(4000, () => console.log(`Listening on: http://localhost:4000`));

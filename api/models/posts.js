const PATH = "./data.json";
const fs = require("fs");

class Post {
  constructor() {}

  get() {
    return this.readData();
  }

  getIntividualBlog(postId) {
    const posts = this.readData();
    const foundPost = posts.find((post) => post.id === postId);
    return foundPost;
  }

  add(newPost) {
    const currentPosts = this.readData();
    currentPosts.unshift(newPost);
    this.storeData(newPost);
  }

  readData() {
    const rawdata = fs.readFileSync(PATH);
    const posts = JSON.parse(rawdata);
    return posts;
  }

  storeData(rawdata) {
    const data = JSON.stringify(rawdata);
    fs.writeFileSync(PATH, data);
  }
}

module.exports = Post;

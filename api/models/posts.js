const PATH = "./data.json";
const fs = require("fs");

class Post {
  constructor() {}

  get() {
    return this.readData();
  }

  getIntividualBlog() {}

  add() {}

  readData() {
    const rawdata = fs.readFileSync(PATH);
    const post = JSON.parse(rawdata);
    return post;
  }
}

module.exports = Post;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello! express");
});

app.listen(4000, () => console.log(`Listening on: http://localhost:4000`));

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use(express.static("public"));

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.get("/delete", (req, res) => {
  res.render("delete.ejs");
});

app.get("/bookmark", (req, res) => {
  res.render("bookmark.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from "express";
const port = process.env.PORT || 3333;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Node.js & Express" });
});

app.get("/message/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Yes, hello, this is message ${req.params.id}` });
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

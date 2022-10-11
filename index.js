const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.get("/test", (req, res) => {
  res.send("Hello TEST!");
});
app.get("/verify-deploy", (req, res) => {
  res.send("Verify deploy!");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

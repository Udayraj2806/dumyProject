const express = require("express");
const app = express();

app.get("/cats", (req, res) => {
  res.send("Helllo cats");
});

app.get("/dogs", (req, res) => {
  res.send("Helllo dogs");
});

app.get("/", (req, res) => {
  res.send("Hello None");
});

app.get("/r/:d/:k", (req, res) => {
  const { d } = req.params;
  console.log(req.params);
  res.send(`Hello ${d}`);
});
app.get("*", (req, res) => {
  res.send("Error");
});

// app.use((req, res) => {
//   console.log("Wellcome");
//   res.send("hey welocome o new world..!!");
// });

app.listen(8081, () => {
  console.log("listening to port 8081");
});

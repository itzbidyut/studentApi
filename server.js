const express = require("express");
const studentRoutes = require("./src/student/routes");
const app = express();
const port = 5000;

app.use(express.json());

app.use("/", studentRoutes);

app.get("/", (req, res) => {
  res.send("hello world sefww");
});

app.listen(port, () => console.log(`app is listing on port ${port}`));

const express = require("express");
const app = express();
const peopleRouter = require("./routes/people"); 
const authRouter = require("./routes/login");

app.use(express.static("./methodPost"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", authRouter)

const port = 5000;
app.listen(port, () => {
  console.log(`Server is started in the port: ${port}`);
});

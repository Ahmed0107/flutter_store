require("dotenv").config();

const express = require("express");
const app = express();

const userRouter = require("./routers/userRouter");

app.use(express.json());
app.use("/user", userRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is listening to http://localhost:${PORT}`);
});

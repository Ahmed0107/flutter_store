require("dotenv").config();

const express = require("express");
const app = express();

const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");

app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);

app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`server is listening to http://localhost:${PORT}`);
});

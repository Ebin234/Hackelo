const express = require("express");
const connectDB = require("./config/connectDB");
const authRouter = require("./routes/authRouter");
require("dotenv").config({ quiet: true });

const app = express();

app.use(express.json());
app.use("/", authRouter);

const PORT = process.env.PORT || 3002;
connectDB()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is Successfully listening on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed " + err.message);
  });

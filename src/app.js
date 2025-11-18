const express = require("express");
const connectDB = require("./config/connectDB");
const authRouter = require("./routes/authRouter");
const eventsRouter = require("./routes/hackPostRouter");
const cookieParser = require("cookie-parser");
require("dotenv").config({ quiet: true });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/", authRouter);
app.use("/", eventsRouter);

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

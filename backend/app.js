const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./Routes/userRoutes.js");
const connectToDb = require("./config/db.js");
const express = require("express");
const cookieParser = require("cookie-parser");
const ExpenseRouter = require('./Routes/ExpenseRouter.js');
const authenticateUser = require('./middlewares/authenticateUser.js');

const app = express();

connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");


  const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000"
];
app.use(cors());
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

app.use("/", userRoutes);
app.use("/expenses", authenticateUser, ExpenseRouter)


module.exports = app;

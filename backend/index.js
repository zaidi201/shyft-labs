const express = require("express");
const db = require("./models");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const router = express.Router();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//allowing it for all requests
app.use(
  cors({
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Student Management Portal" });
});

//requiring all routes from
const routes = require("./src/routes/index");

//passing the router to the routes defined in the index file
routes(router);
app.use("/api", router);

const port = process.env.PORT || 4000;
//command for database sync
// db.sequelize.sync({ force: true }).then(async () => {
//   console.log("Drop and re-sync db.");
// });

app.listen({ port: port }, () => {
  console.log(`Server ready at http://localhost:${port}.`);
});

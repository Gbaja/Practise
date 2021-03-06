const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieSession = require("cookie-session");

const app = express();
const routes = require("./routes/index");

if (process.env.NODE_ENV !== "production") {
  require("env2")("config.env");
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 27 * 60 * 60 * 1000 }
  })
);

app.use(routes);
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "..", "/build/");
  app.use(express.static(buildPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

app.disabled("x-powered-by");

module.exports = app;

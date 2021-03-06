const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";

if (dev) require("dotenv").config();

// Initiate Redis Client
require("./api/config/redis.js");

// Initiate Next js app
const app = next({ dev });
const handle = app.getRequestHandler();

// Express server
const server = express();

// Express middlewares
server.use(express.json());
server.use(cookieParser());
if (dev) {
  const morgan = require("morgan");
  server.use(morgan("dev"));
}

// Middleware imports
const { authUser } = require("./api/src/lib/checkUserInfo.js");
const { urlUtils } = require("./api/src/lib/urlUtils.js");
const EventsLibrary = require("./api/src/events/EventsLibrary.js");

// Handlers
const { errorHandler } = require("./api/src/lib/errorHandlers.js");

// Process input URL
server.use("/api", urlUtils);

// Events Library
server.use("/api/stream", EventsLibrary());

const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    // Routes
    server.use("/api", authUser, require("./api/routes.js"));

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    // Handlers
    server.use(errorHandler);

    server.listen(PORT, err => {
      if (err) throw err;
      console.log("Node server listening on port ", PORT);
    });
  })
  .catch(err => {
    console.warn(err);
    process.exit(1);
  });

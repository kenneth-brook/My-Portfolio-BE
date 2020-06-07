const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const router = require("./router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/router", router);

module.exports = server;

const express = require("express");
const accountsRouter = require("./accounts/accounts-router");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ message : " Testing "})
})

server.use("/api/accounts", accountsRouter);

module.exports = server;

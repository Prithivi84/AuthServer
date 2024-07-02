import mongoose from "mongoose";
import User from "/Mongodb/Server/config/db.js";
import express from "express";
import cors from "cors";

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const User = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:Nm3sxeCFVbQIg0GP@cluster0.4bnpae7.mongodb.net/UserDB"
);

app.post("/createUser", (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("running");
});

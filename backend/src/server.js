// Microframework utilizado para criação de APIs rest
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const path = require("path");

mongoose.connect(
  "mongodb+srv://wendeleyf:wendeleyf@cluster0-9wrfi.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Indicando para o express utilizar o json
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);

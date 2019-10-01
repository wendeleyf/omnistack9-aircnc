// Microframework utilizado para criação de APIs rest
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://wendeleyf:wendeleyf@cluster0-9wrfi.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Indicando para o express utilizar o json
app.use(express.json());
app.use(routes);

app.listen(3333);

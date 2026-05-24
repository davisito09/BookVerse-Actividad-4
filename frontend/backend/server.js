const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/usuarios", (req, res) => {
  res.json([
    { nombre: "Juan" },
    { nombre: "Ana" }
  ]);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

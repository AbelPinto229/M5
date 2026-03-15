app.get("/tasks", (req, res) => {
  res.json([
    { id: 1, title: "Criar login" },
    { id: 2, title: "Criar dashboard" }
  ]);
});

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Servidor ClickUP API em http://localhost:3000");
});

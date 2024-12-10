const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// para después
// const corsOptions = {
//   origin: "https://mi-frontend.com",
//   methods: ["GET"], // Solo permite solicitudes GET
// };
// app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

app.get("/api-token", (req, res) => {
  res.json({ token: process.env.HG_TOKEN });
});

app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));

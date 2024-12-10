const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "https://botchef-react.vercel.app",
  methods: ["GET"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/api-token", (req, res) => {
  res.json({ token: process.env.HG_TOKEN });
});

app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));

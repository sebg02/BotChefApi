const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = ["https://botchef-react.vercel.app"];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Acceso no autorizado"));
    }
  },
  methods: ["GET"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/api-token", (req, res) => {
  res.json({ token: process.env.HG_TOKEN });
});

app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));

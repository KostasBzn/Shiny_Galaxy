import express from "express";
import "dotenv/config";
import cors from "cors";
import galaxyRoutes from "./routes/galaxyRoutes.js";

const app = express();

const port = process.env.PORT;
const clientURL = process.env.CLIENT_URL;

app.use(express.json());

const corsOptions = {
  origin: clientURL,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(galaxyRoutes);

app.listen(port, () => {
  console.log(`The server is running in port ${port}`);
});

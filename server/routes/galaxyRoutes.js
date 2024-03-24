import express from "express";
import { sendEmail } from "../controllers/galaxyController.js";

const galaxyRoutes = express.Router();

galaxyRoutes.post("/send-email", sendEmail);

export default galaxyRoutes;

import express from "express";
import { register } from "../controllers/authController.js";
import { login } from "../controllers/authController.js";


const router = express.Router();

// Register Route
router.post("/register", register);
router.post("/login", login);

export default router;

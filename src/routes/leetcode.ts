import axios from "axios";
import express from "express";
import { getStatusByUsername } from "../controllers/leetcodeController";

const router = express.Router();

router.route("/").post(getStatusByUsername);

export default router;

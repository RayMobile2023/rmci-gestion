import express from "express";
import { create } from "../controllers/compte.js";


const router = express.Router();

router.post("/create-account", create);
//router.post("/resend-otp", resendOTP);
//router.post("/verify-email", verifyMail);


export default router;
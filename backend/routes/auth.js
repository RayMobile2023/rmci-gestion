import express from "express";
import { logger, login, recoveryEmail, resendOTP, resendPasswordOTP, resetEmailPassword, updatePassword, verifyMail } from "../controllers/auth.js";
import { checkTokenMiddleware } from "../middleware/check.js";


const router = express.Router();

router.post("/resend-otp", resendOTP);
router.post("/resend-email-otp", resendPasswordOTP);
router.post("/verify-email", verifyMail);
router.post("/login", login);
router.get("/", checkTokenMiddleware, logger);
router.post("/recovery-email", recoveryEmail);
router.post("/reset-email", resetEmailPassword);
router.put("/reset-password", updatePassword);


export default router;
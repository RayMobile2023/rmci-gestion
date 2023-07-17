import express from "express";
import { addDriver, driverEdit, editDriverAvatar, getDriverAvatar, getDriverID, getDrivers, removeDriverAvatar } from "../controllers/drivers.js";

const router = express.Router();

router.get("/drivers-list", getDrivers);
router.post("/drivers-add", addDriver);
router.get("/find-driver/:numDriver", getDriverID);
router.get("/find-image/:numAvatar", getDriverAvatar);
router.put("/edit-avatar/:numDriver", editDriverAvatar);
router.delete("/delete-avatar/:numAvatar", removeDriverAvatar);
router.put("/edit-driver/:numDriver", driverEdit);

export default router;
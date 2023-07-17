import express from "express";
import { addCars, deleteCarsID, editCarAvatar, editCars, getCarAvatar, getCars, getCarsID } from "../controllers/cars.js";

const router = express.Router();

router.get("/cars-list", getCars);
router.post("/cars-add", addCars);
router.get("/find-car/:vehiculeId", getCarsID);
router.put("/edit-car/:vehiculeId", editCars);
router.put("/edit-avatar/:vehiculeId", editCarAvatar);
router.delete("/delete-car/:vehiculeId", deleteCarsID);
router.get("/find-image/:numAvatar", getCarAvatar);

export default router;
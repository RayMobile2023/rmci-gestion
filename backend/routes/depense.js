import express from "express";
import { getAllDepenseByVehicule, getDepense, getDepenseByVehicule, getFirstDepenseCar } from "../controllers/depense.js";

const router = express.Router();

router.get("/all-depenses", getDepense);
router.get("/first-depense/:vehiculeId", getFirstDepenseCar);
router.get("/depense-by-car/:vehiculeId", getDepenseByVehicule);
router.get("/all-depense-by-car/:vehiculeId", getAllDepenseByVehicule);

export default router;
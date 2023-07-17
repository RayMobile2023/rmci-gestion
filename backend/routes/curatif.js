import express from "express";
import { addCuratif, getCuratifID, getCuratifs, updateCuratif } from "../controllers/curatif.js";

const router = express.Router();

router.get("/entretien-list", getCuratifs);
router.post("/curatif-add", addCuratif);
router.get("/find-curatif/:curatifId", getCuratifID);
router.patch("/edit-curatif/:curatifId", updateCuratif);
/*router.put("/edit-avatar/:vehiculeId", editCarAvatar);
router.delete("/delete-car/:vehiculeId", deleteCarsID);
router.get("/find-image/:numAvatar", getCarAvatar);*/

export default router;

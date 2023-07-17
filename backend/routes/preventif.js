import express from "express";
import { addPreventif, getPreventifID, getPreventifs, updatePreventif } from "../controllers/preventif.js";

const router = express.Router();

router.get("/entretien-list", getPreventifs);
router.post("/preventif-add", addPreventif);
router.get("/find-preventif/:preventifId", getPreventifID);
router.patch("/edit-preventif", updatePreventif);
/*router.put("/edit-avatar/:vehiculeId", editCarAvatar);
router.delete("/delete-car/:vehiculeId", deleteCarsID);
router.get("/find-image/:numAvatar", getCarAvatar);*/

export default router;
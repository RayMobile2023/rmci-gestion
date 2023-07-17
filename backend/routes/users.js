import express from "express";
import { create, editUser, getAllUsers } from "../controllers/users.js";

const router = express.Router();

router.post("/users-add", create);
router.get("/users-list", getAllUsers);
router.get("/find-user/:userID", getAllUsers);
router.put("/edit-user/:userID", editUser);

export default router;

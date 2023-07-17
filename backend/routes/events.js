import express from "express";
import { Manquement, addEvent, addVersement, editEvent, getAllEvent, getAllVersementByWeek, getAllVersements, getEventByDateCar, getEventByID } from "../controllers/events.js";

const router = express.Router();

router.post("/add-event", addEvent);
router.get("/events-list", getAllEvent);
router.get("/find-event/:eventID", getEventByID);
router.put("/edit-event/:eventID", editEvent);
router.get("/find-event-by/:eventCar/:eventStart", getEventByDateCar);
router.post("/add-payment", addVersement);
router.get("/all-faute", Manquement);
router.get("/week-versement", getAllVersementByWeek);
router.get("/all-versements", getAllVersements);

export default router;
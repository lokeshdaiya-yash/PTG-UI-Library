import express from "express";
import { addMasterdata, getMasterdata, getdata, editMasterdata, deleteMasterdata } from "../controller/masterdata-controller.js";

const router = express.Router();

router.post("/add", addMasterdata);
router.get("/all", getMasterdata);
router.get("/:id", getdata);
router.post("/:id", editMasterdata);
router.delete("/:id", deleteMasterdata);


export default router;
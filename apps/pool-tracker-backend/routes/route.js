import express from "express";
// import { addMasterdata, getMasterdata, getdata, editMasterdata, deleteMasterdata } from "../controller/masterdata-controller.js";
import userRoutes from "./userroute.js";
import masterdataRoute from "./masterdataRoute.js";
import skillRoute from "./skillsRoute.js";

const router = express.Router();

// router.post("/add", addMasterdata);
// router.get("/all", getMasterdata);
// router.get("/:id", getdata);
// router.post("/:id", editMasterdata);
// router.delete("/:id", deleteMasterdata);

router.use('/masterdata', masterdataRoute);
router.use('/user', userRoutes);
router.use('/skill', skillRoute);

export default router;
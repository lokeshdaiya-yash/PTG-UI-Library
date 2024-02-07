import express from "express";
import { addMasterdata, getMasterdata, getdata, editMasterdata, deleteMasterdata } from "../controller/masterdata-controller.js";
import { addSkill, getSkills, getSingleSkill, editSkill, deleteSkill } from "../controller/skill-controller.js";
import { addUser, getUsers, getUser, editUser, loginUser } from "../controller/user-controller.js";
import { addDesignation, getDesignation } from "../controller/designation-controller.js";
import userRoutes from "./userroute.js";
import masterdataRoute from "./masterdataRoute.js";
import skillRoute from "./skillsRoute.js";

const router = express.Router();

router.post("/designation/add", addDesignation);
router.get("/designation/all", getDesignation);

router.post("/masterdata/add", addMasterdata);
router.get("/masterdata/all", getMasterdata);
router.get("/masterdata/:id", getdata);
router.post("/masterdata/:id", editMasterdata);
router.delete("/masterdata/:id", deleteMasterdata);

router.post("/skill/add", addSkill);
router.get("/skill/all", getSkills);
router.get("/skill/:id", getSingleSkill);
router.post("/skill/:id", editSkill);
router.delete("/skill/:id", deleteSkill);

router.post("/user/add", addUser);
router.get("/user/all", getUsers);
router.get("/user/:id", getUser);
router.post("/user/:id", editUser);
router.post("/user/login", loginUser);


// router.use('/masterdata', masterdataRoute);
// router.use('/user', userRoutes);
// router.use('/skill', skillRoute);

// router.get("/masterdata/all", getMasterdata);
// router.get("/skill/all", getSkills);

export default router;
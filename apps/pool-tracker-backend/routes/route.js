import express from "express";
import { addMasterdata, getMasterdata, getdata, editMasterdata, deleteMasterdata } from "../controller/masterdata-controller.js";
import { addSkill, getSkills, getSingleSkill, editSkill, deleteSkill } from "../controller/skill-controller.js";
import { addUser, getUsers, getUser, editUser, loginUser } from "../controller/user-controller.js";
import { addCompetency, getCompetency, getSingleCompetency, editCompetency, deleteCompetency } from "../controller/competency-controller.js";
import { addDesignation, getDesignation, getSingleDesignation, editDesignation, deleteDesignation } from "../controller/designation-controller.js";
import { addBand, getBand, getSingleBand, editBand, deleteBand} from "../controller/band-controller.js";
// import userRoutes from "./userroute.js";
// import masterdataRoute from "./masterdataRoute.js";
// import skillRoute from "./skillsRoute.js";

addDesignation
const router = express.Router();

router.post("/band/add", addBand);
router.get("/bands", getBand);
router.get("/band/:id", getSingleBand);
router.post("/band/:id", editBand);
router.delete("/band/:id", deleteBand);

router.post("/competency/add", addCompetency);
router.get("/competency", getCompetency);
router.get("/competency/:id", getSingleCompetency);
router.post("/competency/:id", editCompetency);
router.delete("/competency/:id", deleteCompetency);

router.post("/designation/add", addDesignation);
router.get("/designations", getDesignation);
router.get("/designation/:id", getSingleDesignation);
router.post("/designation/:id", editDesignation);
router.delete("/designation/:id", deleteDesignation);

router.post("/masterdata/add", addMasterdata);
router.get("/masterdata", getMasterdata);
router.get("/masterdata/:id", getdata);
router.post("/masterdata/:id", editMasterdata);
router.delete("/masterdata/:id", deleteMasterdata);

router.post("/skill/add", addSkill);
router.get("/skills", getSkills);
router.get("/skill/:id", getSingleSkill);
router.post("/skill/:id", editSkill);
router.delete("/skill/:id", deleteSkill);

router.post("/user/add", addUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user/:id", editUser);
router.post("/user/login", loginUser);


// router.use('/masterdata', masterdataRoute);
// router.use('/user', userRoutes);
// router.use('/skill', skillRoute);

// router.get("/masterdata/all", getMasterdata);
// router.get("/skill/all", getSkills);

export default router;
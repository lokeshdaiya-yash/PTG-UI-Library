import * as express from "express";
import * as authJwt from "../middlewares/authJwt";

import { addMasterdata, getMasterdata, getdata, editMasterdata, deleteMasterdata } from "../controllers/poolTracker/masterdata-controller";
import { addSkill, getSkills, getSingleSkill, editSkill, deleteSkill } from "../controllers/poolTracker/skill-controller";
// import { addUser, getUsers, getUser, editUser, loginUser } from "../controller/user-controller.js";
import { addCompetency, getCompetency, getSingleCompetency, editCompetency, deleteCompetency } from "../controllers/poolTracker/competency-controller";
import { addDesignation, getDesignation, getSingleDesignation, editDesignation, deleteDesignation } from "../controllers/poolTracker/designation-controller";
import { addBand, getBand, getSingleBand, editBand, deleteBand} from "../controllers/poolTracker/bandMasterController";
// import userRoutes from "./userroute.js";
// import masterdataRoute from "./masterdataRoute.js";
// import skillRoute from "./skillsRoute.js";

// addDesignation
const router = express.Router();
router.post("/pool-tracker/band/add", addBand);
router.get("/pool-tracker/bands", getBand);
router.get("/pool-tracker/band/:id", getSingleBand);
router.post("/pool-tracker/band/:id", editBand);
router.delete("/pool-tracker/band/:id", deleteBand);

router.post("/pool-tracker/competency/add", addCompetency);
router.get("/pool-tracker/competency", getCompetency);
router.get("/pool-tracker/competency/:id", getSingleCompetency);
router.post("/pool-tracker/competency/:id", editCompetency);
router.delete("/pool-tracker/competency/:id", deleteCompetency);

router.post("/pool-tracker/designation/add", addDesignation);
router.get("/pool-tracker/designations", getDesignation);
router.get("/pool-tracker/designation/:id", getSingleDesignation);
router.post("/pool-tracker/designation/:id", editDesignation);
router.delete("/pool-tracker/designation/:id", deleteDesignation);

router.post("/pool-tracker/masterdata/add", addMasterdata);
router.get("/pool-tracker/masterdata", getMasterdata);
router.get("/pool-tracker/masterdata/:id", getdata);
router.post("/pool-tracker/masterdata/:id", editMasterdata);
router.delete("/pool-tracker/masterdata/:id", deleteMasterdata);

router.post("/pool-tracker/skill/add", addSkill);
router.get("/pool-tracker/skills", getSkills);
router.get("/pool-tracker/skill/:id", getSingleSkill);
router.post("/pool-tracker/skill/:id", editSkill);
router.delete("/pool-tracker/skill/:id", deleteSkill);



export default router;

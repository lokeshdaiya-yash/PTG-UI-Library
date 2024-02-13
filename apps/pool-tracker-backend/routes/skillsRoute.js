import express from "express";
import { addSkill, getSkills, getSingleSkill, editSkill, deleteSkill } from "../controller/skill-controller.js";


const router = express.Router();

router.post("/add", addSkill);
// router.get("/all", getSkills);
router.get("/:id", getSingleSkill);
router.post("/:id", editSkill);
router.delete("/:id", deleteSkill);

export default router;
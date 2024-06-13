import express from "express";
import { addUser, getUsers, getUser, editUser, loginUser } from "../controller/user-controller.js";


const router = express.Router();

router.post("/add", addUser);
// router.get("/all", getUsers);
router.get("/:id", getUser);
router.post("/:id", editUser);
router.post("/login", loginUser);


export default router;
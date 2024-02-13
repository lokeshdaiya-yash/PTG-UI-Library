import * as express from "express";
import * as controller from "../controllers/auth.controller";
import * as authJwt from "../middlewares/authJwt";
import * as verifySignUp from "../middlewares/verifySignup";

const router = express.Router();
router.post("/api/auth/login", controller.login);
router.post("/api/auth/signup",[verifySignUp.checkDuplicateUsernameOrEmail,], controller.signup);

export default router;

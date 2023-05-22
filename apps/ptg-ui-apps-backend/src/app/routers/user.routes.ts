import * as express from "express";
import * as controller from "../controllers/user.controller";
import * as authJwt from "../middlewares/authJwt";

let router = express.Router();
router.post("/api/user/userData", [authJwt.verifyToken], controller.userData);
router.post("/api/user/uploadFile", [authJwt.verifyToken], controller.uploadFile);
router.post("/api/user/forgetPassword", controller.forgetPassword);
router.post("/api/user/updatePassword", [authJwt.verifyToken], controller.updatePassword);
router.post("/api/user/fileListing", [authJwt.verifyToken], controller.fileListing);
router.post("/api/user/fileDetails", [authJwt.verifyToken], controller.fileDetails);
router.post("/api/user/deleteFile", [authJwt.verifyToken], controller.deleteFile);
router.post("/api/user/updateUser",[authJwt.verifyToken], controller.updateUser);
router.post("/api/user/updateFile",[authJwt.verifyToken], controller.updateFile);
router.post("/api/user/uploadSignature",[authJwt.verifyToken], controller.uploadSignature);

export default router;

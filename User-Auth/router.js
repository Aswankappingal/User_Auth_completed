import { Router } from "express";
import * as controller from "./controller.js";
import Auth from "./auth.js"
const router=Router();

router.route("/addstaff").post(controller.addStaff);

router.route("/login").post(controller.login);
router.route("/home").get(Auth,controller.home);
router.route("/getdetsilsloginedstudent").get(Auth,controller.GetDtsilsLoginedStudent);


export default router;
import { Router } from "express";
import userController from "./userControllers.js";

const route = "/user";
const userRouter = Router();

userRouter.route(`${route}`).get(userController.getAllUser);
userRouter.route(`${route}`).post(userController.addUser);

export default userRouter;

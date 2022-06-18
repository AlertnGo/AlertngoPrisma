import { Router } from 'express'
import userController from "./userControllers";

const userRouter = Router();
const route = "/user";

userRouter.route(`${route}`).get(userController.getAllUser);


export default userRouter;

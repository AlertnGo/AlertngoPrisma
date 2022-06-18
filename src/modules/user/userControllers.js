import * as joi from "joi";
import { prisma } from "@prisma/client";


const userController = {
  getAllUser:async (req, res) => {
    try {
      const users = await prisma.user.findMany()

      res.json(users)
    } catch (error) {
      res.status(400).json({
        message: "Something went wrong",
      })
    }
  },
};

export default userController;

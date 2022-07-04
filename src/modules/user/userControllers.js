import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userController = {
  getAllUser: async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (e) {
      console.log(e);
    }
  },

  addUser: async (req, res) => {
    try {
      const user = await prisma.user.create({
        data: {
          email: req.email,
          name: req.name,
        },
      });
      res.status(200).json(user);
    } catch (e) {
      console.log(e);
    }
  },
};

export default userController;

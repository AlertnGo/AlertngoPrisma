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
      const user = await prisma.user.findUnique({
        where: {
          email: req.email,
        },
      });
      if (user === 0) {
        const adduser = await prisma.user.create({
          data: {
            email: req.email,
            name: req.name,
          },
        });
        res.status(200).json(adduser);
      } else {
        res.json({
          message: "user exsite alredy",
        });
      }
    } catch (e) {
      console.log(e);
    }
  },
};

export default userController;

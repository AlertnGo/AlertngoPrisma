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

  findUser: async (req, res) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: req.params.id,
        },
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404);
      }
    } catch (e) {
      console.log(e);
    }
  },

  addUser: async (req, res) => {
    const { name, email } = req.body;
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (findUser.status === 200) {
        res.json({
          message: "user exsite alredy",
        });
      } else {
        const adduser = await prisma.user.create({
          data: {
            email: email,
            name: name,
          },
        });
        res.status(200).json(adduser);
      }
    } catch (e) {
      console.log(e);
    }
  },
};

export default userController;

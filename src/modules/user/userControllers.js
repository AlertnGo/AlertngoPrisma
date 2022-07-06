import { PrismaClient } from "@prisma/client";
import { compare, genSalt, hash } from "bcrypt";

const prisma = new PrismaClient();

const userController = {
  //register
  addUser: async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    console.log(req.body);
    if (email && password) {
      try {
        const findUser = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        if (findUser) {
          res.json({
            message: "l'utilisateur exsite déjà",
          });
        } else {
          const salt = await genSalt(10);
          const hashedPassword = await hash(password, salt);
          const adduser = await prisma.user.create({
            data: {
              email: email,
              name: name,
              password: hashedPassword,
            },
          });
          res.status(200).json(adduser);
        }
      } catch (e) {}
    }
  },

  //get all user
  getAllUser: async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (e) {
      console.log(e);
    }
  },


  //get user by id
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
};

export default userController;

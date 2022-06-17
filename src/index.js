const express = require("express");
const { PrismaClient } = require("@prisma/client");
const userController = require("./modules/user/userControllers");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userController);

app.get(`/api`, async (req, res) => {
  res.json("Bienvenu sur le serveur de Alertngo");
});

app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`)
);

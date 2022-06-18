import express from "express";
import helmet from "helmet";
import { PrismaClient } from "@prisma/client";
import userRoute from "./modules/user/userRouter.mjs";
import prisma from "../index.js";

const app = express();
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);

app.get(`/api`, async (req, res) => {
  res.json("Bienvenu sur le serveur de Alertngo");
});

app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`)
);

export default prisma;

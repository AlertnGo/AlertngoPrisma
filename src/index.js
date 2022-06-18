import express from "express";
import helmet from "helmet";
import { PrismaClient } from "@prisma/client";
import userRouter from "../modules/user/userRouter";

const prisma = new PrismaClient();
const app = express();
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

app.get(`/api`, async (req, res) => {
  res.json("Bienvenu sur le serveur de Alertngo");
});

app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`)
);

export default prisma;

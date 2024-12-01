import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {userRouter} from "./routes/user";
import {contentRouter} from "./routes/content";
import { linkRouter } from "./routes/link";
import cors from 'cors';

import { userAuth } from "./auth";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1",userRouter);

app.use("/api/v1",userAuth,contentRouter);
app.use("/api/v1",userAuth,linkRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URI as string);

    app.listen(process.env.PORT,()=> console.log("Server is running on port 8080"));
}

main();




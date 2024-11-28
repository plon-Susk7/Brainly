import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {userRouter} from "./routes/user";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/v1",userRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URI as string);

    app.listen(process.env.PORT,()=> console.log("Server is running on port 8080"));
}

main();




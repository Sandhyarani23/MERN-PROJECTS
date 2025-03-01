import express from "express";
import cookieParser from "cookie-parser";

import postRoute from "./routes/post.route.js";
// import {userRoute} from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
const app=express();

app.use(express.json());
app.use(cookieParser())
app.use("/estate/posts",postRoute);
// app.use("/estate/posts",userRoute);
app.use(authRoute);

app.listen(8800,()=>{
    console.log("server is running!");
});
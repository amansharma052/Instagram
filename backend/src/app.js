import express from "express"
import userRouter from "../src/routes/auth.routes.js"
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.routes.js"
import followRouter from "./routes/follow.routes.js";

const app =express()
app.use(express.json());
app.use(cookieParser());
import cors from "cors";
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.use("/api/auth", userRouter);
app.use("/api/posts",postRouter);
app.use("/api/users",followRouter)





export default app
import express from "express"
import userController from "../controllers/user.controller.js"
import identifyUser from "../middleware/auth.middleware.js"

const followRouter =express.Router()

followRouter.post("/follow/:username",identifyUser,userController.followUserController)



export default followRouter
import express from "express"
import postController from "../controllers/post.controller.js"
import multer, { memoryStorage } from "multer"
import identifyUser from "../middleware/auth.middleware.js"


// const storage = multer.memoryStorage()

const upload = multer({
    storage: multer.memoryStorage()
});

const postRouter =express.Router()

postRouter.post("/",upload.single("image"),identifyUser,postController.createPostController)
postRouter.get("/",identifyUser,postController.getPostController)

postRouter.get("/details/:postId",identifyUser,postController.getPostDetailController)

postRouter.post("/like/:postId",identifyUser,postController.likePostController)

postRouter.get("/feed",identifyUser,postController.getFeedController)

export default postRouter
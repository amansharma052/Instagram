import PostModel from "../models/post.model.js";
import ImageKit from '@imagekit/nodejs';
import { toFile } from '@imagekit/nodejs';
import jwt from "jsonwebtoken";
import likeModel from "../models/like.model.js";

// const imagekit = new ImageKit({
//   privateKey: 
// });



async function createPostController(req, res) {
  console.log(req.body, req.file)

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: "Test",
    folder: "insta_clone"
  })
  res.send(file)


  const post = await PostModel.create({
    caption: req.body.caption,
    imgUrl: req.url,
    user: req.user.id
  })

  res.status(201).json({
    message: "post created successfully",
    post
  })

}


async function getPostController(req, res) {

  const userId = req.user.id

  const posts = await PostModel.find({ user: userId })
  res.status(200).json({
    message: "post fetch susscessfull",
    posts
  })

}

async function getPostDetailController(req, res) {


  const userId = req.user.postId

  const postId = req.params.Id

  const post = await PostModel.findById(postId)

  if (!post) {
    return res.status(404).json({
      message: "post not found"
    })
  }


  const isValidUser = post.user.toString() === userId
  if (!isValidUser) {
    return res.status(403).json({
      message: "forbidden request"
    })
  }
  return res.status(200).json({
    message: "post fetched successfully",
    post
  })
}

async function likePostController(req, res) {
 git 
  const post = await PostModel.findById(postId)

  if (!post) {
    return res.status(404).json({
      message: "post not found "
    })
  }

  const like = await likeModel.create({
    post: postId,
    user: username
  })
  res.status(200).json({
    message: "post like susscssfully",
    like
  })



}

async function getFeedController(req,res){
  const posts = await PostModel.find().populate("user")

  return res.status(200).json({
    message:"post fetched succesfful",posts
  })

}



export default { createPostController, getPostController, getPostDetailController, likePostController,getFeedController } 
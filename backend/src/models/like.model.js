import mongoose from "mongoose"

const likeSchema = new mongoose.Schema({

    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: [true, "post id is required is true"]
    },
    user: {
        type: String,
        require: [true, "username is required for liking the post"
        ]
    }




}, {
    timestamps: true
})
likeSchema.index({ post: 1, user: 1 }, { unique: true })

const likeModel =mongoose.model("likes",likeSchema)

export default likeModel 
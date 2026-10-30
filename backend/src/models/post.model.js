
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        caption: {
            type: String,
            trim: true,
            default: ""
        },
        imgUrl: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const PostModel = mongoose.model("Posts", postSchema);

export default PostModel;

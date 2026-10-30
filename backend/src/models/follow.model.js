import mongoose from "mongoose"

const followSchema = new mongoose.Schema({
    follower:{
       type: mongoose.Schema.Types.ObjectId,
    ref: "User"
    },
    followee:{
        type: mongoose.Schema.Types.ObjectId,
    ref: "User"
    }
},{
    timestamps:true
})

const followModel =mongoose.model("follows",followSchema)
export default followModel
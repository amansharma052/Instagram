import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
          
           
        },
        fullname: {
            type: String,
            required: true,
            
        },
            
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
          
        },
        password: {
            type: String,
            required: true,
            select:false
        },
        profileImage: {
            type: String,
            default: ""
        },
        bio: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
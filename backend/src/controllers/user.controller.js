
import followModel from "../models/follow.model.js";
import UserModel from "../models/user.model.js";

async function followUserController(req, res) {
    // Logged-in user ki MongoDB ID
    const followerId = req.user.id;

    // Jisko follow karna hai, uska username URL se
    const followeeUsername = req.params.username;

    const followee = await UserModel.findOne({
        username: followeeUsername
    });

    if (!followee) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    // Apne aap ko follow nahi kar sakta
    if (followerId.toString() === followee._id.toString()) {
        return res.status(400).json({
            message: "You cannot follow yourself"
        });
    }

    const followRecord = await followModel.create({
        follower: followerId,
        followee: followee._id
    });

    return res.status(201).json({
        message: `You are following ${followeeUsername}`,
        follow: followRecord
    });
}

export default {
    followUserController
};

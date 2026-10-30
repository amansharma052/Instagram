
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register user
export const registerUser = async (req, res) => {
    try {
        const { username, fullname, email, password } = req.body;

        if (!username || !fullname || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({
            $or: [
                { email },
                { username }
            ]
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Email or username already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username: username,
            fullname: fullname,
            email: email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                fullname: user.fullname,
                email: user.email,
                profileImage: user.profileImage,
                bio: user.bio
            }
        });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                message: "Email or username already exists"
            });
        }

        console.error(error);
        return res.status(500).json({
            message: "Registration failed"
        });
    }
};


// Login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({
            email: email.trim().toLowerCase()
        }).select("+password")

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        )

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res
            .cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000
            })
            .status(200)
            .json({
                message: "Login successful",
                user: {
                    id: user._id,
                    username: user.username,
                    fullname: user.fullname,
                    email: user.email,
                    profileImage: user.profileImage,
                    bio: user.bio
                }
            });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Login failed"
        });
    }
};
export default { registerUser, loginUser }

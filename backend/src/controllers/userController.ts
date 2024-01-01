import { Request, Response } from "express";
import { User } from "../models/User";

export const sayHi = (req: Request, res: Response) => {
  res.send("hi");
};

export const createUser = async (req: Request, res: Response) => {
    const { name, age } = req.body;

    const existingUser = await User.findOne({ name });
    if(existingUser) {
        return res.status(400).json({msg: "User already exists"});
    }

    const newUser = new User({
        name,
        age
    })
    newUser.save();

    res.json({msg: "User created successfully"});
}
import { NextFunction, Request, Response } from "express";
import usersService from "./users.service";

const createUser = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const {user} = req.body
        const result = await usersService.createUser(user)
        res.status(200).json({
            success: true,
            message: "User create successful",
            data: result
        })
    }
    catch (error) {
        next()
    }
}

export default {
    createUser
}
import { IUser } from "./user.interface";
import { User } from "./users.model";
import config from '../../../config/index'
import { genarateUserId } from "./user.utils";
import ApiError from "../../../errors/ApiError";

const createUser = async (user: IUser): Promise<IUser | null> => {

    // auto genarate increment id 
    const id = await genarateUserId()

    user.id = id

    if (!user.password) {
        user.password = config.user_default_password as string
    }

    const createdUser = await User.create(user)

    if (!createUser) {
        throw new ApiError(400, "Failed to create user")
    }
    return createdUser
}


export default {
    createUser
}
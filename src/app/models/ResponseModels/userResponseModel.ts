import { User } from "../Entity/user";
import { ResponseModel } from "./responseModel";

export interface UserResponseModel extends ResponseModel{
    data: User[];
}
import { Colour } from "../Entity/colour";
import { ResponseModel } from "./responseModel";

export interface ColourResponseModel extends ResponseModel{
    data: Colour[];
}
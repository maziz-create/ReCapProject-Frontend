import { RentalDetailDto } from "../Dto/rentalDetailDto";
import { ResponseModel } from "./responseModel";

export interface RentalDetailDtoResponseModel extends ResponseModel{
    data: RentalDetailDto[];
}
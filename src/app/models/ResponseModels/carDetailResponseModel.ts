import { CarDetailDto } from "src/app/models/Dto/carDetailDto";
import { ResponseModel } from "src/app/models/ResponseModels/responseModel";


export interface CarDetailResponseModel extends ResponseModel {
    data: CarDetailDto[];
}
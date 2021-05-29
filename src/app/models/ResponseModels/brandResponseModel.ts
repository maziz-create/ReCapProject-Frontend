import { Brand } from "src/app/models/Entity/brand";
import { ResponseModel } from "src/app/models/ResponseModels/responseModel";

export interface BrandResponseModel extends ResponseModel{
    data: Brand[];
}
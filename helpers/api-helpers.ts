import {HttpStatuses} from "../constants/http-statuses";
import {BaseApi} from "../base-api/base-api";

export class ApiHelpers {

    static async getRandomProductId(baseApi: BaseApi): Promise<number> {
        const getResponse = await baseApi.getRequest(`/products`, HttpStatuses.OK);
        const getResponseJson = await getResponse.json();
        return getResponseJson.products[Math.floor(Math.random() * getResponseJson.products.length)].id;
    }

}

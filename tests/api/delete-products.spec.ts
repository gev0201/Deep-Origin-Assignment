import {test, expect} from "@playwright/test";
import {BaseApi} from "../../base-api/base-api";
import {HttpStatuses} from "../../constants/http-statuses";
import {ApiHelpers} from "../../helpers/api-helpers";


test.describe.parallel('Delete Products', () => {
    let baseApi: BaseApi;
    let productId: number;

    test.beforeEach(async ({request}) => {
        baseApi = new BaseApi(request);
        productId = await ApiHelpers.getRandomProductId(baseApi);
    });

    test('Delete the product', async ({request}) => {
        const response = await baseApi.deleteRequest(`/products/${productId}`, HttpStatuses.OK);
        const responseJson = await response.json();
        expect(responseJson.id).toBe(productId);
        expect(responseJson.isDeleted).toBe(true);
        expect(responseJson.deletedOn).toContain(new Date().toISOString().split('T')[0]);
    });

    // TODO: Add other necessary tests!
});

import {test, expect} from "@playwright/test";
import {BaseApi} from "../../base-api/base-api";
import {HttpStatuses} from "../../constants/http-statuses";
import {UPDATED_PRODUCT_STATIC_DATA, UPDATED_PRODUCT_DYNAMIC_DATA} from "../../json-models/update-product-payload";
import {ApiHelpers} from "../../helpers/api-helpers";

test.describe.parallel('Update Products', () => {
    let baseApi: BaseApi;
    let productId: number;

    test.beforeEach(async ({request}) => {
        baseApi = new BaseApi(request);
        productId = await ApiHelpers.getRandomProductId(baseApi);
    });

    test('Update the product with static data', async ({request}) => {
        // Updating the product
        const response = await baseApi.putRequest(`/products/${productId}`,
            UPDATED_PRODUCT_STATIC_DATA, HttpStatuses.OK);

        const responseJson = await response.json();
        expect(responseJson.id).toBe(productId);
        expect(responseJson.title).toBe(UPDATED_PRODUCT_STATIC_DATA.title);
        expect(responseJson.price).toBe(UPDATED_PRODUCT_STATIC_DATA.price);
        expect(responseJson.description).toBe(UPDATED_PRODUCT_STATIC_DATA.description);
    });

    test('Update the product with dynamic data', async ({request}) => {
        // Updating the product
        const response = await baseApi.putRequest(`/products/${productId}`,
            UPDATED_PRODUCT_DYNAMIC_DATA, HttpStatuses.OK);

        const responseJson = await response.json();
        expect(responseJson.id).toBe(productId);
        expect(responseJson.title).toBe(UPDATED_PRODUCT_DYNAMIC_DATA.title);
        expect(responseJson.price).toBe(UPDATED_PRODUCT_DYNAMIC_DATA.price);
        expect(responseJson.description).toBe(UPDATED_PRODUCT_DYNAMIC_DATA.description);
    })

    // TODO: Add other necessary tests!
});

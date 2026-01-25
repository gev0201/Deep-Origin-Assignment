import {test, expect} from "@playwright/test";
import {TEST_PRODUCT_DYNAMIC_DATA, TEST_PRODUCT_STATIC_DATA} from '../../json-models/create-product-payload';
import {BaseApi} from "../../base-api/base-api";
import {HttpStatuses} from "../../constants/http-statuses";

test.describe.parallel('Create Products', () => {
    let baseApi: BaseApi;

    test.beforeEach(async ({request}) => {
        baseApi = new BaseApi(request);
    });

    test('Create the product with static data', async ({request}) => {
        const response = await baseApi.postRequest(`/products/add`,
            TEST_PRODUCT_STATIC_DATA, HttpStatuses.CREATED);

        const responseJson = await response.json();

        expect(responseJson).toHaveProperty('id');
        expect(responseJson.id).not.toBeNull();

        expect(responseJson.title).toBe(TEST_PRODUCT_STATIC_DATA.title);
        expect(responseJson.price).toBe(TEST_PRODUCT_STATIC_DATA.price);
        expect(responseJson.description).toBe(TEST_PRODUCT_STATIC_DATA.description);
    });

    test('Create the product with dynamic data', async ({request}) => {
        const response = await baseApi.postRequest(`/products/add`,
            TEST_PRODUCT_DYNAMIC_DATA, HttpStatuses.CREATED);

        const responseJson = await response.json();

        expect(responseJson).toHaveProperty('id');
        expect(responseJson.id).not.toBeNull();

        expect(responseJson.title).toBe(TEST_PRODUCT_DYNAMIC_DATA.title);
        expect(responseJson.price).toBe(TEST_PRODUCT_DYNAMIC_DATA.price);
        expect(responseJson.description).toBe(TEST_PRODUCT_DYNAMIC_DATA.description);
    });

    // TODO: Add other necessary tests!
});

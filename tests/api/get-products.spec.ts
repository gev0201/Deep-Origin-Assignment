import {expect, test} from "@playwright/test";
import {BaseApi} from "../../base-api/base-api";
import {HttpStatuses} from "../../constants/http-statuses";
import {
    DEFAULT_LIMIT,
    DEFAULT_SKIP,
    INVALID_PRODUCT_ID,
    TOTAL_PRODUCTS,
    VALID_PRODUCT_ID
} from "../../test-data/misc-data";


test.describe.parallel('Tests to checkGet Products', () => {
    let baseApi: BaseApi;

    test.beforeEach(async ({request}) => {
        baseApi = new BaseApi(request);
    });

    test('Get products', async () => {
        const response = await baseApi.getRequest(`/products`, HttpStatuses.OK);

        const responseJson = await response.json();

        expect(responseJson).toHaveProperty('products');
        expect(responseJson.products[0].id).toBe(VALID_PRODUCT_ID);
        expect(responseJson.total).toBe(TOTAL_PRODUCTS);
        expect(responseJson.skip).toBe(DEFAULT_SKIP);
        expect(responseJson.limit).toBe(DEFAULT_LIMIT);
    });

    test('Get products with param limit', async () => {
        const response = await baseApi.getRequest(`/products?limit=194`, HttpStatuses.OK);

        const responseJson = await response.json();

        expect(responseJson).toHaveProperty('products');
        expect(responseJson.products[0].id).toBe(VALID_PRODUCT_ID);
        expect(responseJson.products[193].id).toBe(TOTAL_PRODUCTS);
        expect(responseJson.total).toBe(TOTAL_PRODUCTS);
        expect(responseJson.skip).toBe(DEFAULT_SKIP);
        expect(responseJson.limit).toBe(TOTAL_PRODUCTS);
    });

    test('Get products set out of range id', async () => {
        const response = await baseApi.getRequest(`/products/${INVALID_PRODUCT_ID}`, HttpStatuses.NOT_FOUND);

        const responseJson = await response.json();

        expect(responseJson).toHaveProperty('message');
        expect(responseJson.message).toEqual(`Product with id '${INVALID_PRODUCT_ID}' not found`);
    });

    // TODO: Add other necessary tests!
});

import {test, expect, request} from "@playwright/test";
import {TEST_PRODUCT_DYNAMIC_DATA, TEST_PRODUCT_STATIC_DATA} from '../../json-models/create-product-payload';
import {BaseApi} from "../../baseApi/base-api";
import {HttpStatuses} from "../../constants/http-statuses";
import {UPDATED_PRODUCT_STATIC_DATA, UPDATED_PRODUCT_DYNAMIC_DATA} from "../../json-models/update-product-payload";

test.describe('DummyJSON Products API', () => {
    let baseApi: BaseApi;

    test.describe.parallel('CRUD Products', () => {
        test('Create the product with static data', async ({ request }) => {
            baseApi = new BaseApi(request);

            const response = await baseApi.postRequest(`/products/add`,
                TEST_PRODUCT_STATIC_DATA, HttpStatuses.CREATED);

            const responseJson = await response.json();

            expect(responseJson).toHaveProperty('id');
            expect(responseJson.id).not.toBeNull();

            expect(responseJson.title).toBe(TEST_PRODUCT_STATIC_DATA.title);
            expect(responseJson.price).toBe(TEST_PRODUCT_STATIC_DATA.price);
            expect(responseJson.description).toBe(TEST_PRODUCT_STATIC_DATA.description);
        });

        test('Create the product with dynamic data', async ({ request }) => {
            baseApi = new BaseApi(request);

            const response = await baseApi.postRequest(`/products/add`,
                TEST_PRODUCT_DYNAMIC_DATA, HttpStatuses.CREATED);

            const responseJson = await response.json();

            expect(responseJson).toHaveProperty('id');
            expect(responseJson.id).not.toBeNull();

            expect(responseJson.title).toBe(TEST_PRODUCT_DYNAMIC_DATA.title);
            expect(responseJson.price).toBe(TEST_PRODUCT_DYNAMIC_DATA.price);
            expect(responseJson.description).toBe(TEST_PRODUCT_DYNAMIC_DATA.description);
        });
    });

    test.describe.parallel('Update Products', () => {
        test('Update the product with static data', async ({ request }) => {
            baseApi = new BaseApi(request);

            // Getting random product id
            const getResponse = await baseApi.getRequest(`/products`, HttpStatuses.OK);
            const getResponseJson = await getResponse.json();
            const productId = getResponseJson.products[Math.floor(Math.random() * getResponseJson.products.length)].id;

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
            baseApi = new BaseApi(request);

            // Getting random product id
            const getResponse = await baseApi.getRequest(`/products`, HttpStatuses.OK);
            const getResponseJson = await getResponse.json();
            const productId = getResponseJson.products[Math.floor(Math.random() * getResponseJson.products.length)].id;

            // Updating the product
            const response = await baseApi.putRequest(`/products/${productId}`,
                UPDATED_PRODUCT_DYNAMIC_DATA, HttpStatuses.OK);

            const responseJson = await response.json();
            expect(responseJson.id).toBe(productId);
            expect(responseJson.title).toBe(UPDATED_PRODUCT_DYNAMIC_DATA.title);
            expect(responseJson.price).toBe(UPDATED_PRODUCT_DYNAMIC_DATA.price);
            expect(responseJson.description).toBe(UPDATED_PRODUCT_DYNAMIC_DATA.description);
        })
    });
});

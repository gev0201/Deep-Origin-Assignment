import { test, expect } from "@playwright/test";
import { TEST_PRODUCT } from '../../test-data/post-models';
import { API_BASE_URL } from '../../test-data/test-env-urls';
import { ApiHelpers } from '../../helpers/api-helpers';

test.describe('DummyJSON Products API', () => {

    test.describe('CRUD Products', () => {
        test('Create the product', async ({ request }) => {
            const response = await request.post(`${API_BASE_URL}/products/add`, {
                headers: { 'Content-Type': 'application/json' },
                data: TEST_PRODUCT
            });
            
            await ApiHelpers.validateResponseCode(response, 201);
            
            const data = await response.json();

            expect(data).toHaveProperty('id');
            expect(data.id).not.toBeNull();

            expect(data.title).toBe(TEST_PRODUCT.title);
            expect(data.price).toBe(TEST_PRODUCT.price);
            expect(data.description).toBe(TEST_PRODUCT.description);
        });

    });
});

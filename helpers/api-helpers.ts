import { APIResponse, expect } from '@playwright/test';

export class ApiHelpers {

    static async validateResponseCode(response: APIResponse, code: number) {
        expect(response.status()).toBe(code);
    }

}

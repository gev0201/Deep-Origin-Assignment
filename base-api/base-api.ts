import {APIRequestContext, expect} from "@playwright/test";
import {HttpStatuses} from "../constants/http-statuses";

export class BaseApi {
    protected request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getRequest(endpoint: string, expectedStatus: HttpStatuses = HttpStatuses.OK) {
        const response = await this.request.get(endpoint);

        expect(response.status(), `For GET request should be status - ${expectedStatus} 
        but got ${response.status()} from endpoint ${endpoint}`).toBe(expectedStatus);
        return response;
    }

    async postRequest(endpoint: string, body: any, expectedStatus: HttpStatuses = HttpStatuses.OK) {
        const response = await this.request
            .post(endpoint, {data: body});

        expect(response.status(), `For POST request should be status -  ${expectedStatus} 
        but got ${response.status()} from endpoint ${endpoint}`).toBe(expectedStatus);
        return response;
    }

    async putRequest(endpoint: string, body: any, expectedStatus: HttpStatuses = HttpStatuses.OK) {
        const response = await this.request
            .put(endpoint, {data: body});

        expect(response.status(), `For PUT request should be status -  ${expectedStatus} 
        but got ${response.status()} from endpoint ${endpoint}`).toBe(expectedStatus);
        return response;
    }

    async deleteRequest(endpoint: string, expectedStatus: HttpStatuses = HttpStatuses.OK) {
        const response = await this.request.delete(endpoint);

        expect(response.status(), `For DELETE request should be status -  ${expectedStatus} 
        but got ${response.status()} from endpoint ${endpoint}`).toBe(expectedStatus);
        return response;
    }

}

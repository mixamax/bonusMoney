import { makeRequest } from "../utils/makeRequest";
import { tokenValue } from "../constants";
import { baseUrl } from "../constants";

type TBody = {
    offset: number;
    limit: number;
};

class CardApi {
    async getCards(body: TBody) {
        return await makeRequest(`${baseUrl}`, {
            headers: {
                TOKEN: tokenValue,
                "Content-Security-Policy": `connect-src ${baseUrl}`,
            },
            body,
        });
    }
}

export const cardApi = new CardApi();

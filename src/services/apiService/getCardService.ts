import { cardApi } from "../../api/cardApi";
import { TResponse } from "../../models/TCard";

export type TError = {
    message: string;
};

export const getCardService = async (
    offset: number,
    limit: number
): Promise<TResponse | TError | undefined> => {
    const body = { offset, limit };

    try {
        const response = await cardApi.getCards(body);

        if (response.status === 200) {
            let data = await response.json();
            return data;
        }
        if (response.status === 401) {
            return { message: "Ошибка авторизации" };
        }
        if (response.status === 400) {
            let data = await response.json();
            return { message: data.message };
        }
        if (response.status === 500) {
            return { message: "Все упало" };
        }
        throw new Error("Неизвестная ошибка");
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.log(e);
        }
    }
};

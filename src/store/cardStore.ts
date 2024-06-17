import { makeAutoObservable, runInAction } from "mobx";
import { TCard } from "../models/TCard";
import { getCardService, TError } from "../services/apiService/getCardService";
import { limitOfRequestedCards } from "../constants";

class CardStore {
    cards: TCard[] = [];
    errorData: TError | null = null;
    isLoading = false;
    offset = 0;
    currentCardsLength = 0;
    isEndOfList = false;

    constructor() {
        makeAutoObservable(this);
    }

    getCardsAction = async () => {
        this.isLoading = true;
        const response = await getCardService(
            this.offset,
            limitOfRequestedCards
        );
        runInAction(() => {
            this.isLoading = false;
            if (response && "message" in response) {
                this.errorData = response;
                return;
            }
            if (response && "companies" in response) {
                this.currentCardsLength = response.companies.length;
                this.cards = [...this.cards, ...response.companies];
                this.offset = this.offset + limitOfRequestedCards;
                this.errorData = null;
                if (this.currentCardsLength === 0) {
                    history.pushState({ offset: 0 }, "");
                } else {
                    history.pushState({ offset: this.offset }, "");
                }
                return;
            }
        });
    };
}

export const cardStore = new CardStore();

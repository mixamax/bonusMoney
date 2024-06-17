import { MainLayout } from "../mainLayout/MainLayout";
import { cardStore } from "../../store/cardStore";
import { LoaderAndNoCompanyBlock } from "../loaderAndNoCompanyBlock";
import { Card } from "../card";
import { useEffect, useContext } from "react";
import { ModalContext } from "../withModalProvider/WithModalProvider";
import { observer } from "mobx-react-lite";

function Main() {
    const { cards, errorData, getCardsAction, isLoading, currentCardsLength } =
        cardStore;
    const context = useContext(ModalContext);

    useEffect(() => {
        if (errorData) {
            if (!context) return;
            context.openModal({
                type: "error",
                errorMessage: errorData.message,
            });
        }
    }, [errorData]);

    useEffect(() => {
        getCardsAction();
    }, []);

    return (
        <>
            <MainLayout
                getCardsAction={getCardsAction}
                isLoading={isLoading}
                cardsLength={cards.length}
                currentCardsLength={currentCardsLength}
            >
                {cards.length == 0 && (
                    <LoaderAndNoCompanyBlock
                        isLoading={isLoading}
                        currentCardsLength={currentCardsLength}
                    />
                )}
                {!errorData &&
                    cards.length > 0 &&
                    cards.map((card) => (
                        <Card key={card.company.companyId} cardData={card} />
                    ))}
            </MainLayout>
        </>
    );
}

export default observer(Main);

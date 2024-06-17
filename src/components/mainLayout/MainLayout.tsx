import { useEffect, useRef } from "react";
import { LoaderAndNoCompanyBlock } from "../loaderAndNoCompanyBlock";
import styles from "./mainLayout.module.css";

type Props = {
    children: React.ReactNode;
    getCardsAction: () => void;
    isLoading: boolean;
    cardsLength: number;
    currentCardsLength: number;
};

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};
export function MainLayout({
    children,
    getCardsAction,
    isLoading,
    cardsLength,
    currentCardsLength,
}: Props) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current === null) {
            return;
        }
        let observerNative = new IntersectionObserver((entry) => {
            const intersectionRect = entry[0].intersectionRect;
            if (
                intersectionRect.y >
                    window.innerHeight - intersectionRect.height * 2 &&
                entry[0].isIntersecting
            ) {
                getCardsAction();
            }
        }, options);

        observerNative.observe(ref.current as Element);

        return () => {
            if (ref.current === null) {
                return;
            }
            observerNative.unobserve(ref.current as Element);
        };
    }, [ref.current, currentCardsLength]);

    return (
        <main className={styles.main}>
            {children}
            {cardsLength > 0 && (
                <LoaderAndNoCompanyBlock
                    isLoading={isLoading}
                    currentCardsLength={currentCardsLength}
                />
            )}
            {cardsLength > 0 && currentCardsLength > 0 && !isLoading && (
                <div className={styles["observerable-block"]} ref={ref}></div>
            )}
        </main>
    );
}

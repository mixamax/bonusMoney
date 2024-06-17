import { Loader } from "../loader";
import styles from "./loaderAndNoCompanyBlock.module.css";
type Props = {
    isLoading: boolean;
    currentCardsLength: number;
};

export function LoaderAndNoCompanyBlock({
    isLoading,
    currentCardsLength,
}: Props) {
    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && currentCardsLength == 0 && (
                <span className={styles["noblock-text"]}>Нет компаний</span>
            )}
        </>
    );
}

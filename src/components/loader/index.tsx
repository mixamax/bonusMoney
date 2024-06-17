import { Oval } from "react-loader-spinner";
import styles from "./loader.module.css";
export function Loader() {
    return (
        <div className={styles["loader-container"]}>
            <Oval
                color="black"
                wrapperStyle={{ width: "20vw", height: "20vw" }}
                secondaryColor="var(--background)"
            />
            <div className={styles["loader-text"]}>Подгрузка компаний</div>
        </div>
    );
}

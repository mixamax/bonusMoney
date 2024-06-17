import styles from "./startScreen.module.css";
import logoURL from "../../assets/images/logo.png";
export function StartScreen() {
    return (
        <div className={styles["start-screen-container"]}>
            <img src={logoURL} width={"50%"} />
        </div>
    );
}

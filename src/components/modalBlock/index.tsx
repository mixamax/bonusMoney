import styles from "./modalBlock.module.css";
import { TPayloadModal } from "../withModalProvider/WithModalProvider";
import svgURL from "../../assets/images/exclamation.svg";

type Props = {
    payloadModal: TPayloadModal | null;
    closeModal: () => void;
};
export function ModalBlock({ payloadModal, closeModal }: Props) {
    if (payloadModal && payloadModal.type === "error") {
        return (
            <div className={styles["modalblock-container"]}>
                <div className={styles["modalblock-text"]}>
                    <img src={svgURL} width={"15%"}></img>
                    <span>
                        <b>{payloadModal.errorMessage}</b>
                    </span>
                </div>
                <button
                    className={styles["modalblock-button"]}
                    onClick={closeModal}
                >
                    x
                </button>
            </div>
        );
    }
    if (payloadModal && payloadModal.type === "pressed button") {
        return (
            <div className={styles["modalblock-container"]}>
                <div className={styles["modalblock-text"]}>
                    <span>
                        <b>Нажата кнопка: </b>
                        {payloadModal.name}
                    </span>
                    <span>
                        <b>ID компании: </b>
                        {payloadModal.companyId}
                    </span>
                </div>

                <button
                    className={styles["modalblock-button"]}
                    onClick={closeModal}
                >
                    x
                </button>
            </div>
        );
    }

    return null;
}

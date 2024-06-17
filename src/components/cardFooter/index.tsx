import { useContext } from "react";
import styles from "./cardFooter.module.css";
import { ModalContext } from "../withModalProvider/WithModalProvider";

type Props = {
    companyID: string;
    buttonBackgroundColor: string;
    trashColor: string;
    eyeAndButtonTextColor: string;
};

export function CardFooter({
    companyID,
    buttonBackgroundColor,
    trashColor,
    eyeAndButtonTextColor,
}: Props) {
    const context = useContext(ModalContext);

    const onClickHandler = (name: string, companyId: Props["companyID"]) => {
        if (!context) return;
        context.openModal({ type: "pressed button", name, companyId });
    };
    return (
        <div className={styles["card-footer-wrapper"]}>
            <Eye
                color={eyeAndButtonTextColor}
                name="eye"
                companyId={companyID}
                onClickHandler={onClickHandler}
            />
            <Trash
                color={trashColor}
                name="trash"
                companyId={companyID}
                onClickHandler={onClickHandler}
            />
            <Button
                name="Подробнее"
                companyId={companyID}
                color={eyeAndButtonTextColor}
                backgroundColor={buttonBackgroundColor}
                onClickHandler={onClickHandler}
            />
        </div>
    );
}

type IconProps = {
    color: string;
    name: string;
    companyId: string;
    onClickHandler: (name: string, companyId: string) => void;
};
function Eye({ color, name, companyId, onClickHandler }: IconProps) {
    return (
        <button
            className={styles["footer-icon-button"]}
            onClick={() => onClickHandler(name, companyId)}
        >
            <svg
                height="6vw"
                viewBox="0 0 32 32"
                width="6vw"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g fill="none" fillRule="evenodd">
                    <path d="m0 0h32v32h-32z" />
                    <path
                        d="m16 4c8.836556 0 16 7.983908 16 12s-7.163444 12-16 12-16-7.983908-16-12 7.163444-12 16-12zm0 2c-3.5484145 0-7.1115279 1.51004581-10.00725097 4.0082867-2.43541832 2.10112-3.99274903 4.6271328-3.99274903 5.9917133s1.55733071 3.8905933 3.99274903 5.9917133c2.89572307 2.4982409 6.45883647 4.0082867 10.00725097 4.0082867s7.1115279-1.5100458 10.007251-4.0082867c2.4354183-2.10112 3.992749-4.6271328 3.992749-5.9917133s-1.5573307-3.8905933-3.992749-5.9917133c-2.8957231-2.49824089-6.4588365-4.0082867-10.007251-4.0082867zm0 4c3.3137085 0 6 2.6862915 6 6s-2.6862915 6-6 6-6-2.6862915-6-6 2.6862915-6 6-6zm0 2c-2.209139 0-4 1.790861-4 4s1.790861 4 4 4 4-1.790861 4-4-1.790861-4-4-4z"
                        fill={color}
                        fillRule="nonzero"
                    />
                </g>
            </svg>
        </button>
    );
}

function Trash({ color, name, companyId, onClickHandler }: IconProps) {
    return (
        <button
            className={styles["footer-icon-button"]}
            onClick={() => onClickHandler(name, companyId)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6vw"
                height="6vw"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
        </button>
    );
}

type ButtonProps = {
    companyId: string;
    color: string;
    backgroundColor: string;
    name: string;
    onClickHandler: (name: string, companyId: string) => void;
};
function Button({
    companyId,
    color,
    backgroundColor,
    name,
    onClickHandler,
}: ButtonProps) {
    return (
        <button
            onClick={() => onClickHandler(name, companyId)}
            className={styles["footer-button"]}
            style={{ color, backgroundColor }}
        >
            Подробнее
        </button>
    );
}

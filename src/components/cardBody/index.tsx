import styles from "./cardBody.module.css";
type Props = {
    points: number;
    cashBack: number;
    level: string;
    highlightColor: string;
    textColor: string;
};

export function CardBody({
    points,
    cashBack,
    level,
    highlightColor,
    textColor,
}: Props) {
    return (
        <div className={styles["card-body-wrapper"]}>
            <div className={styles["card-body-points"]}>
                <span
                    className={styles["points-number"]}
                    style={{ color: highlightColor }}
                >
                    {points}
                </span>
                <span
                    className={styles["points-text"]}
                    style={{ color: textColor }}
                >
                    баллов
                </span>
            </div>
            <div className={styles["card-body-items"]}>
                <CardBodyItem
                    title={"Кешбэк"}
                    value={`${cashBack} %`}
                    titleColor={highlightColor}
                    textColor={textColor}
                />
                <CardBodyItem
                    title={"Уровень"}
                    value={level}
                    titleColor={highlightColor}
                    textColor={textColor}
                />
            </div>
        </div>
    );
}

type ItemsProps = {
    title: string;
    value: string | number;
    titleColor: string;
    textColor: string;
};
function CardBodyItem({ title, value, titleColor, textColor }: ItemsProps) {
    return (
        <div className={styles["card-body-item-wrapper"]}>
            <span
                className={styles["card-body-item-title"]}
                style={{ color: titleColor }}
            >
                {title}
            </span>
            <span
                className={styles["card-body-item-value"]}
                style={{ color: textColor }}
            >
                {value}
            </span>
        </div>
    );
}

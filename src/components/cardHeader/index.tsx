import styles from "./cardHeader.module.css";

type Props = {
    companyName: string;
    logoURL: string;
    textColor: string;
};

const logoStyle = (URL: string) => ({
    background: `url(${URL})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
});

export function CardHeader({ companyName, logoURL, textColor }: Props) {
    return (
        <div className={styles["card-header-wrapper"]}>
            <span
                className={styles["card-header"]}
                style={{ color: textColor }}
            >
                {companyName}
            </span>
            <div
                className={styles["card-header-sceleton"]}
                style={logoURL ? logoStyle(logoURL) : undefined}
            ></div>
        </div>
    );
}

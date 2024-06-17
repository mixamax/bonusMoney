import styles from "./header.module.css";

type Props = {
    title: string;
};

export function Header({ title }: Props) {
    return <header className={styles.header}>{title}</header>;
}

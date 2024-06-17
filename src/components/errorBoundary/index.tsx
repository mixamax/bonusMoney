import { Component, ErrorInfo, ReactNode } from "react";
import styles from "./errorBoundary.module.css";

type Props = {
    children?: ReactNode;
};

type State = {
    hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }
    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("errorBoundary catch:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className={styles["error-container"]}>
                    <span>...что-то пошло не так</span>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

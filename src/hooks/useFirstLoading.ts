import { useState, useLayoutEffect } from "react";

export function useFirstLoading() {
    const [showStartScreen, setShowStartScreen] = useState(true);
    const offset = history.state;

    useLayoutEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (!offset) {
            timer = setTimeout(() => {
                setShowStartScreen(false);
            }, 3000);
        } else {
            setShowStartScreen(false);
        }

        return () => clearTimeout(timer);
    }, []);

    return showStartScreen;
}

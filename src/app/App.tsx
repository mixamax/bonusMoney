import { StartScreen } from "../components/startScreeen";
import { Header } from "../components/header";
import Main from "../components/main";
import { useFirstLoading } from "../hooks/useFirstLoading";
import { WithModalProvider } from "../components/withModalProvider/WithModalProvider";

const headerText = "Управление картами";

function App() {
    const showStartScreen = useFirstLoading();

    if (showStartScreen) {
        return <StartScreen />;
    } else {
        return (
            <>
                <WithModalProvider>
                    <Header title={headerText} />
                    <Main />
                </WithModalProvider>
            </>
        );
    }
}

export default App;

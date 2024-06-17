import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import ErrorBoundary from "./components/errorBoundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);

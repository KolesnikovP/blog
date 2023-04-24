import React from "react";
import {createRoot} from "react-dom/client";
import {App} from "app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import 'shared/config/i18n/i18n';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider >
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
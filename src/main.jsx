import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Contexts/AuthProvider";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Toaster />
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);

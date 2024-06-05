import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import NotFoundPage from "./pages/NotFoundPage";
import { QuestionsContextProvider } from "./context/QuestionsContext";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/quiz",
        element: <QuizPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/quiz/:questionNumber",
        element: <QuizPage />,
        errorElement: <NotFoundPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QuestionsContextProvider>
            <RouterProvider router={router} />
        </QuestionsContextProvider>
    </React.StrictMode>
);

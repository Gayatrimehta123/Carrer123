import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // {
            //     index: true,
            //     element: <HomePage />,
            // },

        ],
    },
    // {
    //     path: "/auth/login",
    //     element: <LoginPage />

    // }
]);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages";
import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <div>This is the about page</div>,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

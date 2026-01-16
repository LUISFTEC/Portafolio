import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../Layout/RootLayout";
import { HomePage } from "../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
        ]
    },
], {
    basename: "/Portafolio"  // <--- ¡ESTO ES LO QUE FALTABA!
});

export default router;
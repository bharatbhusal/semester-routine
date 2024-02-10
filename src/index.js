import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import NotFoundPage from "./components/404Error";
import routineJson from "./data/routine.json"
import RoutineTable from "./components/RoutineTable"
import { getToday } from "./utils/dateTimeHandler"


const daysOfWeek = Object.keys(routineJson)
const { dayName } = getToday()
const initializeApp = async () => {
    const divContainer = document.getElementById("root");

    const root = createRoot(divContainer);

    const router = createBrowserRouter([
        {
            path: "",
            element: <App />,
            errorElement: <NotFoundPage />,

            children: [
                {
                    errorElement: <NotFoundPage />,
                    children: [
                        {
                            index: true,
                            element: <RoutineTable day={dayName} />,
                        },
                        ...daysOfWeek.map((day, index) => ({
                            path: day.toLowerCase(),
                            element: <RoutineTable day={day} />,

                        })),
                    ]
                },
            ],
        },
    ]);

    root.render(<RouterProvider router={router} />);
};

initializeApp();

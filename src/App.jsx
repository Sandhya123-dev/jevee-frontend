import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootComponent from "./Common/RootComponent";
import Prescription from "./Common/Prescription";
import Terms from "./Admin/pages/terms";
import Policies from "./Admin/pages/Policies";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "prescription",
          element: <Prescription />
        },
        {
        path: "terms-and-conditions",
        element: <Terms />,
          },
          {
            path: "policies",
            element: <Policies />
          }

      ]

    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

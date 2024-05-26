import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Error,
  AboutSedra,
  Home,
  Contacts,
  AllProducts,
  OurBlock,
} from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/aboutsedra",
          element: <AboutSedra />,
        },
        {
          path: "/ourblock",
          element: <OurBlock />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;

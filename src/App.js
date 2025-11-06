import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// Pages & components
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

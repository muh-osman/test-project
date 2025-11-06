import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div
        style={{
          padding: "16px",
          backgroundColor: "#7575751f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="checkout">Checkout</Link>
      </div>
      <Outlet />
    </>
  );
}

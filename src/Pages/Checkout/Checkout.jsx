import { useEffect } from "react";

export default function Checkout() {

  // Moyasar
  useEffect(() => {
    // Initialize Moyasar after script loads
    if (window.Moyasar) {
      window.Moyasar.init({
        element: ".mysr-form",
        amount: 100 * 100,
        currency: "SAR",
        description: "Test Project",
        publishable_api_key: "pk_test_mnK3NxqkWZzScvnix7UFbad4qbwgzoLcD3DKvYRr",
        callback_url: "https://moyasar.com/thanks",
        supported_networks: ["visa", "mastercard", "mada"],
        methods: ["creditcard", "applepay"],

        apple_pay: {
          country: "SA",
          label: "Test Project",
          validate_merchant_url: "https://api.moyasar.com/v1/applepay/initiate",
        },

        on_failure: async function (error) {
          console.log(error);
        },
      });
    }

    // Clean up Moyasar form when component unmounts
    return () => {
      const formElement = document.querySelector(".mysr-form");
      if (formElement) {
        formElement.innerHTML = "";
      }
    };
  }, []);


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Checkout Page</h1>

      <div className="mysr-form"></div>
    </div>
  );
}

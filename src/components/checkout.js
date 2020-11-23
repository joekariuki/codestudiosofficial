import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";


const buttonStyles = {
    fontSize: `1rem`,
    marginTop: `1rem`,
    display: `flex`,
    color: `white`,
    textTransform: `uppercase`,
    background: `black`,
    borderWidth: `0px`,
    padding: `0.5rem 1.5rem`,
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
};

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      billingAddressCollection: 'auto',
      shippingAddressCollection: {
          allowedCountries: ['US', 'CA']
      },
      mode: "payment",
      lineItems: [{ price: "price_1HqecpH1oPjHlECgbO0f6Wyf", quantity: 1 }],
      successUrl: `${window.location.origin}/`,
      cancelUrl: `${window.location.origin}/fashion/readytowear/`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      style={loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles}
      onClick={redirectToCheckout}
      className="focus:outline-none hover:bg-black text-base"
    >
      Buy Now
    </button>
  );
};

export default Checkout;

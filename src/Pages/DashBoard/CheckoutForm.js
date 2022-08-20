import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";

const CheckoutForm = ({ appoinment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [Carderror, setCarderror] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setclientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { price, patientsName, patientsEmail } = appoinment;

  useEffect(() => {
    fetch(`http://localhost:5000/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)

        if (data?.clientSecret) {
          setclientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("lslsl")

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log(error,"kskskkss")
      setCarderror(error.message);
      // setCarderror(error?.message ||  "") ternary
    } else {
      setCarderror("");
      setSuccess("");
      setProcessing(true);
    }
    const { paymentIntent, error: errorPayment } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientsName,
            email: patientsEmail,
          },
        },
      });

    if (errorPayment) {
      setCarderror(error?.message);
      setProcessing(false);
    } else {
      setCarderror("");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("congrats payment is process");

      fetch("")
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {Carderror && <p className="text-red-500 text-lg">{Carderror}</p>}
      {success && (
        <div className="text-green-500 text-lg">
          <p>{success}</p>
          <p>
            Your Transaction ID:
            <span className="text-orange-800 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

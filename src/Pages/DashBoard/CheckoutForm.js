import React from 'react';
import { CardElement, useStripe,useElements } from "@stripe/react-stripe-js";


const CheckoutForm = () => {
const stripe = useStripe();
const elements = useElements();
     const handleSubmit = event =>{

          event.preventDefault();

          if(!stripe || !elements){
                    return;

          }

          const cardElement = elements.getElement(CardElement);

               if(cardElement){

                         return;
               }

     }
     return (
          <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
     );
};

export default CheckoutForm;
import React from 'react';
import { CardElement, useStripe,useElements } from "@stripe/react-stripe-js";
import { useState } from 'react';


const CheckoutForm = () => {
const stripe = useStripe();
const elements = useElements();
const [Carderror, setCarderror] = useState("")
     const handleSubmit =  async (event) =>{

          event.preventDefault();
          // console.log("lslsl")

          if(!stripe || !elements){
                    return;

          }

          const card = elements.getElement(CardElement);

               if(card === null){

                         return;
               }
              const {error, paymentMethod} = await stripe.createPaymentMethod({
                    type: 'card',
                    card 
                  });
                  
                  if(error){
                    // console.log(error,"kskskkss")
                    setCarderror(error.message)
                    // setCarderror(error?.message ||  "") ternary
                  }
          else{
               setCarderror("")
          }

     }
     return (
        <>
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
            {
               Carderror && <p className='text-red-500 text-lg'>{Carderror}</p>
            }
        </>
     );
};

export default CheckoutForm;
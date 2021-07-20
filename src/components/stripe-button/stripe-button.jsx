import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JFAJfFxd0pIQOCWXeBfM4AfpV0kbWilnXvkuYWseEkRIisxjCOhMmeL4ncEiql9XEqzBYEO9QHAQmgtwWKR0BR200ZZC2R1hj';

    const onToken = token => {
        console.log(token);
        alert("Payment Successfil")
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Crwn Clothing Ltd."
            shippingAddress
            billingAddress={false}
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={[priceForStripe]}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
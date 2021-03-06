import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JFAJfFxd0pIQOCWXeBfM4AfpV0kbWilnXvkuYWseEkRIisxjCOhMmeL4ncEiql9XEqzBYEO9QHAQmgtwWKR0BR200ZZC2R1hj';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Pyament successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please make sure you use the provided credit card'
            )
        })
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
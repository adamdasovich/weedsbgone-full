import React, {useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useEffect } from 'react';

const Key = 'pk_test_51MuzAULZirzeNvwx8ODCmGjN7tpZydDabvsj8u1CovXA58GqiSBlbDhGrwJKqU0Q9tLVLfBJ271CPsJUjyugkIhM00vhWc8zMi'


const Pay = () => {
	const [stripeToken, setStripeToken] = useState(null)

	const onToken = (token) => {
		setStripeToken(token)
	}

useEffect(() => {
	const makeRequest = async () => {
		try {
			const response = await axios.post('http://localhost:5000/api/checkout/payment', {
				tokenId: stripeToken.id,
				amount: 10000
				})
			console.log(response.data)
			 
		} catch (error) {
			console.log(error)
		}
	}
	stripeToken && makeRequest()
}, [stripeToken])

					

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<StripeCheckout 
				name='Weeds B Gone'
				image='https://i.imgur.com/5v9ZQYq.png'
				billingAddress
				shippingAddress
				description='Your total is $100'
				amount={10000}
				token={onToken}
				stripeKey={Key}
			>
			<button
				style={{
					border: 'none',
					width: 120,
					borderRadius: 5,
					padding: '20px',
					backgroundColor: 'black',
					color: 'white',
					fontWeight: '600',
					cursor: 'pointer'
				}}
			>
				Pay
			</button>
			</StripeCheckout>
		</div>
	);
};

export default Pay;
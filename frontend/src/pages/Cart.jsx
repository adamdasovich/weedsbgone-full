import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { userRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom'

const KEY = 'pk_test_51MuzAULZirzeNvwx8ODCmGjN7tpZydDabvsj8u1CovXA58GqiSBlbDhGrwJKqU0Q9tLVLfBJ271CPsJUjyugkIhM00vhWc8zMi'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzFhY2U1ZGNmNmEzNzkwNmE3MjExMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDk3NzM2MiwiZXhwIjoxNjgxMjM2NTYyfQ.LhSOUTKsydOYmJ-ZIjOcwc0cP6mgKdQ0g43PjBrJqo0'

const api = axios.create({
	baseURL: "http://localhost:5000/api",
	headers: { token: `Bearer ${TOKEN}`}
})

const Container = styled.div`
  flex: 4;
  padding: 20px;
`

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })};
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
  `

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })};
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``
const ProductId = styled.span``
const ProductLength = styled.span``
const ProductSize = styled.span``
const ProductOscillating = styled.span``


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Info = styled.div`
  flex: 3;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })};
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })};
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })};
`

const SummaryTitle = styled.h1`
  font-weight: 200;
  font-size: 30px;
`

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '500'};
  font-size: ${props => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``



const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const [token, setToken] = useState(null)
	const navigate = useNavigate()

	const handleToken = async (token) => {
		setToken(token)
	}

	useEffect(() => {
		const makeRequest = () => {
				api.post('/checkout/payment', 
					{
						token,
						cart
					})
					.then((res) => {
						console.log(res)
						navigate('/success', 
							{ 
							state: { 
									data: res.data, 
									products: cart 
								} 
							}						
						)
						console.log(res.data)
					})
					.catch((err) => {
						console.log(err)
					})			
		}
		token && makeRequest()
	}, [token, cart, navigate])
	
	
  return (
	<Container>
		<Navbar />
		<Announcement />
		<Wrapper>
			<Title>YOUR BAG</Title>
			<Top>
				<TopButton>CONTINUE SHOPPING</TopButton>
				<TopTexts>
					<TopText>Shopping Bag (2)</TopText>
					<TopText>Your Wishlist (0)</TopText>
				</TopTexts>
				<TopButton type='filled'>CHECK OUT NOW</TopButton>
			</Top>
			<Bottom>
				<Info>
					{cart.products.map(product => (
					<Product>
						<ProductDetail>
							<Image src={product.img} />
							<Details>
								<ProductName>
									<b>Product:</b> {product.title}
								</ProductName>
								<ProductId>
									<b>ID:</b> {product._id}
								</ProductId>
								<ProductLength>
									<b>Length:</b> {product.cordLength}
								</ProductLength>
								<ProductSize>
									<b>Size:</b> {product.size}
								</ProductSize>
								<ProductOscillating>
									<b>Oscillating:</b> {product.oscillating}
								</ProductOscillating>
							</Details>
						</ProductDetail>
						<PriceDetail>
							<ProductAmountContainer>
								<Add />
								<ProductAmount>{product.quantity}</ProductAmount>
								<Remove />
							</ProductAmountContainer>
							<ProductPrice>$ {product.price * product.quantity}</ProductPrice>
						</PriceDetail>
					</Product>))}
					<Hr />
					
				</Info>
				<Summary>
					<SummaryTitle>ORDER SUMMARY</SummaryTitle>
					<SummaryItem>
						<SummaryItemText>Subtotal</SummaryItemText>
						<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
					</SummaryItem>
					<SummaryItem>
						<SummaryItemText>Estimated Shipping</SummaryItemText>
						<SummaryItemPrice>$ 5.90</SummaryItemPrice>
					</SummaryItem>
					<SummaryItem>
						<SummaryItemText>Taxes</SummaryItemText>
						<SummaryItemPrice>$ 0.90</SummaryItemPrice>
					</SummaryItem>
					<SummaryItem type='total'>
						<SummaryItemText>Total</SummaryItemText>
						<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
					</SummaryItem>
					<StripeCheckout 
				name='Weeds B Gone'
				image='https://i.imgur.com/5v9ZQYq.png'
				billingAddress
				shippingAddress
				description={`Your total is $${cart.total}`}
				amount={cart.total * 100}
				token={handleToken}
				stripeKey={KEY}
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
				</Summary>
			</Bottom>
		</Wrapper>
		<Footer />
	</Container>
  )
}

export default Cart

/*
const handleToken = (token) => {
			console.log('start of handleToken')
			console.log(token)
				api.post('/checkout/payment', {
					token, 
					amount: 5000 
				})
				.then(res => {
					console.log('response', res)
					navigate('/success')
				})
				.catch(err => {
					console.log('err', err)
				})
		}	   
*/
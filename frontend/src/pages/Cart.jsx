import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

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
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`



const Cart = () => {
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
					<Product>
						<ProductDetail>
							<Image src='https://cdn.shopify.com/s/files/1/1257/6551/products/1hpthrusterpic.png?v=1613661914&width=600' />
							<Details>
								<ProductName>
									<b>Product:</b> THRUSTER
								</ProductName>
								<ProductId>
									<b>ID:</b> 93813718293
								</ProductId>
								<ProductLength>
									<b>Length:</b> 50'
								</ProductLength>
								<ProductSize>
									<b>Size:</b> 3/4 HP
								</ProductSize>
							</Details>
						</ProductDetail>
						<PriceDetail>
							<ProductAmountContainer>
								<Add />
								<ProductAmount>2</ProductAmount>
								<Remove />
							</ProductAmountContainer>
							<ProductPrice>$ 30</ProductPrice>
						</PriceDetail>
					</Product>
					<Hr />
					<Product>
						<ProductDetail>
							<Image src='https://cdn.shopify.com/s/files/1/1257/6551/products/1hpthrusterpic.png?v=1613661914&width=600' />
							<Details>
								<ProductName>
									<b>Product:</b> THRUSTER
								</ProductName>
								<ProductId>
									<b>ID:</b> 93813718293
								</ProductId>
								<ProductLength>
									<b>Length:</b> 50'
								</ProductLength>
								<ProductSize>
									<b>Size:</b> 3/4 HP
								</ProductSize>
							</Details>
						</ProductDetail>
						<PriceDetail>
							<ProductAmountContainer>
								<Add />
								<ProductAmount>2</ProductAmount>
								<Remove />
							</ProductAmountContainer>
							<ProductPrice>$ 30</ProductPrice>
						</PriceDetail>
					</Product>
				</Info>
				<Summary>
					<SummaryTitle>ORDER SUMMARY</SummaryTitle>
					<SummaryItem>
						<SummaryItemText>Subtotal</SummaryItemText>
						<SummaryItemPrice>$ 80</SummaryItemPrice>
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
						<SummaryItemPrice>$ 86.80</SummaryItemPrice>
					</SummaryItem>
					<Button>CHECKOUT NOW</Button>
				</Summary>
			</Bottom>
		</Wrapper>
		<Footer />
	</Container>
  )
}

export default Cart
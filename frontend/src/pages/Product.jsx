import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { publicRequest } from "../requestMethods"
import { useEffect, useState } from "react"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"

const api = axios.create({
	baseURL: "http://localhost:5000/api",
});

const Container = styled.div`
`

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ padding: "10px", flexDirection: "column" })};
`
const ImgContainer = styled.div`
	flex: 1;
	
`

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${mobile({ height: "40vh" })};
`

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({ padding: "10px" })};
`

const Title = styled.h1`
	font-weight: 200;
`
const Description = styled.p`
	margin: 20px 0px;
`
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`
const CordLength = styled.h2`
	font-weight: 200;
	font-size: 16px;
	margin-top: 50px;
`
const Oscillator = styled.h2`
	font-weight: 200;
	font-size: 16px;
	margin-top: 10px;
`

const Size = styled.h2`
	font-weight: 200;
	font-size: 16px;
	margin-top: 10px;
`



const AddContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 50%;
	${mobile({ width: "100%" })};
`

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`

const Button = styled.button`
	padding: 15px;
	margin-left: 20px;
	border-radius: 10px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	&:hover {
		background-color: skyblue;
	}
`

const Product = () => {
	const location = useLocation()
	const id = location.pathname.split("/")[2]

	const [product, setProduct] = useState({})
	const [quantity, setQuantity] = useState(1)
	const [size, setSize] = useState('')
	const [cordLength, setCordLength] = useState('')
	const [oscillating, setOscillating] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get("/products/find/" + id)				
				setProduct(res.data)
			} catch (err) {}
		}
		getProduct()
	}, [id])

	const handleQuantity = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1)
		} else {
			setQuantity(quantity + 1)
		}
	}

	const handleClick = () => {
		setSize(product.size)
		setCordLength(product.cordLength)
		setOscillating(product.oscillating)
		dispatch(addProduct(
			{ 
				...product, 
				price:product.price, 
				quantity,
				size:product.size,
				cordLength:product.cordLength,
				oscillating:product.oscillating
			}))		
	}

  return (
	<Container>
		<Navbar />
		<Announcement />
		<Wrapper>
			<ImgContainer>
				<Image src={product.img} />
			</ImgContainer>
			<InfoContainer>
				<Title>{product.title}</Title>
				<Description>{product.description}</Description>
				<Price>$ {product.price}</Price>
				<CordLength>Cord Length: {product.cordLength} ft.</CordLength>
				<Oscillator>Oscillator: {product.oscillating}</Oscillator>
				<Size>Motor Size: {product.size} </Size>					
				<AddContainer>
					<AmountContainer>
						<Remove onClick={()=>handleQuantity('dec')} />
						<Amount>{quantity}</Amount>
						<Add onClick={()=>handleQuantity('inc')} />
					</AmountContainer>
					<Button onClick={handleClick} >ADD TO CART</Button>
				</AddContainer>
			</InfoContainer>
		</Wrapper>
		<Newsletter />
		<Footer />
	</Container>
  )
}

export default Product

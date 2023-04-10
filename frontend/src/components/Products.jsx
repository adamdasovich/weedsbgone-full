import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"

const api = axios.create({
	baseURL: "http://localhost:5000/api",
});

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const Products = ({cat, filters}) => {

	const [products, setProducts] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([])

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await api.get(cat 
					? `/products?category=${cat}` 
					: "/products"
				);				
				setProducts(res.data)
			} catch (err) {
				console.log(err)
			}
		}
		getProducts()
	}, [cat])

	useEffect(() => {
		cat && 
			setFilteredProducts(
				products.filter(p => 
					Object.entries(filters).every(([key, value]) => 
						p[key].includes(value)
					)
				)			
			)
					
	}, [products, cat, filters])
	console.log(filteredProducts)
  return (
	<Container>
		{cat ? filteredProducts.map((item) => (
			<Product item={item} key={item.id} />
		)) : popularProducts.map((item) => (
			<Product item={item} key={item.id} />
		))}
		{filteredProducts.map((item) => (
			<Product item={item} key={item.id} />
		))}
	</Container>
  )
}

export default Products
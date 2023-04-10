import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { mobile } from '../responsive'

const Container = styled.div`

`
const Title = styled.h1`
	margin: 20px;
`
const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;

`
const Filter = styled.div`
	margin: 20px;
	${mobile({ margin: '0px', display: 'flex', flexDirection: 'column' })};
`
const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: '0px' })};
`

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({ marginRight: '0px' })};
`
const Option = styled.option`
`

const ProductList = () => {
	const location = useLocation()
	const cat = location.pathname.split('/')[2]
	const [filters, setFilters] = useState({})

	const handleFilters = (e) => {
		const value = e.target.value
		setFilters({
			...filters,
			[e.target.name]: value,
		})
	}
  return (
	<Container>
		<Navbar />
		<Announcement />
		<Title>Thrusters</Title>
		<FilterContainer>
			<Filter>
				<FilterText>Filter Products:</FilterText>
				<Select name='cordLength' onChange={handleFilters}>
					<Option disabled>
						Cord Length
					</Option>
					<Option>50' Cord</Option>
					<Option>100' Cord</Option>
					<Option>150' Cord</Option>
				</Select>
				<Select name='oscillating' onChange={handleFilters}>
					<Option disabled>
						Oscillator
					</Option>
					<Option>yes</Option>
					<Option>no</Option>
				</Select>
				<Select name='size' onChange={handleFilters}>
					<Option disabled>
						Size
					</Option>
					<Option>1/2 HP</Option>
					<Option>3/4 HP</Option>
					<Option>1 HP</Option>
				</Select>
			</Filter>
		</FilterContainer>
		<Products cat={cat} filters={filters} />
		<Newsletter />
		<Footer />
	</Container>
  )
}

export default ProductList

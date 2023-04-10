import React from 'react'
import { Badge } from '@material-ui/core'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div
` height: 60px;
  ${mobile({ height: "50px" })};
`

const Wrapper = styled.div
` padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`

const Left = styled.div
`
flex: 1;
display: flex;
align-items: center;
`
const Input = styled.input`
	  border: none;
	  ${mobile({ width: "30px" })};
`
const Center = styled.div
`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  color: blue;
  ${mobile({ fontSize: "18px" })};
`

const Right = styled.div
`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent: "center" })};
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "5px" })};
  `

const Navbar = () => {
  return (
	<Container style={{background: 'lightGreen'}}>
		<Wrapper>
			<Left>
					<SearchContainer style={{background: 'white'}}>
						<Input placeholder='Search' />
					<Search style={{color:'blue', fontSize:16}}/>
					</ SearchContainer>				
			</Left>
			<Center>
				<Logo>Weeds</Logo>
			</Center>
			<Right>
				<MenuItem>Register</MenuItem>
				<MenuItem>Sign In</MenuItem>
				<MenuItem>
				<Badge overlap='rectangular' badgeContent={4} color="primary">
      				<ShoppingCartOutlined />
    			</Badge>	
				</MenuItem>				
			</Right>
		</Wrapper>		
	</Container>
  )
}

export default Navbar
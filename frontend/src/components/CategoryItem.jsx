import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid black;
  ${mobile({ height: "30vh" })};
`;

const Info = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;

const Title = styled.h1`
	font-size: 20px;
    color: limegreen;
	border: 1px solid black;
	border-radius: 10px;
	background-color: white;
	padding: 5px;
    margin-bottom: 20px;
	opacity: 0.7;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
	<Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
	  </Link>
    </Container>
  );
};

export default CategoryItem;
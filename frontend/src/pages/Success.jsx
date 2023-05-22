import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { userRequest } from "../requestMethods";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzFhY2U1ZGNmNmEzNzkwNmE3MjExMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDk3NzM2MiwiZXhwIjoxNjgxMjM2NTYyfQ.LhSOUTKsydOYmJ-ZIjOcwc0cP6mgKdQ0g43PjBrJqo0'

const api = axios.create({
	baseURL: "http://localhost:5000/api",
	headers: { token: `Bearer ${TOKEN}`}
})

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await api.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
    <button 
	  	style={{ padding: 10, marginTop: 20 }}
		onClick={() => navigate('/')}
		>Go to Homepage
	</button>
    </div>
  );
};

export default Success;


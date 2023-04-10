import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import Product from './pages/Product.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


const App = () => {
	const user = true;
  return (	
	<Router>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/register" element={user ? <Navigate to='/' /> : <Register />} />
			<Route exact path="/login" element={user ? <Navigate to='/' /> : <Login />} />
			<Route exact path="/products/:category" element={<ProductList />} />
			<Route exact path="/product/:id" element={<Product />} />
			<Route exact path="/cart" element={<Cart />} />
		</Routes>
	</Router>
  )
};

export default App;
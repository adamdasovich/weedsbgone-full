import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import Product from './pages/Product.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import Success from './pages/Success.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const App = () => {
	const user = false //useSelector(state => state.user.currentUser);
  return (	
	<Router>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/register" element={user ? <Navigate to='/' /> : <Register />} />
			<Route exact path="/login" element={user ? <Navigate to='/' /> : <Login />} />
			<Route exact path="/products/:category" element={<ProductList />} />
			<Route exact path="/product/:id" element={<Product />} />
			<Route exact path="/cart" element={<Cart />} />
			<Route exact path="/success" element={<Success />} />
		</Routes>
	</Router>
  )
};

export default App;
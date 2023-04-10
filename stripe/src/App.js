import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/pay" element={<Pay />} />
				<Route path='/success' element={<Success />} />
			</Routes>
		</Router>
	);
};

export default App;

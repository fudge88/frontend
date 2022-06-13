import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import OfferBanner from './components/OfferBanner';
import ProductItem from './pages/ProductItem';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Basket from './pages/Basket';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
	return (
		<div>
			<Nav />
			<OfferBanner />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/" element={<ProductList />} />
				<Route path="/product/:id" element={<ProductItem />} />
				<Route path="/basket" element={<Basket />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;

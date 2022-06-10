import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import OfferBanner from './components/OfferBanner';
import ProductItem from './pages/ProductItem';
import Home from './pages/Home';
import ProductList from './pages/ProductList';

export const App = () => {
	return (
		<>
			<Nav />
			<OfferBanner />
			<ProductItem />
			<Footer />
		</>
	);
};

export default App;

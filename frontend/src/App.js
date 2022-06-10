import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import OfferBanner from './components/OfferBanner';
import ProductItem from './pages/ProductItem';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Basket from './pages/Basket';

export const App = () => {
	return (
		<>
			<Nav />
			<Basket />
			<Footer />
		</>
	);
};

export default App;

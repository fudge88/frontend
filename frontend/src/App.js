import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import OfferBanner from './components/OfferBanner';
import Product from './components/Product';
import Home from './pages/Home';

export const App = () => {
	return (
		<>
			<Nav />
			<OfferBanner />
			<Home />
			<Footer />
			<Product />
		</>
	);
};

export default App;

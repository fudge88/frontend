import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import OfferBanner from './components/OfferBanner';
import Home from './pages/Home';
import ProductList from './pages/Products';

export const App = () => {
	return (
		<>
			<Nav />
			<OfferBanner />

			<ProductList />
			<Footer />
		</>
	);
};

export default App;

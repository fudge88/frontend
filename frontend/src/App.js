import './App.css';
import Category from './components/Category';
import Featured from './components/Featured';
import Header from './components/Header';
import Nav from './components/Nav';
import OfferBanner from './components/OfferBanner';

export const App = () => {
	return (
		<>
			<Nav />
			<OfferBanner />
			<Header />
			<Featured />
			<Category />
		</>
	);
};

export default App;

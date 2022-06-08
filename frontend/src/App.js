import './App.css';
import Category from './components/Category';
import Featured from './components/Featured';
import Header from './components/Header';

export const App = () => {
	return (
		<>
			<Header />
			<Featured />
			<Category />
		</>
	);
};

export default App;

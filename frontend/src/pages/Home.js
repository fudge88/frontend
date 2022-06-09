import React from 'react';
import Category from '../components/Category';
import Featured from '../components/Featured';
import Header from '../components/Header';

const Home = () => {
	return (
		<>
			<Header />
			<Featured />
			<Category />
		</>
	);
};

export default Home;

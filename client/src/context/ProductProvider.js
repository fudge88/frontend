import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [allProducts, setAllProducts] = useState();
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState('all');
	const [basketProduct, setBasketProduct] = useState([]);

	const removeItem = (id) => {
		setBasketProduct((prevState) =>
			prevState.filter((item) => item._id !== id)
		);
	};

	const basketItems = (id, size, colour) => {
		const chosenItem = allProducts.find((item) => item._id === id);
		setBasketProduct((prevState) => [
			{ ...chosenItem, size, colour },
			...prevState,
		]);
	};

	const fetchProducts = async () => {
		const { data } = await axios.get('/api/product');
		setAllProducts(data.data);
		setProducts(data.data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const typeFilter = (type) => {
		if (type) {
			const filteredProduct = allProducts.filter(
				(product) => product.type === type
			);
			setProducts(filteredProduct);
			setCategory(type);
		} else {
			setProducts(allProducts);
			setCategory('all');
		}
	};

	const productValues = {
		products,
		filteredProduct: typeFilter,
		setProducts,
		category,
		basketItems,
		basketProduct,
		removeItem,
	};
	return (
		<ProductContext.Provider value={productValues}>
			{children}
		</ProductContext.Provider>
	);
};

export const useProductContext = () => useContext(ProductContext);

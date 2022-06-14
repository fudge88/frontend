import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useProductContext } from '../context/ProductProvider';

import Products from '../components/Products';
import { MOBILE } from '../media';
import { useMediaQuery } from 'react-responsive';
import '../App.css';

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 120,
			boxShadow: 'none',
			border: '1px solid #5fcbcf',
			borderRadius: '5px',
		},
	},
};

const ProductList = () => {
	const { products, setProducts, category } = useProductContext();
	console.log(products);
	const isMobile = useMediaQuery(MOBILE);

	const [sort, setSort] = useState('');
	const [filters, setFilters] = useState({});

	const handleSortChange = (event) => {
		setSort(event.target.value);
	};

	const handleFilterChange = (event) => {
		setFilters(event.target.value);
	};

	const PageTitle = () => {
		if (category == 'men') {
			return (
				<Typography sx={{ marginBottom: '20px' }} variant="h4">
					Men
				</Typography>
			);
		}
		if (category == 'women') {
			return (
				<Typography sx={{ marginBottom: '20px' }} variant="h4">
					Women
				</Typography>
			);
		}
		if (category == 'kids') {
			return (
				<Typography sx={{ marginBottom: '20px' }} variant="h4">
					Kids
				</Typography>
			);
		} else {
			return (
				<Typography sx={{ marginBottom: '20px' }} variant="h4">
					Comfort for your feet
				</Typography>
			);
		}
	};
	return (
		<>
			<Container sx={{ padding: '20px' }}>
				<Box sx={{ textAlign: 'center', padding: '30px' }}>
					<PageTitle />
					<Typography variant="body2">
						From high heels to black heels, we’ve got a pair for every occasion.
						Complete your going out look with a pair of stiletto heels from our
						latest arrivals, ‘cos there’s no denying that a pair of high heels
						can instantly dress up any outfit.{' '}
					</Typography>
				</Box>
				<Container
					maxWidth={false}
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: isMobile ? 'center' : 'space-between',
					}}>
					<Box>
						<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
							<InputLabel id="sort">Sort by</InputLabel>
							<Select
								labelId="sortLabel"
								id="sort"
								value={sort}
								label="Sort by"
								onChange={(setSort, handleSortChange)}>
								<MenuItem value="asc">Price (asc)</MenuItem>
								<MenuItem value="desc">Price (desc)</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<Box>
						<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
							<InputLabel id="filter">Filter by</InputLabel>
							<Select
								labelId="filterLabel"
								id="filter"
								value={filters}
								MenuProps={MenuProps}
								label="filter by"
								onChange={(setFilters, handleFilterChange)}>
								<ListSubheader>Colour</ListSubheader>
								<MenuItem value="black">black</MenuItem>
								<MenuItem value="white">white</MenuItem>
								<MenuItem value="blue">blue</MenuItem>
								<MenuItem value="cream">cream</MenuItem>
								<MenuItem value="pink">pink</MenuItem>
								<ListSubheader>Style</ListSubheader>
								<MenuItem value="heels">heels</MenuItem>
								<MenuItem value="sandals">sandals</MenuItem>
								<MenuItem value="boots">boots</MenuItem>
								<MenuItem value="trainers">trainers</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Container>
			</Container>
			<Products products={products} setProducts={setProducts} sort={sort} />
		</>
	);
};

export default ProductList;

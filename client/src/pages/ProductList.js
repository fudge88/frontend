import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import Products from '../components/Products';
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
	const [sort, setSort] = useState('');
	const [filter, setFilter] = useState('');

	const handleSortChange = (event) => {
		setSort(event.target.value);
	};

	const handleFilterChange = (event) => {
		setFilter(event.target.value);
	};

	return (
		<>
			<Container sx={{ padding: '20px' }}>
				<Box sx={{ textAlign: 'center', padding: '30px' }}>
					<Typography sx={{ marginBottom: '20px' }} variant="h4">
						Heels
					</Typography>
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
						justifyContent: 'space-between',
					}}>
					<Box>
						<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
							<InputLabel id="sort">Sort by</InputLabel>
							<Select
								labelId="sortLabel"
								id="sort"
								value={sort}
								label="Sort by"
								onChange={handleSortChange}>
								<MenuItem value="asc">Price (asc)</MenuItem>
								<MenuItem value="desc">Price (desc)</MenuItem>
								<MenuItem value="new">Newest first</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<Box>
						<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
							<InputLabel id="filter">Filter by</InputLabel>
							<Select
								labelId="filterLabel"
								id="filter"
								value={filter}
								MenuProps={MenuProps}
								label="filter by"
								onChange={handleFilterChange}>
								<ListSubheader>Colour</ListSubheader>
								<ListSubheader>Size</ListSubheader>
								<MenuItem value="1">1</MenuItem>
								<MenuItem value="3">3</MenuItem>
								<MenuItem value="5">5</MenuItem>
								<MenuItem value="7">7</MenuItem>
								<MenuItem value="9">9</MenuItem>
								<MenuItem value="11">11</MenuItem>
								<MenuItem value="Black">Black</MenuItem>
								<MenuItem value="White">White</MenuItem>
								<MenuItem value="Blue">Blue</MenuItem>
								<MenuItem value="Cream">Cream</MenuItem>
								<MenuItem value="Pink">Pink</MenuItem>
								<ListSubheader>Style</ListSubheader>
								<MenuItem value="Heels">Heels</MenuItem>
								<MenuItem value="Sandals">Sandals</MenuItem>
								<MenuItem value="Boots">Boots</MenuItem>
								<MenuItem value="Trainers">Trainers</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Container>
			</Container>
			<Products filter={filter} sort={sort} />
		</>
	);
};

export default ProductList;

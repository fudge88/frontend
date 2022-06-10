import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import './Filter.css';

const Filter = () => {
	const [sort, setSort] = useState('');
	const [filter, setFilter] = useState('');

	const handleSortChange = (event) => {
		setSort(event.target.value);
	};

	const handleFilterChange = (event) => {
		setFilter(event.target.value);
	};
	return (
		<Container sx={{ padding: '20px' }}>
			<Box sx={{ textAlign: 'center', padding: '30px' }}>
				<Typography sx={{ marginBottom: '20px' }} variant="h4">
					Heels
				</Typography>
				<Typography variant="body2">
					From high heels to black heels, we’ve got a pair for every occasion.
					Complete your going out look with a pair of stiletto heels from our
					latest arrivals, ‘cos there’s no denying that a pair of high heels can
					instantly dress up any outfit.{' '}
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
							<MenuItem value={'lowToHigh'}>Price (low - high)</MenuItem>
							<MenuItem value={'highToLow'}>Price (high - Low)</MenuItem>
							<MenuItem value={'new'}>Newest first</MenuItem>
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
							label="filter by"
							onChange={handleFilterChange}>
							<MenuItem value={'colour'}>Colour</MenuItem>
							<MenuItem value={'size'}>Size</MenuItem>
							<MenuItem value={'style'}>Style</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Container>
		</Container>
	);
};

export default Filter;

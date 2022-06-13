import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SquareIcon from '@mui/icons-material/Square';
import axios from 'axios';

// import { products } from '../../data';
import { MOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

const Product = ({ filter, sort }) => {
	const isMobile = useMediaQuery(MOBILE);

	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(async () => {
		const res = await axios.get('http://localhost:5001/api/products');
		console.log(res);
	}, []);
	return (
		<Container
			maxWidth={false}
			sx={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'space-evenly',
			}}>
			{products.map((product) => (
				<Card
					key={product.id}
					sx={{
						minWidth: { sm: 150, md: 200 },
						minHeight: { sm: 150, md: 200 },
						boxShadow: 'none',
						m: '5px',
					}}>
					<CardMedia
						component="img"
						height={isMobile ? '150' : '200'}
						width={isMobile ? '150' : '200'}
						image={product.img}
						alt="name"
					/>
					<CardContent sx={{ padding: '10px 0px' }}>
						<Typography
							variant="caption"
							component="div"
							sx={{ textTransform: 'capitalize' }}>
							{product.title}
						</Typography>
						<Typography variant="body2" component="div">
							£{product.price}
						</Typography>
						<Box
							sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
							<Box>
								<SquareIcon sx={{ color: 'pink' }} />
								<SquareIcon sx={{ color: 'black' }} />
							</Box>
						</Box>
					</CardContent>
				</Card>
			))}
		</Container>
	);
};

export default Product;

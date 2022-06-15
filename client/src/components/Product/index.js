import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useProductContext } from '../../context/ProductProvider';

import { TABLET } from '../../media';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	const [product, setProduct] = useState({});
	const [colour, setColour] = useState('');
	const [size, setSize] = useState('');

	const { basketItems, basketProduct } = useProductContext();

	const fetchProduct = async () => {
		const { data } = await axios.get('/api/product/' + id);
		setProduct(data.data);
	};

	useEffect(() => {
		fetchProduct();
	}, [id]);

	const handleClick = () => {
		// add to basket
		console.log('add to basket');
	};

	const isTablet = useMediaQuery(TABLET);
	return (
		<Container
			sx={{ padding: '20px', textAlign: isTablet ? 'center' : 'left' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: isTablet ? 'center' : 'left',
				}}>
				<Box
					component="img"
					sx={{
						height: 510,
						width: 510,
						maxHeight: { xs: 330, md: 667 },
						maxWidth: { xs: 350, md: 650 },
					}}
					src={product.img}
				/>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						textAlign: isTablet ? 'center' : 'left',
						padding: '20px',
					}}>
					<Box sx={{ marginBottom: '20px' }}>
						<Typography sx={{ textTransform: 'capitalize' }} variant="h5">
							{product.title}
						</Typography>
						<Typography variant="h6">£{product.price}.00</Typography>
						<Typography
							sx={{ paddingTop: '20px', textTransform: 'uppercase' }}
							variant="subtitle1">
							Colour: <b>{product.colour}</b>
						</Typography>
					</Box>
					<Typography variant="caption">More colours:</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: isTablet ? 'center' : 'left',
						}}>
						{product.colour?.map((c, index) => (
							<Button
								onClick={() => setColour(c)}
								key={index}
								sx={{
									backgroundColor: `${c}`,
									padding: '0px',
									minWidth: '35px',
									height: '30px',
									borderRadius: '0px',
									margin: '5px',
									'&:hover': { border: 'solid 3px #5fcbcf', color: 'black' },
								}}></Button>
						))}
					</Box>
					<Typography variant="caption">Select Size:</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: isTablet ? 'center' : 'left',
						}}>
						{product.size?.map((n, index) => (
							<Button
								onClick={() => setSize(n)}
								key={index}
								variant="outlined"
								sx={{
									color: 'black',
									borderColor: 'black',
									padding: '0px',
									minWidth: '35px',
									height: '30px',
									borderRadius: '0px',
									margin: '5px',
									'&:hover': { border: 'solid 3px #5fcbcf', color: 'black' },
								}}>
								<Typography variant="button">{n}</Typography>
							</Button>
						))}
					</Box>
					<Button
						onClick={() => basketItems(id, size, colour)}
						sx={{
							marginTop: '20px',
							color: 'white',
							backgroundColor: 'black',
							cursor: 'pointer',
							'&:hover': { backgroundColor: '#5fcbcf', color: 'black' },
						}}
						variant="contained">
						add to basket
					</Button>
				</Box>
			</Box>
			<Box sx={{ padding: '20px' }}>
				<Typography variant="h5">Product Description</Typography>
				<Typography variant="body2">{product.desc}</Typography>
			</Box>
		</Container>
	);
};

export default Product;

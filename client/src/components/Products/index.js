import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/icons-material/Square';
import { useNavigate } from 'react-router-dom';

import { MOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

const Product = ({ sort, products, setProducts }) => {
	const isMobile = useMediaQuery(MOBILE);

	const navigate = useNavigate();

	useEffect(() => {
		if (sort === 'asc') {
			setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
		} else if (sort === 'desc') {
			setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
		}
	}, [sort]);

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
					key={product._id}
					onClick={() => navigate(`/product/${product._id}`)}
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
							£{product.price}.00
						</Typography>
						<Box
							sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
							<Box>
								{product.colour?.map((c, index) => (
									<Button
										key={index}
										sx={{
											color: `${c}`,
											backgroundColor: `${c}`,
											padding: '0px',
											minWidth: '25px',
											height: '20px',
											borderRadius: '0px',
											margin: '5px',
											border: '1px solid black',
											'&:hover': {
												border: 'solid 3px #5fcbcf',
											},
										}}></Button>
								))}
							</Box>
						</Box>
					</CardContent>
				</Card>
			))}
		</Container>
	);
};

export default Product;

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../../context/ProductProvider';

import { DESKTOP, MOBILE, XSMOBILE, TABLET } from '../../media';
import { useMediaQuery } from 'react-responsive';

const Featured = () => {
	const isXsMobile = useMediaQuery(XSMOBILE);
	const isMobile = useMediaQuery(MOBILE);
	const isTablet = useMediaQuery(TABLET);

	const { products, setProducts, category } = useProductContext();

	const navigate = useNavigate();

	// screen size for slice figure
	const getScreenSize = () => {
		if (isMobile) return 2;
		if (isTablet) return 4;
		else return 6;
	};

	// shuffle products to display
	const randomized = products.sort(() => {
		const randomTrueOrFalse = Math.random() > 0.5;
		return randomTrueOrFalse ? 1 : -1;
	});

	return (
		<Container
			sx={{
				textAlign: 'center',
				mt: 5,
				display: isXsMobile ? 'none' : 'block',
			}}>
			<Typography
				variant="h5"
				sx={{
					pt: 5,
					pb: 3,
					borderTop: 'solid 1px grey',
					textTransform: 'capitalize',
				}}>
				you may also like
			</Typography>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
				}}>
				{randomized.slice(0, getScreenSize()).map((product) => (
					<Card
						onClick={() => navigate(`/product/${product._id}`)}
						key={product.id}
						sx={{
							minWidth: { sm: 120, md: 140 },
							minHeight: { sm: 120, md: 140 },
							boxShadow: 'none',
							m: '2px',
						}}>
						<CardMedia
							component="img"
							height={isXsMobile ? '120' : '140'}
							width={isXsMobile ? '120' : '140'}
							image={product.img}
							alt="name"
						/>
						<CardContent>
							<Typography
								variant="caption"
								component="div"
								sx={{ textTransform: 'capitalize' }}>
								{product.title}
							</Typography>
							<Typography variant="body2" component="div">
								£{product.price}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Container>
		</Container>
	);
};

export default Featured;

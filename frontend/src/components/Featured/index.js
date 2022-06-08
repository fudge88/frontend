import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';

import './Featured.css';
import { products } from '../../data';
import { DESKTOP, LARGE, XSMOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';

const Featured = () => {
	const isLarge = useMediaQuery(LARGE);
	const isDesktop = useMediaQuery(DESKTOP);
	const isXsMobile = useMediaQuery(XSMOBILE);

	const randomized = products.sort(() => {
		const randomTrueOrFalse = Math.random() > 0.5;
		return randomTrueOrFalse ? 1 : -1;
	});

	return (
		<Container sx={{ textAlign: 'center', mt: 7 }}>
			<Typography
				variant="h5"
				sx={{
					pt: 7,
					pb: 5,
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
				{randomized.slice(3).map((product) => (
					<Card
						sx={{
							minWidth: 140,
							minHeight: 140,
							boxShadow: 'none',
							m: '2px',
						}}>
						<CardMedia
							component="img"
							height="140"
							image={product.img}
							key={product.id}
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

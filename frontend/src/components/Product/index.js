import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { TABLET } from '../../media';
import { useMediaQuery } from 'react-responsive';

const size = ['3', '4', '5', '6', '7', '8'];
const colourList = [
	{ color: 'purple' },
	{ color: 'orange' },
	{ color: 'green' },
	{ color: 'pink' },
	{ color: 'black' },
];

const Product = () => {
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
					src="https://cdn.media.amplience.net/i/office/4522632954_sd1.jpg?$newhighres$&w=400&h=355&fmt=auto&qlt=default&fmt.jpeg.interlaced=true"
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
							skinny strap heel
						</Typography>
						<Typography variant="h6">£34.99</Typography>
						<Typography
							sx={{ paddingTop: '20px', textTransform: 'uppercase' }}
							variant="subtitle1">
							Colour: <b>pink</b>
						</Typography>
					</Box>
					<Typography variant="caption">More colours:</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: isTablet ? 'center' : 'left',
						}}>
						{colourList.map((c, index) => (
							<Button
								key={index}
								sx={{
									backgroundColor: `${c.color}`,
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
						{size.map((n, index) => (
							<Button
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
				<Typography variant="h5">Product Details</Typography>
				<Typography variant="body2">
					Channel a retro athletic aesthetic in sports-casual sneaker Court Lite
					Tor. Innovative, super-lightweight cushioning complements a
					perforated, unlined off-white suede and nubuck upper, for a
					heritage-inspired look and comfortable feel all season long.
				</Typography>
			</Box>
		</Container>
	);
};

export default Product;

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

import { TABLET } from '../../media';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const BasketCard = ({ img, colour, size, price, title }) => {
	const isTablet = useMediaQuery(TABLET);

	const [quantity, setQuantity] = useState(1);

	const handleQuantity = (type) => {
		if (type === 'dec') {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				borderTop: 'solid 1px black',
				padding: '20px 0px',
				flexGrow: '1',
				margin: isTablet ? '20px 10px' : '20px',
			}}>
			<Box
				component="img"
				sx={{
					maxWidth: 150,
				}}
				src={img}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'right',
					textTransform: 'capitalize',
				}}>
				<Typography variant="button">{title}</Typography>
				<Typography variant="body2">colour: {colour}</Typography>
				<Typography variant="body2">size: {size} </Typography>
				<Typography variant="body2">£{price}.00</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'normal',
						height: '40px',
						margin: '10px 0px',
					}}>
					<Button
						variant="outlined"
						onClick={() => handleQuantity('dec')}
						sx={{
							minWidth: '40px',
							maxHeight: '40px',
							backgroundColor: 'black',
							color: 'white',
							fontSize: '20px',
							boxShadow: 'none',
							'&:hover': { backgroundColor: '#5fcbcf', color: 'black' },
						}}>
						-
					</Button>
					<OutlinedInput
						sx={{
							maxWidth: '60px',
							maxHeight: '40px',
							margin: 'auto',
							paddingLeft: '10px',
						}}
						value={quantity}
					/>
					<Button
						onClick={() => handleQuantity('inc')}
						variant="contained"
						sx={{
							minWidth: '40px',
							backgroundColor: 'black',
							color: 'white',
							fontSize: '15px',
							boxShadow: 'none',
							'&:hover': { backgroundColor: '#5fcbcf', color: 'black' },
						}}>
						+
					</Button>
				</Box>
				<Typography variant="caption">remove item</Typography>
			</Box>
		</Box>
	);
};

export default BasketCard;

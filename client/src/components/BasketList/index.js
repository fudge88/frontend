import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useProductContext } from '../../context/ProductProvider';

import { TABLET, XSMOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';

// import { useState } from 'react';
import BasketCard from '../BasketCard';

const BasketList = () => {
	const isTablet = useMediaQuery(TABLET);
	const isXsMobile = useMediaQuery(XSMOBILE);

	const { basketProduct } = useProductContext();

	// const [quantity, setQuantity] = useState(1);

	const estimateShipping = 5.9;
	const subtotal = basketProduct?.reduce((total, item) => {
		return (total += item.price);
	}, 0);

	const total = estimateShipping + subtotal;

	const BasketEmpty = () => {
		return (
			<Box sx={{ textAlign: 'center', padding: '20px' }}>
				<Typography variant="h4">Your basket is currently empty!</Typography>
				<Typography variant="h6">
					Add products to continue to checkout...
				</Typography>
			</Box>
		);
	};
	return (
		<>
			<Box sx={{ padding: isXsMobile ? '20px 10px' : '20px' }}>
				<Typography variant="h4">My Bag</Typography>
				<Typography variant="h6">Items ({basketProduct.length})</Typography>
			</Box>
			{basketProduct.length > 0 ? (
				<Box
					sx={{
						padding: isXsMobile ? '0px' : '20px',
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap-reverse',
					}}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							flexWrap: 'nowrap',
							flexGrow: '1',
						}}>
						{basketProduct.map((item) => (
							<BasketCard {...item} key={item._id} />
						))}
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							flexWrap: 'nowrap',
							border: '1px solid #5fcbcf',
							borderRadius: '5px',
							padding: '10px',
							margin: isTablet ? 'auto' : '20px 0px 0px 20px',
							minWidth: isTablet ? '90%' : '30%',
						}}>
						<Typography variant="h5" pb={2}>
							Order Summary
						</Typography>
						<Typography mb={2} variant="subtitle1">
							Subtotal £{subtotal.toFixed(2)}
						</Typography>
						<Typography mb={2} variant="subtitle1">
							Esimated Shipping {estimateShipping.toFixed(2)}
						</Typography>
						<Typography mb={2} variant="subtitle1">
							<b>Total: £{total.toFixed(2)}</b>
						</Typography>
						{/* buttons */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: isXsMobile ? 'center' : 'space-between',
								marginTop: '30px',
							}}>
							<Button
								variant="contained"
								sx={{
									margin: '5px',
									color: 'white',
									backgroundColor: 'black',
									cursor: 'pointer',
									'&:hover': { backgroundColor: '#5fcbcf', color: 'black' },
								}}>
								Checkout Now
							</Button>
							<Button
								size="small"
								variant="outlined"
								sx={{
									margin: '5px',
									borderColor: 'black',
									color: 'black',
									cursor: 'pointer',
									'&:hover': { backgroundColor: '#5fcbcf', color: 'black' },
								}}>
								Continue shopping
							</Button>
						</Box>
					</Box>
				</Box>
			) : (
				<BasketEmpty />
			)}
		</>
	);
};

export default BasketList;

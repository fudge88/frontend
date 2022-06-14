import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

import { TABLET, XSMOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const BasketList = () => {
	const isTablet = useMediaQuery(TABLET);
	const isXsMobile = useMediaQuery(XSMOBILE);

	const [quantity, setQuantity] = useState(1);

	const handleQuantity = (type) => {
		if (type === 'dec') {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};
	return (
		<>
			<Box sx={{ padding: isXsMobile ? '20px 10px' : '20px' }}>
				<Typography variant="h4">My Bag</Typography>
				<Typography variant="h6">Items (4)</Typography>
			</Box>
			<Box
				sx={{
					padding: isXsMobile ? '0px' : '20px',
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap-reverse',
				}}>
				{/* basket list */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'nowrap',
						flexGrow: '1',
					}}>
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
							src="https://img.freepik.com/free-photo/fashionable-woman-s-high-heel-shoe-isolated-white-background-beautiful-yellow-female-high-heels-shoe-luxury-rear-view_186202-4496.jpg?w=826&t=st=1654680377~exp=1654680977~hmac=bc9ce7d08b8078e484a4f65fd070c93de50ead17bc9fb471d5ae3a0a25804d21"
						/>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								textAlign: 'right',
								textTransform: 'capitalize',
							}}>
							<Typography variant="button">skinny strap heels</Typography>
							<Typography variant="body2">colour</Typography>
							<Typography variant="body2">size</Typography>
							<Typography variant="body2">price</Typography>
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
				</Box>
				{/* order summary */}
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
						Subtotal
					</Typography>
					<Typography mb={2} variant="subtitle1">
						Esimated Shipping
					</Typography>
					<Typography mb={2} variant="subtitle1">
						<b>Total</b>
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
		</>
	);
};

export default BasketList;

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';

import { TABLET } from '../../media';
import { useMediaQuery } from 'react-responsive';
import { maxHeight } from '@mui/system';

const BasketList = () => {
	const isTablet = useMediaQuery(TABLET);
	return (
		<Container sx={{ padding: '20px' }}>
			<Typography variant="h4">My Bag</Typography>
			<Typography mb={2} variant="h6">
				Items (4)
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: isTablet ? 'center' : 'space-between',
					borderTop: 'solid 1px black',
					padding: '20px 0px',
				}}>
				<Box
					component="img"
					sx={{ maxWidth: 150, marginRight: 'auto' }}
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
							sx={{
								minWidth: '40px',
								maxHeight: '40px',
								borderColor: 'black',
								color: 'black',
								fontSize: '20px',
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
							placeholder="4"
						/>
						<Button
							variant="outlined"
							sx={{
								minWidth: '40px',
								borderColor: 'black',
								color: 'black',
								fontSize: '15px',
							}}>
							+
						</Button>
					</Box>
					<Typography variant="caption">remove item</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap-reverse',
					justifyContent: 'space-between',
					marginTop: '30px',
				}}>
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
			</Box>
		</Container>
	);
};

export default BasketList;

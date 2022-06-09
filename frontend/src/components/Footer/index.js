import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {
	FaInstagramSquare,
	FaFacebookSquare,
	FaTiktok,
	FaTwitterSquare,
} from 'react-icons/fa';

import { TABLET } from '../../media';
import { useMediaQuery } from 'react-responsive';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: 'transparent',
	boxShadow: 'none',
	...theme.typography.body2,
	textAlign: 'center',
	color: 'black',
}));

const Footer = () => {
	const isTablet = useMediaQuery(TABLET);
	return (
		<>
			<Container sx={{ borderTop: 'solid 1px black', marginTop: '20px' }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: isTablet ? 'center' : 'space-between',
						flexWrap: 'wrap',
						padding: '30px 20px',
					}}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							textAlign: isTablet ? 'center' : 'left',
							padding: '20px 10px',
						}}>
						<Typography
							variant="h5"
							sx={{
								display: 'inline-block',
							}}>
							Comfort for your feet
						</Typography>
						<Typography variant="body2">
							Become a member today and get the latest offers!
						</Typography>
					</Box>
					<Stack
						direction="row"
						divider={<Divider orientation="vertical" flexItem />}
						spacing={2}>
						<Item>Track Order</Item>
						<Item>Delivery Info</Item>
						<Item>Returns Policy</Item>
					</Stack>
				</Box>
			</Container>
			<Container
				sx={{
					padding: '10px',
					backgroundColor: '#5fcbcf',
				}}>
				<Stack
					direction="row"
					spacing={4}
					sx={{
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#5fcbcf',
					}}>
					<Item>
						<FaInstagramSquare />
					</Item>
					<Item>
						<FaFacebookSquare />
					</Item>
					<Item>
						<FaTiktok />
					</Item>
					<Item>
						<FaTwitterSquare />
					</Item>
				</Stack>
			</Container>
			<Container
				sx={{
					textAlign: 'center',
					padding: '20px',
					backgroundColor: 'black',
					color: 'white',
				}}>
				<Typography variant="caption">
					Terms & conditions | © 2022 Golden Shoe | ANDdigital project
				</Typography>
			</Container>
		</>
	);
};

export default Footer;

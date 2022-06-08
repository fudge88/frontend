import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { TABLET, MOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';

import './Header.css';

const Header = () => {
	const isTablet = useMediaQuery(TABLET);
	const isMobile = useMediaQuery(MOBILE);
	return (
		<Container>
			<Stack
				sx={{ justifyContent: 'center' }}
				direction={{ xs: 'column', sm: 'row' }}
				spacing={{ xs: 1, sm: 2, md: 4 }}>
				<Box
					component="img"
					sx={{ maxWidth: { xs: 400, md: 600 }, margin: 'auto' }}
					src="https://img.freepik.com/free-photo/fashionable-woman-s-high-heel-shoe-isolated-white-background-beautiful-yellow-female-high-heels-shoe-luxury-rear-view_186202-4496.jpg?w=826&t=st=1654680377~exp=1654680977~hmac=bc9ce7d08b8078e484a4f65fd070c93de50ead17bc9fb471d5ae3a0a25804d21"
				/>
				<Box
					className="headerText"
					sx={{
						justifyContent: isMobile ? 'center' : 'left',
						alignItems: isMobile ? 'center' : 'left',
					}}>
					<Typography
						sx={{
							textTransform: 'uppercase',
							fontWeight: 'bold',
							pt: isTablet ? 0 : 1,
							textAlign: isMobile ? 'center' : 'left',
						}}
						variant={isMobile ? 'h4' : 'h3'}>
						my summer. my shoes.
					</Typography>
					<Typography
						variant="h5"
						sx={{
							pt: isTablet ? 0 : 1,
							textAlign: isMobile ? 'center' : 'left',
						}}>
						Let your shoes do the talking
					</Typography>
					<Button
						sx={{
							mt: 2,
							color: 'black',
						}}
						size="medium"
						variant="outlined">
						Shop Now
					</Button>
				</Box>
			</Stack>
		</Container>
	);
};

export default Header;

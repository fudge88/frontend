import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavDropdown from '../NavDropdown';
import { MOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';
const categories = ['men', 'women', 'kids'];

const theme = createTheme({
	palette: {
		brand: {
			main: '#5fcbcf',
			contrastText: 'black',
		},
	},
});

const Nav = () => {
	const isMobile = useMediaQuery(MOBILE);
	return (
		<AppBar
			position="static"
			sx={{ boxShadow: 'none', backgroundColor: 'black' }}>
			<Toolbar>
				{isMobile ? (
					<>
						<NavDropdown />
						<Typography variant="button">Golden Shoe</Typography>
					</>
				) : (
					<>
						<Typography sx={{ textTransform: 'uppercase' }} variant="h6">
							Golden Shoe
						</Typography>
						<Tabs value={false} textColor="inherit" sx={{ marginLeft: 'auto' }}>
							{categories.map((category, index) => (
								<Tab key={index} label={category} />
							))}
						</Tabs>
					</>
				)}
				<Button
					sx={{
						ml: 'auto',
						color: 'white',
						'&:hover': { color: '#5fcbcf' },
					}}>
					<ThemeProvider theme={theme}>
						<Badge badgeContent={4} color="brand">
							<ShoppingBasketOutlinedIcon />
						</Badge>
					</ThemeProvider>
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;

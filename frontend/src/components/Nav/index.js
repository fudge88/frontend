import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import './Nav.css';
import NavDropdown from '../NavDropdown';
import { MOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';
const categories = ['men', 'women', 'kids'];

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
						<Tabs textColor="white" sx={{ marginLeft: 'auto' }}>
							{categories.map((category, index) => (
								<Tab value={index} key={index} label={category} />
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
					<ShoppingBasketOutlinedIcon />
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;

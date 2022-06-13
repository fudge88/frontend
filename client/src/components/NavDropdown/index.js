import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const categories = ['men', 'women', 'kids', 'view basket'];

const NavDropdown = () => {
	const [openDropdown, setOpenDropdown] = useState(false);
	return (
		<>
			<Drawer
				open={openDropdown}
				onClose={() => setOpenDropdown(false)}
				anchor="top">
				<List>
					{categories.map((category, index) => (
						<ListItemButton onClick={() => setOpenDropdown(false)} key={index}>
							<ListItem>
								<ListItemText sx={{ textTransform: 'uppercase' }}>
									{category}
								</ListItemText>
							</ListItem>
						</ListItemButton>
					))}
				</List>
			</Drawer>
			<IconButton onClick={() => setOpenDropdown(!openDropdown)}>
				<MenuIcon sx={{ color: 'white', '&:hover': { color: '#5fcbcf' } }} />
			</IconButton>
		</>
	);
};

export default NavDropdown;

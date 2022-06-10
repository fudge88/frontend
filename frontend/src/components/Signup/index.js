import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { TABLET } from '../../media';
import { useMediaQuery } from 'react-responsive';

const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: '#5fcbcf',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#5fcbcf',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#5fcbcf',
			borderRadius: '5px 0px 0px 5px',
		},
		'&:hover fieldset': {
			borderColor: '#5fcbcf',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#5fcbcf',
		},
	},
});

const Signup = () => {
	const isTablet = useMediaQuery(TABLET);
	return (
		<Container sx={{ textAlign: 'center', paddingTop: '40px' }}>
			<Typography
				variant="h5"
				sx={{
					textTransform: 'uppercase',
				}}>
				Become a member
			</Typography>
			<Typography variant="button">
				get the latest offers and updates!
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					padding: '20px',
				}}>
				<CssTextField size="small" label="Email" id="email" />

				<Button
					sx={{
						backgroundColor: 'black',
						borderRadius: '0px 5px 5px 0px',
						boxShadow: 'none',
						'&:hover': {
							backgroundColor: '#5fcbcf',
							color: 'black',
							boxShadow: 'none',
						},
					}}
					variant="contained">
					Sign up!
				</Button>
			</Box>

			<Typography variant="caption">
				*£10 vouchers sent via email to spend instore for members only. By
				subscribing, you agree to receive marketing communications from Golden
				Shoe by email. You can unsubscribe at any point.
			</Typography>
		</Container>
	);
};

export default Signup;

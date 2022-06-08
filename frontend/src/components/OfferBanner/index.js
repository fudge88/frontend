import Typography from '@mui/material/Typography';

const OfferBanner = () => {
	return (
		<div>
			<Typography
				sx={{
					textTransform: 'capitalize',
					textAlign: 'center',
					backgroundColor: '#5fcbcf',
					padding: '2px',
				}}
				variant="body2">
				golden shoe members get £10 voucher to spend in store!
			</Typography>
		</div>
	);
};

export default OfferBanner;

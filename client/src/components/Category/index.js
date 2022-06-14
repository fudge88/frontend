import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProductContext } from '../../context/ProductProvider';

import { XSMOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';
import { categories } from '../../data';
import { useNavigate } from 'react-router-dom';

import '../../App.css';

const Category = () => {
	const isXsMobile = useMediaQuery(XSMOBILE);

	const { products, filteredProduct } = useProductContext();

	const navigate = useNavigate();
	return (
		<Box
			sx={{
				mt: isXsMobile ? 5 : 2,
				display: 'flex',
				justifyContent: 'center',
				flexDirection: isXsMobile ? 'column' : 'row',
			}}>
			{categories.map((category) => (
				<Box
					key={category.id}
					className={isXsMobile ? 'categoryText' : ' '}
					sx={{
						m: isXsMobile ? 'auto' : 1,
						maxWidth: 345,
						position: 'relative',
					}}>
					<Box sx={{ mb: 2 }}>
						<CardMedia
							component="img"
							height="300"
							image={category.img}
							alt={category.title}
						/>
						<Box
							className="categoryText"
							sx={{
								p: 0,
								textAlign: 'center',
								position: 'absolute',
							}}>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								sx={{
									textAlign: 'center',
									textTransform: 'uppercase',
									color: 'white',
									pt: 12,
								}}>
								{category.title}
							</Typography>
							<Button
								onClick={() => {
									filteredProduct(category.title);
									navigate('/products/');
								}}
								sx={{
									color: 'white',
									backgroundColor: 'black',
									cursor: 'pointer',
									'&:hover': { backgroundColor: '#5fcbcf', color: 'black' },
								}}
								size="medium"
								variant="contained">
								Shop
							</Button>
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default Category;

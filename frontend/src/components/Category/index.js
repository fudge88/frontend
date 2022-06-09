import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { XSMOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';
import { categories } from '../../data';

import './Category.css';

const Category = () => {
	const isXsMobile = useMediaQuery(XSMOBILE);
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
					className={isXsMobile ? 'categoryText' : ' '}
					sx={{
						m: isXsMobile ? 'auto' : 1,
						maxWidth: 345,
						position: 'relative',
					}}>
					<CardActionArea sx={{ mb: 2 }}>
						<CardMedia
							component="img"
							height="300"
							image={category.img}
							key={category.id}
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
								sx={{
									color: 'white',
									backgroundColor: 'black',
									cursor: 'pointer',
								}}
								size="medium"
								variant="contained">
								Shop
							</Button>
						</Box>
					</CardActionArea>
				</Box>
			))}
		</Box>
	);
};

export default Category;

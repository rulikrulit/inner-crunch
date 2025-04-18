import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const OurProducts: React.FC = () => {
    const products = [
        { 
            name: 'Zen Crunch', 
            description: 'A harmonious blend of whole grains and nuts for a balanced start to your day.', 
            image: '/inner-crunch/assets/zen-crunch.jpg' 
        },
        { 
            name: 'Mindful Muesli', 
            description: 'A thoughtful mix of oats, seeds, and dried fruits to nourish your body and soul.', 
            image: '/inner-crunch/assets/mindful-muesli.jpg' 
        },
        { 
            name: 'Serenity Flakes', 
            description: 'Light and crispy flakes that bring peace to your breakfast routine.', 
            image: '/inner-crunch/assets/serenity-flakes.jpg' 
        },
        { 
            name: 'Buddha Berry Bliss', 
            description: 'A delightful combination of berries and grains that awakens your senses.', 
            image: '/inner-crunch/assets/buddha-berry-bliss.jpg' 
        },
        { 
            name: 'Harmony Granola', 
            description: 'A crunchy mix of granola and honey for a sweet and balanced treat.', 
            image: '/inner-crunch/assets/harmony-granola.jpg' 
        },
        { 
            name: 'Tranquility Toasties', 
            description: 'Toasted cereal bites infused with calming chamomile.', 
            image: '/inner-crunch/assets/tranquility-toasties.jpg' 
        },
    ];

    return (
        <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Our Products
            </Typography>
            <Grid container spacing={4}>
                {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.image}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {product.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurProducts;
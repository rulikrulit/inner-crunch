import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutUs: React.FC = () => {
    return (
        <Box sx={{ padding: 4, textAlign: 'center', backgroundColor: '#f5f5f5', borderRadius: 2 }}>
            <img 
                src="/inner-crunch/assets/about-us.jpg" 
                alt="About Us" 
                style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
            />
            <Typography variant="h4" gutterBottom>
                About Inner Crunch
            </Typography>
            <Typography variant="body1" paragraph>
                At Inner Crunch, we believe that every bite of cereal can be a journey towards mindfulness and well-being. Inspired by the teachings of Buddha, our brand embodies the principles of simplicity, balance, and harmony. 
            </Typography>
            <Typography variant="body1" paragraph>
                Our cereals are crafted with care, using only the finest natural ingredients. We aim to nourish not just the body, but also the soul, promoting a lifestyle of health and tranquility.
            </Typography>
            <Typography variant="body1" paragraph>
                Join us on this path to inner peace and crunchiness, where every bowl is a step towards a more mindful existence.
            </Typography>
        </Box>
    );
};

export default AboutUs;
import React from 'react';
import { Box, Typography } from '@mui/material';

const OurMission: React.FC = () => {
    return (
        <Box sx={{ padding: 4, textAlign: 'center', backgroundColor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom>
                Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
                At Inner Crunch, we believe in nourishing the body and soul. Our mission is to provide wholesome, 
                delicious cereals that not only satisfy your hunger but also promote mindfulness and well-being. 
                Inspired by the teachings of Buddha, we strive to create products that encourage a balanced lifestyle, 
                fostering harmony between nature and nourishment.
            </Typography>
            <Typography variant="body1" paragraph>
                We are committed to using natural ingredients, embracing sustainability, and supporting local farmers. 
                Just as Buddha taught us to find joy in simplicity, we aim to bring joy to your breakfast table with 
                every crunchy bite. Join us on this journey towards a more mindful and fulfilling life.
            </Typography>
            <img 
                src="/assets/mission.jpg" 
                alt="Our Mission" 
                style={{ width: '100%', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
            />
        </Box>
    );
};

export default OurMission;
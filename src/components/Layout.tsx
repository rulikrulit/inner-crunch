import React from 'react';
import { Container, CssBaseline } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Container maxWidth="lg">
            <CssBaseline />
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                {children}
            </div>
        </Container>
    );
};

export default Layout;
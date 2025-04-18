import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // A calming green color
    },
    secondary: {
      main: '#ffeb3b', // A soft yellow for highlights
    },
    background: {
      default: '#f5f5f5', // Light background for a serene feel
      paper: '#ffffff', // White background for cards and sections
    },
    text: {
      primary: '#333333', // Dark text for readability
      secondary: '#666666', // Lighter text for secondary information
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#4caf50',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#333333',
    },
    body1: {
      fontSize: '1rem',
      color: '#666666',
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for a softer look
  },
});

export default theme;
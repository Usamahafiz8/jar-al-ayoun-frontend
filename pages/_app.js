// pages/_app.js
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme'; // Import your custom theme
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

import React, { useContext } from 'react';
import Head from 'next/head';
import {
  Toolbar,
  Typography,
  Switch,
  ThemeProvider,
  CssBaseline,
  Container,
} from '@material-ui/core';
import useStyles from '../../utils/styles';
import { createTheme } from '@material-ui/core/styles';
import { Store } from '../../utils/Store';
import Cookies from 'js-cookie';

export default function Layout({ children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '2.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '2.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#F0F0F0',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <div>
      <Head>
        <title>Hector Guzman | Personal Website</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toolbar>
          <Switch
            className={classes.switch_dark}
            checked={darkMode}
            onChange={darkModeChangeHandler}
          ></Switch>
        </Toolbar>
        <Container className={classes.container}>{children}</Container>
        <footer className={classes.footer}>
          <Typography style={{ fontSize: '12px' }}>
            @ Buenos Aires, Argentina
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}

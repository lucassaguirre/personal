import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import Layout from '../components/layout/layout';
import { Grid, Typography, Paper, Link } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: theme.typography.pxToRem(30),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  subs: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    paddingBottom: '20px',
    fontSize: theme.typography.pxToRem(14),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  foto: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid container item justifyContent="center">
            <Image
              alt="Hector Guzman"
              src="/me.png"
              width="200px"
              height="200px"
            />
          </Grid>
          <Grid container item justifyContent="center">
            <Typography variant="h1" className={classes.title} gutterBottom>
              Hector Guzman
            </Typography>
          </Grid>
          <Grid container item justifyContent="center">
            <Typography variant="h5" className={classes.subs}>
              Solutions Architect & Fullstack Dev
            </Typography>
          </Grid>
          <Grid container item justifyContent="center">
            <Link
              href="https://github.com/hrg81dev"
              style={{ color: 'inherit', padding: '5px' }}
              target="_blank"
            >
              <GitHub style={{ fontSize: '30px ' }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hguzman/"
              style={{ color: 'inherit', padding: '5px' }}
              target="_blank"
            >
              <LinkedIn style={{ fontSize: '30px' }} />
            </Link>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    minHeight: '80vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  },
  nomelacontainer: {
    display: 'flex',
    width: '70vh',
  },
  footer: {
    textAlign: 'center',
    color: '#cccccc',
  },
  switch_dark: {
    marginRight: 10,
  },
  gede1: {
    fontSize: '2.6rem',
    fontWeight: 800,
    margin: '1rem 0',
  },
  gede2: {
    fontSize: '1rem',
    fontWeight: 400,
    margin: '1rem 0',
  },
});
export default useStyles;

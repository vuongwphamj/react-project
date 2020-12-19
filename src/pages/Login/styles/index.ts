import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    left: {
      height: '100vh',
      width: '60vw',
      float: 'left'
    },
    leftImg: {
      maxWidth: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    right: {
      position: 'relative',
      height: '100vh',
      width: '40vw',
      float: 'right',
    },
    loginPage: {
      minHeight: 594,
      width: 448,
      position: 'absolute',
      margin: 'auto',
      top: 'calc((100% - 594px)/2)',
      left: 'calc((100% - 448px)/2)',
    },
    loginHead: {
      height: '30%',
      display: 'flex',
    },
    loginHeadLogo: {
      margin: 'auto',
      marginTop: 40,
      marginBottom: 40,
      top: '50%',
      left: '50%',
    },
    loginCenter: {
      height: '60%',
      position: 'relative'
    },
    loginForm: {
      width: '100%',
    },
    loginFormInput: {
      width: '90%',
      margin: 'auto',
    },
    loginFormButton: {
      width: '90%',
      margin: 'auto',
      marginTop: 30
    },
    loginCentterLink: {
      width: '90%',
      margin: 'auto',
      marginTop: 20
    },
    icon: {
      width: 40,
      height: 40,
      margin: theme.spacing(2),
    },
    loginBottom: {
      height: '10%',
    },
}));
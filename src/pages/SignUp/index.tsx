import React from 'react';
import { 
    Container, CssBaseline, Typography, 
    FormControl, Grid, TextField, 
    Button, Link, Box, IconButton 
} from '@material-ui/core';
import useStyles from './styles';
import Copyright from '../../components/Copyright';
import FacebookIcon from '../../components/FacebookIcon';
import GoogleIcon from '../../components/GoogleIcon';

export default () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <FormControl className={classes.form}>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item justify="center" container >
                            <Grid container justify="flex-start">
                                <Grid item>
                                    Sign Up with another account:
                                </Grid>
                            </Grid>
                            <Grid item alignItems="center" >
                                <IconButton
                                    aria-label="toggle password"
                                    onClick={() => {}}
                                    onMouseDown={() => {}}
                                >
                                    <FacebookIcon className={classes.icon} />
                                </IconButton>
                            </Grid>
                            <Grid item alignItems="center" >
                                <IconButton
                                    aria-label="toggle password"
                                    onClick={() => {}}
                                    onMouseDown={() => {}}
                                >
                                    <GoogleIcon className={classes.icon} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link href="#" variant="body2">
                            Already have an account? Sign in
                        </Link>
                        </Grid>
                    </Grid>
                </FormControl>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    )
}
import React, { useEffect } from "react";
import { loginImg } from "./imgs";
import {
  TextField,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
  Link,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff, AccountCircle } from "@material-ui/icons";
import FacebookIcon from "../../components/FacebookIcon";
import GoogleIcon from "../../components/GoogleIcon";
import useStyles from "./styles";
import Copyright from "../../components/Copyright";

import { getFacebookLogin } from "../../services/auth";

export default () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = `You clicked times`;
  })

  return (
    <Grid container spacing={0}>
      <Grid item xs={8} className={classes.left}>
        <img className={classes.leftImg} alt="login" src={loginImg} />
      </Grid>
      <Grid item xs={4} className={classes.right}>
        <Paper className={classes.loginPage} elevation={3}>
          <Grid className={classes.loginHead}>
            <Typography
              className={classes.loginHeadLogo}
              component="h1"
              variant="h5"
            >
              Login
            </Typography>
          </Grid>
          <Grid className={classes.loginCenter}>
            <FormControl className={classes.loginForm}>
              <TextField
                className={classes.loginFormInput}
                // error
                required
                id="outlined-required"
                label="User Name"
                variant="outlined"
                helperText="Incorrect entry."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <AccountCircle />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.loginFormInput}
                required
                id="outlined-password-input"
                label="Password"
                type={false ? "text" : "password"}
                autoComplete="current-password"
                variant="outlined"
                helperText="Incorrect entry."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {}}
                        onMouseDown={() => {}}
                      >
                        {true ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                className={classes.loginFormInput}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.loginFormButton}
              >
                Login
              </Button>
            </FormControl>
            <Grid className={classes.loginCentterLink} container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Grid justify="center" alignItems="center" container>
              <Grid item>
                <IconButton
                  aria-label="toggle password"
                  onClick={async () => {
                    
                  }}
                  onMouseDown={() => {}}
                >
                  <FacebookIcon className={classes.icon} />
                </IconButton>
              </Grid>
              <Grid item>
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
          <Grid className={classes.loginBottom}>
            <Copyright />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

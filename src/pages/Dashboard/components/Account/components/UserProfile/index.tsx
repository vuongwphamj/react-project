import {
  Paper,
  CardHeader,
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import React from "react";

import useStyles from "../../styles";
import FacebookIcon from "../../../../../../components/FacebookIcon";
import GoogleIcon from "../../../../../../components/GoogleIcon";

export default () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <CardHeader
        className={classes.cardHeader}
        title="User Profile"
        titleTypographyProps={{ color: "inherit" }}
        subheader="Complete your profile"
        subheaderTypographyProps={{ color: "inherit" }}
      />
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
        className={classes.userProfile}
      >
        <Grid item xs={11} sm={11} md={8} className={classes.userProfileInput}>
          <TextField
            id="standard-read-only-input"
            label="Email"
            defaultValue="Email"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={11} sm={11} md={5} className={classes.userProfileInput}>
          <TextField
            id="standard-read-only-input"
            label="First Name"
            defaultValue="First Name"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={11} sm={11} md={5} className={classes.userProfileInput}>
          <TextField
            id="standard-read-only-input"
            label="Last Name"
            fullWidth
            defaultValue="Last Name"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={11} sm={11} md={11} className={classes.userProfileInput}>
          <Typography variant="body2">
            Your account:{" "}
            <IconButton
              aria-label="toggle password"
              onClick={() => {}}
              onMouseDown={() => {}}
            >
              <FacebookIcon className={classes.accountIcon} />
            </IconButton>
            <IconButton
              aria-label="toggle password"
              onClick={() => {}}
              onMouseDown={() => {}}
            >
              <GoogleIcon className={classes.accountIcon} />
            </IconButton>
          </Typography>
        </Grid>
        <Grid item xs={11} sm={11} md={11} className={classes.userProfileInput}>
          <TextField
            id="standard-multiline-static"
            label="About me:"
            defaultValue="Something about me"
            multiline
            fullWidth
            rows={4}
          />
        </Grid>
        <Grid item xs={11} sm={11} md={11} className={classes.userProfileInput}>
          <Button variant="contained" color="primary">
            Update
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

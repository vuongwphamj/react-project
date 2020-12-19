import { Grid } from "@material-ui/core";
import React from "react";
import UserInfo from "./components/UserInfo";
import UserProfile from "./components/UserProfile";

export default () => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={3}
    >
      <Grid item xs={8} md={8} sm={12}>
        <UserProfile />
      </Grid>
      <Grid item xs={4} md={4} sm={12}>
        <UserInfo />
      </Grid>
    </Grid>
  );
};

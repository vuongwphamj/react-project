import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: "auto",
        marginTop: theme.spacing(-10),
      },
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  })
);

export default (props: any) => {
  const { src } = props;
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="avatar" src={src} className={classes.large} />
    </div>
  );
};

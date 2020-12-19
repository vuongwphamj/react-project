import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => {
  return createStyles({
    paper: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
    cardHeader: {
      color: "#FFFFFF",
      backgroundColor: theme.palette.primary.dark,
      padding: "0.75rem 1.25rem",
      marginTop: -40,
      textAlign: "left",
      borderRadius: "calc(.25rem - 1px)",
    },
    userProfile: {
      margin: "40px 20px 20px 20px",
    },
    userProfileInput: {
      padding: 20,
    },
    avatar: {
      margin: "auto",
    },
    accountIcon: {
      width: 20,
      height: 20,
    },
  });
});

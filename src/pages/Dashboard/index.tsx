import React, { lazy } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { useRouteMatch, Link } from "react-router-dom";

import useStyles from "./styles";

const Account = lazy(() => import("./components/Account"));

export default () => {
  const classes = useStyles();
  const match = useRouteMatch();
  const currentRoute = match.path.replace("/", "");
  console.log(currentRoute);
  const listMenu = [
    {
      link: "account",
      name: "Account",
      component: <Account />,
      icon: <InboxIcon />,
    },
    {
      link: "dashboard",
      name: "Dashboard",
      component: <Account />,
      icon: <InboxIcon />,
    },
    {
      link: "facebook-pages",
      name: "Facebook Pages",
      component: <Account />,
      icon: <InboxIcon />,
    },
    {
      link: "settings",
      name: "Setting",
      component: <Account />,
      icon: <InboxIcon />,
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbar}>
          <Typography component="h1" variant="h5">
            Food Random
          </Typography>
        </div>
        <Divider />
        <List>
          {listMenu.map(({ link, name, component, icon }) => (
            <Link
              to={link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem
                selected={link === currentRoute ? true : false}
                key={link}
                button
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.mainPage}>
          <Account />
        </div>
      </main>
    </div>
  );
};

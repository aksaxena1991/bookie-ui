import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 100;

const useStyles = makeStyles(theme => ({
  primaryLeftbar: {
    width:'2rem'
  },
  topItems: {
    top:'0rem',
    left:'-0.5rem'
  },
  bottomItems:{}
  
}));

const PrimaryLeftbar = () => {
  const classes = useStyles();
  console.log(classes,'anubhav');
  return (
    <div className={classes.primaryLeftbar}>
      <List className={classes.topItems}>
        {["Organisation", "Phone Number"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            {/* <ListItemText primary={text} /> */}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            {/* <ListItemText primary={text} /> */}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default PrimaryLeftbar;

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const drawerWidth = 240;

const lists = [
  {
    text: "To-Do-List",
    handleClick: () => {}
  },
  {
    text: "Shopping-List",
    handleClick: () => {
      //const ShoppingItems = ["Back-to-school items", "Cloths", "Watch"];
      // return <div>Hello grocery-list!</div>;
    },
  },
  {
    text: "Grocery-List",
    handleClick: () => {
      //const GroceryItems = ["Milk", "Eggs", "Cereals"];
      //return <div>Hello grocery-list!</div>;
    },
  },
];

const DisplayLists = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {lists.map((item, index) => {
              const { text, handleClick } = item;
              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton key={text} onClick={handleClick}>
                    <ListItemIcon>
                      <ListOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DisplayLists;

import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { FaAngleLeft } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Drawer2({ open, handleDrawerToggle }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle the body class for dark mode
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} anchor="right">
        <DrawerHeader>
          {open ? (
            <FaAngleLeft
              className="cursor-pointer"
              onClick={handleDrawerToggle}
            />
          ) : (
            <MenuIcon className="cursor-pointer" onClick={handleDrawerToggle} />
          )}
        </DrawerHeader>
        <Divider />
        <List>
          <ul className="pl-8 text-sm space-y-2 pt-20 cursor-pointer">
            {!open && (
              <li className="text-bold text-center text-2xl transform rotate-90 mt-32">
                Home
              </li>
            )}
            {open && (
              <>
                <div
                  className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}
                >
                  <label className="swap swap-rotate">
                    {/* hidden checkbox controls the state */}
                    <input
                      type="checkbox"
                      checked={isDarkMode}
                      onChange={handleToggle}
                      className="hidden"
                    />

                    {/* sun icon for light mode */}
                    <div
                      className={`swap-on flex gap-4 ${
                        isDarkMode ? "hidden" : "flex"
                      }`}
                    >
                      <label>Light Mode</label>
                      <IoSunnyOutline className="fill-current w-10 h-10" />
                    </div>

                    {/* moon icon for dark mode */}
                    <div
                      className={`swap-off flex gap-4 ${
                        isDarkMode ? "flex" : "hidden"
                      }`}
                    >
                      <label>Dark Mode</label>
                      <CiDark className="fill-current w-10 h-10" />
                    </div>
                  </label>
                </div>
                <li className="bg-orange-300 p-3 text-white rounded-lg hover:bg-orange-400 font-semibold">
                  Home
                </li>
                <li className="bg-orange-300 p-3 text-white rounded-lg hover:bg-orange-400 font-semibold">
                  Services
                </li>
                <li
                  className="bg-orange-300 p-3 text-white rounded-lg hover:bg-orange-400 font-semibold"
                  b
                >
                  Education & Experience
                </li>
                <li className="bg-orange-300 p-3 text-white rounded-lg hover:bg-orange-400 font-semibold">
                  Plans
                </li>
                <li className="bg-orange-300 p-3 text-white rounded-lg hover:bg-orange-400 font-semibold">
                  Projects
                </li>
                <li className="bg-orange-300 p-3 text-white rounded-lg hover:bg-orange-400 font-semibold">
                  Blog
                </li>
                <li className="bg-orange-300 p-3 text-white rounded-lg hover:bg-orange-400 font-semibold">
                  Contact
                </li>
              </>
            )}
          </ul>
        </List>
      </Drawer>
    </Box>
  );
}

export default Drawer2;

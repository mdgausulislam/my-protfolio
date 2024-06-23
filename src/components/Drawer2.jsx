import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { FaAngleLeft } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { themeContext } from "./Context";

const drawerWidth = 180;

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
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const dispatch = theme.dispatch;

  const handleToggle = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          open={open}
          anchor="right"
          classes={{
            paper: darkMode
              ? "drawer-paper dark-mode"
              : "drawer-paper light-mode",
          }}
        >
          <DrawerHeader>
            {open ? (
              <FaAngleLeft
                className="cursor-pointer"
                onClick={handleDrawerToggle}
              />
            ) : (
              <MenuIcon
                className="cursor-pointer"
                onClick={handleDrawerToggle}
              />
            )}
          </DrawerHeader>
          <Divider />
          <List>
            <ul className="pl-8 text-sm space-y-2 pt-20 cursor-pointer">
              {!open && (
                <li className="text-bold text-2xl transform rotate-90 mt-32 opacity-50 mr-6">
                  <Link to="/">Home</Link>
                </li>
              )}
              {open && (
                <>
                  <div
                    className={`theme-toggle pb-5 ${darkMode ? "dark" : "light"}`}
                  >
                    <label className="swap swap-rotate">
                      <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={handleToggle}
                        className="hidden"
                      />

                      <div
                        className={`swap-on flex gap-4 ${
                          darkMode ? "hidden hover:text-orange-500" : "flex"
                        }`}
                      >
                        <label>Light Mode</label>
                        <IoSunnyOutline className="fill-current w-6 h-6" />
                      </div>

                      <div
                        className={`swap-off flex gap-4 ${
                          darkMode ? "flex" : "hidden hover:text-orange-500"
                        }`}
                      >
                        <label>Dark Mode</label>
                        <CiDark className="fill-current w-6 h-6" />
                      </div>
                    </label>
                  </div>
                  <li
                    className={`text-black rounded-lg font-semibold opacity-50  ${
                      darkMode
                        ? "text-white hover:text-orange-500"
                        : "hover:text-orange-500"
                    }`}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={`text-black rounded-lg font-semibold opacity-50  ${
                      darkMode
                        ? "text-white hover:text-orange-500"
                        : "hover:text-orange-500"
                    }`}
                  >
                    <Link to="/services">Services</Link>
                  </li>
                  <li
                    className={`text-black rounded-lg font-semibold opacity-50  ${
                      darkMode
                        ? "text-white hover:text-orange-500"
                        : "hover:text-orange-500"
                    }`}
                  >
                    <Link to="/education">
                      Education & <br /> Work Experience
                    </Link>
                  </li>
                  <li
                    className={`text-black rounded-lg font-semibold opacity-50  ${
                      darkMode
                        ? "text-white hover:text-orange-500"
                        : "hover:text-orange-500"
                    }`}
                  >
                    <Link to="/price-plans">Plans</Link>
                  </li>
                  <li
                    className={`text-black rounded-lg font-semibold opacity-50  ${
                      darkMode
                        ? "text-white hover:text-orange-500"
                        : "hover:text-orange-500"
                    }`}
                  >
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li
                    className={`text-black rounded-lg font-semibold opacity-50  ${
                      darkMode
                        ? "text-white hover:text-orange-500"
                        : "hover:text-orange-500"
                    }`}
                  >
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li
                    className={`text-black rounded-lg font-semibold opacity-50  ${
                      darkMode
                        ? "text-white hover:text-orange-500"
                        : "hover:text-orange-500"
                    }`}
                  >
                    <Link to="/contact">Contact</Link>
                  </li>
                </>
              )}
            </ul>
          </List>
        </Drawer>
      </Box>
    </div>
  );
}

export default Drawer2;

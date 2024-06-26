import React, { useContext } from "react";
import Logo from "../assets/Md Gousul Islam Hemonto.jpg";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { themeContext } from "./Context"; // Import themeContext

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function AvatarComponent() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={`fixed top-0 w-[322px] text-center shadow-sm pb-4 z-10 ${
        darkMode ? "footer-card" : "bg-white text-black"
      }`}
    >
      <Tooltip
        title="Md Gousul Islam Hemonto - Software Engineer"
        placement="right-start"
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Md Gousul Islam Hemonto"
            src={Logo}
            className="w-28 h-28 mx-auto mt-5"
          />
        </StyledBadge>
      </Tooltip>
      <h1 className="text-lg font-bold hover:text-orange-500 cursor-pointer">Md Gousul Islam Hemonto</h1>
      <p>Software Engineer</p>
      <p>Mern Stack Developer</p>
    </div>
  );
}

export default AvatarComponent;

import React, { useContext } from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import { useCountUp } from "use-count-up";
import { themeContext } from "./Context";

export default function LinearProgressCountUp({ skill, percentage }) {
  const { value } = useCountUp({
    isCounting: true,
    duration: 5,
    easing: "linear",
    start: 0,
    end: percentage,
    onComplete: () => ({
      shouldRepeat: false,
      delay: 2,
    }),
  });

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="mb-3">
      <Typography
        className={darkMode ? "circular-dark-mode" : "text-black"}
        level="body-sm"
        fontWeight="medium"
        gutterBottom
      >
        {skill}
      </Typography>
      <LinearProgress
        determinate
        variant="outlined"
        color="neutral"
        size="sm"
        thickness={10}
        value={Number(value)}
        sx={{
          "--LinearProgress-radius": "10px",
          "--LinearProgress-thickness": "12px",
        }}
      >
        <Typography
          level="body-xs"
          fontWeight="xl"
          textColor="common.white"
          sx={{ mixBlendMode: "difference" }}
          className={`${darkMode ? "linear-dark-mode" : " text-black"}`}
        >
          {`${Math.round(Number(value))}%`}
        </Typography>
      </LinearProgress>
    </div>
  );
}

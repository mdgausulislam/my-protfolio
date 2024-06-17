import * as React from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import { useCountUp } from "use-count-up";

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

  return (
    <div className="mb-3">
      <Typography level="body-sm" fontWeight="medium" gutterBottom>
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
        >
          {`${Math.round(Number(value))}%`}
        </Typography>
      </LinearProgress>
    </div>
  );
}

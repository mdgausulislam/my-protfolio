import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';

export default function CircularProgressCountUp({ language, endValue }) {
  const { value: progressValue } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: endValue,
  });

  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={8}>
      <Stack spacing={2}>
        <CircularProgress size="lg" determinate value={progressValue}>
          <Typography>{progressValue}%</Typography>
        </CircularProgress>
        <Typography>{language}</Typography>
      </Stack>
    </Stack>
  );
}

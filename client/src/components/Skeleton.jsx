import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { makeStyles } from '@mui/styles';


export default function MySkeleton() {
    
  return (
    <Box sx={{ width: 1000 }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Box>
  );
}
import React from 'react';
import { Typography } from '@mui/material';

const FriendsTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        textTransform: 'uppercase',
        color: '#8e9297',
        fontSize: '14px',
        margin: '16px 0 8px',
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;

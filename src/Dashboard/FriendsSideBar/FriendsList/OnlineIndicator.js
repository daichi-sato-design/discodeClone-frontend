import React from 'react';
import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: '#3BA55D',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '4px',
      }}
    >
      <FiberManualRecordIcon sx={{ width: '20px', height: '20px' }} />
    </Box>
  );
};

export default OnlineIndicator;

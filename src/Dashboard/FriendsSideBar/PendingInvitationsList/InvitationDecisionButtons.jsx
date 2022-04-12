import React from 'react';
import { Box, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const InvitationDecisionButtons = ({
  disabled,
  acceptInvitationHandler,
  rejectInvitationHandler,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        style={{ color: '#FFF' }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <CheckIcon sx={{ width: '20px', height: '20px' }} />
      </IconButton>
      <IconButton
        style={{ color: '#FFF' }}
        disabled={disabled}
        onClick={rejectInvitationHandler}
      >
        <ClearIcon sx={{ width: '20px', height: '20px' }} />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;

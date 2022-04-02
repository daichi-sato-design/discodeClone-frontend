import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const RedirectText = styled('span')({
  color: '#00AFF4',
  fontWeight: 500,
  cursor: 'pointer',
});

const RedirectInfo = (props) => {
  const { text, redirectText, additionalStyles, redirectHandler } = props;
  return (
    <Typography
      sx={{ color: '#72767b' }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;

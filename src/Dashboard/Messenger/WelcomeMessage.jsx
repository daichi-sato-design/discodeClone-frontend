import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const Wrapper = styled('div')({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography sx={{ color: '#FFF', fontSize: '15px', fontWeight: '500' }}>
        ユーザーを選択してチャットをはじめましょう
      </Typography>
    </Wrapper>
  );
};

export default WelcomeMessage;

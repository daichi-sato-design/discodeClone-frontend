import React from 'react';
import { Typography } from '@mui/material';

const LoginPageHeader = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#fff',
        }}
      >
        お帰りなさい！
      </Typography>
      <Typography sx={{ fontSize: '14px', color: '#b9bbbe' }}>
        あなたが私たちと一緒にいることを嬉しく思います！
      </Typography>
    </>
  );
};

export default LoginPageHeader;

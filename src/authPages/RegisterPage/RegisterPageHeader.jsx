import React from 'react';
import { Typography } from '@mui/material';

const RegisterPageHeader = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontSize: '20px', fontWeight: '600', color: '#fff' }}
      >
        アカウントを作成する
      </Typography>
    </>
  );
};

export default RegisterPageHeader;

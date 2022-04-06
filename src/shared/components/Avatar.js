import React from 'react';
import styled from '@emotion/styled';

const AvatarPreview = styled('div')({
  width: '42px',
  height: '42px',
  backgroundColor: '#5865F2',
  borderRadius: '42px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  fontWeight: '600',
  marginLeft: '5px',
  color: '#FFF',
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview
      style={large ? { width: '80px', height: '80px', fontSize: '20px' } : {}}
    >
      {username.substring(0, 2)}
    </AvatarPreview>
  );
};

export default Avatar;

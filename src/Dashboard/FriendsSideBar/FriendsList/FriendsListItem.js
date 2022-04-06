import React from 'react';
import { Button, Typography } from '@mui/material';
import Avatar from '../../../shared/components/Avatar';
import OnlineIndicator from './OnlineIndicator';

const FriendsListItem = ({ id, username, isOnline }) => {
  return (
    <Button
      style={{
        width: '100%',
        margin: '0',
        padding: '4px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: '#000',
        position: 'relative',
        borderRadius: 0,
        boxSizing: 'border-box',
      }}
    >
      <Avatar username={username} large={false} />
      <Typography
        style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#8E9297',
          marginLeft: '8px',
        }}
        variant={'subtitle1'}
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendsListItem;

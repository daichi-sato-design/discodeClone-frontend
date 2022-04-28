import React from 'react';
import { Button, Typography } from '@mui/material';
import Avatar from '../../../shared/components/Avatar';
import OnlineIndicator from './OnlineIndicator';
import { chatTypes } from '../../../store/actions/chatActions';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/chatActions';

const FriendsListItem = ({ id, username, isOnline, setChosenChatDetails }) => {
  const handleChooseActiveConversation = () => {
    setChosenChatDetails({ id: id, name: username }, chatTypes.DIRECT);
  };

  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: '100%',
        margin: '0',
        padding: '4px 28px 4px 12px',
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
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(FriendsListItem);

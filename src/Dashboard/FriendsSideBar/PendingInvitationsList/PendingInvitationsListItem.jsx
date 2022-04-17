import React, { useState } from 'react';
import { Tooltip, Box, Typography } from '@mui/material';
import Avatar from '../../../shared/components/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/friendsActions';

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonDisabled(true);
  };
  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonDisabled(false);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            padding: '4px 8px 4px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#8E9297',
              flexGrow: 1,
              whiteSpace: 'nowrap',
              overflowX: 'hidden',
              textOverflow: 'ellipsis',
              WebkitTextOverflow: 'ellipsis',
              OTextOverflow: 'ellipsis',
            }}
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(PendingInvitationsListItem);

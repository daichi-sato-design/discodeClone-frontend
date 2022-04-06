import React from 'react';
import { styled } from '@mui/system';
import PendingInvitationsListItem from './PendingInvitationsListItem';

const DUMMY_INVITATIONS = [
  {
    _id: '1',
    senderId: {
      username: 'Mark',
      mail: 'Mark@dummy.com',
    },
  },
  {
    _id: '2',
    senderId: {
      username: 'John',
      mail: 'John@dummy.com',
    },
  },
];

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'auto',
});

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((invitation) => (
        <PendingInvitationsListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;

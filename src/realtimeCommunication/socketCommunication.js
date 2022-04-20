import io from 'socket.io-client';
import store from '../store/store';
import {
  setPendingFriendsInvitations,
  setFriends,
} from '../store/actions/friendsActions';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;

  socket = io('http://localhost:5002', {
    auth: {
      token: jwtToken,
    },
  });

  socket.on('connect', () => {
    console.log('socket.ioサーバーに正常に接続されました', socket.id);
  });

  socket.on('friends-invitations', (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on('friends-list', (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });
};

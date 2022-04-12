import { openAlertMessage } from './alertActions';
import * as api from '../../api';

export const friendActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const respanse = await api.sendFriendInvitation(data);

    if (respanse.error) {
      dispatch(openAlertMessage(respanse.exception?.respanse?.data));
    } else {
      dispatch(openAlertMessage('フレンド申請が送信されました！'));
      closeDialogHandler();
    }
  };
};

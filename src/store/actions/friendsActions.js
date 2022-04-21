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
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
  };
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
  return {
    type: friendActions.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitations,
  };
};

export const setFriends = (friends) => {
  return {
    type: friendActions.SET_FRIENDS,
    friends,
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const respanse = await api.sendFriendInvitation(data);

    if (respanse.error) {
      dispatch(openAlertMessage(respanse.exception?.response?.data));
    } else {
      dispatch(openAlertMessage('フレンド申請が送信されました'));
      closeDialogHandler();
    }
  };
};

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const respanse = await api.acceptFriendInvitation(data);

    if (respanse.error) {
      dispatch(openAlertMessage(respanse.exception?.response?.data));
    } else {
      dispatch(openAlertMessage('フレンド申請を承認しました'));
    }
  };
};

const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const respanse = await api.rejectFriendInvitation(data);

    if (respanse.error) {
      dispatch(openAlertMessage(respanse.exception?.response?.data));
    } else {
      dispatch(openAlertMessage('フレンド申請を拒否しました'));
    }
  };
};

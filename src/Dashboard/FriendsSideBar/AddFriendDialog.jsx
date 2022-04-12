import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { validateMail } from '../../shared/utils/validators';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryBottom from '../../shared/components/CustomPrimaryButton';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
  isDialopOpen,
  closeDialogHandler,
  sendFriendInvitation,
}) => {
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = () => {
    // Send friend request to server
    sendFriendInvitation(
      {
        targetMailAddress: mail,
      },
      closeDialogHandler
    );
  };
  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail('');
  };
  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialopOpen} onClose={handleCloseDialog}>
        <DialogTitle
          sx={{ fontSize: '20px', fontWeight: '600', paddingBottom: '8px' }}
        >
          友達を招待する
        </DialogTitle>
        <DialogContent sx={{ paddingBottom: '4px' }}>
          <DialogContentText sx={{ fontSize: '14px' }}>
            招待したい友達のメールアドレスを入力してください
          </DialogContentText>
          <InputWithLabel
            value={mail}
            setValue={setMail}
            label="E-MAIL ADDRESS"
            type="text"
            placeholder="メールアドレス"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryBottom
            label="送信する"
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
              fontSize: '14px',
              fontWeight: '600px',
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);

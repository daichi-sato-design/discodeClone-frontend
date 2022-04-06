import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { validateMail } from '../../shared/utils/validators';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryBottom from '../../shared/components/CustomPrimaryButton';

const AddFriendDialog = ({
  isDialopOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = () => {
    // Send friend request to server
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

export default AddFriendDialog;

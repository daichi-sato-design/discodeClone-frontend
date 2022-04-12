import React, { useState } from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
  marginTop: '16px',
  width: '85%',
  height: '36px',
  backgroundColor: '#3BA55D',
  fontSize: '13px',
  fontWeight: '600',
  lineHeight: 1,
  flexShrink: 0,
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        label="フレンドを追加する"
        additionalStyles={additionalStyles}
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialopOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;

import React from 'react';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';

const ChosenOptionLabel = ({ name }) => {
  return (
    <Typography sx={{ fontSize: '16px', color: '#FFF', fontWeight: 'bold' }}>
      {`${name ? `選択した会話：${name}` : ''}`}
    </Typography>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    name: state.chat.chosenChatDetails?.name,
  };
};

export default connect(mapStoreStateToProps)(ChosenOptionLabel);

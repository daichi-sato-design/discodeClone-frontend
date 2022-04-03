import React from 'react';
import { styled } from '@mui/system';

const Wrepper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
});

const Label = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '13px',
  margin: '16px 0 8px',
});

const Input = styled('input')({
  flexGrow: 1,
  height: '40px',
  border: '1px solid #000',
  borderRadius: '5px',
  color: '#dcddde',
  background: '#35393f',
  margin: 0,
  fontSize: '16px',
  padding: '0 5px',
});

const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Wrepper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrepper>
  );
};

export default InputWithLabel;

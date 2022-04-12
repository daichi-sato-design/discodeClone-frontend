import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
  return '正しいメールアドレスを入力してください。パスワードには6〜12文字を含める必要があります';
};
const getFormValidMessage = () => {
  return '入力情報でログインする';
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate('/register');
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="ログインする"
            additionalStyles={{
              fontSize: '13px',
              fontWeight: '600',
              marginTop: '30px',
            }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="アカウントが必要ですか？ "
        redirectText="アカウントを作成する"
        additionalStyles={{ fontSize: '12px', marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;

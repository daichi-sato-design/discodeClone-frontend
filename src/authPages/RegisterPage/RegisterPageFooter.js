import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
  return 'ユーザー名には3〜12文字、パスワードには6〜12文字を含める必要があります。 また、正しい電子メールアドレスを提供する必要があります';
};
const getFormValidMessage = () => {
  return '入力情報で登録する';
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToLoginPage = () => {
    navigate('/login');
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="登録する"
            additionalStyles={{
              fontSize: '13px',
              fontWeight: '600',
              marginTop: '30px',
            }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="すでにアカウントをお持ちですか？ "
        redirectText="ログイン"
        additionalStyles={{ fontSize: '12px', marginTop: '5px' }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};
export default RegisterPageFooter;

import React from 'react';
import CustomPrimaryBottom from '../../shared/components/CustomPrimaryBottom';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
  return 'Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provided';
};
const getFormValidMessage = () => {
  return 'Press to Register!';
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
          <CustomPrimaryBottom
            label="Register"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Already have an account? "
        redirectText="Log in"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};
export default RegisterPageFooter;

import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/AuthBox';

import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';

import { validateRegisterForm } from '../../shared/utils/validators';

const RegisterPage = () => {
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
  }, [mail, username, password, setIsFormValid]);

  const handleRegister = () => {
    console.log({ mail, username, password });
    console.log('Register');
  };

  return (
    <AuthBox>
      <RegisterPageHeader />
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default RegisterPage;

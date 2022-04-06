// Loginバリデーション
export const validateLoginForm = ({ mail, password }) => {
  return validateMail(mail) && validatePassword(password);
};

// Register バリデーション
export const validateRegisterForm = ({ mail, username, password }) => {
  return (
    validateMail(mail) &&
    validateUsername(username) &&
    validatePassword(password)
  );
};

export const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

const validatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};

const validateUsername = (username) => {
  return username.length > 2 && username.length < 13;
};

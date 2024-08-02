const { RECAPTCHA_KEY } = process.env;

const verifyRecaptcha = async (token) => {
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_KEY}&response=${token}`;

  const response = await fetch(recaptchaUrl, { method: 'POST' });
  const result = response.json();

  return result.success;
}

module.exports = verifyRecaptcha;
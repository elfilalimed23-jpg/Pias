const otpMap = new Map();

function setOtp(phone, otp) {
  otpMap.set(phone, otp);
}

function verifyOtp(phone, otp) {
  return otpMap.get(phone) === otp;
}

function clearOtp(phone) {
  otpMap.delete(phone);
}

module.exports = { setOtp, verifyOtp, clearOtp };

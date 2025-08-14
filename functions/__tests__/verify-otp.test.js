const mockCreateCustomToken = jest.fn().mockResolvedValue('mock-token');

jest.mock('firebase-admin', () => ({
  apps: [{}],
  initializeApp: jest.fn(),
  credential: { cert: jest.fn() },
  auth: () => ({ createCustomToken: mockCreateCustomToken })
}));

const { handler } = require('../verify-otp');
const { setOtp, clearOtp } = require('../otp-store');

describe('verify-otp handler', () => {
  const phone = '+1234567890';

  beforeEach(() => {
    mockCreateCustomToken.mockClear();
    clearOtp(phone);
  });

  it('returns success true for valid OTP', async () => {
    setOtp(phone, '123456');
    const event = { body: JSON.stringify({ phone, otp: '123456' }) };
    const res = await handler(event);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.body)).toEqual({ success: true, token: 'mock-token' });
  });

  it('returns 400 for invalid OTP', async () => {
    setOtp(phone, '123456');
    const event = { body: JSON.stringify({ phone, otp: '000000' }) };
    const res = await handler(event);
    expect(res.statusCode).toBe(400);
    expect(JSON.parse(res.body)).toEqual({ success: false, error: 'Code OTP incorrect' });
  });
});

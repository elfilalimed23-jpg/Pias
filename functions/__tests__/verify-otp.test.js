+34
-0

const mockCreateCustomToken = jest.fn().mockResolvedValue('mock-token');

jest.mock('firebase-admin', () => ({
  apps: [{}],
  initializeApp: jest.fn(),
  credential: { cert: jest.fn() },
  auth: () => ({ createCustomToken: mockCreateCustomToken })
}));

const { handler } = require('../verify-otp');

describe('verify-otp handler', () => {
  beforeEach(() => {
    mockCreateCustomToken.mockClear();
  });

  it('returns success true for valid OTP', async () => {
    const event = {
      body: JSON.stringify({ phone: '+1234567890', otp: '123456', type: 'sms' })
    };
    const res = await handler(event);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.body)).toEqual({ success: true, token: 'mock-token' });
  });

  it('returns 400 for invalid OTP', async () => {
    const event = {
      body: JSON.stringify({ phone: '+1234567890', otp: '000000', type: 'sms' })
    };
    const res = await handler(event);
    expect(res.statusCode).toBe(400);
    expect(JSON.parse(res.body)).toEqual({ success: false, error: 'Code OTP incorrect' });
  });
});

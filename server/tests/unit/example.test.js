const { generateToken } = require('../../src/utils/auth');
const mongoose = require('mongoose');

describe('Auth utility tests', () => {
  it('should generate a valid JWT token', () => {
    const user = { _id: new mongoose.Types.ObjectId(), email: 'test@example.com' };
    const token = generateToken(user);

    expect(typeof token).toBe('string');
  });
});

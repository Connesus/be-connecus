const faker = require('faker');
const { User } = require('../../../src/models');

describe('User model', () => {
  describe('User validation', () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        accountId: faker.name.findName(),
        name: faker.name.findName(),
        displayName: faker.name.findName(),
        status: true,
        isActive: true,
        role: 'user',
      };
    });

    test('should correctly validate a valid user', async () => {
      await expect(new User(newUser).validate()).resolves.toBeUndefined();
    });
  });

  describe('User toJSON()', () => {
    test('should not return user password when toJSON is called', () => {
      const newUser = {
        accountId: faker.name.findName(),
        name: faker.name.findName(),
        displayName: faker.name.findName(),
        status: true,
        isActive: true,
        role: 'user',
      };
      expect(new User(newUser).toJSON()).not.toHaveProperty('password');
    });
  });
});

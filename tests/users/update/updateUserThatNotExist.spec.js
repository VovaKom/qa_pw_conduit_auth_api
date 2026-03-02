import { test } from '../../_fixtures/fixtures';
import { INVALID_EMAIL_OR_PASSWORD_MESSAGE } from '../../../src/constants/authErrorMessages';

test('Update user that does not exist', async ({
  usersApi,
  registeredUser,
}) => {
  const response = await usersApi.updateUser({
    email: 'notexisting@email.com',
    password: registeredUser.password,
    username: registeredUser.username,
  });

  await usersApi.assertUnauthorizedResponseCode(response);
});
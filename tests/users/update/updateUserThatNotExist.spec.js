import { test } from '../../_fixtures/fixtures';

test('Update user that does not exist', async ({
  usersApi,
  registeredUser,
}) => {
  registeredUser['token'] = '';

  const response = await usersApi.updateUser(registeredUser);

  await usersApi.assertUnauthorizedResponseCode(response);
});
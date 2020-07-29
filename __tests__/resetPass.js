import postResetPass from '../endpoints/resetPass';
import resetPassschema from '../schemaValidator/resetPass';
import * as body from '../data/resetPass';

const { matchers } = require('jest-json-schema');

expect.extend(matchers);

describe('Reset Password', () => {
  test('Can reset password using registered email  - positive test cases', async () => {
    const response = await postResetPass(body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(resetPassschema);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });
  test('Can not reset password using unregistered email   - negative test cases', async () => {
    const response = await postResetPass(body.negativeRequest);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(resetPassschema);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });
});

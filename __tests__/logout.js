import logout from '../endpoints/logout';
import * as logoutSchema from '../schemaValidator/logout';
import * as body from '../data/logout';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.logout;

describe('Logout', () => {
  test('Can logout succesfully using authorized token - positive test cases', async () => {
    const response = await logout(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(logoutSchema);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });
  test('Can not logout using unauthorized token - negative test cases', async () => {
    const response = await logout('xxx', body.default);
    expect(response.status).toEqual(401);
    expect(response.body).toMatchSchema(logoutSchema.invalidToken);
    expect(response.body).toMatchSnapshot();
  });
  test('Can not logout using empty token - negative test cases', async () => {
    const response = await logout('', body.default);
    expect(response.status).toEqual(401);
    expect(response.body).toMatchSchema(logoutSchema.invalidToken);
    expect(response.body).toMatchSnapshot();
  });
  test('Can not logout using incomplete data request - negative test cases', async () => {
    const response = await logout(token, body.negativeRequest);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(logoutSchema.negativeReqSchema);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });
});

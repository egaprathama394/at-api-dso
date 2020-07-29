import getProfile from '../endpoints/profile';
import * as profileSchema from '../schemaValidator/profile';
import * as body from '../data/profile';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.login;

describe('Profile', () => {
  test('Can get profile successfully using authorized token - positive test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });
  test('Can not get profile using unauthorized token - negative test cases ', async () => {
    const response = await getProfile('xxx', body.default);
    expect(response.status).toEqual(401);
    expect(response.body).toMatchSchema(profileSchema.invalidToken);
    expect(response.body).toMatchSnapshot();
  });
  test('Can not get profile using empty token - negative test cases ', async () => {
    const response = await getProfile('', body.default);
    expect(response.status).toEqual(401);
    expect(response.body).toMatchSchema(profileSchema.invalidToken);
    expect(response.body).toMatchSnapshot();
  });
  test('Can not get profile using null token - negative test cases ', async () => {
    const response = await getProfile(null, body.default);
    expect(response.status).toEqual(401);
    expect(response.body).toMatchSchema(profileSchema.invalidToken);
    expect(response.body).toMatchSnapshot();
  });
});

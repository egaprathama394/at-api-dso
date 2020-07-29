import getMessage from '../endpoints/message';
import * as messageSchema from '../schemaValidator/message';
import getProfile from '../endpoints/profile';
import * as profileSchema from '../schemaValidator/profile';
import * as body from '../data/profile';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.login;

describe('Get Message Contact Us', () => {
  test('Can get all message at contact us successfully using authorized token - positive test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    const userId = await response.body.userAccount.email;
    const queryParam = {
      userId: `${userId}`,
    };
    const responseMessage = await getMessage(token, queryParam);
    expect(responseMessage.status).toEqual(200);
    expect(responseMessage.body).toMatchSchema(messageSchema.default);
    Reflect.deleteProperty(responseMessage.body.messages[0], 'modifiedTime');
    expect(responseMessage.body.messages[0]).toMatchSnapshot();
  });

  test('Can not get message using invalid userId - negative test cases', async () => {
    const queryParam = {
      userId: 'xxxyyy@gmail.com',
    };
    const responseMessage = await getMessage(token, queryParam);
    expect(responseMessage.status).toEqual(200);
    expect(responseMessage.body).toMatchSchema(messageSchema.default);
    expect(responseMessage.body).toMatchSnapshot();
  });

  test('Can not get message using empty userId - negative test cases', async () => {
    const queryParam = {
      userId: '',
    };
    const responseMessage = await getMessage(token, queryParam);
    expect(responseMessage.status).toEqual(400);
    expect(responseMessage.body).toMatchSchema(messageSchema.negativeRequest);
    expect(responseMessage.body).toMatchSnapshot();
  });

  test('Can not get message using null userId - negative test cases', async () => {
    const queryParam = {
      userId: null,
    };
    const responseMessage = await getMessage(token, queryParam);
    expect(responseMessage.status).toEqual(400);
    expect(responseMessage.body).toMatchSchema(messageSchema.negativeRequest);
    expect(responseMessage.body).toMatchSnapshot();
  });

  test('Can not get message without queryParam - negative test cases', async () => {
    const responseMessage = await getMessage(token);
    expect(responseMessage.status).toEqual(200);
    expect(responseMessage.body).toMatchSchema(messageSchema.default);
    expect(responseMessage.body).toMatchSnapshot();
  });
});

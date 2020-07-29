import getCategoryMessage from '../endpoints/categoryMessage';
import * as categoryMessageSchema from '../schemaValidator/categoryMessage';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.edit;

describe('Get Category Message Contact Us', () => {
  test('Can get all category message at contact us successfully using authorized token - positive test cases', async () => {
    const response = await getCategoryMessage(token);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(categoryMessageSchema.default);
    expect(response.body).toMatchSnapshot();
  });
  test('Can not get all category message at contact us using unauthorized token - negative test cases', async () => {
    const response = await getCategoryMessage('xxx');
    expect(response.status).toEqual(401);
    expect(response.body).toMatchSchema(categoryMessageSchema.negativeRequest);
    expect(response.body).toMatchSnapshot();
  });
  test('Can not get all category message at contact us using empty token - negative test cases', async () => {
    const response = await getCategoryMessage('');
    expect(response.status).toEqual(401);
    expect(response.body).toMatchSchema(categoryMessageSchema.negativeRequest);
    expect(response.body).toMatchSnapshot();
  });
});

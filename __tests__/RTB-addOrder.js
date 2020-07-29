import postAddOrder from '../endpoints/addOrder';
import * as addOrderSchema from '../schemaValidator/addOrder';
import * as body from '../data/RTB-addOrder';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.login;

describe('Request To Buy', () => {
  test('Can Request to Buy successfully using authorized token  - positive test cases', async () => {
    const response = await postAddOrder(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(addOrderSchema.default);
    Reflect.deleteProperty(response.body, 'orderNo');
    expect(response.body).toMatchSnapshot();
  });

  test('Can Request to Buy successfully using max chars input and authorized token  - positive test cases', async () => {
    const response = await postAddOrder(token, body.maxCharInput);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(addOrderSchema.default);
    Reflect.deleteProperty(response.body, 'orderNo');
    expect(response.body).toMatchSnapshot();
  });

  test('Can not Request to Buy successfully using max + 1 chars input and authorized token  - positive test cases', async () => {
    const response = await postAddOrder(token, body.negativeReq);
    expect(response.status).toEqual(500);
    expect(response.body).toMatchSchema(addOrderSchema.negativeReqSchema);
    expect(response.body).toMatchSnapshot();
  });

  test('Can not Request to Buy successfully using empty input and authorized token  - positive test cases', async () => {
    const response = await postAddOrder(token, body.emptyReqInput);
    expect(response.status).toEqual(400);
    expect(response.body).toMatchSchema(addOrderSchema.emptyReqInput);
    expect(response.body).toMatchSnapshot();
  });
});

import getVehicle from '../endpoints/myVehicle';
import * as myVehicleSchema from '../schemaValidator/myVehicle';
import * as body from '../data/myVehicle';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.login;

describe('Display My Vehicle', () => {
  test('Can get all vehicle successfully using authorized token - positive test cases', async () => {
    const response = await getVehicle(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(myVehicleSchema.default);
    expect(response.body.userVehicleList.length).toEqual(1);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });

  test('can not display data using vehicle brand not DAIHATSU - negative test cases', async () => {
    const response = await getVehicle(token, body.negativeRequest);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(myVehicleSchema.negativeRequestSchema);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });
});

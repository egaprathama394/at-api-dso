import getVehicle from '../endpoints/myVehicle';
import * as myVehicleSchema from '../schemaValidator/myVehicle';
import * as body from '../data/myVehicle';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.edit;

describe('Delete My Vehicle', () => {
  test('Can removed vehicle successfully using authorized token - positive test cases', async () => {
    const response = await getVehicle(token, body.addForDeleteMyVehicle);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(myVehicleSchema.AddMyVehicleSchema);
    expect(response.body.message).toEqual(`Add vehicle VIN:${body.addForDeleteMyVehicle.MyVehicle.VIN}, PoliceRegNo:${body.addForDeleteMyVehicle.MyVehicle.policeRegNo} is success`);
    const idVehicle = await response.body.id;
    body.deleteMyVehicle.myVehicle.id = idVehicle;
    const responseDelete = await getVehicle(token, body.deleteMyVehicle);
    expect(responseDelete.status).toEqual(200);
    expect(responseDelete.body).toMatchSchema(myVehicleSchema.deleteMyVehicleSchema);
    Reflect.deleteProperty(responseDelete.body, 'build');
    expect(responseDelete.body).toMatchSnapshot();
  });
  test('can not remove vehicle that already removed using authorized token - negative test case', async () => {
    const responseDelete = await getVehicle(token, body.deletenegativeRequest);
    expect(responseDelete.status).toEqual(200);
    expect(responseDelete.body).toMatchSchema(myVehicleSchema.negativeRequestSchema);
    Reflect.deleteProperty(responseDelete.body, 'build');
    expect(responseDelete.body).toMatchSnapshot();
  });
  test('can not remove my vehicle that does not exist using authorized token - negative test cases', async () => {
    const responseDelete = await getVehicle(token, body.deleteNotExistVehicle);
    expect(responseDelete.status).toEqual(200);
    expect(responseDelete.body).toMatchSchema(myVehicleSchema.negativeRequestSchema);
    Reflect.deleteProperty(responseDelete.body, 'build');
    expect(responseDelete.body).toMatchSnapshot();
  });
});

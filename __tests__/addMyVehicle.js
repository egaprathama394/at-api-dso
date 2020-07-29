import getVehicle from '../endpoints/myVehicle';
import * as myVehicleSchema from '../schemaValidator/myVehicle';
import * as body from '../data/myVehicle';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.edit;

describe('Add My Vehicle', () => {
  test('Can add vehicle successfully using authorized token - positive test cases', async () => {
    const response = await getVehicle(token, body.addMyVehicle);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(myVehicleSchema.AddMyVehicleSchema);
    expect(response.body.message).toEqual(`Add vehicle VIN:${body.addMyVehicle.MyVehicle.VIN}, PoliceRegNo:${body.addMyVehicle.MyVehicle.policeRegNo} is success`);
    const idVehicle = await response.body.id;
    const responseget = await getVehicle(token, body.default);
    const idVehicleUser = responseget.body.userVehicleList.find((element) => {
      const idElement = element.id;
      return idElement === idVehicle;
    });
    expect(idVehicleUser.id).toEqual(response.body.id);
  });
  test('Can add vehicle successfully using max length char on NoPol, vehicleName, and vehicleType - positive test cases', async () => {
    const response = await getVehicle(token, body.addMyVehicleMaxInput);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(myVehicleSchema.AddMyVehicleSchema);
    expect(response.body.message).toEqual(`Add vehicle VIN:${body.addMyVehicleMaxInput.MyVehicle.VIN}, PoliceRegNo:${body.addMyVehicleMaxInput.MyVehicle.policeRegNo} is success`);
    const idVehicle = await response.body.id;
    const responseget = await getVehicle(token, body.default);
    const idVehicleUser = responseget.body.userVehicleList.find((element) => {
      const idElement = element.id;
      return idElement === idVehicle;
    });
    expect(idVehicleUser.id).toEqual(response.body.id);
  });
  test('Can not add vehicle with VIN using max lenght + 1 char  - negative test cases', async () => {
    const response = await getVehicle(token, body.addMyVehiclePlus);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(myVehicleSchema.negativeRequestSchema);
    expect(response.body.message).toEqual('VIN should be less than 18 character');
  });
  test('Can not add vehicle with noPoliceReg that already exist - negative test cases', async () => {
    const response = await getVehicle(token, body.addMyVehicleNegative);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(myVehicleSchema.negativeRequestSchema);
    expect(response.body.message).toEqual('Vehicle is already exist');
  });
});

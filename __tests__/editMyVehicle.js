import getVehicle from '../endpoints/myVehicle';
import * as myVehicleSchema from '../schemaValidator/myVehicle';
import * as body from '../data/myVehicle';

const randomstring = require('randomstring');

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.edit;

const randomEditNopol = randomstring.generate({
  charset: 'numeric',
  length: '4',
});

describe('Edit My Vehicle', () => {
  test('Can edit No Police Registration my vehicle successfully using authorized token - positive test cases', async () => {
    const response = await getVehicle(token, body.addMyVehicle);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(myVehicleSchema.AddMyVehicleSchema);
    expect(response.body.message).toEqual(`Add vehicle VIN:${body.addMyVehicle.MyVehicle.VIN}, PoliceRegNo:${body.addMyVehicle.MyVehicle.policeRegNo} is success`);
    const idVehicle = await response.body.id;
    const responseget = await getVehicle(token, body.default);
    const idVehicleUser = await responseget.body.userVehicleList.find((element) => {
      const idElement = element.id;
      return idElement === idVehicle;
    });
    body.editMyVehicle.MyVehicle = await idVehicleUser;
    body.editMyVehicle.MyVehicle.policeRegNo = await `R${randomEditNopol}EDIT`;
    const responseEdit = await getVehicle(token, body.editMyVehicle);
    expect(responseEdit.status).toEqual(200);
    expect(responseEdit.body).toMatchSchema(myVehicleSchema.editMyVehicleSchema);
    expect(responseEdit.body.message).toEqual(`Edit vehicle VIN:${body.addMyVehicle.MyVehicle.VIN}, PoliceRegNo:${body.editMyVehicle.MyVehicle.policeRegNo} is success`);
    body.deleteMyVehicle.myVehicle.id = await idVehicleUser.id;
    const responseDelete = await getVehicle(token, body.deleteMyVehicle);
    expect(responseDelete.status).toEqual(200);
    expect(responseDelete.body).toMatchSchema(myVehicleSchema.deleteMyVehicleSchema);
    expect(responseDelete.body.message).toEqual(`Remove vehicle VIN:${body.addMyVehicle.MyVehicle.VIN}, PoliceRegNo:${body.editMyVehicle.MyVehicle.policeRegNo} is success`);
  });
  test('Can not edit No Police Registration my vehicle that No Police Registration already exist using authorized token - negative test cases', async () => {
    const response = await getVehicle(token, body.addMyVehicle);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(myVehicleSchema.AddMyVehicleSchema);
    expect(response.body.message).toEqual(`Add vehicle VIN:${body.addMyVehicle.MyVehicle.VIN}, PoliceRegNo:${body.addMyVehicle.MyVehicle.policeRegNo} is success`);
    const idVehicle = await response.body.id;
    const responseget = await getVehicle(token, body.default);
    const idVehicleUser = await responseget.body.userVehicleList.find((element) => {
      const idElement = element.id;
      return idElement === idVehicle;
    });
    body.editMyVehicle.MyVehicle = await idVehicleUser;
    body.editMyVehicle.MyVehicle.policeRegNo = await 'R3NNI';
    body.editMyVehicle.MyVehicle.VIN = await 'renni1234567890';
    const responseEdit = await getVehicle(token, body.editMyVehicle);
    expect(responseEdit.status).toEqual(200);
    expect(responseEdit.body).toMatchSchema(myVehicleSchema.editMyVehicleSchema);
    expect(responseEdit.body.message).toEqual('Vehicle is already exist');
  });
});

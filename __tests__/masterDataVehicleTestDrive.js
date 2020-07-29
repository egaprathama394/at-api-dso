/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import getMasterData from '../endpoints/masterData';
import * as masterDataSchema from '../schemaValidator/masterData';
import * as body from '../data/masterData';

describe('Master Data Vehicle Test Drive', () => {
  test('Can get master data Vehicle test drive successfully - positive test cases', async () => {
    const response = await getMasterData(body.VehicleTestDrive);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.vehicleTestDriveSchema);
    const vehicleTestDrive = await response.body.vehicleTestDrive;
    const result = vehicleTestDrive.filter(vehicleTestDrive => vehicleTestDrive.id != 0);
    expect(result.length).toEqual(15);
    expect(response.body).toMatchSnapshot();
  });
  test('Can get vehicle that eligible for test drive successfully - positive test cases', async () => {
    const response = await getMasterData(body.VehicleTestDrive);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.vehicleTestDriveSchema);
    const vehicleTestDrive = await response.body.vehicleTestDrive;
    const result = vehicleTestDrive.filter(vehicleTestDrive => vehicleTestDrive.isTestDrive == true && vehicleTestDrive.isActive == true && vehicleTestDrive.modelMaterialId != 0);
    expect(result.length).toEqual(6);
    expect(response.body).toMatchSnapshot();
  });
});

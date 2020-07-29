/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import getMasterData from '../endpoints/masterData';
import * as masterDataSchema from '../schemaValidator/masterData';
import * as body from '../data/masterData';

describe('Master Data Vehicle Brand', () => {
  test('Can get master data Vehicle Brand successfully - positive test cases', async () => {
    const response = await getMasterData(body.VehicleBrand);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.vehicleBrandSchema);
    const vehicleBrand = await response.body.vehicleBrand;
    const result = vehicleBrand.filter(vehicleBrand => vehicleBrand.isActive == true);
    expect(result.length).toEqual(23);
    expect(response.body).toMatchSnapshot();
  });
});

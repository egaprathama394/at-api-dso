/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import getMasterData from '../endpoints/masterData';
import * as masterDataSchema from '../schemaValidator/masterData';
import * as body from '../data/masterData';

describe('Master Data District', () => {
  test('Can get master data District successfully - positive test cases', async () => {
    const response = await getMasterData(body.district);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.districtSchema);
    const district = await response.body.district;
    const result = district.filter(district => district.isActive == true);
    expect(result.length).toEqual(516);
    expect(response.body).toMatchSnapshot();
  });
  test('Can get master data District that have regions successfully - positive test cases', async () => {
    const response = await getMasterData(body.district);
    expect(response.status).toEqual(200);
    const district = await response.body.district;
    const result = district.filter(district => district.isActive == true && district.regions != '');
    expect(result.length).toEqual(178);
    expect(result[0].regions).toMatchSchema(masterDataSchema.RegionsSchema);
  });
});

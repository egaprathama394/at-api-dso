/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import getMasterData from '../endpoints/masterData';
import * as masterDataSchema from '../schemaValidator/masterData';
import * as body from '../data/masterData';

describe('Master Data Province', () => {
  test('Can get master data Pronvince successfully - positive test cases', async () => {
    const response = await getMasterData(body.province);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.masterDataProvinceSchema);
    const province = await response.body.province;
    const result = province.filter(province => province.isActive == true);
    expect(result.length).toEqual(34);
    expect(response.body).toMatchSnapshot();
  });
});

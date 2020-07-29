/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import getMasterData from '../endpoints/masterData';
import * as masterDataSchema from '../schemaValidator/masterData';
import * as body from '../data/masterData';

describe('Master Data Region', () => {
  test('Can get master data Region successfully - positive test cases', async () => {
    const response = await getMasterData(body.region);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.masterDataRegionSchema);
    expect(response.body.region.length).toEqual(44);
    expect(response.body).toMatchSnapshot();
  });
});

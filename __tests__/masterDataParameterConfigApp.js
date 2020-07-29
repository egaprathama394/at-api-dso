/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import getMasterData from '../endpoints/masterData';
import * as masterDataSchema from '../schemaValidator/masterData';
import * as body from '../data/masterData';

describe('Master Data Vehicle Test Drive', () => {
  test('Can get master data Vehicle test drive successfully - positive test cases', async () => {
    const response = await getMasterData(body.parameterConfigApp);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.parameterConfigApplicationSchema);
    const paramConfigApp = await response.body.parameterConfigApplication;
    const result = paramConfigApp.filter(paramConfigApp => paramConfigApp.key == 'RatingLiveDate');
    expect(result).toMatchSnapshot();
  });
});

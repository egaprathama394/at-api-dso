/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import getMasterData from '../endpoints/masterData';
import * as masterDataSchema from '../schemaValidator/masterData';
import * as body from '../data/masterData';

describe('Master Data Holiday Calendar', () => {
  test('Can get master data Holiday Calendar successfully - positive test cases', async () => {
    const response = await getMasterData(body.holidayCalendar);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.holidayCalendarSchema);
    expect(response.body.holidayCalendar.length).toEqual(132);
    expect(response.body).toMatchSnapshot();
  });
});

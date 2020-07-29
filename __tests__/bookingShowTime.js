import getTime from '../endpoints/bookingShowTime';
import * as TimeSchema from '../schemaValidator/bookingShowTime';
import * as body from '../data/bookingShowTime';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.edit;

describe('Display Booking Show Time', () => {
  test('Can display booking show time successfully using authorized token - positive test cases', async () => {
    const response = await getTime(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(TimeSchema.default);
    expect(response.body).toMatchSnapshot();
  });
  test('Can not display booking show time with invalid input date  - negative test cases', async () => {
    const response = await getTime(token, body.negativeRequest);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(TimeSchema.default);
    expect(response.body).toMatchSnapshot();
  });
});

/* eslint-disable max-len */
import getProfile from '../endpoints/profile';
import * as profileSchema from '../schemaValidator/profile';
import * as body from '../data/profile';
import displayBookingService from '../endpoints/bookingService-Display';
import * as BookingServiceSchema from '../schemaValidator/bookingService';
import * as bodyBookingService from '../data/bookingService';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.edit;

describe('Display booking service', () => {
  test('Can display booking service successfully using authorized token - positive test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    bodyBookingService.displayBookingService.orderBy = await response.body.userAccount.email;
    const responseDisplay = await displayBookingService(token, bodyBookingService.displayBookingService);
    expect(responseDisplay.status).toEqual(200);
    expect(responseDisplay.body).toMatchSchema(BookingServiceSchema.displayBookingService);
    expect(responseDisplay.body).toMatchSnapshot();
  });

  test('Can not display booking service if order by are invalid - negative test case', async () => {
    bodyBookingService.displayBookingService.orderBy = await 'xxxyyy@yahoo.com';
    const responseDisplay = await displayBookingService(token, bodyBookingService.displayBookingService);
    expect(responseDisplay.status).toEqual(200);
    expect(responseDisplay.body).toMatchSchema(BookingServiceSchema.negativeRequest);
    expect(responseDisplay.body).toMatchSnapshot();
  });

  test('Can not display booking service if order by are empty - negative test case', async () => {
    bodyBookingService.displayBookingService.orderBy = await '';
    const responseDisplay = await displayBookingService(token, bodyBookingService.displayBookingService);
    expect(responseDisplay.status).toEqual(400);
    expect(responseDisplay.body).toMatchSchema(BookingServiceSchema.invalidRequest);
    expect(responseDisplay.body).toMatchSnapshot();
  });

  test('Can not display booking service if order by are empty - negative test case', async () => {
    bodyBookingService.displayBookingService.orderBy = await null;
    const responseDisplay = await displayBookingService(token, bodyBookingService.displayBookingService);
    expect(responseDisplay.status).toEqual(400);
    expect(responseDisplay.body).toMatchSchema(BookingServiceSchema.invalidRequest);
    expect(responseDisplay.body).toMatchSnapshot();
  });

  test('Can not display booking service invalid data request - negative test case', async () => {
    const responseDisplay = await displayBookingService(token, bodyBookingService.invalidDisplayBookingService);
    expect(responseDisplay.status).toEqual(400);
    expect(responseDisplay.body).toMatchSchema(BookingServiceSchema.invalidRequest);
    expect(responseDisplay.body).toMatchSnapshot();
  });
});

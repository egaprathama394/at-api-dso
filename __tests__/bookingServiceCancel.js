/* eslint-disable max-len */
import getProfile from '../endpoints/profile';
import * as profileSchema from '../schemaValidator/profile';
import * as body from '../data/profile';
import submitBookingService from '../endpoints/bookingService-Submit';
import * as BookingServiceSchema from '../schemaValidator/bookingService';
import * as bodyBookingService from '../data/bookingService';
import cancelBookingService from '../endpoints/bookingService-cancel';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.login;

describe('Cancel booking service', () => {
  test('Can cancel booking service successfully using authorized token - positive test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    const fullName = await response.body.userAccount.firstName.concat(' ', response.body.userAccount.lastName);
    bodyBookingService.inputDataForCancel.fullName = await fullName;
    bodyBookingService.inputDataForCancel.phoneNo = await response.body.userAccount.phoneNo;
    const responseSubmit = await submitBookingService(token, bodyBookingService.inputDataForCancel);
    expect(responseSubmit.status).toEqual(200);
    expect(responseSubmit.body).toMatchSchema(BookingServiceSchema);
    expect(responseSubmit.body.message).toEqual('Booking Service Reservation has been submitted');
    bodyBookingService.cancelRequest.orderNo = await responseSubmit.body.orderNo;
    const responseCancel = await cancelBookingService(token, bodyBookingService.cancelRequest);
    expect(responseCancel.status).toEqual(200);
    expect(responseCancel.body).toMatchSchema(BookingServiceSchema);
    expect(responseCancel.body.message).toEqual(`Booking dengan nomor ${responseSubmit.body.orderNo} telah dibatalkan`);
  });

  test('can not cancel booking service if orderNo not valid - negative test cases', async () => {
    bodyBookingService.cancelRequest.orderNo = await 'xxx';
    const responseCancel = await cancelBookingService(token, bodyBookingService.cancelRequest);
    expect(responseCancel.status).toEqual(200);
    expect(responseCancel.body).toMatchSchema(BookingServiceSchema);
    expect(responseCancel.body).toMatchSnapshot();
  });
});

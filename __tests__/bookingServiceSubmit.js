/* eslint-disable max-len */
import getProfile from '../endpoints/profile';
import * as profileSchema from '../schemaValidator/profile';
import * as body from '../data/profile';
import submitBookingService from '../endpoints/bookingService-Submit';
import * as BookingServiceSchema from '../schemaValidator/bookingService';
import * as bodyBookingService from '../data/bookingService';
import cancelBookingService from '../endpoints/bookingService-cancel';
import displayBookingService from '../endpoints/bookingService-Display';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.login;

const concat = require('concat');

describe('Submit booking service', () => {
  test('Can submit booking service successfully using authorized token - positive test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    const fullName = await response.body.userAccount.firstName.concat(' ', response.body.userAccount.lastName);
    bodyBookingService.default.fullName = await fullName;
    bodyBookingService.default.phoneNo = await response.body.userAccount.phoneNo;
    const responseSubmit = await submitBookingService(token, bodyBookingService.default);
    expect(responseSubmit.status).toEqual(200);
    expect(responseSubmit.body).toMatchSchema(BookingServiceSchema);
    expect(responseSubmit.body.message).toEqual('Booking Service Reservation has been submitted');
    const orderSubmit = await responseSubmit.body.orderNo;
    bodyBookingService.cancelRequest.orderNo = await orderSubmit;
    bodyBookingService.displayBookingService.orderBy = await response.body.userAccount.email;
    const responseDisplay = await displayBookingService(token, bodyBookingService.displayBookingService);
    const orderGet = responseDisplay.body.bookingOrderList.find((element) => {
      const orderDisplay = element.orderNo;
      return orderDisplay === orderSubmit;
    });
    expect(orderGet.orderNo).toEqual(responseSubmit.body.orderNo);
    const responseCancel = await cancelBookingService(token, bodyBookingService.cancelRequest);
    expect(responseCancel.status).toEqual(200);
    expect(responseCancel.body).toMatchSchema(BookingServiceSchema);
    expect(responseCancel.body.message).toEqual(`Booking dengan nomor ${responseSubmit.body.orderNo} telah dibatalkan`);
  });

  test('Can submit booking service successfully using max length in full name and phone number - positive test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    const responseSubmit = await submitBookingService(token, bodyBookingService.maxInput);
    expect(responseSubmit.status).toEqual(200);
    expect(responseSubmit.body).toMatchSchema(BookingServiceSchema);
    expect(responseSubmit.body.message).toEqual('Booking Service Reservation has been submitted');
    const orderSubmit = await responseSubmit.body.orderNo;
    bodyBookingService.cancelRequest.orderNo = await orderSubmit;
    bodyBookingService.displayBookingService.orderBy = await response.body.userAccount.email;
    const responseDisplay = await displayBookingService(token, bodyBookingService.displayBookingService);
    const orderGet = responseDisplay.body.bookingOrderList.find((element) => {
      const orderDisplay = element.orderNo;
      return orderDisplay === orderSubmit;
    });
    expect(orderGet.orderNo).toEqual(responseSubmit.body.orderNo);
    const responseCancel = await cancelBookingService(token, bodyBookingService.cancelRequest);
    expect(responseCancel.status).toEqual(200);
    expect(responseCancel.body).toMatchSchema(BookingServiceSchema);
    expect(responseCancel.body.message).toEqual(`Booking dengan nomor ${responseSubmit.body.orderNo} telah dibatalkan`);
  });

  test('Can not submit booking service successfully using max length + 1 char at full name and phone number - negative test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    const responseSubmit = await submitBookingService(token, bodyBookingService.negativeRequest);
    expect(responseSubmit.status).toEqual(500);
    expect(responseSubmit.body).toMatchSchema(BookingServiceSchema);
    expect(responseSubmit.body.message).toEqual("An error has occurred. There's problem in database, please try again later.");
    const orderSubmit = await responseSubmit.body.orderNo;
    bodyBookingService.cancelRequest.orderNo = await orderSubmit;
    bodyBookingService.displayBookingService.orderBy = await response.body.userAccount.email;
    const responseDisplay = await displayBookingService(token, bodyBookingService.displayBookingService);
    const orderGet = responseDisplay.body.bookingOrderList.find((element) => {
      const orderDisplay = element.orderNo;
      return orderDisplay === orderSubmit;
    });
    expect(orderGet).toEqual(undefined);
    const responseCancel = await cancelBookingService(token, bodyBookingService.cancelRequest);
    expect(responseCancel.status).toEqual(400);
  });
});

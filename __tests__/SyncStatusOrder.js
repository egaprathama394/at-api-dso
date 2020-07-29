/* eslint-disable max-len */
import getProfile from '../endpoints/profile';
import * as profileSchema from '../schemaValidator/profile';
import * as body from '../data/profile';
import submitBookingService from '../endpoints/bookingService-Submit';
import * as BookingServiceSchema from '../schemaValidator/bookingService';
import * as bodyBookingService from '../data/bookingService';
import displayBookingService from '../endpoints/bookingService-Display';
import * as bodySyncStatus from '../data/SyncStatusOrder';
import * as SyncStatusSchema from '../schemaValidator/SyncStatusOrder';
import SyncStatusOrder from '../endpoints/SyncStatusOrder';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.contactUs;

const concat = require('concat');

describe('Sync Status Order Booking', () => {
  test('Can sync status booking service order successfully using authorized token - positive test cases', async () => {
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
    bodySyncStatus.default.bookingOrderNo = await orderGet.orderNo;
    const responseSyncStatus = await SyncStatusOrder(bodySyncStatus.default);
    expect(responseSyncStatus.status).toEqual(200);
    expect(responseSyncStatus.body).toMatchSchema(SyncStatusSchema.default);
    expect(responseSyncStatus.body).toMatchSnapshot();
  });
});

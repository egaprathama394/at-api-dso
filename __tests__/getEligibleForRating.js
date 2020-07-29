/* eslint-disable max-len */
import getProfile from '../endpoints/profile';
import * as profileSchema from '../schemaValidator/profile';
import * as body from '../data/profile';
import submitBookingService from '../endpoints/bookingService-Submit';
import * as BookingServiceSchema from '../schemaValidator/bookingService';
import * as bodyBookingService from '../data/bookingService';
import displayBookingService from '../endpoints/bookingService-Display';
import { runningQuery } from '../seedData/queryUpdateStatus';
import getEligibleForRating from '../endpoints/getEligibleForRating';
import * as getEligibleForRatingSchema from '../schemaValidator/getEligibleForRating';


const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.contactUs;

describe('Get Eligible For Rating Order Booking', () => {
  test('Can get counted order eligible for rating service order successfully using authorized token - positive test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    const fullName = response.body.userAccount.firstName.concat(' ', response.body.userAccount.lastName);
    bodyBookingService.default.fullName = fullName;
    bodyBookingService.default.phoneNo = response.body.userAccount.phoneNo;
    const responseSubmit = await submitBookingService(token, bodyBookingService.default);
    expect(responseSubmit.status).toEqual(200);
    expect(responseSubmit.body).toMatchSchema(BookingServiceSchema);
    expect(responseSubmit.body.message).toEqual('Booking Service Reservation has been submitted');
    const orderSubmit = responseSubmit.body.orderNo;
    bodyBookingService.cancelRequest.orderNo = orderSubmit;
    bodyBookingService.displayBookingService.orderBy = response.body.userAccount.email;
    const responseDisplay = await displayBookingService(token, bodyBookingService.displayBookingService);
    const orderGet = responseDisplay.body.bookingOrderList.find((element) => {
      const orderDisplay = element.orderNo;
      return orderDisplay === orderSubmit;
    });
    expect(orderGet.orderNo).toEqual(responseSubmit.body.orderNo);
    const OrderNo = orderGet.orderNo;
    await runningQuery(OrderNo);
    const OrderBy = response.body.userAccount.email;
    const queryParam = {
      OrderBy: `${OrderBy}`,
    };
    const responseCounted = await getEligibleForRating(token, queryParam);
    expect(responseCounted.status).toEqual(200);
    expect(responseCounted.body).toMatchSchema(getEligibleForRatingSchema.default);
    expect(responseCounted.body).toMatchSnapshot();
  });

  test('Can not get counted order eligible for rating service order using empty query param  - negative test cases', async () => {
    const queryParam = {
      OrderBy: '',
    };
    const responseCounted = await getEligibleForRating(token, queryParam);
    expect(responseCounted.status).toEqual(400);
    expect(responseCounted.body).toMatchSchema(getEligibleForRatingSchema.negativeRequest);
    expect(responseCounted.body).toMatchSnapshot();
  });

  test('Can not get counted order eligible for rating service order using invalid query param  - negative test cases', async () => {
    const queryParam = {
      OrderBy: 'xxxyyy@gmail.com',
    };
    const responseCounted = await getEligibleForRating(token, queryParam);
    expect(responseCounted.status).toEqual(404);
    expect(responseCounted.body).toMatchSnapshot();
  });
});

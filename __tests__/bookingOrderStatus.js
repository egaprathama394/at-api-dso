/* eslint-disable max-len */
import bookingOrderStatus from '../endpoints/bookingOrderStatus';
import * as bodyBookingOrderStatus from '../data/bookingOrderStatus';
import * as bookingOrderStatusSchema from '../schemaValidator/bookingOrderStatus';

const { matchers } = require('jest-json-schema');

expect.extend(matchers);

describe('Update Booking Order Status', () => {
  test('Can update booking order status successfully using authorized token - positive test cases', async () => {
    const responseUpdateStatus = await bookingOrderStatus(bodyBookingOrderStatus.default);
    expect(responseUpdateStatus.status).toEqual(200);
    expect(responseUpdateStatus.body).toMatchSchema(bookingOrderStatusSchema.default);
    expect(responseUpdateStatus.body.message).toEqual('Order status successfully updated');
  });
});

/* eslint-disable import/prefer-default-export */
import conDB from './connectDB';

export const runningQuery = async (OrderNo) => {
  const query = `UPDATE AstraServiceDevelopment.MobileService.ServiceOrder SET OrderStatus= 10 , ActualFinishTime='2019-11-20 00:00:00' WHERE OrderNo = '${OrderNo}'`;
  await conDB(query);
};

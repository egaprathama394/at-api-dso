/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import getMasterData from '../endpoints/masterData';
import * as masterDataSchema from '../schemaValidator/masterData';
import * as body from '../data/masterData';

describe('Master Data Job service company', () => {
  test('Can get master data job service company successfully - positive test cases', async () => {
    const response = await getMasterData(body.JobServiceCompany);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.jobServiceCompanySchema);
    const JobServiceCompany = await response.body.jobServiceCompany;
    const result = JobServiceCompany.filter(JobServiceCompany => JobServiceCompany.isActive == true);
    expect(result.length).toEqual(181);
    expect(response.body).toMatchSnapshot();
  });

  body.loopVehicleType.forEach((element) => {
    test(`Can get master data job service company successfully base on spesific vehicleType ${element.vehicleType} - positive test cases`, async () => {
      const response = await getMasterData(body.JobServiceCompany);
      expect(response.status).toEqual(200);
      expect(response.body).toMatchSchema(masterDataSchema.jobServiceCompanySchema);
      const JobServiceCompany = await response.body.jobServiceCompany;
      const result = JobServiceCompany.filter(JobServiceCompany => JobServiceCompany.vehicleType == `${element.vehicleType}`);
      expect(result.length).toMatchSnapshot();
    });
  });
});

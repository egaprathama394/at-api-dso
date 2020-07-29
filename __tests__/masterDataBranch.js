/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import getMasterData from '../endpoints/masterData';
import * as masterDataSchema from '../schemaValidator/masterData';
import * as body from '../data/masterData';

describe('Master Data Branch', () => {
  test('Can get master data Branch successfully - positive test cases', async () => {
    const response = await getMasterData(body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.default);
    expect(response.body.branch.length).toEqual(98);
    expect(response.body).toMatchSnapshot();
  });
  test('Can get master data Branch where BranchType Code = V successfully - positive test cases', async () => {
    const response = await getMasterData(body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.default);
    const branch = await response.body.branch;
    const result = branch.filter(branch => branch.branchTypeCode == 'V');
    expect(result.length).toEqual(19);
  });
  test('Can get master data Branch where BranchType Code = DV successfully - positive test cases', async () => {
    const response = await getMasterData(body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.default);
    const branch = await response.body.branch;
    const result = branch.filter(branch => branch.branchTypeCode == 'DV');
    expect(result.length).toEqual(14);
  });
  test('Can get master data Branch where BranchType Code = VSP successfully - positive test cases', async () => {
    const response = await getMasterData(body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.default);
    const branch = await response.body.branch;
    const result = branch.filter(branch => branch.branchTypeCode == 'VSP');
    expect(result.length).toEqual(65);
  });
  test('Can get master data Branch for page booking service where BranchType Code = VSP and hasBookingStall = True successfully - positive test cases', async () => {
    const response = await getMasterData(body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.default);
    const branch = await response.body.branch;
    const result = branch.filter(branch => branch.branchTypeCode == 'VSP' && branch.hasBookingStall == true);
    expect(result.length).toEqual(5);
  });
  test('Can get master data Branch for page Outlet where isActive = True successfully - positive test cases', async () => {
    const response = await getMasterData(body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(masterDataSchema.default);
    const branch = await response.body.branch;
    const result = branch.filter(branch => branch.isActive == true);
    expect(result.length).toEqual(78);
  });
});

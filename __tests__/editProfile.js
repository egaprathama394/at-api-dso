import getProfile from '../endpoints/profile';
import * as profileSchema from '../schemaValidator/profile';
import * as body from '../data/profile';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.edit;

describe('Edit Profile', () => {
  test('Can edit profile successfully using authorized token - positive test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    body.editProfile.userAccount = await response.body.userAccount;
    body.editProfile.userAccount.firstName = await 'Nama Depan Edit';
    body.editProfile.userAccount.lastName = await 'Nama Belakang Edit';
    body.editProfile.userAccount.phoneNo = await '08100000000';
    body.editProfile.userAccount.birthdate = await '1900-01-01 00:00:00';
    body.editProfile.userAccount.address = await 'Alamat Edit';
    body.editProfile.userAccount.provinceCode = await '3173';
    body.editProfile.userAccount.districtCode = await '3100';
    const responseEdit = await getProfile(token, body.editProfile);
    expect(responseEdit.status).toEqual(200);
    expect(responseEdit.body).toMatchSchema(profileSchema.editProfileSchema);
    expect(responseEdit.body.message).toEqual(`Edit profile for ${body.editProfile.userAccount.email} is success`);
    body.editProfile.userAccount.firstName = await 'Renni';
    body.editProfile.userAccount.lastName = await 'Nugraheni';
    body.editProfile.userAccount.phoneNo = await '081456155090';
    body.editProfile.userAccount.birthdate = await '1993-11-08 00:00:00';
    body.editProfile.userAccount.address = await 'Alamat Asli';
    body.editProfile.userAccount.provinceCode = await '3100';
    body.editProfile.userAccount.districtCode = await '3173';
    const responseReset = await getProfile(token, body.editProfile);
    expect(responseReset.status).toEqual(200);
    expect(responseReset.body).toMatchSchema(profileSchema.editProfileSchema);
    expect(responseReset.body.message).toEqual(`Edit profile for ${body.editProfile.userAccount.email} is success`);
    const responseGet = await getProfile(token, body.default);
    expect(responseGet.status).toEqual(200);
    expect(responseGet.body).toMatchSchema(profileSchema.default);
    Reflect.deleteProperty(responseGet.body, 'build');
    expect(responseGet.body).toMatchSnapshot();
  });
});

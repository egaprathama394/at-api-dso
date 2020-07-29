const randomstring = require('randomstring');

const fullNameMax = randomstring.generate({
  charset: 'string',
  length: '110',
});

const noPhoneMax = randomstring.generate({
  charset: 'numeric',
  length: '17',
});

const fullNameMax2 = randomstring.generate({
  charset: 'string',
  length: '111',
});

const noPhoneMax2 = randomstring.generate({
  charset: 'numeric',
  length: '18',
});

export default {
  address: '',
  bookingDateTime: '2019-11-27 10:27:50',
  branchCode: 'D004',
  fullName: 'tester dso',
  materialDescription: 'TERIOS',
  notes: '',
  orderType: 3,
  phoneNo: '81456155090',
  vehicleType: 'TERIOS',
  AccountType: '1',
  Action: '',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

export const maxCharInput = {
  address: '',
  bookingDateTime: '2019-11-27 10:27:50',
  branchCode: 'D004',
  fullName: `${fullNameMax}`,
  materialDescription: 'TERIOS',
  notes: '',
  orderType: 3,
  phoneNo: `081${noPhoneMax}`,
  vehicleType: 'TERIOS',
  AccountType: '1',
  Action: '',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

export const negativeReq = {
  address: '',
  bookingDateTime: '2019-11-27 10:27:50',
  branchCode: 'D004',
  fullName: `${fullNameMax2}`,
  materialDescription: 'TERIOS',
  notes: '',
  orderType: 3,
  phoneNo: `081${noPhoneMax2}`,
  vehicleType: 'TERIOS',
  AccountType: '1',
  Action: '',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

export const emptyReqInput = {
  address: '',
  bookingDateTime: '',
  branchCode: '',
  fullName: '',
  materialDescription: '',
  notes: '',
  orderType: '',
  phoneNo: '',
  vehicleType: '',
  AccountType: '',
  Action: '',
  ApplicationName: '',
  DeviceType: '',
  OperatingSystem: '',
  UserVersion: '',
};

const randomstring = require('randomstring');

const fullNameMax = randomstring.generate({
  charset: 'string',
  length: '110',
});

const noPhoneMax = randomstring.generate({
  charset: 'numeric',
  length: '17',
});

const noPhoneRandom = randomstring.generate({
  charset: 'numeric',
  length: '18',
});

const fullNameRandom = randomstring.generate({
  charset: 'string',
  length: '111',
});

const randomNopol1 = randomstring.generate({
  charset: 'numeric',
  length: '4',
});

const randomNopol2 = randomstring.generate({
  charset: 'numeric',
  length: '4',
});

const randomNopol3 = randomstring.generate({
  charset: 'numeric',
  length: '4',
});

const randomNopol4 = randomstring.generate({
  charset: 'numeric',
  length: '4',
});

export default {
  address: '',
  bookingDateTime: '2020-04-01 10:00:00',
  branchCode: 'D004',
  city: 'DKI JAKARTA',
  fullName: '',
  jobService: [
    {
      actual: 0.0,
      id: 0,
      isActive: false,
      isPickedJob: false,
      jobCode: '10000',
      jobDescription: 'CHECKING 10.000',
      price: 0,
      rate: 0,
    },
  ],
  notes: 'Data submit booking service',
  orderEndTime: '2020-04-01 15:00:00',
  orderStartTime: '2020-04-01 10:00:00',
  phoneNo: '',
  policeRegNo: `AB${randomNopol1}XYZ`,
  vehicleType: 'LUXIO',
  vin: '',
  year: 2014,
  AccountType: '1',
  Action: '',
  ApplicationName: '8EA6E777-AA05-4CAF-9F54-5B6A106760E2',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

// data for submit booking service max lenght

export const maxInput = {
  address: '',
  bookingDateTime: '2020-04-01 10:00:00',
  branchCode: 'D004',
  city: 'DKI JAKARTA',
  fullName: `${fullNameMax}`,
  jobService: [
    {
      actual: 0.0,
      id: 0,
      isActive: false,
      isPickedJob: false,
      jobCode: '10000',
      jobDescription: 'CHECKING 10.000',
      price: 0,
      rate: 0,
    },
  ],
  notes: 'Data booking service dengan inputan max char',
  orderEndTime: '2020-04-01 15:00:00',
  orderStartTime: '2020-04-01 10:00:00',
  phoneNo: `081${noPhoneMax}`,
  policeRegNo: `AC${randomNopol2}XYZ`,
  vehicleType: 'LUXIO',
  vin: '',
  year: 2014,
  AccountType: '1',
  Action: '',
  ApplicationName: '8EA6E777-AA05-4CAF-9F54-5B6A106760E2',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

// data for submit booking service max lenght + 1

export const negativeRequest = {
  address: '',
  bookingDateTime: '2020-04-01 10:00:00',
  branchCode: 'D004',
  city: 'DKI JAKARTA',
  fullName: `${fullNameRandom}`,
  jobService: [
    {
      actual: 0.0,
      id: 0,
      isActive: false,
      isPickedJob: false,
      jobCode: '10000',
      jobDescription: 'CHECKING 10.000',
      price: 0,
      rate: 0,
    },
  ],
  notes: 'Data submit booking service dengan inputan max + 1 char',
  orderEndTime: '2020-04-01 15:00:00',
  orderStartTime: '2020-04-01 10:00:00',
  phoneNo: `081${noPhoneRandom}`,
  policeRegNo: `AD${randomNopol3}XYZ`,
  vehicleType: 'LUXIO',
  vin: '',
  year: 2014,
  AccountType: '1',
  Action: '',
  ApplicationName: '8EA6E777-AA05-4CAF-9F54-5B6A106760E2',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

// data for cancel booking service

export const inputDataForCancel = {
  address: '',
  bookingDateTime: '2020-04-01 10:00:00',
  branchCode: 'D004',
  city: 'DKI JAKARTA',
  fullName: '',
  jobService: [
    {
      actual: 0.0,
      id: 0,
      isActive: false,
      isPickedJob: false,
      jobCode: '10000',
      jobDescription: 'CHECKING 10.000',
      price: 0,
      rate: 0,
    },
  ],
  notes: 'Data untuk cancel booking service',
  orderEndTime: '2020-04-01 15:00:00',
  orderStartTime: '2020-04-01 10:00:00',
  phoneNo: '',
  policeRegNo: `AA${randomNopol4}XYZ`,
  vehicleType: 'LUXIO',
  vin: '',
  year: 2014,
  AccountType: '1',
  Action: '',
  ApplicationName: '8EA6E777-AA05-4CAF-9F54-5B6A106760E2',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

export const cancelRequest = {
  orderNo: '',
  action: '',
  userVersion: '1.0.0',
  deviceType: '0',
  operatingSystem: '0',
  accountType: '1',
};

// data for display booking service

export const displayBookingService = {
  isWalkIn: false,
  orderBy: '',
  AccountType: '1',
  Action: '',
  ApplicationName: '8EA6E777-AA05-4CAF-9F54-5B6A106760E2',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

export const invalidDisplayBookingService = {
  isWalkIn: '',
  orderBy: '',
  AccountType: '',
  Action: '',
  ApplicationName: '',
  DeviceType: '',
  OperatingSystem: '',
  UserVersion: '',
};

const randomstring = require('randomstring');

const randomNopol = randomstring.generate({
  charset: 'numeric',
  length: '4',
});

const randomVin = randomstring.generate({
  charset: 'string',
  length: '17',
});

const randomMaxVin = randomstring.generate({
  charset: 'string',
  length: '18',
});

const randomPlusVin = randomstring.generate({
  charset: 'string',
  length: '19',
});

const randomNopolPlus = randomstring.generate({
  charset: 'string',
  length: '8',
});

const randomNopolMax = randomstring.generate({
  charset: 'string',
  length: '7',
});
// Data for display all My Vehicle

export default {
  action: 'DisplayAll',
  vehicleBrand: 'DAIHATSU',
  applicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  userVersion: '1.0.0',
  deviceType: '0',
  operatingSystem: '0',
  accountType: '1',
};

export const negativeRequest = {
  action: 'DisplayAll',
  vehicleBrand: 'xxxx',
  applicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  userVersion: '1.0.0',
  deviceType: '0',
  operatingSystem: '0',
  accountType: '1',
};

// Data for add my vehicle

export const addMyVehicle = {
  MyVehicle: {
    id: 0,
    isConfirmed: false,
    isDefault: false,
    policeRegNo: `B${randomNopol}TEST`,
    stnkDate: '2019-10-22 11:06:40',
    vehicleBrand: 'DAIHATSU',
    vehicleName: 'LUXIO',
    vehicleType: 'LUXIO',
    year: 2014,
    VIN: `${randomVin}`,
  },
  VehicleBrand: 'Daihatsu',
  AccountType: '1',
  Action: 'Add',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

export const addMyVehicleNegative = {
  MyVehicle: {
    id: 0,
    isConfirmed: false,
    isDefault: false,
    policeRegNo: 'B000COR',
    stnkDate: '2019-10-22 11:06:40',
    vehicleBrand: 'DAIHATSU',
    vehicleName: 'LUXIO',
    vehicleType: 'LUXIO',
    year: 2014,
  },
  VehicleBrand: 'Daihatsu',
  AccountType: '1',
  Action: 'Add',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

export const addMyVehicleMaxInput = {
  MyVehicle: {
    id: 0,
    isConfirmed: false,
    isDefault: false,
    policeRegNo: `B0000${randomNopolMax}`,
    stnkDate: '2019-10-22 11:06:40',
    vehicleBrand: 'DAIHATSU',
    vehicleName: 'AYLA',
    vehicleType: 'AYLA',
    year: 2014,
    VIN: `${randomMaxVin}`,
  },
  VehicleBrand: 'Daihatsu',
  AccountType: '1',
  Action: 'Add',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

// Data for add my Vehicle using max lenght + 1 char at nopol and VIN
export const addMyVehiclePlus = {
  MyVehicle: {
    id: 0,
    isConfirmed: false,
    isDefault: false,
    policeRegNo: `B0000${randomNopolPlus}`,
    stnkDate: '2019-10-22 11:06:40',
    vehicleBrand: 'DAIHATSU',
    vehicleName: 'AYLA',
    vehicleType: 'AYLA',
    year: 2014,
    VIN: `${randomPlusVin}`,
  },
  VehicleBrand: 'Daihatsu',
  AccountType: '1',
  Action: 'Add',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

// Data fo delete my vehicle

export const deleteMyVehicle = {
  action: 'Remove',
  applicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  userVersion: '1.0',
  deviceType: '0',
  operatingSystem: '0',
  accountType: '1',
  myVehicle: {
    id: '',
  },
};

export const deletenegativeRequest = {
  action: 'Remove',
  applicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  userVersion: '1.0',
  deviceType: '0',
  operatingSystem: '0',
  accountType: '1',
  myVehicle: {
    id: '7777',
  },
};

export const deleteNotExistVehicle = {
  action: 'Remove',
  applicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  userVersion: '1.0',
  deviceType: '0',
  operatingSystem: '0',
  accountType: '1',
  myVehicle: {
    id: '0001',
  },
};

// Data for edit my vehicle

export const editMyVehicle = {
  MyVehicle: '',
  VehicleBrand: 'Daihatsu',
  AccountType: '1',
  Action: 'Edit',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

// add my vehicle for delete test

export const addForDeleteMyVehicle = {
  MyVehicle: {
    id: 0,
    isConfirmed: false,
    isDefault: false,
    policeRegNo: 'B5555TEST',
    stnkDate: '2019-10-22 11:06:40',
    vehicleBrand: 'DAIHATSU',
    vehicleName: 'LUXIO',
    vehicleType: 'LUXIO',
    year: 2014,
    VIN: '1234567890abcdefg',
  },
  VehicleBrand: 'Daihatsu',
  AccountType: '1',
  Action: 'Add',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

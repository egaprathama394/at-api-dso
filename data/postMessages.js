const randomstring = require('randomstring');

const randomTitleMessages = randomstring.generate({
  charset: 'numeric',
  length: '4',
});

const randomMessages = randomstring.generate({
  charset: 'numeric',
  length: '4',
});

export default {
  message: {
    address: '',
    branchCode: '',
    branchName: '',
    categoryId: 143,
    categoryName: 'booking service',
    companyCode: '0003',
    createdBy: '',
    createdTime: '2018-10-05 12:55:20',
    id: 0,
    isClientDeleted: false,
    isClosed: false,
    isDealerDeleted: false,
    isRead: false,
    lastPostId: 0,
    message: 'coba post messages from automation test ',
    message1: 'coba post message for automation test ',
    messageParentId: 0,
    name: '',
    phone: '',
    sendFrom: '',
    title: `ini title messages for automation test ${randomTitleMessages}`,
    totalMessage: 0,
    userId: '',
  },
  AccountType: '1',
  Action: '',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

// data for post reply using one messageParentId

export const postReplyMessage = {
  message: {
    address: '',
    branchCode: '',
    branchName: '',
    categoryId: 143,
    categoryName: 'booking service',
    companyCode: '0003',
    createdBy: '',
    createdTime: '2018-10-05 12:55:20',
    id: 0,
    isClientDeleted: false,
    isClosed: false,
    isDealerDeleted: false,
    isRead: false,
    lastPostId: 0,
    message: `coba post messages from automation test ${randomMessages} `,
    message1: `coba post messages from automation test ${randomMessages} `,
    messageParentId: '',
    name: '',
    phone: '',
    sendFrom: '',
    title: '',
    totalMessage: 0,
    userId: '',
  },
  AccountType: '1',
  Action: '',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

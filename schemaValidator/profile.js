export default {
  properties: {
    userAccount: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        phoneNo: {
          type: 'string',
        },
        address: {
          type: 'string',
        },
        provinceCode: {
          type: 'string',
        },
        districtCode: {
          type: 'string',
        },
        subdistrictCode: {
          type: 'string',
        },
        villageCode: {
          type: 'string',
        },
        zipCode: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
        },
        gender: {
          type: 'integer',
        },
        religion: {
          type: 'integer',
        },
        hobby: {
          type: 'string',
        },
        location: {
          type: 'string',
        },
        identificationType: {
          type: 'string',
        },
        identificationNumber: {
          type: 'string',
        },
        identificationDate: {
          type: 'string',
        },
        urlPhotoProfile: {
          type: 'string',
        },
        occupation: {
          type: 'string',
        },
        defaultPaymentMethod: {
          type: 'integer',
        },
        referralCode: {
          type: 'string',
        },
      },
      required: [
        'email',
        'firstName',
        'lastName',
        'phoneNo',
        'address',
        'provinceCode',
        'districtCode',
        'subdistrictCode',
        'villageCode',
        'zipCode',
        'birthdate',
        'gender',
        'religion',
        'hobby',
        'location',
        'identificationType',
        'identificationNumber',
        'identificationDate',
        'urlPhotoProfile',
        'occupation',
        'defaultPaymentMethod',
        'referralCode',
      ],
    },
    acknowledge: {
      type: 'integer',
    },
    message: {
      type: 'string',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
    errorCode: {
      type: 'number',
    },

  },
  required: [
    'userAccount',
    'acknowledge',
    'message',
    'version',
    'build',
  ],
  additionalProperties: false,
};

export const invalidToken = {
  properties: {
    error: {
      type: 'string',
    },
    error_description: {
      type: 'string',
    },
  },
  required: [
    'error',
    'error_description',
  ],
  additionalProperties: false,

};

export const editProfileSchema = {
  properties: {
    acknowledge: {
      type: 'number',
    },
    message: {
      type: 'string',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
    errorCode: {
      type: 'number',
    },
  },
  required: [
    'acknowledge',
    'message',
    'version',
    'build',
    'errorCode',
  ],
  additionalProperties: false,
};
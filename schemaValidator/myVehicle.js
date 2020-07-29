export default {
  type: 'object',
  required: [
    'userVehicleList',
    'acknowledge',
    'version',
    'build',
    'errorCode',
  ],
  properties: {
    userVehicleList: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'vehicleType',
          'policeRegNo',
          'engineNo',
          'vin',
          'year',
          'stnkDate',
          'vehicleName',
          'vehicleBrand',
          'urlPhoto',
          'isDefault',
          'isConfirmed',
          'printFakturDate',
          'lastServiceDate',
        ],
        properties: {
          id: {
            type: 'integer',
          },
          vehicleType: {
            type: 'string',
          },
          policeRegNo: {
            type: 'string',
          },
          engineNo: {
            type: 'string',
          },
          vin: {
            type: 'string',
          },
          year: {
            type: 'integer',
          },
          stnkDate: {
            type: 'string',
          },
          vehicleName: {
            type: 'string',
          },
          vehicleBrand: {
            type: 'string',
          },
          urlPhoto: {
            type: 'string',
          },
          isDefault: {
            type: 'boolean',
          },
          isConfirmed: {
            type: 'boolean',
          },
          printFakturDate: {
            type: 'string',
          },
          lastServiceDate: {
            type: 'string',
          },
        },
      },
    },
    acknowledge: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
    errorCode: {
      type: 'integer',
    },
  },
  additionalProperties: false,
};

export const negativeRequestSchema = {
  type: 'object',
  required: [
    'acknowledge',
    'message',
    'version',
    'build',
    'errorCode',
  ],
  properties: {
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
      type: 'integer',
    },
  },
};

export const AddMyVehicleSchema = {
  properties: {
    userVehicleList: {
      type: 'array',
    },
    id: {
      type: 'number',
    },
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
    'userVehicleList',
    'id',
    'acknowledge',
    'message',
    'version',
    'build',
    'errorCode',
  ],
  additionalProperties: false,
};

export const editMyVehicleSchema = {
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

export const deleteMyVehicleSchema = {
  type: 'object',
  required: [
    'acknowledge',
    'message',
    'version',
    'build',
    'errorCode',
  ],
  properties: {
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
      type: 'integer',
    },
  },
};

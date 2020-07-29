export default {
  type: 'object',
  required: [
    'orderNo',
    'acknowledge',
    'message',
    'version',
    'build',
  ],
  properties: {
    orderNo: {
      type: 'string',
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
  },
};

export const negativeReqSchema = {
  type: 'object',
  required: [
    'message',
  ],
  properties: {
    message: {
      type: 'string',
    },
  },
};

export const emptyReqInput = {
  type: 'object',
  required: [
    'message',
    'modelState',
  ],
  properties: {
    message: {
      type: 'string',
    },
    modelState: {
      type: 'object',
      required: [
        'request.BranchCode',
        'request.BookingDateTime',
        'request.VehicleType',
      ],
      properties: {
        'request.BranchCode': {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        'request.BookingDateTime': {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        'request.VehicleType': {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
    },
  },
};

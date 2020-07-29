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

export const displayBookingService = {
  type: 'object',
  required: [
    'bookingOrderList',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    bookingOrderList: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'branchCode',
          'branchPhone1',
          'branchPhone2',
          'branchDescription',
          'branchAddress',
          'branchPICName',
          'orderNo',
          'orderStatus',
          'orderType',
          'totalAmount',
          'serviceOrderJobs',
          'orderStartTime',
          'orderEndTime',
          'policeRegNo',
          'vin',
          'vehicleType',
          'year',
          'name',
          'phone1',
          'phone2',
          'address',
          'serviceAddress',
          'notes',
          'dscProcessStatus',
          'actualFinishTime',
          'isEligibleForRating',
          'createdTime',
        ],
        properties: {
          branchCode: {
            type: 'string',
          },
          branchPhone1: {
            type: 'string',
          },
          branchPhone2: {
            type: 'string',
          },
          branchDescription: {
            type: 'string',
          },
          branchAddress: {
            type: 'string',
          },
          branchPICName: {
            type: 'string',
          },
          orderNo: {
            type: 'string',
          },
          orderStatus: {
            type: 'integer',
          },
          orderType: {
            type: 'integer',
          },
          totalAmount: {
            type: 'integer',
          },
          serviceOrderJobs: {
            type: 'array',
            items: {
              type: 'object',
              required: [
                'jobCode',
                'jobDescription',
              ],
              properties: {
                jobCode: {
                  type: 'string',
                },
                jobDescription: {
                  type: 'string',
                },
              },
            },
          },
          orderStartTime: {
            type: 'string',
          },
          orderEndTime: {
            type: 'string',
          },
          policeRegNo: {
            type: 'string',
          },
          vin: {
            type: 'string',
          },
          vehicleType: {
            type: 'string',
          },
          year: {
            type: 'integer',
          },
          name: {
            type: 'string',
          },
          phone1: {
            type: 'string',
          },
          phone2: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
          serviceAddress: {
            type: 'string',
          },
          notes: {
            type: 'string',
          },
          dscProcessStatus: {
            type: 'integer',
          },
          actualFinishTime: {
            type: 'string',
          },
          isEligibleForRating: {
            type: 'boolean',
          },
          createdTime: {
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
  },
};

export const negativeRequest = {
  type: 'object',
  required: [
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    acknowledge: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
  },
};

export const invalidRequest = {
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
        'request.OrderBy',
      ],
      properties: {
        'request.OrderBy': {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
    },
  },
};

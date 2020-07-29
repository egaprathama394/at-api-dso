export default {
  type: 'object',
  required: [
    'unratedOrdersCount',
  ],
  properties: {
    unratedOrdersCount: {
      type: 'integer',
    },
  },
};

export const negativeRequest = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
    },
    modelState: {
      type: 'object',
      properties: {
        'userId.String': {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
    },
  },
};

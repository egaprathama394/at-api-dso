export default {
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
};

export const negativeReqSchema = {
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

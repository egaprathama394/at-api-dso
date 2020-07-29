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
      type: 'integer',
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

export const negativeRequestSchema = {
  properties: {
    message: {
      type: 'string',
    },
  },
  required: [
    'message',
  ],
  additionalProperties: false,
};

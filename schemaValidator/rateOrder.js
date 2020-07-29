export default {
  type: 'object',
  required: [
    'acknowledge',
    'message',
    'version',
    'build',
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
  },
};

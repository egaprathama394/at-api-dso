export default {
  type: 'object',
  required: [
    'acknowledge',
    'message',
  ],
  properties: {
    acknowledge: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
  },
};

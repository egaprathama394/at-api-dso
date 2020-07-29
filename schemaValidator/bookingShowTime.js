export default {
  type: 'object',
  required: [
    'slot',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    slot: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'timeStart',
          'timeEnd',
        ],
        properties: {
          timeStart: {
            type: 'string',
          },
          timeEnd: {
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

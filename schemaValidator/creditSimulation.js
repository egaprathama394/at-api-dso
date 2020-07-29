export default {
  type: 'object',
  required: [
    'outData',
    'acknowledge',
    'message',
    'version',
    'build',
  ],
  properties: {
    outData: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'tenor',
          'totalPayFirst',
          'amountInstallment',
          'lastInstallment',
          'guid',
        ],
        properties: {
          tenor: {
            type: 'string',
          },
          totalPayFirst: {
            type: 'string',
          },
          amountInstallment: {
            type: 'string',
          },
          lastInstallment: {
            type: 'string',
          },
          guid: {
            type: 'string',
          },
        },
      },
    },
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
};

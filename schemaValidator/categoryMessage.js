export default {
  type: 'object',
  required: [
    'messageCategories',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    messageCategories: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'companyCode',
          'slug',
          'name',
          'isActive',
          'id',
          'createdBy',
          'createdTime',
          'rowVersion',
        ],
        properties: {
          companyCode: {
            type: 'string',
          },
          slug: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          isActive: {
            type: 'boolean',
          },
          id: {
            type: 'integer',
          },
          createdBy: {
            type: 'string',
          },
          createdTime: {
            type: 'string',
          },
          rowVersion: {
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
    'error',
    'error_description',
  ],
  properties: {
    error: {
      type: 'string',
    },
    error_description: {
      type: 'string',
    },
  },
};

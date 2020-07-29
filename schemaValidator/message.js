export default {
  type: 'object',
  required: [
    'messages',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    messages: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'messageParentId',
          'userId',
          'categoryId',
          'isRead',
          'isClosed',
          'title',
          'message',
          'branchCode',
          'branchName',
          'name',
          'address',
          'phone',
          'sendFrom',
          'lastPostId',
          'isClientDeleted',
          'isDealerDeleted',
          'message1',
          'id',
          'totalMessage',
          'customerCare',
          'createdBy',
          'createdTime',
          'modifiedBy',
          'modifiedTime',
        ],
        properties: {
          messageParentId: {
            type: 'integer',
          },
          userId: {
            type: 'string',
          },
          categoryId: {
            type: 'integer',
          },
          isRead: {
            type: 'boolean',
          },
          isClosed: {
            type: 'boolean',
          },
          title: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
          branchCode: {
            type: 'string',
          },
          branchName: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          sendFrom: {
            type: 'string',
          },
          lastPostId: {
            type: 'integer',
          },
          isClientDeleted: {
            type: 'boolean',
          },
          isDealerDeleted: {
            type: 'boolean',
          },
          message1: {
            type: 'string',
          },
          id: {
            type: 'integer',
          },
          totalMessage: {
            type: 'integer',
          },
          customerCare: {
            type: 'string',
          },
          createdBy: {
            type: 'string',
          },
          createdTime: {
            type: 'string',
          },
          modifiedBy: {
            type: 'string',
          },
          modifiedTime: {
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

// schema for autoread messages

export const autoreadSchema = {
  type: 'object',
  required: [
    'messages',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    messages: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'messageParentId',
          'userId',
          'categoryId',
          'isRead',
          'isClosed',
          'title',
          'message',
          'branchCode',
          'branchName',
          'name',
          'address',
          'phone',
          'sendFrom',
          'lastPostId',
          'isClientDeleted',
          'isDealerDeleted',
          'message1',
          'id',
          'totalMessage',
          'createdBy',
          'createdTime',
          'modifiedBy',
          'modifiedTime',
        ],
        properties: {
          messageParentId: {
            type: 'integer',
          },
          userId: {
            type: 'string',
          },
          categoryId: {
            type: 'integer',
          },
          isRead: {
            type: 'boolean',
          },
          isClosed: {
            type: 'boolean',
          },
          title: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
          branchCode: {
            type: 'string',
          },
          branchName: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          sendFrom: {
            type: 'string',
          },
          lastPostId: {
            type: 'integer',
          },
          isClientDeleted: {
            type: 'boolean',
          },
          isDealerDeleted: {
            type: 'boolean',
          },
          message1: {
            type: 'string',
          },
          id: {
            type: 'integer',
          },
          totalMessage: {
            type: 'integer',
          },
          createdBy: {
            type: 'string',
          },
          createdTime: {
            type: 'string',
          },
          modifiedBy: {
            type: 'string',
          },
          modifiedTime: {
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

// schema for negative request autoread message test

export const negativerequest = {
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

// schema for success post messages

export const postMessages = {
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

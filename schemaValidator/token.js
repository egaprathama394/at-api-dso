export default {
  properties: {
    access_token: {
      type: 'string',
    },
    token_type: {
      type: 'string',
    },
    expires_in: {
      type: 'integer',
    },
    refresh_token: {
      type: 'string',
    },
  },
  required: [
    'access_token',
    'token_type',
    'expires_in',
    'refresh_token',
  ],
  additionalProperties: false,
};

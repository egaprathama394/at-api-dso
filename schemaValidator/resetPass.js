export default {
    properties: {
        acknowledge: {
            type: 'number',
        },
        build: {
            type: 'string',
        },
        message: {
            type: 'string',
        },
        version: {
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
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import getMessage from '../endpoints/message';
import * as messageSchema from '../schemaValidator/message';
import getProfile from '../endpoints/profile';
import * as profileSchema from '../schemaValidator/profile';
import * as body from '../data/profile';
import * as bodyPostMessages from '../data/postMessages';
import postMessages from '../endpoints/postMessages';
import getautoread from '../endpoints/autoreadMessage';
import postReplyMessages from '../endpoints/postReplyMessage';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.contactUs;
const token2 = objToken.edit;

describe('Submit Message Contact Us', () => {
  test('Can post messages at contact us successfully using authorized token - positive test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    const userId = response.body.userAccount.email;
    const queryParam = {
      userId: `${userId}`,
    };
    const responseMessage = await getMessage(token, queryParam);
    expect(responseMessage.status).toEqual(200);
    expect(responseMessage.body).toMatchSchema(messageSchema.default);
    const fullName = response.body.userAccount.firstName.concat(' ', response.body.userAccount.lastName);
    bodyPostMessages.default.message.createdBy = fullName;
    bodyPostMessages.default.message.name = fullName;
    bodyPostMessages.default.message.phone = response.body.userAccount.phoneNo;
    bodyPostMessages.default.message.sendFrom = fullName;
    bodyPostMessages.default.message.userId = userId;
    const responsePostMessages = await postMessages(token, bodyPostMessages.default);
    expect(responsePostMessages.status).toEqual(200);
    expect(responsePostMessages.body.message).toEqual('Success, Message has been sent');
    expect(responsePostMessages.body).toMatchSchema(messageSchema.postMessages);
    const responseCheckMessage = await getMessage(token, queryParam);
    expect(responseCheckMessage.status).toEqual(200);
    expect(responseCheckMessage.body).toMatchSchema(messageSchema.default);
    expect(responseCheckMessage.body.messages[0].title).toEqual(bodyPostMessages.default.message.title);
  });

  test('Can post reply messages  successfully using authorized token - positive test cases', async () => {
    const response = await getProfile(token2, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    const userId = await response.body.userAccount.email;
    const queryParam = {
      userId: `${userId}`,
    };
    const responseMessage = await getMessage(token2, queryParam);
    expect(responseMessage.status).toEqual(200);
    expect(responseMessage.body).toMatchSchema(messageSchema.default);
    const threadId = {
      threadId: 17233,
    };
    const responseAutoread = await getautoread(token2, threadId);
    expect(responseAutoread.status).toEqual(200);
    bodyPostMessages.postReplyMessage.message.messageParentId = 17233;
    const fullName = 'tester daytona';
    bodyPostMessages.postReplyMessage.message.createdBy = fullName;
    bodyPostMessages.postReplyMessage.message.name = fullName;
    bodyPostMessages.postReplyMessage.message.phone = '081903150019';
    bodyPostMessages.postReplyMessage.message.sendFrom = fullName;
    bodyPostMessages.postReplyMessage.message.userId = userId;
    bodyPostMessages.postReplyMessage.message.title = responseAutoread.body.messages[0].title;
    const responsePostMessages = await postReplyMessages(token2, bodyPostMessages.postReplyMessage, threadId);
    expect(responsePostMessages.status).toEqual(200);
    expect(responsePostMessages.body.message).toEqual('Success, Message has been sent');
    expect(responsePostMessages.body).toMatchSchema(messageSchema.postMessages);
    const responseCheckMessage = await getautoread(token2, threadId);
    expect(responseCheckMessage.status).toEqual(200);
    expect(responseCheckMessage.body).toMatchSchema(messageSchema.autoreadSchema);
    expect(responseCheckMessage.body.messages.pop().message).toEqual(bodyPostMessages.postReplyMessage.message.message);
  });
});

'use strict';
const EventEmitter = require('eventemitter3');

class Chat extends EventEmitter {
  constructor(bot, userId, pageId) {
    super();
    if (!bot || !userId) {
      throw new Error('You need to specify a BootBot instance and a userId');
    }
    this.bot = bot;
    this.userId = userId;
    this.pageId = pageId;
  }

  say(message, options) {
    return this.bot.say(this.userId, message, options, this.pageId);
  }

  sendTextMessage(text, quickReplies, options) {
    return this.bot.sendTextMessage(this.userId, text, quickReplies, options, this.pageId);
  }

  sendButtonTemplate(text, buttons, options) {
    return this.bot.sendButtonTemplate(this.userId, text, buttons, options, this.pageId);
  }

  sendGenericTemplate(cards, options) {
    return this.bot.sendGenericTemplate(this.userId, cards, options, this.pageId);
  }

  sendListTemplate(elements, buttons, options) {
    return this.bot.sendListTemplate(this.userId, elements, buttons, options, this.pageId);
  }

  sendTemplate(payload, options) {
    return this.bot.sendTemplate(this.userId, payload, options, this.pageId);
  }

  sendAttachment(type, url, quickReplies, options) {
    return this.bot.sendAttachment(this.userId, type, url, quickReplies, options, this.pageId);
  }

  sendAction(action, options) {
    return this.bot.sendAction(this.userId, action, options, this.pageId);
  }

  sendMessage(message, options) {
    return this.bot.sendMessage(this.userId, message, options, this.pageId);
  }

  sendRequest(body, endpoint, method) {
    return this.bot.sendRequest(body, endpoint, method, this.pageId);
  }

  sendTypingIndicator(milliseconds) {
    return this.bot.sendTypingIndicator(this.userId, milliseconds, this.pageId);
  }

  getUserProfile() {
    return this.bot.getUserProfile(this.userId, this.pageId);
  }

  conversation(factory) {
    return this.bot.conversation(this.userId, factory, this.pageId);
  }
}

module.exports = Chat;

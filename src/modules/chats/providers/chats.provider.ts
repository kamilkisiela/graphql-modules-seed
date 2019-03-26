import { Injectable, Inject, ProviderScope } from '@graphql-modules/di';
import { ModuleSessionInfo } from '@graphql-modules/core';
import { ChatDbObject, MessageDbObject } from '@models';
import { CHATS, MESSAGES } from '@modules/common';
import { CommonProvider } from '@modules/common/common.provider';

@Injectable({
  scope: ProviderScope.Session,
})
export class ChatsProvider extends CommonProvider {
  constructor(
    @Inject(CHATS) private chats: ChatDbObject[],
    @Inject(MESSAGES) private messages: MessageDbObject[],
    @Inject(ModuleSessionInfo) private info: ModuleSessionInfo,
  ) {
    super();
    console.log('ChatsProvider');
  }

  getChats(): ChatDbObject[] {
    return this.chats;
  }

  getChat(id: number): ChatDbObject {
    return this.chats.find(chat => chat.id === id);
  }

  createChat(chat: any): ChatDbObject {
    const id = this.chats[this.chats.length - 1].id + 1;

    const newChat: ChatDbObject = {
      id,
      ...chat,
    };

    this.chats = [...this.chats, newChat];

    return newChat;
  }

  deleteChat(id: number): number {
    this.messages = this.messages.filter(message => message.chatId !== id);
    this.chats = this.chats.filter(chat => chat.id !== id);

    return id;
  }
}

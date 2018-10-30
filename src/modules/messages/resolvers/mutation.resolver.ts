import { AppContext } from '@graphql-modules/core';
import { MessagesProvider } from "../providers/messages.provider";
import { CreateMessageMutationArgs, DeleteMessageMutationArgs, MessageDbObject } from "../../../generated-models";

export default {
  Mutation: {
    createMessage: (root, {content, chatId}: CreateMessageMutationArgs, { injector }: AppContext): MessageDbObject =>
      injector.get<MessagesProvider>(MessagesProvider).createMessage(content, chatId),
    deleteMessage: (root, {id}: DeleteMessageMutationArgs, { injector }: AppContext): number =>
      injector.get<MessagesProvider>(MessagesProvider).deleteMessage(id),
  },
};

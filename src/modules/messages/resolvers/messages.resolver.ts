import { AppContext } from "@graphql-modules/core";
import { ChatsProvider } from "../../chats/providers/chats.provider";
import { ChatDbObject } from "../../../generated-models";

export default {
  Message: {
    chat: (message: any, args, { injector }: AppContext): ChatDbObject =>
      injector.get<ChatsProvider>(ChatsProvider).getChat(message.chatId),
  },
};

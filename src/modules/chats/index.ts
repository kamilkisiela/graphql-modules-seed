import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit';
import { CommonModule } from '@modules/common';
import { ChatsProvider } from '@modules/chats/providers/chats.provider';
import { FooProvider } from '@modules/chats/providers/foo.provider';

export const ChatsModule = new GraphQLModule({
  imports: [CommonModule],
  providers: [ChatsProvider, FooProvider],
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  resolvers: loadResolversFiles(__dirname + '/resolvers/'),
});

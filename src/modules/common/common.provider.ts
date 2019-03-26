import { OnRequest } from '@graphql-modules/core';

export class CommonProvider implements OnRequest {
  onRequest() {
    console.log('request');
  }
}

import { Injectable, ProviderScope } from '@graphql-modules/di';
import { CommonProvider } from '@modules/common/common.provider';

@Injectable({
  scope: ProviderScope.Session,
})
export class FooProvider extends CommonProvider {
  constructor() {
    super();
    console.log('FooProvider');
  }
}

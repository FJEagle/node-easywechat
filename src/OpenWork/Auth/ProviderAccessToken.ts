'use strict';

import BaseAccessToken, { AccessToken } from '../../Core/BaseAccessToken';

export default class ProviderAccessToken extends BaseAccessToken
{
  protected requestMethod: string = 'POST';
  protected tokenKey: string = 'provider_access_token';
  protected endpointToGetToken: string = 'cgi-bin/service/get_provider_token';
  protected cachePrefix: string = 'easywechat.kernel.provider_access_token.';

  protected warpAccessToken(token: Record<string, any>): AccessToken {
    return new AccessToken(token, {
      access_token: 'provider_access_token',
    });
  }

  protected async getCredentials(): Promise<object>
  {
    return {
      corpid: this.app.config.corp_id,
      provider_secret: this.app.config.secret,
    };
  }
}

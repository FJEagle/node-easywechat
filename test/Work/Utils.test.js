const BaseTestUnit = require('../BaseTestUnit');
const { Work } = require('../../dist/');
const JsApiTicket = require('../../dist/Work/JsApiTicket');
const Utils = require('../../dist/Work/Utils');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should build jssdk config correctly', async () => {

      let ticket = new JsApiTicket(
        'mock-appid',
        'mock-secret',
      );
      ticket.createConfigSignature = () => {
        return {
          url: 'https://www.easywechat.com/',
          nonceStr: 'mock-nonce',
          timestamp: 1601234567,
          appId: 'mock-appid',
          signature: '22772d2fb393ab9f7f6a5a54168a566fbf1ab767',
        }
      };

      let app = new Work({
        corp_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
      });

      app.setTicket(ticket);

      let utils = new Utils(app);


      let result = {
        jsApiList: ['api1', 'api2'],
        openTagList: ['openTag1', 'openTag2'],
        debug: true,
        url: 'https://www.easywechat.com/',
        nonceStr: 'mock-nonce',
        timestamp: 1601234567,
        appId: 'mock-appid',
        signature: '22772d2fb393ab9f7f6a5a54168a566fbf1ab767',
      };

      let config = await utils.buildJsSdkConfig(result.url, result.jsApiList, result.openTagList, result.debug);
      this.assert.deepStrictEqual(config, result);
    });

  }
}

new TestUnit('Work/Utils');

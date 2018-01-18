
import {Text} from './messages';
import utils from '../utils';
import sha1 from 'crypto-js/sha1';
import aes from 'crypto-js/aes';
import {parseString} from 'xml2js';
import Core from './core';

const init = function (instance) {
  $server_handler = function () {};
};

let $server_handler;
let $server_message;

const setMessageHandler = function (handler) {
  if (typeof handler != 'function') handler = function () {};
  $server_handler = handler;
};

const serve = async function () {
  let instance = Core.getInstance();
  let app = instance.$config.app;
  if (!app) {
    throw new Error('未在配置文件中设置应用服务器');
    return;
  }
  if (app.getMethod() == 'GET') {
    let query = app.getQuery();
    if (!query.signature || !query.echostr || !query.timestamp || !query.nonce) {
      app.sendResponse('Hello node-easywechat');
      return;
    }
    let hash_data = [query.nonce, query.timestamp, instance.$config.token].sort();
    let hash = sha1(hash_data.join(''));
    if (hash === query.signature) {
      app.sendResponse(query.echostr);
    }
    else {
      app.sendResponse('fail');
    }
  }
  else {
    let xml = await app.getBody();
    $server_message = await parseMessage(xml);
    if ($server_handler && typeof $server_handler == 'function') {
      let result = await $server_handler($server_message);

      if (!result || (typeof result == 'string' && result.toUpperCase() == 'SUCCESS')) {
        app.sendResponse('SUCCESS');
        return
      }
      let response = null;
      if (typeof result == 'string') {
        response = new Text({content: result});
      }
      else {
        response = result;
      }

      if (response && typeof response == 'object') {
        response.setAttribute('ToUserName', $server_message.FromUserName);
        response.setAttribute('FromUserName', $server_message.ToUserName);
        let data = response.getData();
        console.log('server.send()', data);
        app.sendResponse(data);
      }
    }
  }
};

const parseMessage = async function (xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        let message
        if (result && result.xml) {
          message = {}
          for (let k in result.xml) {
            message[k] = result.xml[k][0];
          }
          if (message.Encrypt && instance.$config.aesKey) {
            let decrypted = aes.decrypt(message.Encrypt, instance.$config.aesKey);
            console.log('decrypted', decrypted);
          }
        }
        resolve(message);
      }
    })
  })
  .catch((err) => {
    console.log('server.parseMessage()', err)
  });
};

const getMessage = function () {
  return $server_message;
};

export default {
  init,
  setMessageHandler,
  serve,
  getMessage
};

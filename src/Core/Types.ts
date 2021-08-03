import { AxiosRequestConfig } from 'axios';

/**
 * 公众号网页授权相关配置
 */
export declare interface EasyWechatConfigOauth {
  /**
   * 网页授权权限，可选值：snsapi_userinfo、snsapi_base
   */
  scope: string;

  /**
   * 网页授权回调地址，完整URL
   */
  callback: string;
}

/**
 * 文件缓存相关配置
 */
export declare interface EasyWechatConfigCacheFile {
  /**
   * 缓存文件保存路径，默认：./
   */
  path: string,
  /**
   * 缓存文件所在目录权限，默认：0o777
   */
  dirMode: string | number,
  /**
   * 缓存文件的权限，默认：0o666
   */
  fileMode: string | number,
  /**
   * 缓存文件的后缀，“.”号开头，默认：.cache
   */
  ext: string
}

/**
 * 通用配置
 */
export declare interface EasyWechatConfig {
  /**
   * 是否开启调试，开启后会在控制台输出日志，默认：false
   * @scope ALL
   */
  debug?: boolean;

  /**
   * 应用 id
   * @scope ALL
   */
  app_id?: string;
  /**
   * 应用 secret
   * @scope BaseService | OfficialAccount | MiniProgram | Work
   */
  secret?: string;

  /**
   * 网络请求相关配置
   * @scope ALL
   */
  http?: AxiosRequestConfig;

  /**
   * 文件缓存相关配置
   * @scope ALL
   */
  file_cache?: EasyWechatConfigCacheFile;

  /**
   * 服务端接口验证 token
   * @scope OfficialAccount | MiniProgram | OpenPlatform
   */
  token?: string;

  /**
   * 服务端消息加解密密钥 aes_key
   * @scope OfficialAccount | MiniProgram | OpenPlatform
   */
  aes_key?: string;

  /**
   * 网页授权相关配置
   * @scope OfficialAccount | OpenPlatform
   */
  oauth?: EasyWechatConfigOauth;



  /**
   * 微信支付签名密钥
   * @scope Payment
   */
  key?: string;

  /**
   * 支付应用的子 app_id
   * @scope Payment
   */
  sub_appid?: string;

  /**
   * 商户号
   * @scope Payment
   */
  mch_id?: string;

  /**
   * 子商户号
   * @scope Payment
   */
  sub_mch_id?: string;

  /**
   * pfx 证书路径（敏感接口（如退款、发送红包等）需要）
   * @scope Payment
   */
  cert_path?: string;

  /**
   * 公钥路径（付款到银行卡接口需要，transfer.toBankCard()）
   * @scope Payment
   */
  rsa_public_key_path?: string;

  /**
   * 支付通知URL
   * @scope Payment
   */
  notify_url?: string;
  /**
   * 支付签约通知URL
   * @scope Payment
   */
  contract_notify_url?: string;

  /**
   * 是否沙盒模式，默认：false
   * @scope Payment
   */
  sandbox?: boolean;


  /**
   * 刷新token
   * @scope OpenPlatform
   */
  refresh_token?: string;

  /**
   * 设备类型，目前为“公众账号原始ID”
   * @scope OfficialAccount
   */
  device_type?: string;


  /**
   * 企业id
   * @scope Work
   */
  corp_id?: string;

  /**
   * 代理商id
   * @scope Work
   */
  agent_id?: string;

}

/**
 * 服务端通知处理回调函数
 * @param message 微信通知信息
 */
export declare interface ServerHandlers {
  [key: string]: ServerHandler[];
};

/**
 * 服务端通知处理回调函数
 * @param message 微信通知信息
 */
export declare type ServerHandler = (message: object) => void;

/**
 * Payment通知错误处理
 * @param message 错误信息
 */
export declare type PaymentFailHandler = (message: string) => void;

/**
 * Payment业务错误处理
 * @param message 错误信息
 */
export declare type PaymentAlertHandler = (message: string) => void;

/**
 * Payment支付结果处理回调函数
 * @param message 微信通知信息
 * @param fail 通知错误处理函数
 */
export declare type PaymentPaidHandler = (message: object, fail: PaymentFailHandler) => void;

/**
 * Payment退款结果处理回调函数
 * @param message 微信通知信息
 * @param reqInfo 微信通知信息中 req_info 解密后的信息
 * @param fail 通知错误处理函数
 */
export declare type PaymentRefundedHandler = (message: object, reqInfo: object, fail: PaymentFailHandler) => void;

/**
 * Payment扫码支付结果处理回调函数
 * @param message 微信通知信息
 * @param fail 通知错误处理函数
 * @param alert 业务错误处理函数
 */
export declare type PaymentScannedHandler = (message: object, fail: PaymentFailHandler, alert: PaymentAlertHandler) => void;

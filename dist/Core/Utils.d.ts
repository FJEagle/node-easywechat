export declare const createHash: (str: string, type?: string) => any;
export declare const createHmac: (str: string, key: string, type?: string) => any;
export declare const getTimestamp: (datetime?: string) => number;
export declare const buildQueryString: (data: object, options?: object) => string;
export declare const parseQueryString: (data: string, options?: object) => object;
export declare const randomString: (len?: number) => string;
export declare const makeSignature: (params: object, key?: string, type?: string) => string;
export declare const isString: (data: any) => boolean;
export declare const isArray: (data: any) => boolean;
export declare const isNumber: (data: any) => boolean;
export declare const isObject: (data: any) => boolean;
export declare const isFunction: (data: any) => boolean;
export declare const isIpv4: (ip: string) => boolean;
export declare const isIpv6: (ip: string) => boolean;
export declare const isIp: (ip: string) => boolean;
export declare const inArray: (data: any, arr: any, strict?: boolean) => boolean;
export declare const applyMixins: (derivedCtor: any, baseCtors: any[]) => void;
export declare const strUcwords: (str: string) => string;
export declare const strLcwords: (str: string) => string;
export declare const strStudly: (value: string) => string;
export declare const strCamel: (value: string) => string;
export declare const singleItem: (obj: any) => any;
export declare const AesDecrypt: (ciphertext: any, key: any, iv: any, method: any) => string;

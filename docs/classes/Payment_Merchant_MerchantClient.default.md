[node-easywechat](../README.md) / [Exports](../modules.md) / [Payment/Merchant/MerchantClient](../modules/Payment_Merchant_MerchantClient.md) / default

# Class: default

[Payment/Merchant/MerchantClient](../modules/Payment_Merchant_MerchantClient.md).default

## Hierarchy

- [`default`](Payment_Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Payment_Merchant_MerchantClient.default.md#constructor)

### Properties

- [app](Payment_Merchant_MerchantClient.default.md#app)
- [serverIp](Payment_Merchant_MerchantClient.default.md#serverip)

### Methods

- [addSubMerchant](Payment_Merchant_MerchantClient.default.md#addsubmerchant)
- [doRequest](Payment_Merchant_MerchantClient.default.md#dorequest)
- [getClientIp](Payment_Merchant_MerchantClient.default.md#getclientip)
- [getServerIp](Payment_Merchant_MerchantClient.default.md#getserverip)
- [manage](Payment_Merchant_MerchantClient.default.md#manage)
- [parseXml](Payment_Merchant_MerchantClient.default.md#parsexml)
- [prepends](Payment_Merchant_MerchantClient.default.md#prepends)
- [querySubMerchantByMerchantId](Payment_Merchant_MerchantClient.default.md#querysubmerchantbymerchantid)
- [querySubMerchantByWeChatId](Payment_Merchant_MerchantClient.default.md#querysubmerchantbywechatid)
- [request](Payment_Merchant_MerchantClient.default.md#request)
- [requestRaw](Payment_Merchant_MerchantClient.default.md#requestraw)
- [safeRequest](Payment_Merchant_MerchantClient.default.md#saferequest)
- [wrap](Payment_Merchant_MerchantClient.default.md#wrap)

## Constructors

### constructor

• **new default**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Payment_Application.default.md) |

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[constructor](Payment_Core_BaseClient.default.md#constructor)

#### Defined in

[Payment/Core/BaseClient.ts:18](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L18)

## Properties

### app

• `Protected` **app**: [`default`](Payment_Application.default.md) = `null`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[app](Payment_Core_BaseClient.default.md#app)

#### Defined in

[Payment/Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L14)

___

### serverIp

• `Protected` **serverIp**: `String` = `''`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[serverIp](Payment_Core_BaseClient.default.md#serverip)

#### Defined in

[Payment/Core/BaseClient.ts:16](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L16)

## Methods

### addSubMerchant

▸ **addSubMerchant**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Merchant/MerchantClient.ts:9](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Merchant/MerchantClient.ts#L9)

___

### doRequest

▸ **doRequest**(`payload`): `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[doRequest](Payment_Core_BaseClient.default.md#dorequest)

#### Defined in

[Payment/Core/BaseClient.ts:136](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L136)

___

### getClientIp

▸ **getClientIp**(): `string`

#### Returns

`string`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[getClientIp](Payment_Core_BaseClient.default.md#getclientip)

#### Defined in

[Payment/Core/BaseClient.ts:129](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L129)

___

### getServerIp

▸ **getServerIp**(): `Promise`<`String`\>

#### Returns

`Promise`<`String`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[getServerIp](Payment_Core_BaseClient.default.md#getserverip)

#### Defined in

[Payment/Core/BaseClient.ts:107](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L107)

___

### manage

▸ `Protected` **manage**(`data`, `query`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |
| `query` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Merchant/MerchantClient.ts:36](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Merchant/MerchantClient.ts#L36)

___

### parseXml

▸ **parseXml**(`xml`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `xml` | `string` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[parseXml](Payment_Core_BaseClient.default.md#parsexml)

#### Defined in

[Payment/Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L76)

___

### prepends

▸ `Protected` **prepends**(): `Object`

#### Returns

`Object`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[prepends](Payment_Core_BaseClient.default.md#prepends)

#### Defined in

[Payment/Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L23)

___

### querySubMerchantByMerchantId

▸ **querySubMerchantByMerchantId**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Merchant/MerchantClient.ts:16](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Merchant/MerchantClient.ts#L16)

___

### querySubMerchantByWeChatId

▸ **querySubMerchantByWeChatId**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Merchant/MerchantClient.ts:26](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Merchant/MerchantClient.ts#L26)

___

### request

▸ `Protected` **request**(`endpoint`, `params?`, `method?`, `options?`, `returnResponse?`): `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `params` | `object` | `{}` |
| `method` | `string` | `'post'` |
| `options` | `AxiosRequestConfig` | `{}` |
| `returnResponse` | `boolean` | `false` |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[request](Payment_Core_BaseClient.default.md#request)

#### Defined in

[Payment/Core/BaseClient.ts:28](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L28)

___

### requestRaw

▸ `Protected` **requestRaw**(`endpoint`, `params?`, `method?`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `params` | `object` | `{}` |
| `method` | `string` | `'post'` |
| `options` | `AxiosRequestConfig` | `{}` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[requestRaw](Payment_Core_BaseClient.default.md#requestraw)

#### Defined in

[Payment/Core/BaseClient.ts:95](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L95)

___

### safeRequest

▸ `Protected` **safeRequest**(`endpoint`, `params?`, `method?`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `params` | `object` | `{}` |
| `method` | `string` | `'post'` |
| `options` | `AxiosRequestConfig` | `{}` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[safeRequest](Payment_Core_BaseClient.default.md#saferequest)

#### Defined in

[Payment/Core/BaseClient.ts:84](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L84)

___

### wrap

▸ `Protected` **wrap**(`endpoint`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |

#### Returns

`string`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[wrap](Payment_Core_BaseClient.default.md#wrap)

#### Defined in

[Payment/Core/BaseClient.ts:102](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L102)
[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Messages/Video](../modules/Core_Messages_Video.md) / Video

# Class: Video

[Core/Messages/Video](../modules/Core_Messages_Video.md).Video

## Hierarchy

- [`Media`](Core_Messages_Media.Media.md)

  ↳ **`Video`**

  ↳↳ [`ShortVideo`](Core_Messages_ShortVideo.ShortVideo.md)

## Table of contents

### Constructors

- [constructor](Core_Messages_Video.Video.md#constructor)

### Properties

- [attributes](Core_Messages_Video.Video.md#attributes)
- [from](Core_Messages_Video.Video.md#from)
- [id](Core_Messages_Video.Video.md#id)
- [jsonAliases](Core_Messages_Video.Video.md#jsonaliases)
- [properties](Core_Messages_Video.Video.md#properties)
- [required](Core_Messages_Video.Video.md#required)
- [to](Core_Messages_Video.Video.md#to)
- [type](Core_Messages_Video.Video.md#type)
- [ALL](Core_Messages_Video.Video.md#all)
- [DEVICE\_EVENT](Core_Messages_Video.Video.md#device_event)
- [DEVICE\_TEXT](Core_Messages_Video.Video.md#device_text)
- [EVENT](Core_Messages_Video.Video.md#event)
- [FILE](Core_Messages_Video.Video.md#file)
- [IMAGE](Core_Messages_Video.Video.md#image)
- [LINK](Core_Messages_Video.Video.md#link)
- [LOCATION](Core_Messages_Video.Video.md#location)
- [MARKDOWN](Core_Messages_Video.Video.md#markdown)
- [MINIPROGRAM\_NOTICE](Core_Messages_Video.Video.md#miniprogram_notice)
- [MINIPROGRAM\_PAGE](Core_Messages_Video.Video.md#miniprogram_page)
- [SHORT\_VIDEO](Core_Messages_Video.Video.md#short_video)
- [TEXT](Core_Messages_Video.Video.md#text)
- [TEXT\_CARD](Core_Messages_Video.Video.md#text_card)
- [TRANSFER](Core_Messages_Video.Video.md#transfer)
- [VIDEO](Core_Messages_Video.Video.md#video)
- [VOICE](Core_Messages_Video.Video.md#voice)

### Methods

- [all](Core_Messages_Video.Video.md#all)
- [checkRequiredAttributes](Core_Messages_Video.Video.md#checkrequiredattributes)
- [get](Core_Messages_Video.Video.md#get)
- [getAttribute](Core_Messages_Video.Video.md#getattribute)
- [getMediaId](Core_Messages_Video.Video.md#getmediaid)
- [getRequired](Core_Messages_Video.Video.md#getrequired)
- [getType](Core_Messages_Video.Video.md#gettype)
- [has](Core_Messages_Video.Video.md#has)
- [isRequired](Core_Messages_Video.Video.md#isrequired)
- [merge](Core_Messages_Video.Video.md#merge)
- [only](Core_Messages_Video.Video.md#only)
- [propertiesToObject](Core_Messages_Video.Video.md#propertiestoobject)
- [set](Core_Messages_Video.Video.md#set)
- [setAttribute](Core_Messages_Video.Video.md#setattribute)
- [setAttributes](Core_Messages_Video.Video.md#setattributes)
- [setType](Core_Messages_Video.Video.md#settype)
- [toXmlArray](Core_Messages_Video.Video.md#toxmlarray)
- [transformForJsonRequest](Core_Messages_Video.Video.md#transformforjsonrequest)
- [transformForJsonRequestWithoutType](Core_Messages_Video.Video.md#transformforjsonrequestwithouttype)
- [transformToXml](Core_Messages_Video.Video.md#transformtoxml)

## Constructors

### constructor

• **new Video**(`mediaId`, `attributes?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `attributes` | `object` |

#### Overrides

[Media](Core_Messages_Media.Media.md).[constructor](Core_Messages_Media.Media.md#constructor)

#### Defined in

[Core/Messages/Video.ts:16](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Video.ts#L16)

## Properties

### attributes

• `Protected` **attributes**: `object` = `{}`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[attributes](Core_Messages_Media.Media.md#attributes)

#### Defined in

[Core/Messages/Message.ts:113](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L113)

___

### from

• `Protected` **from**: `string`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[from](Core_Messages_Media.Media.md#from)

#### Defined in

[Core/Messages/Message.ts:32](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L32)

___

### id

• `Protected` **id**: `number`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[id](Core_Messages_Media.Media.md#id)

#### Defined in

[Core/Messages/Message.ts:30](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L30)

___

### jsonAliases

• `Protected` **jsonAliases**: `object` = `{}`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[jsonAliases](Core_Messages_Media.Media.md#jsonaliases)

#### Defined in

[Core/Messages/Message.ts:34](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L34)

___

### properties

• `Protected` **properties**: `string`[]

#### Overrides

[Media](Core_Messages_Media.Media.md).[properties](Core_Messages_Media.Media.md#properties)

#### Defined in

[Core/Messages/Video.ts:9](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Video.ts#L9)

___

### required

• `Protected` **required**: `string`[]

#### Inherited from

[Media](Core_Messages_Media.Media.md).[required](Core_Messages_Media.Media.md#required)

#### Defined in

[Core/Messages/Media.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Media.ts#L13)

___

### to

• `Protected` **to**: `string`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[to](Core_Messages_Media.Media.md#to)

#### Defined in

[Core/Messages/Message.ts:31](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L31)

___

### type

• `Protected` **type**: `string` = `'video'`

#### Overrides

[Media](Core_Messages_Media.Media.md).[type](Core_Messages_Media.Media.md#type)

#### Defined in

[Core/Messages/Video.ts:8](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Video.ts#L8)

___

### ALL

▪ `Static` **ALL**: `number`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[ALL](Core_Messages_Media.Media.md#all)

#### Defined in

[Core/Messages/Message.ts:24](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L24)

___

### DEVICE\_EVENT

▪ `Static` **DEVICE\_EVENT**: `number` = `256`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[DEVICE_EVENT](Core_Messages_Media.Media.md#device_event)

#### Defined in

[Core/Messages/Message.ts:15](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L15)

___

### DEVICE\_TEXT

▪ `Static` **DEVICE\_TEXT**: `number` = `512`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[DEVICE_TEXT](Core_Messages_Media.Media.md#device_text)

#### Defined in

[Core/Messages/Message.ts:16](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L16)

___

### EVENT

▪ `Static` **EVENT**: `number` = `1048576`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[EVENT](Core_Messages_Media.Media.md#event)

#### Defined in

[Core/Messages/Message.ts:20](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L20)

___

### FILE

▪ `Static` **FILE**: `number` = `1024`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[FILE](Core_Messages_Media.Media.md#file)

#### Defined in

[Core/Messages/Message.ts:17](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L17)

___

### IMAGE

▪ `Static` **IMAGE**: `number` = `4`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[IMAGE](Core_Messages_Media.Media.md#image)

#### Defined in

[Core/Messages/Message.ts:9](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L9)

___

### LINK

▪ `Static` **LINK**: `number` = `128`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[LINK](Core_Messages_Media.Media.md#link)

#### Defined in

[Core/Messages/Message.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L14)

___

### LOCATION

▪ `Static` **LOCATION**: `number` = `64`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[LOCATION](Core_Messages_Media.Media.md#location)

#### Defined in

[Core/Messages/Message.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L13)

___

### MARKDOWN

▪ `Static` **MARKDOWN**: `number` = `8388608`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[MARKDOWN](Core_Messages_Media.Media.md#markdown)

#### Defined in

[Core/Messages/Message.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L23)

___

### MINIPROGRAM\_NOTICE

▪ `Static` **MINIPROGRAM\_NOTICE**: `number` = `4194304`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[MINIPROGRAM_NOTICE](Core_Messages_Media.Media.md#miniprogram_notice)

#### Defined in

[Core/Messages/Message.ts:22](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L22)

___

### MINIPROGRAM\_PAGE

▪ `Static` **MINIPROGRAM\_PAGE**: `number` = `2097152`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[MINIPROGRAM_PAGE](Core_Messages_Media.Media.md#miniprogram_page)

#### Defined in

[Core/Messages/Message.ts:21](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L21)

___

### SHORT\_VIDEO

▪ `Static` **SHORT\_VIDEO**: `number` = `32`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[SHORT_VIDEO](Core_Messages_Media.Media.md#short_video)

#### Defined in

[Core/Messages/Message.ts:12](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L12)

___

### TEXT

▪ `Static` **TEXT**: `number` = `2`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[TEXT](Core_Messages_Media.Media.md#text)

#### Defined in

[Core/Messages/Message.ts:8](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L8)

___

### TEXT\_CARD

▪ `Static` **TEXT\_CARD**: `number` = `2048`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[TEXT_CARD](Core_Messages_Media.Media.md#text_card)

#### Defined in

[Core/Messages/Message.ts:18](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L18)

___

### TRANSFER

▪ `Static` **TRANSFER**: `number` = `4096`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[TRANSFER](Core_Messages_Media.Media.md#transfer)

#### Defined in

[Core/Messages/Message.ts:19](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L19)

___

### VIDEO

▪ `Static` **VIDEO**: `number` = `16`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[VIDEO](Core_Messages_Media.Media.md#video)

#### Defined in

[Core/Messages/Message.ts:11](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L11)

___

### VOICE

▪ `Static` **VOICE**: `number` = `8`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[VOICE](Core_Messages_Media.Media.md#voice)

#### Defined in

[Core/Messages/Message.ts:10](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L10)

## Methods

### all

▸ **all**(): `object`

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[all](Core_Messages_Media.Media.md#all)

#### Defined in

[Core/Messages/Message.ts:179](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L179)

___

### checkRequiredAttributes

▸ `Protected` **checkRequiredAttributes**(): `void`

#### Returns

`void`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[checkRequiredAttributes](Core_Messages_Media.Media.md#checkrequiredattributes)

#### Defined in

[Core/Messages/Message.ts:196](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L196)

___

### get

▸ **get**(`name`, `defaultValue?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `any` | `null` |

#### Returns

`any`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[get](Core_Messages_Media.Media.md#get)

#### Defined in

[Core/Messages/Message.ts:143](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L143)

___

### getAttribute

▸ **getAttribute**(`name`, `defaultValue?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `any` | `null` |

#### Returns

`any`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[getAttribute](Core_Messages_Media.Media.md#getattribute)

#### Defined in

[Core/Messages/Message.ts:138](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L138)

___

### getMediaId

▸ **getMediaId**(): `string`

#### Returns

`string`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[getMediaId](Core_Messages_Media.Media.md#getmediaid)

#### Defined in

[Core/Messages/Media.ts:24](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Media.ts#L24)

___

### getRequired

▸ **getRequired**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Media](Core_Messages_Media.Media.md).[getRequired](Core_Messages_Media.Media.md#getrequired)

#### Defined in

[Core/Messages/Message.ts:186](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L186)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[getType](Core_Messages_Media.Media.md#gettype)

#### Defined in

[Core/Messages/Message.ts:41](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L41)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[has](Core_Messages_Media.Media.md#has)

#### Defined in

[Core/Messages/Message.ts:148](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L148)

___

### isRequired

▸ **isRequired**(`attribute`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `any` |

#### Returns

`boolean`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[isRequired](Core_Messages_Media.Media.md#isrequired)

#### Defined in

[Core/Messages/Message.ts:191](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L191)

___

### merge

▸ **merge**(`attributes`): [`Video`](Core_Messages_Video.Video.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Video`](Core_Messages_Video.Video.md)

#### Inherited from

[Media](Core_Messages_Media.Media.md).[merge](Core_Messages_Media.Media.md#merge)

#### Defined in

[Core/Messages/Message.ts:158](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L158)

___

### only

▸ **only**(`keys`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[only](Core_Messages_Media.Media.md#only)

#### Defined in

[Core/Messages/Message.ts:165](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L165)

___

### propertiesToObject

▸ **propertiesToObject**(`data`, `aliases?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `object` | `undefined` |
| `aliases` | `object` | `null` |

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[propertiesToObject](Core_Messages_Media.Media.md#propertiestoobject)

#### Defined in

[Core/Messages/Message.ts:96](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L96)

___

### set

▸ **set**(`name`, `value`): [`Video`](Core_Messages_Video.Video.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Video`](Core_Messages_Video.Video.md)

#### Inherited from

[Media](Core_Messages_Media.Media.md).[set](Core_Messages_Media.Media.md#set)

#### Defined in

[Core/Messages/Message.ts:131](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L131)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`Video`](Core_Messages_Video.Video.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Video`](Core_Messages_Video.Video.md)

#### Inherited from

[Media](Core_Messages_Media.Media.md).[setAttribute](Core_Messages_Media.Media.md#setattribute)

#### Defined in

[Core/Messages/Message.ts:124](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L124)

___

### setAttributes

▸ **setAttributes**(`attributes`): [`Video`](Core_Messages_Video.Video.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Video`](Core_Messages_Video.Video.md)

#### Inherited from

[Media](Core_Messages_Media.Media.md).[setAttributes](Core_Messages_Media.Media.md#setattributes)

#### Defined in

[Core/Messages/Message.ts:117](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L117)

___

### setType

▸ **setType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[setType](Core_Messages_Media.Media.md#settype)

#### Defined in

[Core/Messages/Message.ts:46](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L46)

___

### toXmlArray

▸ **toXmlArray**(): `object`

#### Returns

`object`

#### Overrides

[Media](Core_Messages_Media.Media.md).[toXmlArray](Core_Messages_Media.Media.md#toxmlarray)

#### Defined in

[Core/Messages/Video.ts:21](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Video.ts#L21)

___

### transformForJsonRequest

▸ **transformForJsonRequest**(`appends?`, `withType?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appends` | `object` | `{}` |
| `withType` | `boolean` | `true` |

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[transformForJsonRequest](Core_Messages_Media.Media.md#transformforjsonrequest)

#### Defined in

[Core/Messages/Message.ts:81](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L81)

___

### transformForJsonRequestWithoutType

▸ **transformForJsonRequestWithoutType**(`appends?`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appends` | `object` |

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[transformForJsonRequestWithoutType](Core_Messages_Media.Media.md#transformforjsonrequestwithouttype)

#### Defined in

[Core/Messages/Message.ts:76](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L76)

___

### transformToXml

▸ **transformToXml**(`appends?`, `returnAsObject?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appends` | `object` | `{}` |
| `returnAsObject` | `boolean` | `false` |

#### Returns

`any`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[transformToXml](Core_Messages_Media.Media.md#transformtoxml)

#### Defined in

[Core/Messages/Message.ts:51](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L51)
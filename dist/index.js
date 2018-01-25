/*!
 * EasyWechat.js v1.3.6
 * (c) 2017-2018 Hpyer
 * Released under the MIT License.
 */
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function t(e){return new Promise(function(t,n){function i(s,c){try{var a=e[c?"throw":"next"](s)}catch(e){return void n(e)}a.done?t(a.value):Promise.resolve(a.value).then(i,r)}function r(e){i(e,1)}i()})}var n=e(require("merge")),i=e(require("request")),r=e(require("body")),s=e(require("url")),c=e(require("qs")),a=e(require("fs")),o=e(require("path")),u=e(require("wechat-crypto")),l=require("xml2js");const d=function(){let e=arguments;return e[0]="NodeEasywechat: "+e[0],console.log.apply(null,arguments)},p=function(){return parseInt((new Date).getTime()/1e3)},f=function(e=16){let t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n="";for(let i=0;i<e;i++)n+=t.charAt(Math.floor(Math.random()*t.length));return n},h=function(e){if(!e)return e;if("object"!=typeof e)return e;let t=new Object;for(let n in e)t[n]=h(e[n]);return t},g=function(){let e=arguments;if(0==e.length)return null;let t=h(e[0]);if(1==e.length)return t;for(let n=1;n<e.length;n++)if(e[n]&&"object"==typeof e[n])for(let i in e[n])t[i]=e[n][i];return t},y=function(e){let t=require("crypto").createHash("sha1");return t.update(e),t.digest("hex")},m=e=>"[object String]"==Object.prototype.toString.call(e),_=e=>"[object Array]"==Object.prototype.toString.call(e),q=function(e){let t=[],n=null;for(let i in e)"news"==e[i].dataParams.MsgType&&(n=e[i],t.push(e[i].dataParams.Articles.item));return t.length>0&&n&&(n.dataParams.ArticleCount=t.length,n.dataParams.Articles.item=t),n};class ${constructor(e,t){this.$req=e,this.$res=t}getMethod(){return this.$req?this.$req.method:{}}getQuery(){return this.$req?s.parse(this.$req.url,!0).query:{}}_readBody(){return new Promise((e,t)=>{r(this.$req,(n,i)=>{n?t(n):e(i)})}).catch(e=>{d("app_server._readBody()",e)})}getBody(){return t(function*(){return this.$req?yield this._readBody():""}.call(this))}_initResponseOptions(e={}){return e.status=e.status||200,e.contentType=e.contentType||"text/html",e.headers=e.headers||{},e.headers["Content-Type"]=e.contentType,e}sendResponse(e,t={}){if(!this.$res)return!1;t=this._initResponseOptions(t),this.$res.writeHead(t.status,t.headers),this.$res.end(e)}}class b extends ${constructor(e){super(e.req,e.res),this.$ctx=e}sendResponse(e,t={}){if(!this.$ctx)return!1;t=this._initResponseOptions(t),this.$ctx.status=t.status;for(let e in t.headers)this.$ctx.set(e,t.headers[e]);this.$ctx.body=e}}class w extends ${constructor(e,t){super(e,t)}sendResponse(e,t={}){if(!this.$res)return!1;t=this._initResponseOptions(t),this.$res.status(t.status).set(t.headers).send(e)}}const k={appKey:"",appSecret:""};var P=null;class I{constructor(e={}){if(this.$config=n({},k,e),!this.$config.appKey)throw new Error("\u672a\u586b\u5199appKey");if(!this.$config.appSecret)throw new Error("\u672a\u586b\u5199appSecret");P=this,this.$plugins.forEach(e=>{this[e].init(this)})}setAppServerDefault(e,t){this.$config.app=new $(e,t)}setAppServerKoa2(e){this.$config.app=new b(e)}setAppServerExpress(e,t){this.$config.app=new w(e,t)}}I.prototype.requestGet=(e=>new Promise((t,n)=>{i({method:"GET",uri:e},function(e,i,r){if(e)n(e);else{try{r=JSON.parse(r)}catch(e){}t(r)}})})),I.prototype.requestFile=(e=>new Promise((t,n)=>{i({method:"GET",uri:e,encoding:"binary"},function(e,i,r){e?n(e):t(r)})})),I.prototype.requestPost=((e,t=null)=>new Promise((n,r)=>{i({method:"POST",uri:e,json:t},function(e,t,i){e?r(e):n(i)})})),I.prototype.buildApiUrl=(e=>t(function*(){let t=yield P.access_token.getToken();return e+"?access_token="+t}())),I.prototype.$plugins=[],I.registPlugin=((e,t)=>{I.prototype[e]=t,I.prototype.$plugins.push(e)});var E={EasyWechat:I,getInstance:()=>P};const T="https://open.weixin.qq.com/connect/oauth2/authorize",A="https://open.weixin.qq.com/connect/qrconnect",S="https://api.weixin.qq.com/sns/oauth2/access_token",U="https://api.weixin.qq.com/sns/userinfo";class v{constructor(){this.id="",this.nickname="",this.name="",this.avatar="",this.original={},this.token={}}}const x=function(e){},M=function(e=""){let t=E.getInstance();if(!t.$config.oauth)return"";if(!t.$config.oauth.scope)throw new Error("\u672a\u586b\u5199\u6388\u6743scope");if(!t.$config.oauth.redirect)throw new Error("\u672a\u586b\u5199\u6388\u6743\u56de\u8c03\u5730\u5740");let n=t.$config.oauth.redirect;if("http://"!=n.substr(0,7)&&"https://"!=n.substr(0,8))throw new Error("\u8bf7\u586b\u5199\u5b8c\u6574\u7684\u56de\u8c03\u5730\u5740\uff0c\u4ee5\u201chttp://\u201d\u6216\u201chttps://\u201d\u5f00\u5934");let i=T;"snsapi_login"==t.$config.oauth.scope&&(i=A);let r={appid:t.$config.appKey,redirect_uri:n,response_type:"code",scope:t.$config.oauth.scope};return e&&(r.state=e),i+"?"+c.stringify(r)+"#wechat_redirect"},C=function(e){return t(function*(){let t=yield j(e);return"snsapi_base"!=E.getInstance().$config.oauth.scope&&(t=yield N(t)),t}())},j=function(e){return t(function*(){let t=E.getInstance(),n={appid:t.$config.appKey,secret:t.$config.appSecret,code:e,grant_type:"authorization_code"},i=S+"?"+c.stringify(n),r=yield t.requestGet(i),s=new v;return s.id=r.openid,s.token=r,s}())},N=function(e){return t(function*(){let t={access_token:e.token.access_token,openid:e.id,lang:"zh_CN"},n=U+"?"+c.stringify(t),i=yield E.getInstance().requestGet(n);return i.errcode?(d("oauth.fetchUserInfo()",i),!1):(e.id=i.openid,e.nickname=i.nickname,e.name=i.nickname,e.avatar=i.headimgurl,e.original=i,e)}())};var R={init:function(e){},redirect:function(e=""){let t=E.getInstance();if(!t.$config.oauth)return"";if(!t.$config.oauth.scope)throw new Error("\u672a\u586b\u5199\u6388\u6743scope");if(!t.$config.oauth.redirect)throw new Error("\u672a\u586b\u5199\u6388\u6743\u56de\u8c03\u5730\u5740");let n=t.$config.oauth.redirect;if("http://"!=n.substr(0,7)&&"https://"!=n.substr(0,8))throw new Error("\u8bf7\u586b\u5199\u5b8c\u6574\u7684\u56de\u8c03\u5730\u5740\uff0c\u4ee5\u201chttp://\u201d\u6216\u201chttps://\u201d\u5f00\u5934");let i=T;"snsapi_login"==t.$config.oauth.scope&&(i=A);let r={appid:t.$config.appKey,redirect_uri:n,response_type:"code",scope:t.$config.oauth.scope};return e&&(r.state=e),i+"?"+c.stringify(r)+"#wechat_redirect"},user:function(e){return t(function*(){let t=yield j(e);return"snsapi_base"!=E.getInstance().$config.oauth.scope&&(t=yield N(t)),t}())}};class D{constructor(){this.$options={}}fetch(e){return null}contains(e){return!0}save(e,t=null,n=0){return!0}delete(e){return!0}}class K extends D{constructor(){super(),this.$datas={}}fetch(e){return!this.contains(e)||this.$datas[e].lifeTime>0&&this.$datas[e].lifeTime<p()?null:this.$datas[e].data}contains(e){return"object"==typeof this.$datas[e]}save(e,t=null,n=0){let i={data:t,lifeTime:n>0?n+p():0};return this.$datas[e]=i,!0}delete(e){return delete this.$datas[e],!0}}class O extends D{constructor(e){super();let t={path:"",dirMode:511,fileMode:438,ext:".cache"};this.$options=g(t,e),this.$options.path=o.resolve(this.$options.path);try{a.accessSync(this.$options.path,a.constants.R_OK&a.constants.W_OK)}catch(e){try{a.mkdirSync(this.$options.path,this.$options.dirMode)}catch(e){d("\u65e0\u6cd5\u521b\u5efa\u7f13\u5b58\u76ee\u5f55\uff1a"+this.$options.path,e)}}}getCacheFile(e){return this.$options.path+"/"+e+this.$options.ext}fetch(e){let t=null,n=this.getCacheFile(e);try{let e=JSON.parse(a.readFileSync(n,{encoding:"utf-8",flag:"r"}));t=e.lifeTime>0&&e.lifeTime<p()?null:e.data}catch(e){d("\u65e0\u6cd5\u8bfb\u53d6\u7f13\u5b58\u6587\u4ef6\uff1a"+n,e),t=null}return t}contains(e){let t=this.getCacheFile(e);try{a.accessSync(t,a.constants.R_OK&a.constants.W_OK)}catch(e){return!1}return!0}save(e,t=null,n=0){let i=this.getCacheFile(e);try{let e={data:t,lifeTime:n>0?n+p():0};a.writeFileSync(i,JSON.stringify(e),{mode:this.$options.fileMode,encoding:"utf-8",flag:"w"})}catch(e){return d("\u65e0\u6cd5\u5199\u5165\u7f13\u5b58\u6587\u4ef6\uff1a"+i,e),!1}return!0}delete(e){let t=this.getCacheFile(e);try{a.unlinkSync(t)}catch(e){return d("\u65e0\u6cd5\u5220\u9664\u7f13\u5b58\u6587\u4ef6\uff1a"+t,e),!1}return!0}}var W=Object.freeze({CacheInterface:D,MemoryCache:K,FileCache:O});const F=function(e){if(!e.$config.cache)switch(e.$config.cache_driver){case"file":e.$config.cache=new O(e.$config.cache_options);break;case"memory":default:e.$config.cache=new K}},G=function(e){e&&"function"==typeof e.fetch&&"function"==typeof e.contains&&"function"==typeof e.save&&"function"==typeof e.delete&&(E.getInstance().$config.cache=e)};var Q={init:function(e){if(!e.$config.cache)switch(e.$config.cache_driver){case"file":e.$config.cache=new O(e.$config.cache_options);break;case"memory":default:e.$config.cache=new K}},setCache:function(e){e&&"function"==typeof e.fetch&&"function"==typeof e.contains&&"function"==typeof e.save&&"function"==typeof e.delete&&(E.getInstance().$config.cache=e)}};const H="https://api.weixin.qq.com/cgi-bin/token",J=function(e){e.$config.access_token_cache_key=e.$config.access_token_cache_key||"NODE_EASYWECHAT_ACCESS_TOKEN"},L=function(){return t(function*(){let e=E.getInstance(),t={appid:e.$config.appKey,secret:e.$config.appSecret,grant_type:"client_credential"},n=H+"?"+c.stringify(t);return yield e.requestGet(n)}())},z=function(e=!1){return t(function*(){let t=E.getInstance(),n=t.$config.cache.fetch(t.$config.access_token_cache_key);if(e||!n){let e=yield L();B(e.access_token,e.expires_in),n=e.access_token}return n}())},B=function(e,t=7200){let n=E.getInstance();d("write AccessToken: ",n.$config.access_token_cache_key,e,t),n.$config.cache.save(n.$config.access_token_cache_key,e,t)};var V={init:function(e){e.$config.access_token_cache_key=e.$config.access_token_cache_key||"NODE_EASYWECHAT_ACCESS_TOKEN"},getToken:function(e=!1){return t(function*(){let t=E.getInstance(),n=t.$config.cache.fetch(t.$config.access_token_cache_key);if(e||!n){let e=yield L();B(e.access_token,e.expires_in),n=e.access_token}return n}())},setToken:B};const Y="https://api.weixin.qq.com/cgi-bin/ticket/getticket",X=function(e){e.$config.jssdk_cache_key=e.$config.jssdk_cache_key||"NODE_EASYWECHAT_JSSKD_TICKET"};var Z="";const ee=function(e){Z=e},te=function(){return t(function*(){let e=E.getInstance(),t={access_token:yield e.access_token.getToken(),type:"jsapi"},n=Y+"?"+c.stringify(t);return yield e.requestGet(n)}())},ne=function(e,n=!1,i=!0){return t(function*(){let t=E.getInstance(),r=t.$config.cache.fetch(t.$config.jssdk_cache_key);if(!r){let e=yield te();d("write JSSDK: ",t.$config.jssdk_cache_key,e.ticket,e.expires_in),t.$config.cache.save(t.$config.jssdk_cache_key,e.ticket,e.expires_in),r=e.ticket}let s=Z,c=f(),a=p(),o=ie({jsapi_ticket:r,noncestr:c,timestamp:a,url:s}),u={debug:n,appId:t.$config.appKey,timestamp:a,nonceStr:c,signature:o,url:s,jsApiList:e};return Z="",i?JSON.stringify(u):u}())},ie=function(e){let t="",n="";for(let i in e)t+=n+i+"="+e[i],n="&";return y(t)};var re={init:function(e){e.$config.jssdk_cache_key=e.$config.jssdk_cache_key||"NODE_EASYWECHAT_JSSKD_TICKET"},setUrl:function(e){Z=e},config:function(e,n=!1,i=!0){return t(function*(){let t=E.getInstance(),r=t.$config.cache.fetch(t.$config.jssdk_cache_key);if(!r){let e=yield te();d("write JSSDK: ",t.$config.jssdk_cache_key,e.ticket,e.expires_in),t.$config.cache.save(t.$config.jssdk_cache_key,e.ticket,e.expires_in),r=e.ticket}let s=Z,c=f(),a=p(),o=ie({jsapi_ticket:r,noncestr:c,timestamp:a,url:s}),u={debug:n,appId:t.$config.appKey,timestamp:a,nonceStr:c,signature:o,url:s,jsApiList:e};return Z="",i?JSON.stringify(u):u}())}};class se{constructor(e){this.dataParams={ToUserName:"",FromUserName:"",CreateTime:p(),MsgType:""},this.json=null,this.data="","object"==typeof e?this.json=e:this.data=e}setAttribute(e,t){this.dataParams[e]=t}formatData(){return"<xml>"+this._formatData(this.dataParams)+"</xml>"}_formatData(e){if("object"==typeof e){let t="";for(let n in e)if(_(e[n]))for(let i=0;i<e[n].length;i++)t+=`<${n}>${this._formatData(e[n][i])}</${n}>`;else t+=`<${n}>${this._formatData(e[n])}</${n}>`;return t}return m(e)?"<![CDATA["+e+"]]>":e}getData(){return this.json?JSON.stringify(this.json):(this.data||(this.data=this.formatData()),this.data)}}class ce extends se{constructor(e){super(""),this.dataParams={},this.dataParams.Encrypt=e.encrypt||"",this.dataParams.MsgSignature=e.sign||"",this.dataParams.TimeStamp=e.timestamp||p(),this.dataParams.Nonce=e.nonce||""}content(e){this.dataParams.Content=e}}class ae extends se{constructor(e){super(""),this.dataParams.MsgType="text",this.dataParams.Content=e.content||""}content(e){this.dataParams.Content=e}}class oe extends se{constructor(e){super(""),this.dataParams.MsgType="image",this.dataParams.Image={MediaId:e.media_id||""}}mediaId(e){this.dataParams.Image.MediaId=e}}class ue extends se{constructor(e){super(""),this.dataParams.MsgType="voice",this.dataParams.Voice={MediaId:e.media_id||""}}mediaId(e){this.dataParams.Voice.MediaId=e}}class le extends se{constructor(e){super(""),this.dataParams.MsgType="video",this.dataParams.Video={MediaId:e.media_id||"",Title:e.title||"",Description:e.description||""}}mediaId(e){this.dataParams.Video.MediaId=e}title(e){this.dataParams.Video.Title=e}description(e){this.dataParams.Video.Description=e}}class de extends se{constructor(e){super(""),this.dataParams.MsgType="music",this.dataParams.Music={MediaId:e.media_id||"",Title:e.title||"",Description:e.description||"",MusicUrl:e.music_url||"",HQMusicUrl:e.hq_music_url||"",ThumbMediaId:e.thumb_media_id||""}}mediaId(e){this.dataParams.Music.MediaId=e}title(e){this.dataParams.Music.Title=e}description(e){this.dataParams.Music.Description=e}musicUrl(e){this.dataParams.Music.MusicUrl=e}hqMusicurl(e){this.dataParams.Music.HQMusicUrl=e}thumbMediaId(e){this.dataParams.Music.ThumbMediaId=e}}class pe extends se{constructor(e){super(""),this.dataParams.MsgType="news",this.dataParams.ArticleCount=1,this.dataParams.Articles={item:{Title:e.title||"",Description:e.description||"",Url:e.url||"",PicUrl:e.image||""}}}title(e){this.dataParams.Articles.item.Title=e}description(e){this.dataParams.Articles.item.Description=e}url(e){this.dataParams.Articles.item.Url=e}picUrl(e){this.dataParams.Articles.item.PicUrl=e}}var fe=Object.freeze({Raw:se,Encrypt:ce,Text:ae,Image:oe,Voice:ue,Video:le,Music:de,News:pe});const he=function(e){ge=function(){}};let ge,ye;const me=function(e){"function"!=typeof e&&(e=function(){}),ge=e},_e=function(){return t(function*(){let e=E.getInstance(),t=e.$config.app;if(!t)throw new Error("\u672a\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u5e94\u7528\u670d\u52a1\u5668");let n=null;if(e.$config.aesKey&&(n=new u(e.$config.token,e.$config.aesKey,e.$config.appKey)),"GET"==t.getMethod()){let r=t.getQuery();if(!(r.signature&&r.echostr&&r.timestamp&&r.nonce))return void t.sendResponse("Hello node-easywechat");let s;if(n)s=n.getSignature(r.timestamp||"",r.nonce||"",r.encrypt||"");else{var i=[e.$config.token,r.timestamp||"",r.nonce||"",r.encrypt||""].sort();s=y(i.join(""))}s===r.signature?t.sendResponse(r.echostr):t.sendResponse("fail")}else{let e=yield t.getBody();if(ye=yield qe(e,n),ge&&"function"==typeof ge){let e=yield ge(ye);if(!e||m(e)&&"SUCCESS"==e.toUpperCase())return void t.sendResponse("SUCCESS");let i=null;if((i=m(e)?new ae({content:e}):_(e)?q(e):e)&&"object"==typeof i){i.setAttribute("ToUserName",ye.FromUserName),i.setAttribute("FromUserName",ye.ToUserName);let e=i.getData();if(d("server.send().original",e),n&&ye._isEncrypt){e=n.encrypt(e);let t=p(),r=f(),s=n.getSignature(t,r,e);e=(i=new ce({encrypt:e,sign:s,timestamp:t,nonce:r})).getData(),d("server.send().encrypt",e)}t.sendResponse(e)}}}}())},qe=function(e,n=null){return t(function*(){return new Promise((i,r)=>{l.parseString(e,(e,s)=>t(function*(){if(e)r(e);else{let e;if(s&&s.xml){e={};for(let t in s.xml)e[t]=s.xml[t][0];if(e._isEncrypt=!1,e.Encrypt&&n){let t=n.decrypt(e.Encrypt);if(d("parseMessage.decrypted",t),!(e=yield qe(t.message)))throw new Error("\u65e0\u6cd5\u89e3\u5bc6\u6d88\u606f\uff0c\u8bf7\u786e\u8ba4 AppId\u3001Token\u3001AESKey \u7b49\u662f\u5426\u6b63\u786e");e._isEncrypt=!0}}i(e)}}()))}).catch(e=>{d("server.parseMessage()",e)})}())},$e=function(){return ye};var be={init:function(e){ge=function(){}},setMessageHandler:function(e){"function"!=typeof e&&(e=function(){}),ge=e},serve:function(){return t(function*(){let e=E.getInstance(),t=e.$config.app;if(!t)throw new Error("\u672a\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u5e94\u7528\u670d\u52a1\u5668");let n=null;if(e.$config.aesKey&&(n=new u(e.$config.token,e.$config.aesKey,e.$config.appKey)),"GET"==t.getMethod()){let r=t.getQuery();if(!(r.signature&&r.echostr&&r.timestamp&&r.nonce))return void t.sendResponse("Hello node-easywechat");let s;if(n)s=n.getSignature(r.timestamp||"",r.nonce||"",r.encrypt||"");else{var i=[e.$config.token,r.timestamp||"",r.nonce||"",r.encrypt||""].sort();s=y(i.join(""))}s===r.signature?t.sendResponse(r.echostr):t.sendResponse("fail")}else{let e=yield t.getBody();if(ye=yield qe(e,n),ge&&"function"==typeof ge){let e=yield ge(ye);if(!e||m(e)&&"SUCCESS"==e.toUpperCase())return void t.sendResponse("SUCCESS");let i=null;if((i=m(e)?new ae({content:e}):_(e)?q(e):e)&&"object"==typeof i){i.setAttribute("ToUserName",ye.FromUserName),i.setAttribute("FromUserName",ye.ToUserName);let e=i.getData();if(d("server.send().original",e),n&&ye._isEncrypt){e=n.encrypt(e);let t=p(),r=f(),s=n.getSignature(t,r,e);e=(i=new ce({encrypt:e,sign:s,timestamp:t,nonce:r})).getData(),d("server.send().encrypt",e)}t.sendResponse(e)}}}}())},getMessage:function(){return ye}};const we="https://api.weixin.qq.com/cgi-bin/message/template/send",ke="https://api.weixin.qq.com/cgi-bin/template/get_industry",Pe="https://api.weixin.qq.com/cgi-bin/template/api_set_industry",Ie="https://api.weixin.qq.com/cgi-bin/template/api_add_template",Ee="https://api.weixin.qq.com/cgi-bin/template/get_all_private_template",Te="https://api.weixin.qq.com/cgi-bin/template/del_private_template",Ae=function(e){Ue=new Se};class Se{constructor(){this.reset()}}Se.prototype.reset=function(){this.touser="",this.template_id="",this.url="",this.miniprogram={},this.data=[]};let Ue=null;const ve=function(e){return Ue.touser=e,this},xe=function(e){return Ue.template_id=e,this},Me=function(e){return Ue.url=e,this},Ce=function(e){return Ue.data=je(e),this},je=function(e){let t={};for(let n in e){let i=e[n];"object"==typeof i?void 0!==i.length?t[n]={value:i[0],color:i[1]}:t[n]=i:t[n]={value:i}}return t},Ne=function(e=null){return t(function*(){if(e?e.data&&(e.data=je(e.data)):e={},e=n({},Ue,e),Ue.reset(),!e.touser)throw new Error("\u7528\u6237openid\u4e3a\u7a7a");if(!e.template_id)throw new Error("\u6a21\u677fid\u4e3a\u7a7a");let t=E.getInstance(),i=yield t.buildApiUrl(we);return yield t.requestPost(i,e)}())},Re=function(){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(ke);return yield e.requestPost(t)}())},De=function(e,n){return t(function*(){let t=E.getInstance(),i=yield t.buildApiUrl(Pe),r={industry_id1:e,industry_id2:n};return yield t.requestPost(i,r)}())},Ke=function(e){return t(function*(){let t=E.getInstance(),n=yield t.buildApiUrl(Ie),i={template_id_short:e};return yield t.requestPost(n,i)}())},Oe=function(){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(Ee);return yield e.requestPost(t)}())},We=function(e){return t(function*(){let t=E.getInstance(),n=yield t.buildApiUrl(Te),i={template_id:e};return yield t.requestPost(n,i)}())};var Fe={init:function(e){Ue=new Se},to:ve,withTo:ve,andTo:ve,receiver:ve,withReceiver:ve,andhReceiver:ve,uses:xe,withUses:xe,andUses:xe,template:xe,withTemplate:xe,andTemplate:xe,templateId:xe,withTemplateId:xe,andTemplateId:xe,url:Me,withUrl:Me,andUrl:Me,link:Me,withLink:Me,andLink:Me,linkTo:Me,withLinkTo:Me,andLinkTo:Me,data:Ce,withData:Ce,andData:Ce,send:function(e=null){return t(function*(){if(e?e.data&&(e.data=je(e.data)):e={},e=n({},Ue,e),Ue.reset(),!e.touser)throw new Error("\u7528\u6237openid\u4e3a\u7a7a");if(!e.template_id)throw new Error("\u6a21\u677fid\u4e3a\u7a7a");let t=E.getInstance(),i=yield t.buildApiUrl(we);return yield t.requestPost(i,e)}())},getIndustry:function(){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(ke);return yield e.requestPost(t)}())},setIndustry:function(e,n){return t(function*(){let t=E.getInstance(),i=yield t.buildApiUrl(Pe),r={industry_id1:e,industry_id2:n};return yield t.requestPost(i,r)}())},addTemplate:function(e){return t(function*(){let t=E.getInstance(),n=yield t.buildApiUrl(Ie),i={template_id_short:e};return yield t.requestPost(n,i)}())},getPrivateTemplates:function(){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(Ee);return yield e.requestPost(t)}())},deletePrivateTemplate:function(e){return t(function*(){let t=E.getInstance(),n=yield t.buildApiUrl(Te),i={template_id:e};return yield t.requestPost(n,i)}())}};const Ge="https://api.weixin.qq.com/cgi-bin/qrcode/create",Qe="https://mp.weixin.qq.com/cgi-bin/showqrcode",He=function(e){},Je=function(e,n=null){return t(function*(){((n=parseInt(n))<=0||n>604800)&&(n=604800);let t="";"string"==typeof e?(e={scene_str:e},t="QR_STR_SCENE"):(e={scene_id:e},t="QR_SCENE");let i={expire_seconds:n,action_name:t,action_info:{scene:e}},r=E.getInstance(),s=yield r.buildApiUrl(Ge);return yield r.requestPost(s,i)}())},Le=function(e){return t(function*(){let t="";"string"==typeof e?(e={scene_str:e},t="QR_LIMIT_STR_SCENE"):(e={scene_id:e},t="QR_LIMIT_SCENE");let n={action_name:t,action_info:{scene:e}},i=E.getInstance(),r=yield i.buildApiUrl(Ge);return yield i.requestPost(r,n)}())},ze=function(e){return t(function*(){let t=Qe+"?ticket="+e;return yield E.getInstance().requestFile(t)}())};var Be={init:function(e){},temporary:function(e,n=null){return t(function*(){((n=parseInt(n))<=0||n>604800)&&(n=604800);let t="";"string"==typeof e?(e={scene_str:e},t="QR_STR_SCENE"):(e={scene_id:e},t="QR_SCENE");let i={expire_seconds:n,action_name:t,action_info:{scene:e}},r=E.getInstance(),s=yield r.buildApiUrl(Ge);return yield r.requestPost(s,i)}())},forever:function(e){return t(function*(){let t="";"string"==typeof e?(e={scene_str:e},t="QR_LIMIT_STR_SCENE"):(e={scene_id:e},t="QR_LIMIT_SCENE");let n={action_name:t,action_info:{scene:e}},i=E.getInstance(),r=yield i.buildApiUrl(Ge);return yield i.requestPost(r,n)}())},url:function(e){return t(function*(){let t=Qe+"?ticket="+e;return yield E.getInstance().requestFile(t)}())}};const Ve="https://api.weixin.qq.com/cgi-bin/user/info",Ye="https://api.weixin.qq.com/cgi-bin/user/info/batchget",Xe="https://api.weixin.qq.com/cgi-bin/user/get",Ze="https://api.weixin.qq.com/cgi-bin/user/info/updateremark",et="https://api.weixin.qq.com/cgi-bin/tags/members/getblacklist",tt="https://api.weixin.qq.com/cgi-bin/tags/members/batchblacklist",nt="https://api.weixin.qq.com/cgi-bin/tags/members/batchunblacklist";class it{constructor(){this.id="",this.nickname="",this.name="",this.avatar="",this.original={},this.token={}}}const rt=function(e){},st=function(e,n="zh_CN"){return t(function*(){let t=E.getInstance(),i=yield t.buildApiUrl(Ve);i+="&openid="+e+"&lang="+n;let r=yield t.requestGet(i),s=new it;return s.id=r.openid,s.nickname=r.nickname,s.name=r.nickname,s.avatar=r.headimgurl,s.original=r,s}())},ct=function(e){return t(function*(){let t=E.getInstance(),n={user_list:e},i=yield t.buildApiUrl(Ye);return yield t.requestPost(i,n)}())},at=function(e=null){return t(function*(){let t=E.getInstance(),n=yield t.buildApiUrl(Xe);return e&&(n+="&next_openid="+e),yield t.requestGet(n)}())},ot=function(e,n){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(Ze);return yield e.requestPost(t)}())},ut=function(e){return t(function*(){let t=E.getInstance(),n={};e&&(n.begin_openid=e);let i=yield t.buildApiUrl(et);return yield t.requestPost(i,n)}())},lt=function(e){return t(function*(){let t=E.getInstance(),n={openid_list:e},i=yield t.buildApiUrl(tt);return yield t.requestPost(i,n)}())},dt=function(e){return t(function*(){let t=E.getInstance(),n={openid_list:e},i=yield t.buildApiUrl(nt);return yield t.requestPost(i,n)}())},pt=function(e){return t(function*(){return yield lt([e])}())},ft=function(e){return t(function*(){return yield dt([e])}())};var ht={init:function(e){},get:function(e,n="zh_CN"){return t(function*(){let t=E.getInstance(),i=yield t.buildApiUrl(Ve);i+="&openid="+e+"&lang="+n;let r=yield t.requestGet(i),s=new it;return s.id=r.openid,s.nickname=r.nickname,s.name=r.nickname,s.avatar=r.headimgurl,s.original=r,s}())},batchGet:function(e){return t(function*(){let t=E.getInstance(),n={user_list:e},i=yield t.buildApiUrl(Ye);return yield t.requestPost(i,n)}())},lists:function(e=null){return t(function*(){let t=E.getInstance(),n=yield t.buildApiUrl(Xe);return e&&(n+="&next_openid="+e),yield t.requestGet(n)}())},remark:function(e,n){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(Ze);return yield e.requestPost(t)}())},blacklist:function(e){return t(function*(){let t=E.getInstance(),n={};e&&(n.begin_openid=e);let i=yield t.buildApiUrl(et);return yield t.requestPost(i,n)}())},batchBlock:lt,batchUnblock:dt,block:function(e){return t(function*(){return yield lt([e])}())},unblock:function(e){return t(function*(){return yield dt([e])}())}};const gt="https://api.weixin.qq.com/cgi-bin/menu/get",yt="https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info",mt="https://api.weixin.qq.com/cgi-bin/menu/create",_t="https://api.weixin.qq.com/cgi-bin/menu/delete",qt=function(e){},$t=function(){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(gt);return yield e.requestPost(t)}())},bt=function(){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(yt);return yield e.requestPost(t)}())},wt=function(e){return t(function*(){let t={button:e},n=E.getInstance(),i=yield n.buildApiUrl(mt);return yield n.requestPost(i,t)}())},kt=function(){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(_t);return yield e.requestPost(t)}())};var Pt={init:function(e){},all:function(){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(gt);return yield e.requestPost(t)}())},current:function(){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(yt);return yield e.requestPost(t)}())},add:function(e){return t(function*(){let t={button:e},n=E.getInstance(),i=yield n.buildApiUrl(mt);return yield n.requestPost(i,t)}())},destroy:function(){return t(function*(){let e=E.getInstance(),t=yield e.buildApiUrl(_t);return yield e.requestPost(t)}())}};const It="https://api.weixin.qq.com/cgi-bin/shorturl",Et=function(e){},Tt=function(e){return t(function*(){let t={action:"long2short",long_url:e},n=E.getInstance(),i=yield n.buildApiUrl(It);return yield n.requestPost(i,t)}())};var At={init:function(e){},shorten:function(e){return t(function*(){let t={action:"long2short",long_url:e},n=E.getInstance(),i=yield n.buildApiUrl(It);return yield n.requestPost(i,t)}())}};E.EasyWechat.registPlugin("oauth",R),E.EasyWechat.registPlugin("cache",Q),E.EasyWechat.registPlugin("access_token",V),E.EasyWechat.registPlugin("jssdk",re),E.EasyWechat.registPlugin("server",be),E.EasyWechat.registPlugin("notice",Fe),E.EasyWechat.registPlugin("qrcode",Be),E.EasyWechat.registPlugin("user",ht),E.EasyWechat.registPlugin("menu",Pt),E.EasyWechat.registPlugin("url",At),E.EasyWechat.Cache={};for(let e in W)E.EasyWechat.Cache[e]=W[e];E.EasyWechat.Message={};for(let e in fe)E.EasyWechat.Message[e]=fe[e];var St=E.EasyWechat;module.exports=St;
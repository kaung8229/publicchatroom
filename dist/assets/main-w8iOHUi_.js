(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var Ia={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=function(r){const t=[];let n=0;for(let i=0;i<r.length;i++){let s=r.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},xh=function(r){const t=[];let n=0,i=0;for(;n<r.length;){const s=r[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=r[n++];t[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=r[n++],u=r[n++],l=r[n++],d=((s&7)<<18|(a&63)<<12|(u&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const a=r[n++],u=r[n++];t[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return t.join("")},ju={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<r.length;s+=3){const a=r[s],u=s+1<r.length,l=u?r[s+1]:0,d=s+2<r.length,f=d?r[s+2]:0,m=a>>2,E=(a&3)<<4|l>>4;let P=(l&15)<<2|f>>6,b=f&63;d||(b=64,u||(P=64)),i.push(n[m],n[E],n[P],n[b])}return i.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(qu(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):xh(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<r.length;){const a=n[r.charAt(s++)],l=s<r.length?n[r.charAt(s)]:0;++s;const f=s<r.length?n[r.charAt(s)]:64;++s;const E=s<r.length?n[r.charAt(s)]:64;if(++s,a==null||l==null||f==null||E==null)throw new Uh;const P=a<<2|l>>4;if(i.push(P),f!==64){const b=l<<4&240|f>>2;if(i.push(b),E!==64){const V=f<<6&192|E;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Uh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fh=function(r){const t=qu(r);return ju.encodeByteArray(t,!0)},$r=function(r){return Fh(r).replace(/\./g,"")},$u=function(r){try{return ju.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=()=>Bh().__FIREBASE_DEFAULTS__,jh=()=>{if(typeof process>"u"||typeof Ia>"u")return;const r=Ia.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},$h=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&$u(r[1]);return t&&JSON.parse(t)},ui=()=>{try{return qh()||jh()||$h()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},zu=r=>{var t,n;return(n=(t=ui())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},zh=r=>{const t=zu(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Wu=()=>{var r;return(r=ui())===null||r===void 0?void 0:r.config},Gu=r=>{var t;return(t=ui())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[$r(JSON.stringify(n)),$r(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Kh(){var r;const t=(r=ui())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jh(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Yh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xh(){const r=Ie();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Zh(){return!Kh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ed(){try{return typeof indexedDB=="object"}catch{return!1}}function td(){return new Promise((r,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),r(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;t(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="FirebaseError";class Ze extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=nd,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xn.prototype.create)}}class Xn{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,a=this.errors[t],u=a?rd(a,i):"Error",l=`${this.serviceName}: ${u} (${s}).`;return new Ze(s,l,i)}}function rd(r,t){return r.replace(id,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const id=/\{\$([^}]+)}/g;function sd(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function zr(r,t){if(r===t)return!0;const n=Object.keys(r),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const a=r[s],u=t[s];if(wa(a)&&wa(u)){if(!zr(a,u))return!1}else if(a!==u)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function wa(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(r){const t=[];for(const[n,i]of Object.entries(r))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Vn(r){const t={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,a]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(a)}}),t}function Dn(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function od(r,t){const n=new ad(r,t);return n.subscribe.bind(n)}class ad{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ud(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=Yi),s.error===void 0&&(s.error=Yi),s.complete===void 0&&(s.complete=Yi);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ud(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Yi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(r){return r&&r._delegate?r._delegate:r}class kt{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Wh;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(hd(t))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(t=Rt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rt){return this.instances.has(t)}getOptions(t=Rt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[a,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);i===l&&u.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),a=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;a.add(t),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&t(u,s),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ld(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Rt){return this.component?this.component.multipleInstances?t:Rt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ld(r){return r===Rt?void 0:r}function hd(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new cd(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(q||(q={}));const fd={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},pd=q.INFO,md={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},gd=(r,t,...n)=>{if(t<r.logLevel)return;const i=new Date().toISOString(),s=md[t];if(s)console[s](`[${i}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Vs{constructor(t){this.name=t,this._logLevel=pd,this._logHandler=gd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?fd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const _d=(r,t)=>t.some(n=>r instanceof n);let va,Aa;function yd(){return va||(va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ed(){return Aa||(Aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hu=new WeakMap,us=new WeakMap,Ku=new WeakMap,Xi=new WeakMap,Ds=new WeakMap;function Td(r){const t=new Promise((n,i)=>{const s=()=>{r.removeEventListener("success",a),r.removeEventListener("error",u)},a=()=>{n(ht(r.result)),s()},u=()=>{i(r.error),s()};r.addEventListener("success",a),r.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&Hu.set(n,r)}).catch(()=>{}),Ds.set(t,r),t}function Id(r){if(us.has(r))return;const t=new Promise((n,i)=>{const s=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",u),r.removeEventListener("abort",u)},a=()=>{n(),s()},u=()=>{i(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",a),r.addEventListener("error",u),r.addEventListener("abort",u)});us.set(r,t)}let cs={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return us.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Ku.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function wd(r){cs=r(cs)}function vd(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=r.call(Zi(this),t,...n);return Ku.set(i,t.sort?t.sort():[t]),ht(i)}:Ed().includes(r)?function(...t){return r.apply(Zi(this),t),ht(Hu.get(this))}:function(...t){return ht(r.apply(Zi(this),t))}}function Ad(r){return typeof r=="function"?vd(r):(r instanceof IDBTransaction&&Id(r),_d(r,yd())?new Proxy(r,cs):r)}function ht(r){if(r instanceof IDBRequest)return Td(r);if(Xi.has(r))return Xi.get(r);const t=Ad(r);return t!==r&&(Xi.set(r,t),Ds.set(t,r)),t}const Zi=r=>Ds.get(r);function Rd(r,t,{blocked:n,upgrade:i,blocking:s,terminated:a}={}){const u=indexedDB.open(r,t),l=ht(u);return i&&u.addEventListener("upgradeneeded",d=>{i(ht(u.result),d.oldVersion,d.newVersion,ht(u.transaction),d)}),n&&u.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),l.then(d=>{a&&d.addEventListener("close",()=>a()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Pd=["get","getKey","getAll","getAllKeys","count"],Sd=["put","add","delete","clear"],es=new Map;function Ra(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(es.get(t))return es.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Sd.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Pd.includes(n)))return;const a=async function(u,...l){const d=this.transaction(u,s?"readwrite":"readonly");let f=d.store;return i&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&d.done]))[0]};return es.set(t,a),a}wd(r=>({...r,get:(t,n,i)=>Ra(t,n)||r.get(t,n,i),has:(t,n)=>!!Ra(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bd(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function bd(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ls="@firebase/app",Pa="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new Vs("@firebase/app"),kd="@firebase/app-compat",Vd="@firebase/analytics-compat",Dd="@firebase/analytics",Nd="@firebase/app-check-compat",Od="@firebase/app-check",Ld="@firebase/auth",Md="@firebase/auth-compat",xd="@firebase/database",Ud="@firebase/data-connect",Fd="@firebase/database-compat",Bd="@firebase/functions",qd="@firebase/functions-compat",jd="@firebase/installations",$d="@firebase/installations-compat",zd="@firebase/messaging",Wd="@firebase/messaging-compat",Gd="@firebase/performance",Hd="@firebase/performance-compat",Kd="@firebase/remote-config",Qd="@firebase/remote-config-compat",Jd="@firebase/storage",Yd="@firebase/storage-compat",Xd="@firebase/firestore",Zd="@firebase/vertexai",ef="@firebase/firestore-compat",tf="firebase",nf="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]",rf={[ls]:"fire-core",[kd]:"fire-core-compat",[Dd]:"fire-analytics",[Vd]:"fire-analytics-compat",[Od]:"fire-app-check",[Nd]:"fire-app-check-compat",[Ld]:"fire-auth",[Md]:"fire-auth-compat",[xd]:"fire-rtdb",[Ud]:"fire-data-connect",[Fd]:"fire-rtdb-compat",[Bd]:"fire-fn",[qd]:"fire-fn-compat",[jd]:"fire-iid",[$d]:"fire-iid-compat",[zd]:"fire-fcm",[Wd]:"fire-fcm-compat",[Gd]:"fire-perf",[Hd]:"fire-perf-compat",[Kd]:"fire-rc",[Qd]:"fire-rc-compat",[Jd]:"fire-gcs",[Yd]:"fire-gcs-compat",[Xd]:"fire-fst",[ef]:"fire-fst-compat",[Zd]:"fire-vertex","fire-js":"fire-js",[tf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map,sf=new Map,ds=new Map;function Sa(r,t){try{r.container.addComponent(t)}catch(n){Qe.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function Yt(r){const t=r.name;if(ds.has(t))return Qe.debug(`There were multiple attempts to register component ${t}.`),!1;ds.set(t,r);for(const n of Wr.values())Sa(n,r);for(const n of sf.values())Sa(n,r);return!0}function Ns(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Ve(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new Xn("app","Firebase",of);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=nf;function Qu(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const i=Object.assign({name:hs,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=Wu()),!n)throw dt.create("no-options");const a=Wr.get(s);if(a){if(zr(n,a.options)&&zr(i,a.config))return a;throw dt.create("duplicate-app",{appName:s})}const u=new dd(s);for(const d of ds.values())u.addComponent(d);const l=new af(n,i,u);return Wr.set(s,l),l}function Ju(r=hs){const t=Wr.get(r);if(!t&&r===hs&&Wu())return Qu();if(!t)throw dt.create("no-app",{appName:r});return t}function ft(r,t,n){var i;let s=(i=rf[r])!==null&&i!==void 0?i:r;n&&(s+=`-${n}`);const a=s.match(/\s|\//),u=t.match(/\s|\//);if(a||u){const l=[`Unable to register library "${s}" with version "${t}":`];a&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&l.push("and"),u&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qe.warn(l.join(" "));return}Yt(new kt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="firebase-heartbeat-database",cf=1,$n="firebase-heartbeat-store";let ts=null;function Yu(){return ts||(ts=Rd(uf,cf,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore($n)}catch(n){console.warn(n)}}}}).catch(r=>{throw dt.create("idb-open",{originalErrorMessage:r.message})})),ts}async function lf(r){try{const n=(await Yu()).transaction($n),i=await n.objectStore($n).get(Xu(r));return await n.done,i}catch(t){if(t instanceof Ze)Qe.warn(t.message);else{const n=dt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qe.warn(n.message)}}}async function Ca(r,t){try{const i=(await Yu()).transaction($n,"readwrite");await i.objectStore($n).put(t,Xu(r)),await i.done}catch(n){if(n instanceof Ze)Qe.warn(n.message);else{const i=dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qe.warn(i.message)}}}function Xu(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=1024,df=30*24*60*60*1e3;class ff{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mf(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ba();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const l=new Date(u.date).valueOf();return Date.now()-l<=df}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Qe.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ba(),{heartbeatsToSend:i,unsentEntries:s}=pf(this._heartbeatsCache.heartbeats),a=$r(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Qe.warn(n),""}}}function ba(){return new Date().toISOString().substring(0,10)}function pf(r,t=hf){const n=[];let i=r.slice();for(const s of r){const a=n.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),ka(n)>t){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ka(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class mf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ed()?td().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ka(r){return $r(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r){Yt(new kt("platform-logger",t=>new Cd(t),"PRIVATE")),Yt(new kt("heartbeat",t=>new ff(t),"PRIVATE")),ft(ls,Pa,r),ft(ls,Pa,"esm2017"),ft("fire-js","")}gf("");var _f="firebase",yf="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(_f,yf,"app");function Os(r,t){var n={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&t.indexOf(i)<0&&(n[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(r);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(r,i[s])&&(n[i[s]]=r[i[s]]);return n}function Zu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ef=Zu,ec=new Xn("auth","Firebase",Zu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new Vs("@firebase/auth");function Tf(r,...t){Gr.logLevel<=q.WARN&&Gr.warn(`Auth (${an}): ${r}`,...t)}function Nr(r,...t){Gr.logLevel<=q.ERROR&&Gr.error(`Auth (${an}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(r,...t){throw Ms(r,...t)}function Ne(r,...t){return Ms(r,...t)}function Ls(r,t,n){const i=Object.assign(Object.assign({},Ef()),{[t]:n});return new Xn("auth","Firebase",i).create(t,{appName:r.name})}function He(r){return Ls(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function If(r,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&be(r,"argument-error"),Ls(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ms(r,...t){if(typeof r!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(n,...i)}return ec.create(r,...t)}function x(r,t,...n){if(!r)throw Ms(t,...n)}function ze(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Nr(t),new Error(t)}function Je(r,t){r||ze(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function wf(){return Va()==="http:"||Va()==="https:"}function Va(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wf()||Jh()||"connection"in navigator)?navigator.onLine:!0}function Af(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,n){this.shortDelay=t,this.longDelay=n,Je(n>t,"Short delay should be less than long delay!"),this.isMobile=Hh()||Yh()}get(){return vf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(r,t){Je(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new er(3e4,6e4);function et(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Fe(r,t,n,i,s={}){return nc(r,s,async()=>{let a={},u={};i&&(t==="GET"?u=i:a={body:JSON.stringify(i)});const l=Zn(Object.assign({key:r.config.apiKey},u)).slice(1),d=await r._getAdditionalHeaders();d["Content-Type"]="application/json",r.languageCode&&(d["X-Firebase-Locale"]=r.languageCode);const f=Object.assign({method:t,headers:d},a);return Qh()||(f.referrerPolicy="no-referrer"),tc.fetch()(rc(r,r.config.apiHost,n,l),f)})}async function nc(r,t,n){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},Rf),t);try{const s=new Cf(r),a=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Sr(r,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const l=a.ok?u.errorMessage:u.error.message,[d,f]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sr(r,"credential-already-in-use",u);if(d==="EMAIL_EXISTS")throw Sr(r,"email-already-in-use",u);if(d==="USER_DISABLED")throw Sr(r,"user-disabled",u);const m=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ls(r,m,f);be(r,m)}}catch(s){if(s instanceof Ze)throw s;be(r,"network-request-failed",{message:String(s)})}}async function tr(r,t,n,i,s={}){const a=await Fe(r,t,n,i,s);return"mfaPendingCredential"in a&&be(r,"multi-factor-auth-required",{_serverResponse:a}),a}function rc(r,t,n,i){const s=`${t}${n}?${i}`;return r.config.emulator?xs(r.config,s):`${r.config.apiScheme}://${s}`}function Sf(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ne(this.auth,"network-request-failed")),Pf.get())})}}function Sr(r,t,n){const i={appName:r.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Ne(r,t,i);return s.customData._tokenResponse=n,s}function Da(r){return r!==void 0&&r.enterprise!==void 0}class bf{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Sf(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kf(r,t){return Fe(r,"GET","/v2/recaptchaConfig",et(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vf(r,t){return Fe(r,"POST","/v1/accounts:delete",t)}async function ic(r,t){return Fe(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Df(r,t=!1){const n=de(r),i=await n.getIdToken(t),s=Us(i);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:i,authTime:xn(ns(s.auth_time)),issuedAtTime:xn(ns(s.iat)),expirationTime:xn(ns(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ns(r){return Number(r)*1e3}function Us(r){const[t,n,i]=r.split(".");if(t===void 0||n===void 0||i===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=$u(n);return s?JSON.parse(s):(Nr("Failed to decode base64 JWT payload"),null)}catch(s){return Nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Na(r){const t=Us(r);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(r,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof Ze&&Nf(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function Nf({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xn(this.lastLoginAt),this.creationTime=xn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(r){var t;const n=r.auth,i=await r.getIdToken(),s=await Xt(r,ic(n,{idToken:i}));x(s==null?void 0:s.users.length,n,"internal-error");const a=s.users[0];r._notifyReloadListener(a);const u=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?sc(a.providerUserInfo):[],l=Mf(r.providerData,u),d=r.isAnonymous,f=!(r.email&&a.passwordHash)&&!(l!=null&&l.length),m=d?f:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new ps(a.createdAt,a.lastLoginAt),isAnonymous:m};Object.assign(r,E)}async function Lf(r){const t=de(r);await Hr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Mf(r,t){return[...r.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function sc(r){return r.map(t=>{var{providerId:n}=t,i=Os(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xf(r,t){const n=await nc(r,{},async()=>{const i=Zn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:a}=r.config,u=rc(r,s,"/v1/token",`key=${a}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",tc.fetch()(u,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Uf(r,t){return Fe(r,"POST","/v2/accounts:revokeToken",et(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Na(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){x(t.length!==0,"internal-error");const n=Na(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:a}=await xf(t,n);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:a}=n,u=new Ht;return i&&(x(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),s&&(x(typeof s=="string","internal-error",{appName:t}),u.accessToken=s),a&&(x(typeof a=="number","internal-error",{appName:t}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ht,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(r,t){x(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class We{constructor(t){var{uid:n,auth:i,stsTokenManager:s}=t,a=Os(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Of(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ps(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await Xt(this,this.stsTokenManager.getToken(this.auth,t));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Df(this,t)}reload(){return Lf(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new We(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Hr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(He(this.auth));const t=await this.getIdToken();return await Xt(this,Vf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,s,a,u,l,d,f,m;const E=(i=n.displayName)!==null&&i!==void 0?i:void 0,P=(s=n.email)!==null&&s!==void 0?s:void 0,b=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,V=(u=n.photoURL)!==null&&u!==void 0?u:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,z=(f=n.createdAt)!==null&&f!==void 0?f:void 0,H=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:K,emailVerified:te,isAnonymous:Se,providerData:ne,stsTokenManager:I}=n;x(K&&I,t,"internal-error");const g=Ht.fromJSON(this.name,I);x(typeof K=="string",t,"internal-error"),ot(E,t.name),ot(P,t.name),x(typeof te=="boolean",t,"internal-error"),x(typeof Se=="boolean",t,"internal-error"),ot(b,t.name),ot(V,t.name),ot(L,t.name),ot(D,t.name),ot(z,t.name),ot(H,t.name);const y=new We({uid:K,auth:t,email:P,emailVerified:te,displayName:E,isAnonymous:Se,photoURL:V,phoneNumber:b,tenantId:L,stsTokenManager:g,createdAt:z,lastLoginAt:H});return ne&&Array.isArray(ne)&&(y.providerData=ne.map(T=>Object.assign({},T))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(t,n,i=!1){const s=new Ht;s.updateFromServerResponse(n);const a=new We({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Hr(a),a}static async _fromGetAccountInfoResponse(t,n,i){const s=n.users[0];x(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?sc(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),l=new Ht;l.updateFromIdToken(i);const d=new We({uid:s.localId,auth:t,stsTokenManager:l,isAnonymous:u}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ps(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(d,f),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Map;function Ge(r){Je(r instanceof Function,"Expected a class definition");let t=Oa.get(r);return t?(Je(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Oa.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}oc.type="NONE";const La=oc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(r,t,n){return`firebase:${r}:${t}:${n}`}class Kt{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=Or(this.userKey,s.apiKey,a),this.fullPersistenceKey=Or("persistence",s.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?We._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Kt(Ge(La),t,i);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let a=s[0]||Ge(La);const u=Or(i,t.config.apiKey,t.name);let l=null;for(const f of n)try{const m=await f._get(u);if(m){const E=We._fromJSON(t,m);f!==a&&(l=E),a=f;break}}catch{}const d=s.filter(f=>f._shouldAllowMigration);return!a._shouldAllowMigration||!d.length?new Kt(a,t,i):(a=d[0],l&&await a._set(u,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==a)try{await f._remove(u)}catch{}})),new Kt(a,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(lc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ac(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(dc(t))return"Blackberry";if(fc(t))return"Webos";if(uc(t))return"Safari";if((t.includes("chrome/")||cc(t))&&!t.includes("edge/"))return"Chrome";if(hc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ac(r=Ie()){return/firefox\//i.test(r)}function uc(r=Ie()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cc(r=Ie()){return/crios\//i.test(r)}function lc(r=Ie()){return/iemobile/i.test(r)}function hc(r=Ie()){return/android/i.test(r)}function dc(r=Ie()){return/blackberry/i.test(r)}function fc(r=Ie()){return/webos/i.test(r)}function Fs(r=Ie()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Ff(r=Ie()){var t;return Fs(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Bf(){return Xh()&&document.documentMode===10}function pc(r=Ie()){return Fs(r)||hc(r)||fc(r)||dc(r)||/windows phone/i.test(r)||lc(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(r,t=[]){let n;switch(r){case"Browser":n=Ma(Ie());break;case"Worker":n=`${Ma(Ie())}-${r}`;break;default:n=r}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${an}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=a=>new Promise((u,l)=>{try{const d=t(a);u(d)}catch(d){l(d)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(r,t={}){return Fe(r,"GET","/v2/passwordPolicy",et(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=6;class zf{constructor(t){var n,i,s,a;const u=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=u.minPasswordLength)!==null&&n!==void 0?n:$f,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,i,s,a,u,l;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,d),this.validatePasswordCharacterOptions(t,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(i=d.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(s=d.containsLowercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(a=d.containsUppercaseLetter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(u=d.containsNumericCharacter)!==null&&u!==void 0?u:!0),d.isValid&&(d.isValid=(l=d.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),d}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,s,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xa(this),this.idTokenSubscription=new xa(this),this.beforeStateQueue=new qf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ec,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ge(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ic(this,{idToken:t}),i=await We._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ve(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(t);(!u||u===l)&&(d!=null&&d.user)&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Hr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Af()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ve(this.app))return Promise.reject(He(this));const n=t?de(t):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(He(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ve(this.app)?Promise.reject(He(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await jf(this),n=new zf(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Xn("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Uf(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ge(t)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[Ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let u=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(l,this,"internal-error"),l.then(()=>{u||a(this.currentUser)}),typeof n=="function"){const d=t.addObserver(n,i,s);return()=>{u=!0,d()}}else{const d=t.addObserver(n);return()=>{u=!0,d()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=mc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Tf(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tt(r){return de(r)}class xa{constructor(t){this.auth=t,this.observer=null,this.addObserver=od(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gf(r){ci=r}function gc(r){return ci.loadJS(r)}function Hf(){return ci.recaptchaEnterpriseScript}function Kf(){return ci.gapiScript}function Qf(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Jf{constructor(){this.enterprise=new Yf}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Yf{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const Xf="recaptcha-enterprise",_c="NO_RECAPTCHA";class Zf{constructor(t){this.type=Xf,this.auth=tt(t)}async verify(t="verify",n=!1){async function i(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,l)=>{kf(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new bf(d);return a.tenantId==null?a._agentRecaptchaConfig=f:a._tenantRecaptchaConfigs[a.tenantId]=f,u(f.siteKey)}}).catch(d=>{l(d)})})}function s(a,u,l){const d=window.grecaptcha;Da(d)?d.enterprise.ready(()=>{d.enterprise.execute(a,{action:t}).then(f=>{u(f)}).catch(()=>{u(_c)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jf().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{i(this.auth).then(l=>{if(!n&&Da(window.grecaptcha))s(l,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let d=Hf();d.length!==0&&(d+=l),gc(d).then(()=>{s(l,a,u)}).catch(f=>{u(f)})}}).catch(l=>{u(l)})})}}async function Ua(r,t,n,i=!1,s=!1){const a=new Zf(r);let u;if(s)u=_c;else try{u=await a.verify(n)}catch{u=await a.verify(n,!0)}const l=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:u}):Object.assign(l,{captchaResponse:u}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Kr(r,t,n,i,s){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Ua(r,t,n,n==="getOobCode");return i(r,u)}else return i(r,t).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ua(r,t,n,n==="getOobCode");return i(r,l)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(r,t){const n=Ns(r,"auth");if(n.isInitialized()){const s=n.getImmediate(),a=n.getOptions();if(zr(a,t??{}))return s;be(s,"already-initialized")}return n.initialize({options:t})}function tp(r,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ge);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function np(r,t,n){const i=tt(r);x(i._canInitEmulator,i,"emulator-config-failed"),x(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,a=yc(t),{host:u,port:l}=rp(t),d=l===null?"":`:${l}`;i.config.emulator={url:`${a}//${u}${d}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),ip()}function yc(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function rp(r){const t=yc(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:Fa(i.substr(a.length+1))}}else{const[a,u]=i.split(":");return{host:a,port:Fa(u)}}}function Fa(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function ip(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ze("not implemented")}_getIdTokenResponse(t){return ze("not implemented")}_linkToIdToken(t,n){return ze("not implemented")}_getReauthenticationResolver(t){return ze("not implemented")}}async function sp(r,t){return Fe(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(r,t){return tr(r,"POST","/v1/accounts:signInWithPassword",et(r,t))}async function ap(r,t){return Fe(r,"POST","/v1/accounts:sendOobCode",et(r,t))}async function up(r,t){return ap(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(r,t){return tr(r,"POST","/v1/accounts:signInWithEmailLink",et(r,t))}async function lp(r,t){return tr(r,"POST","/v1/accounts:signInWithEmailLink",et(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Bs{constructor(t,n,i,s=null){super("password",i),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new zn(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new zn(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kr(t,n,"signInWithPassword",op);case"emailLink":return cp(t,{email:this._email,oobCode:this._password});default:be(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kr(t,i,"signUpPassword",sp);case"emailLink":return lp(t,{idToken:n,email:this._email,oobCode:this._password});default:be(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(r,t){return tr(r,"POST","/v1/accounts:signInWithIdp",et(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="http://localhost";class Vt extends Bs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Vt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=n,a=Os(n,["providerId","signInMethod"]);if(!i||!s)return null;const u=new Vt(i,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Qt(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Qt(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Qt(t,n)}buildRequest(){const t={requestUri:hp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Zn(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fp(r){const t=Vn(Dn(r)).link,n=t?Vn(Dn(t)).deep_link_id:null,i=Vn(Dn(r)).deep_link_id;return(i?Vn(Dn(i)).link:null)||i||n||t||r}class qs{constructor(t){var n,i,s,a,u,l;const d=Vn(Dn(t)),f=(n=d.apiKey)!==null&&n!==void 0?n:null,m=(i=d.oobCode)!==null&&i!==void 0?i:null,E=dp((s=d.mode)!==null&&s!==void 0?s:null);x(f&&m&&E,"argument-error"),this.apiKey=f,this.operation=E,this.code=m,this.continueUrl=(a=d.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=d.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(l=d.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const n=fp(t);try{return new qs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.providerId=un.PROVIDER_ID}static credential(t,n){return zn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=qs.parseLink(n);return x(i,"argument-error"),zn._fromEmailAndCode(t,i.code,i.tenantId)}}un.PROVIDER_ID="password";un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends js{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends nr{constructor(){super("facebook.com")}static credential(t){return Vt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return at.credentialFromTaggedObject(t)}static credentialFromError(t){return at.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return at.credential(t.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends nr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Vt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return $e.credentialFromTaggedObject(t)}static credentialFromError(t){return $e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return $e.credential(n,i)}catch{return null}}}$e.GOOGLE_SIGN_IN_METHOD="google.com";$e.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends nr{constructor(){super("github.com")}static credential(t){return Vt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ut.credentialFromTaggedObject(t)}static credentialFromError(t){return ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ut.credential(t.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends nr{constructor(){super("twitter.com")}static credential(t,n){return Vt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ct.credentialFromTaggedObject(t)}static credentialFromError(t){return ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ct.credential(n,i)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(r,t){return tr(r,"POST","/v1/accounts:signUp",et(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const a=await We._fromIdTokenResponse(t,i,s),u=Ba(i);return new Dt({user:a,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=Ba(i);return new Dt({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function Ba(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Ze{constructor(t,n,i,s){var a;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new Qr(t,n,i,s)}}function Ec(r,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(r,a,t,i):a})}async function mp(r,t,n=!1){const i=await Xt(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Dt._forOperation(r,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gp(r,t,n=!1){const{auth:i}=r;if(Ve(i.app))return Promise.reject(He(i));const s="reauthenticate";try{const a=await Xt(r,Ec(i,s,t,r),n);x(a.idToken,i,"internal-error");const u=Us(a.idToken);x(u,i,"internal-error");const{sub:l}=u;return x(r.uid===l,i,"user-mismatch"),Dt._forOperation(r,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&be(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(r,t,n=!1){if(Ve(r.app))return Promise.reject(He(r));const i="signIn",s=await Ec(r,i,t),a=await Dt._fromIdTokenResponse(r,i,s);return n||await r._updateCurrentUser(a.user),a}async function _p(r,t){return Tc(tt(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(r){const t=tt(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function yp(r,t,n){const i=tt(r);await Kr(i,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",up)}async function Ep(r,t,n){if(Ve(r.app))return Promise.reject(He(r));const i=tt(r),u=await Kr(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pp).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Ic(r),d}),l=await Dt._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(l.user),l}function Tp(r,t,n){return Ve(r.app)?Promise.reject(He(r)):_p(de(r),un.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ic(r),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(r,t){return Fe(r,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(r,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const i=de(r),a={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},u=await Xt(i,Ip(i.auth,a));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const l=i.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function vp(r,t,n,i){return de(r).onIdTokenChanged(t,n,i)}function Ap(r,t,n){return de(r).beforeAuthStateChanged(t,n)}function qa(r,t,n,i){return de(r).onAuthStateChanged(t,n,i)}function Rp(r){return de(r).signOut()}const Jr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jr,"1"),this.storage.removeItem(Jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=1e3,Sp=10;class vc extends wc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,l,d)=>{this.notifyListeners(u,d)});return}const i=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},a=this.storage.getItem(i);Bf()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Sp):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},Pp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}vc.type="LOCAL";const Cp=vc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends wc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Ac.type="SESSION";const Rc=Ac;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new li(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:a}=n.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(u).map(async f=>f(n.origin,a)),d=await bp(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:d})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}li.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(r="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((l,d)=>{const f=$s("",20);s.port1.start();const m=setTimeout(()=>{d(new Error("unsupported_event"))},i);u={messageChannel:s,onMessage(E){const P=E;if(P.data.eventId===f)switch(P.data.status){case"ack":clearTimeout(m),a=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(P.data.response);break;default:clearTimeout(m),clearTimeout(a),d(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:f,data:n},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function Vp(r){Le().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){return typeof Le().WorkerGlobalScope<"u"&&typeof Le().importScripts=="function"}async function Dp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Np(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Op(){return Pc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="firebaseLocalStorageDb",Lp=1,Yr="firebaseLocalStorage",Cc="fbase_key";class rr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hi(r,t){return r.transaction([Yr],t?"readwrite":"readonly").objectStore(Yr)}function Mp(){const r=indexedDB.deleteDatabase(Sc);return new rr(r).toPromise()}function ms(){const r=indexedDB.open(Sc,Lp);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Yr,{keyPath:Cc})}catch(s){n(s)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(Yr)?t(i):(i.close(),await Mp(),t(await ms()))})})}async function ja(r,t,n){const i=hi(r,!0).put({[Cc]:t,value:n});return new rr(i).toPromise()}async function xp(r,t){const n=hi(r,!1).get(t),i=await new rr(n).toPromise();return i===void 0?null:i.value}function $a(r,t){const n=hi(r,!0).delete(t);return new rr(n).toPromise()}const Up=800,Fp=3;class bc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ms(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>Fp)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=li._getInstance(Op()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Dp(),!this.activeServiceWorker)return;this.sender=new kp(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Np()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ms();return await ja(t,Jr,"1"),await $a(t,Jr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ja(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>xp(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>$a(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const a=hi(s,!1).getAll();return new rr(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:a}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Up)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bc.type="LOCAL";const Bp=bc;new er(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(r,t){return t?Ge(t):(x(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Bs{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Qt(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Qt(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Qt(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function qp(r){return Tc(r.auth,new zs(r),r.bypassAuthState)}function jp(r){const{auth:t,user:n}=r;return x(n,t,"internal-error"),gp(n,new zs(r),r.bypassAuthState)}async function $p(r){const{auth:t,user:n}=r;return x(n,t,"internal-error"),mp(n,new zs(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n,i,s,a=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:a,error:u,type:l}=t;if(u){this.reject(u);return}const d={auth:this.auth,requestUri:n,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(f){this.reject(f)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return qp;case"linkViaPopup":case"linkViaRedirect":return $p;case"reauthViaPopup":case"reauthViaRedirect":return jp;default:be(this.auth,"internal-error")}}resolve(t){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=new er(2e3,1e4);async function Wp(r,t,n){if(Ve(r.app))return Promise.reject(Ne(r,"operation-not-supported-in-this-environment"));const i=tt(r);If(r,t,js);const s=kc(i,n);return new Pt(i,"signInViaPopup",t,s).executeNotNull()}class Pt extends Vc{constructor(t,n,i,s,a){super(t,n,s,a),this.provider=i,this.authWindow=null,this.pollId=null,Pt.currentPopupAction&&Pt.currentPopupAction.cancel(),Pt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const t=$s();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,zp.get())};t()}}Pt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="pendingRedirect",Lr=new Map;class Hp extends Vc{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Lr.get(this.auth._key());if(!t){try{const i=await Kp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Lr.set(this.auth._key(),t)}return this.bypassAuthState||Lr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kp(r,t){const n=Yp(t),i=Jp(r);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Qp(r,t){Lr.set(r._key(),t)}function Jp(r){return Ge(r._redirectPersistence)}function Yp(r){return Or(Gp,r.config.apiKey,r.name)}async function Xp(r,t,n=!1){if(Ve(r.app))return Promise.reject(He(r));const i=tt(r),s=kc(i,t),u=await new Hp(i,s,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=10*60*1e3;class em{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!tm(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!Dc(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Ne(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Zp&&this.cachedEventUids.clear(),this.cachedEventUids.has(za(t))}saveEventToCache(t){this.cachedEventUids.add(za(t)),this.lastProcessedEventTime=Date.now()}}function za(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function Dc({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function tm(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dc(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(r,t={}){return Fe(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,im=/^https?/;async function sm(r){if(r.config.emulator)return;const{authorizedDomains:t}=await nm(r);for(const n of t)try{if(om(n))return}catch{}be(r,"unauthorized-domain")}function om(r){const t=fs(),{protocol:n,hostname:i}=new URL(t);if(r.startsWith("chrome-extension://")){const u=new URL(r);return u.hostname===""&&i===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!im.test(n))return!1;if(rm.test(r))return i===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=new er(3e4,6e4);function Wa(){const r=Le().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function um(r){return new Promise((t,n)=>{var i,s,a;function u(){Wa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wa(),n(Ne(r,"network-request-failed"))},timeout:am.get()})}if(!((s=(i=Le().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((a=Le().gapi)===null||a===void 0)&&a.load)u();else{const l=Qf("iframefcb");return Le()[l]=()=>{gapi.load?u():n(Ne(r,"network-request-failed"))},gc(`${Kf()}?onload=${l}`).catch(d=>n(d))}}).catch(t=>{throw Mr=null,t})}let Mr=null;function cm(r){return Mr=Mr||um(r),Mr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new er(5e3,15e3),hm="__/auth/iframe",dm="emulator/auth/iframe",fm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mm(r){const t=r.config;x(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?xs(t,dm):`https://${r.config.authDomain}/${hm}`,i={apiKey:t.apiKey,appName:r.name,v:an},s=pm.get(r.config.apiHost);s&&(i.eid=s);const a=r._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${Zn(i).slice(1)}`}async function gm(r){const t=await cm(r),n=Le().gapi;return x(n,r,"internal-error"),t.open({where:document.body,url:mm(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fm,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const u=Ne(r,"network-request-failed"),l=Le().setTimeout(()=>{a(u)},lm.get());function d(){Le().clearTimeout(l),s(i)}i.ping(d).then(d,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ym=500,Em=600,Tm="_blank",Im="http://localhost";class Ga{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wm(r,t,n,i=ym,s=Em){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const d=Object.assign(Object.assign({},_m),{width:i.toString(),height:s.toString(),top:a,left:u}),f=Ie().toLowerCase();n&&(l=cc(f)?Tm:n),ac(f)&&(t=t||Im,d.scrollbars="yes");const m=Object.entries(d).reduce((P,[b,V])=>`${P}${b}=${V},`,"");if(Ff(f)&&l!=="_self")return vm(t||"",l),new Ga(null);const E=window.open(t||"",l,m);x(E,r,"popup-blocked");try{E.focus()}catch{}return new Ga(E)}function vm(r,t){const n=document.createElement("a");n.href=r,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="__/auth/handler",Rm="emulator/auth/handler",Pm=encodeURIComponent("fac");async function Ha(r,t,n,i,s,a){x(r.config.authDomain,r,"auth-domain-config-required"),x(r.config.apiKey,r,"invalid-api-key");const u={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:i,v:an,eventId:s};if(t instanceof js){t.setDefaultLanguage(r.languageCode),u.providerId=t.providerId||"",sd(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[m,E]of Object.entries({}))u[m]=E}if(t instanceof nr){const m=t.getScopes().filter(E=>E!=="");m.length>0&&(u.scopes=m.join(","))}r.tenantId&&(u.tid=r.tenantId);const l=u;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const d=await r._getAppCheckToken(),f=d?`#${Pm}=${encodeURIComponent(d)}`:"";return`${Sm(r)}?${Zn(l).slice(1)}${f}`}function Sm({config:r}){return r.emulator?xs(r,Rm):`https://${r.authDomain}/${Am}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="webStorageSupport";class Cm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rc,this._completeRedirectFn=Xp,this._overrideRedirectResult=Qp}async _openPopup(t,n,i,s){var a;Je((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Ha(t,n,i,fs(),s);return wm(t,u,$s())}async _openRedirect(t,n,i,s){await this._originValidation(t);const a=await Ha(t,n,i,fs(),s);return Vp(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:a}=this.eventManagers[n];return s?Promise.resolve(s):(Je(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await gm(t),i=new em(t);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(rs,{type:rs},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[rs];u!==void 0&&n(!!u),be(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sm(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return pc()||uc()||Fs()}}const bm=Cm;var Ka="@firebase/auth",Qa="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dm(r){Yt(new kt("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:u,authDomain:l}=i.options;x(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const d={apiKey:u,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mc(r)},f=new Wf(i,s,a,d);return tp(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Yt(new kt("auth-internal",t=>{const n=tt(t.getProvider("auth").getImmediate());return(i=>new km(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Ka,Qa,Vm(r)),ft(Ka,Qa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=5*60,Om=Gu("authIdTokenMaxAge")||Nm;let Ja=null;const Lm=r=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Om)return;const s=n==null?void 0:n.token;Ja!==s&&(Ja=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mm(r=Ju()){const t=Ns(r,"auth");if(t.isInitialized())return t.getImmediate();const n=ep(r,{popupRedirectResolver:bm,persistence:[Bp,Cp,Rc]}),i=Gu("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const u=Lm(a.toString());Ap(n,u,()=>u(n.currentUser)),vp(n,l=>u(l))}}const s=zu("auth");return s&&np(n,`http://${s}`),n}function xm(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}Gf({loadJS(r){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=t,i.onerror=s=>{const a=Ne("internal-error");a.customData=s,n(a)},i.type="text/javascript",i.charset="UTF-8",xm().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dm("Browser");var Ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ct,Nc;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function y(){}y.prototype=g.prototype,I.D=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,w,A){for(var _=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)_[Be-2]=arguments[Be];return g.prototype[w].apply(T,_)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);var T=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)T[w]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(w=0;16>w;++w)T[w]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],w=I.g[2];var A=I.g[3],_=g+(A^y&(w^A))+T[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=A+(w^g&(y^w))+T[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=w+(y^A&(g^y))+T[2]+606105819&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(g^w&(A^g))+T[3]+3250441966&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(A^y&(w^A))+T[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(w^g&(y^w))+T[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=w+(y^A&(g^y))+T[6]+2821735955&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(g^w&(A^g))+T[7]+4249261313&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(A^y&(w^A))+T[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(w^g&(y^w))+T[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=w+(y^A&(g^y))+T[10]+4294925233&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(g^w&(A^g))+T[11]+2304563134&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(A^y&(w^A))+T[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(w^g&(y^w))+T[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=w+(y^A&(g^y))+T[14]+2792965006&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(g^w&(A^g))+T[15]+1236535329&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(w^A&(y^w))+T[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(g^y))+T[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(A^g))+T[11]+643717713&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(w^A))+T[0]+3921069994&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^A&(y^w))+T[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(g^y))+T[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(A^g))+T[15]+3634488961&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(w^A))+T[4]+3889429448&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^A&(y^w))+T[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(g^y))+T[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(A^g))+T[3]+4107603335&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(w^A))+T[8]+1163531501&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^A&(y^w))+T[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(g^y))+T[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(A^g))+T[7]+1735328473&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(w^A))+T[12]+2368359562&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(y^w^A)+T[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^w)+T[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=w+(A^g^y)+T[11]+1839030562&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^g)+T[14]+4259657740&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^A)+T[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^w)+T[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=w+(A^g^y)+T[7]+4139469664&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^g)+T[10]+3200236656&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^A)+T[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^w)+T[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=w+(A^g^y)+T[3]+3572445317&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^g)+T[6]+76029189&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^A)+T[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^w)+T[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=w+(A^g^y)+T[15]+530742520&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^g)+T[2]+3299628645&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(w^(y|~A))+T[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~w))+T[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=w+(g^(A|~y))+T[14]+2878612391&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~g))+T[5]+4237533241&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~A))+T[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~w))+T[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=w+(g^(A|~y))+T[10]+4293915773&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~g))+T[1]+2240044497&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~A))+T[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~w))+T[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=w+(g^(A|~y))+T[6]+2734768916&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~g))+T[13]+1309151649&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~A))+T[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~w))+T[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=w+(g^(A|~y))+T[2]+718787259&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~g))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+A&4294967295}i.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var y=g-this.blockSize,T=this.B,w=this.h,A=0;A<g;){if(w==0)for(;A<=y;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<g;)if(T[w++]=I.charCodeAt(A++),w==this.blockSize){s(this,T),w=0;break}}else for(;A<g;)if(T[w++]=I[A++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=g},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var y=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=y&255,y/=256;for(this.u(I),I=Array(16),g=y=0;4>g;++g)for(var T=0;32>T;T+=8)I[y++]=this.g[g]>>>T&255;return I};function a(I,g){var y=l;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function u(I,g){this.h=g;for(var y=[],T=!0,w=I.length-1;0<=w;w--){var A=I[w]|0;T&&A==g||(y[w]=A,T=!1)}this.g=y}var l={};function d(I){return-128<=I&&128>I?a(I,function(g){return new u([g|0],0>g?-1:0)}):new u([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return E;if(0>I)return D(f(-I));for(var g=[],y=1,T=0;I>=y;T++)g[T]=I/y|0,y*=4294967296;return new u(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return D(m(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(g,8)),T=E,w=0;w<I.length;w+=8){var A=Math.min(8,I.length-w),_=parseInt(I.substring(w,w+A),g);8>A?(A=f(Math.pow(g,A)),T=T.j(A).add(f(_))):(T=T.j(y),T=T.add(f(_)))}return T}var E=d(0),P=d(1),b=d(16777216);r=u.prototype,r.m=function(){if(L(this))return-D(this).m();for(var I=0,g=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*g,g*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(L(this))return"-"+D(this).toString(I);for(var g=f(Math.pow(I,6)),y=this,T="";;){var w=te(y,g).g;y=z(y,w.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=w,V(y))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function L(I){return I.h==-1}r.l=function(I){return I=z(this,I),L(I)?-1:V(I)?0:1};function D(I){for(var g=I.g.length,y=[],T=0;T<g;T++)y[T]=~I.g[T];return new u(y,~I.h).add(P)}r.abs=function(){return L(this)?D(this):this},r.add=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0,w=0;w<=g;w++){var A=T+(this.i(w)&65535)+(I.i(w)&65535),_=(A>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);T=_>>>16,A&=65535,_&=65535,y[w]=_<<16|A}return new u(y,y[y.length-1]&-2147483648?-1:0)};function z(I,g){return I.add(D(g))}r.j=function(I){if(V(this)||V(I))return E;if(L(this))return L(I)?D(this).j(D(I)):D(D(this).j(I));if(L(I))return D(this.j(D(I)));if(0>this.l(b)&&0>I.l(b))return f(this.m()*I.m());for(var g=this.g.length+I.g.length,y=[],T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<I.g.length;w++){var A=this.i(T)>>>16,_=this.i(T)&65535,Be=I.i(w)>>>16,pn=I.i(w)&65535;y[2*T+2*w]+=_*pn,H(y,2*T+2*w),y[2*T+2*w+1]+=A*pn,H(y,2*T+2*w+1),y[2*T+2*w+1]+=_*Be,H(y,2*T+2*w+1),y[2*T+2*w+2]+=A*Be,H(y,2*T+2*w+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new u(y,0)};function H(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function K(I,g){this.g=I,this.h=g}function te(I,g){if(V(g))throw Error("division by zero");if(V(I))return new K(E,E);if(L(I))return g=te(D(I),g),new K(D(g.g),D(g.h));if(L(g))return g=te(I,D(g)),new K(D(g.g),g.h);if(30<I.g.length){if(L(I)||L(g))throw Error("slowDivide_ only works with positive integers.");for(var y=P,T=g;0>=T.l(I);)y=Se(y),T=Se(T);var w=ne(y,1),A=ne(T,1);for(T=ne(T,2),y=ne(y,2);!V(T);){var _=A.add(T);0>=_.l(I)&&(w=w.add(y),A=_),T=ne(T,1),y=ne(y,1)}return g=z(I,w.j(g)),new K(w,g)}for(w=E;0<=I.l(g);){for(y=Math.max(1,Math.floor(I.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=f(y),_=A.j(g);L(_)||0<_.l(I);)y-=T,A=f(y),_=A.j(g);V(A)&&(A=P),w=w.add(A),I=z(I,_)}return new K(w,I)}r.A=function(I){return te(this,I).h},r.and=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)&I.i(T);return new u(y,this.h&I.h)},r.or=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)|I.i(T);return new u(y,this.h|I.h)},r.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)^I.i(T);return new u(y,this.h^I.h)};function Se(I){for(var g=I.g.length+1,y=[],T=0;T<g;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new u(y,I.h)}function ne(I,g){var y=g>>5;g%=32;for(var T=I.g.length-y,w=[],A=0;A<T;A++)w[A]=0<g?I.i(A+y)>>>g|I.i(A+y+1)<<32-g:I.i(A+y);return new u(w,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Nc=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=m,Ct=u}).apply(typeof Ya<"u"?Ya:typeof self<"u"?self:typeof window<"u"?window:{});var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oc,Nn,Lc,xr,gs,Mc,xc,Uc;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cr=="object"&&Cr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=n(this);function s(o,c){if(c)e:{var h=i;o=o.split(".");for(var p=0;p<o.length-1;p++){var v=o[p];if(!(v in h))break e;h=h[v]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function a(o,c){o instanceof String&&(o+="");var h=0,p=!1,v={next:function(){if(!p&&h<o.length){var R=h++;return{value:c(R,o[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(o){return o||function(){return a(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function d(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function f(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function m(o,c,h){return o.call.apply(o.bind,arguments)}function E(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,p),o.apply(c,v)}}return function(){return o.apply(c,arguments)}}function P(o,c,h){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,P.apply(null,arguments)}function b(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function V(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,v,R){for(var k=Array(arguments.length-2),J=2;J<arguments.length;J++)k[J-2]=arguments[J];return c.prototype[v].apply(p,k)}}function L(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function D(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(d(p)){const v=o.length||0,R=p.length||0;o.length=v+R;for(let k=0;k<R;k++)o[v+k]=p[k]}else o.push(p)}}class z{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function H(o){return/^[\s\xa0]*$/.test(o)}function K(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function te(o){return te[" "](o),o}te[" "]=function(){};var Se=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ne(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function I(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,p;for(let v=1;v<arguments.length;v++){p=arguments[v];for(h in p)o[h]=p[h];for(let R=0;R<y.length;R++)h=y[R],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function w(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function A(o){l.setTimeout(()=>{throw o},0)}function _(){var o=Si;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Be{constructor(){this.h=this.g=null}add(c,h){const p=pn.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var pn=new z(()=>new nh,o=>o.reset());class nh{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let mn,gn=!1,Si=new Be,Io=()=>{const o=l.Promise.resolve(void 0);mn=()=>{o.then(rh)}};var rh=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){A(h)}var c=pn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}gn=!1};function nt(){this.s=this.s,this.C=this.C}nt.prototype.s=!1,nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var ih=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function _n(o,c){if(pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(Se){e:{try{te(c.nodeName);var v=!0;break e}catch{}v=!1}v||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:sh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&_n.aa.h.call(this)}}V(_n,pe);var sh={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ur="closure_listenable_"+(1e6*Math.random()|0),oh=0;function ah(o,c,h,p,v){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=v,this.key=++oh,this.da=this.fa=!1}function cr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function lr(o){this.src=o,this.g={},this.h=0}lr.prototype.add=function(o,c,h,p,v){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var k=bi(o,c,p,v);return-1<k?(c=o[k],h||(c.fa=!1)):(c=new ah(c,this.src,R,!!p,v),c.fa=h,o.push(c)),c};function Ci(o,c){var h=c.type;if(h in o.g){var p=o.g[h],v=Array.prototype.indexOf.call(p,c,void 0),R;(R=0<=v)&&Array.prototype.splice.call(p,v,1),R&&(cr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function bi(o,c,h,p){for(var v=0;v<o.length;++v){var R=o[v];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==p)return v}return-1}var ki="closure_lm_"+(1e6*Math.random()|0),Vi={};function wo(o,c,h,p,v){if(Array.isArray(c)){for(var R=0;R<c.length;R++)wo(o,c[R],h,p,v);return null}return h=Ro(h),o&&o[ur]?o.K(c,h,f(p)?!!p.capture:!1,v):uh(o,c,h,!1,p,v)}function uh(o,c,h,p,v,R){if(!c)throw Error("Invalid event type");var k=f(v)?!!v.capture:!!v,J=Ni(o);if(J||(o[ki]=J=new lr(o)),h=J.add(c,h,p,k,R),h.proxy)return h;if(p=ch(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)ih||(v=k),v===void 0&&(v=!1),o.addEventListener(c.toString(),p,v);else if(o.attachEvent)o.attachEvent(Ao(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ch(){function o(h){return c.call(o.src,o.listener,h)}const c=lh;return o}function vo(o,c,h,p,v){if(Array.isArray(c))for(var R=0;R<c.length;R++)vo(o,c[R],h,p,v);else p=f(p)?!!p.capture:!!p,h=Ro(h),o&&o[ur]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],h=bi(R,h,p,v),-1<h&&(cr(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ni(o))&&(c=o.g[c.toString()],o=-1,c&&(o=bi(c,h,p,v)),(h=-1<o?c[o]:null)&&Di(h))}function Di(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[ur])Ci(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(Ao(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Ni(c))?(Ci(h,o),h.h==0&&(h.src=null,c[ki]=null)):cr(o)}}}function Ao(o){return o in Vi?Vi[o]:Vi[o]="on"+o}function lh(o,c){if(o.da)o=!0;else{c=new _n(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&Di(o),o=h.call(p,c)}return o}function Ni(o){return o=o[ki],o instanceof lr?o:null}var Oi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ro(o){return typeof o=="function"?o:(o[Oi]||(o[Oi]=function(c){return o.handleEvent(c)}),o[Oi])}function me(){nt.call(this),this.i=new lr(this),this.M=this,this.F=null}V(me,nt),me.prototype[ur]=!0,me.prototype.removeEventListener=function(o,c,h,p){vo(this,o,c,h,p)};function we(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new pe(c,o);else if(c instanceof pe)c.target=c.target||o;else{var v=c;c=new pe(p,o),T(c,v)}if(v=!0,h)for(var R=h.length-1;0<=R;R--){var k=c.g=h[R];v=hr(k,p,!0,c)&&v}if(k=c.g=o,v=hr(k,p,!0,c)&&v,v=hr(k,p,!1,c)&&v,h)for(R=0;R<h.length;R++)k=c.g=h[R],v=hr(k,p,!1,c)&&v}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)cr(h[p]);delete o.g[c],o.h--}}this.F=null},me.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},me.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function hr(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var v=!0,R=0;R<c.length;++R){var k=c[R];if(k&&!k.da&&k.capture==h){var J=k.listener,ce=k.ha||k.src;k.fa&&Ci(o.i,k),v=J.call(ce,p)!==!1&&v}}return v&&!p.defaultPrevented}function Po(o,c,h){if(typeof o=="function")h&&(o=P(o,h));else if(o&&typeof o.handleEvent=="function")o=P(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function So(o){o.g=Po(()=>{o.g=null,o.i&&(o.i=!1,So(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class hh extends nt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:So(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(o){nt.call(this),this.h=o,this.g={}}V(yn,nt);var Co=[];function bo(o){ne(o.g,function(c,h){this.g.hasOwnProperty(h)&&Di(c)},o),o.g={}}yn.prototype.N=function(){yn.aa.N.call(this),bo(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Li=l.JSON.stringify,dh=l.JSON.parse,fh=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Mi(){}Mi.prototype.h=null;function ko(o){return o.h||(o.h=o.i())}function Vo(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xi(){pe.call(this,"d")}V(xi,pe);function Ui(){pe.call(this,"c")}V(Ui,pe);var Tt={},Do=null;function dr(){return Do=Do||new me}Tt.La="serverreachability";function No(o){pe.call(this,Tt.La,o)}V(No,pe);function Tn(o){const c=dr();we(c,new No(c))}Tt.STAT_EVENT="statevent";function Oo(o,c){pe.call(this,Tt.STAT_EVENT,o),this.stat=c}V(Oo,pe);function ve(o){const c=dr();we(c,new Oo(c,o))}Tt.Ma="timingevent";function Lo(o,c){pe.call(this,Tt.Ma,o),this.size=c}V(Lo,pe);function In(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function ph(o,c,h,p,v,R){o.info(function(){if(o.g)if(R)for(var k="",J=R.split("&"),ce=0;ce<J.length;ce++){var G=J[ce].split("=");if(1<G.length){var ge=G[0];G=G[1];var _e=ge.split("_");k=2<=_e.length&&_e[1]=="type"?k+(ge+"="+G+"&"):k+(ge+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+p+") [attempt "+v+"]: "+c+`
`+h+`
`+k})}function mh(o,c,h,p,v,R,k){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+v+"]: "+c+`
`+h+`
`+R+" "+k})}function Ft(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+_h(o,h)+(p?" "+p:"")})}function gh(o,c){o.info(function(){return"TIMEOUT: "+c})}wn.prototype.info=function(){};function _h(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var v=p[1];if(Array.isArray(v)&&!(1>v.length)){var R=v[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<v.length;k++)v[k]=""}}}}return Li(h)}catch{return c}}var fr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fi;function pr(){}V(pr,Mi),pr.prototype.g=function(){return new XMLHttpRequest},pr.prototype.i=function(){return{}},Fi=new pr;function rt(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xo}function xo(){this.i=null,this.g="",this.h=!1}var Uo={},Bi={};function qi(o,c,h){o.L=1,o.v=yr(qe(c)),o.m=h,o.P=!0,Fo(o,null)}function Fo(o,c){o.F=Date.now(),mr(o),o.A=qe(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Zo(h.i,"t",p),o.C=0,h=o.j.J,o.h=new xo,o.g=_a(o.j,h?c:null,!o.m),0<o.O&&(o.M=new hh(P(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var v="readystatechange";Array.isArray(v)||(v&&(Co[0]=v.toString()),v=Co);for(var R=0;R<v.length;R++){var k=wo(h,v[R],p||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Tn(),ph(o.i,o.u,o.A,o.l,o.R,o.m)}rt.prototype.ca=function(o){o=o.target;const c=this.M;c&&je(o)==3?c.j():this.Y(o)},rt.prototype.Y=function(o){try{if(o==this.g)e:{const _e=je(this.g);var c=this.g.Ba();const jt=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||oa(this.g)))){this.J||_e!=4||c==7||(c==8||0>=jt?Tn(3):Tn(2)),ji(this);var h=this.g.Z();this.X=h;t:if(Bo(this)){var p=oa(this.g);o="";var v=p.length,R=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){It(this),vn(this);var k="";break t}this.h.i=new l.TextDecoder}for(c=0;c<v;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(R&&c==v-1)});p.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,mh(this.i,this.u,this.A,this.l,this.R,_e,h),this.o){if(this.T&&!this.K){t:{if(this.g){var J,ce=this.g;if((J=ce.g?ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(J)){var G=J;break t}}G=null}if(h=G)Ft(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$i(this,h);else{this.o=!1,this.s=3,ve(12),It(this),vn(this);break e}}if(this.P){h=!0;let ke;for(;!this.J&&this.C<k.length;)if(ke=yh(this,k),ke==Bi){_e==4&&(this.s=4,ve(14),h=!1),Ft(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==Uo){this.s=4,ve(15),Ft(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else Ft(this.i,this.l,ke,null),$i(this,ke);if(Bo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||k.length!=0||this.h.h||(this.s=1,ve(16),h=!1),this.o=this.o&&h,!h)Ft(this.i,this.l,k,"[Invalid Chunked Response]"),It(this),vn(this);else if(0<k.length&&!this.W){this.W=!0;var ge=this.j;ge.g==this&&ge.ba&&!ge.M&&(ge.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Qi(ge),ge.M=!0,ve(11))}}else Ft(this.i,this.l,k,null),$i(this,k);_e==4&&It(this),this.o&&!this.J&&(_e==4?fa(this.j,this):(this.o=!1,mr(this)))}else Lh(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,ve(12)):(this.s=0,ve(13)),It(this),vn(this)}}}catch{}finally{}};function Bo(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function yh(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Bi:(h=Number(c.substring(h,p)),isNaN(h)?Uo:(p+=1,p+h>c.length?Bi:(c=c.slice(p,p+h),o.C=p+h,c)))}rt.prototype.cancel=function(){this.J=!0,It(this)};function mr(o){o.S=Date.now()+o.I,qo(o,o.I)}function qo(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=In(P(o.ba,o),c)}function ji(o){o.B&&(l.clearTimeout(o.B),o.B=null)}rt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(gh(this.i,this.A),this.L!=2&&(Tn(),ve(17)),It(this),this.s=2,vn(this)):qo(this,this.S-o)};function vn(o){o.j.G==0||o.J||fa(o.j,o)}function It(o){ji(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,bo(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function $i(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||zi(h.h,o))){if(!o.K&&zi(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var v=p;if(v[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ar(h),wr(h);else break e;Ki(h),ve(18)}}else h.za=v[1],0<h.za-h.T&&37500>v[2]&&h.F&&h.v==0&&!h.C&&(h.C=In(P(h.Za,h),6e3));if(1>=zo(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else vt(h,11)}else if((o.K||h.g==o)&&Ar(h),!H(c))for(v=h.Da.g.parse(c),c=0;c<v.length;c++){let G=v[c];if(h.T=G[0],G=G[1],h.G==2)if(G[0]=="c"){h.K=G[1],h.ia=G[2];const ge=G[3];ge!=null&&(h.la=ge,h.j.info("VER="+h.la));const _e=G[4];_e!=null&&(h.Aa=_e,h.j.info("SVER="+h.Aa));const jt=G[5];jt!=null&&typeof jt=="number"&&0<jt&&(p=1.5*jt,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const ke=o.g;if(ke){const Pr=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pr){var R=p.h;R.g||Pr.indexOf("spdy")==-1&&Pr.indexOf("quic")==-1&&Pr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Wi(R,R.h),R.h=null))}if(p.D){const Ji=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Ji&&(p.ya=Ji,Y(p.I,p.D,Ji))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var k=o;if(p.qa=ga(p,p.J?p.ia:null,p.W),k.K){Wo(p.h,k);var J=k,ce=p.L;ce&&(J.I=ce),J.B&&(ji(J),mr(J)),p.g=k}else ha(p);0<h.i.length&&vr(h)}else G[0]!="stop"&&G[0]!="close"||vt(h,7);else h.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?vt(h,7):Hi(h):G[0]!="noop"&&h.l&&h.l.ta(G),h.v=0)}}Tn(4)}catch{}}var Eh=class{constructor(o,c){this.g=o,this.map=c}};function jo(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $o(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function zo(o){return o.h?1:o.g?o.g.size:0}function zi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Wi(o,c){o.g?o.g.add(c):o.h=c}function Wo(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}jo.prototype.cancel=function(){if(this.i=Go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Go(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return L(o.i)}function Th(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function Ih(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Ho(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Ih(o),p=Th(o),v=p.length,R=0;R<v;R++)c.call(void 0,p[R],h&&h[R],o)}var Ko=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wh(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),v=null;if(0<=p){var R=o[h].substring(0,p);v=o[h].substring(p+1)}else R=o[h];c(R,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function wt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof wt){this.h=o.h,gr(this,o.j),this.o=o.o,this.g=o.g,_r(this,o.s),this.l=o.l;var c=o.i,h=new Pn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Qo(this,h),this.m=o.m}else o&&(c=String(o).match(Ko))?(this.h=!1,gr(this,c[1]||"",!0),this.o=An(c[2]||""),this.g=An(c[3]||"",!0),_r(this,c[4]),this.l=An(c[5]||"",!0),Qo(this,c[6]||"",!0),this.m=An(c[7]||"")):(this.h=!1,this.i=new Pn(null,this.h))}wt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Rn(c,Jo,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Rn(c,Jo,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Rn(h,h.charAt(0)=="/"?Rh:Ah,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Rn(h,Sh)),o.join("")};function qe(o){return new wt(o)}function gr(o,c,h){o.j=h?An(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function _r(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Qo(o,c,h){c instanceof Pn?(o.i=c,Ch(o.i,o.h)):(h||(c=Rn(c,Ph)),o.i=new Pn(c,o.h))}function Y(o,c,h){o.i.set(c,h)}function yr(o){return Y(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function An(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,vh),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function vh(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Jo=/[#\/\?@]/g,Ah=/[#\?:]/g,Rh=/[#\?]/g,Ph=/[#\?@]/g,Sh=/#/g;function Pn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function it(o){o.g||(o.g=new Map,o.h=0,o.i&&wh(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=Pn.prototype,r.add=function(o,c){it(this),this.i=null,o=Bt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Yo(o,c){it(o),c=Bt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Xo(o,c){return it(o),c=Bt(o,c),o.g.has(c)}r.forEach=function(o,c){it(this),this.g.forEach(function(h,p){h.forEach(function(v){o.call(c,v,p,this)},this)},this)},r.na=function(){it(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const v=o[p];for(let R=0;R<v.length;R++)h.push(c[p])}return h},r.V=function(o){it(this);let c=[];if(typeof o=="string")Xo(this,o)&&(c=c.concat(this.g.get(Bt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return it(this),this.i=null,o=Bt(this,o),Xo(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Zo(o,c,h){Yo(o,c),0<h.length&&(o.i=null,o.g.set(Bt(o,c),L(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const R=encodeURIComponent(String(p)),k=this.V(p);for(p=0;p<k.length;p++){var v=R;k[p]!==""&&(v+="="+encodeURIComponent(String(k[p]))),o.push(v)}}return this.i=o.join("&")};function Bt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ch(o,c){c&&!o.j&&(it(o),o.i=null,o.g.forEach(function(h,p){var v=p.toLowerCase();p!=v&&(Yo(this,p),Zo(this,v,h))},o)),o.j=c}function bh(o,c){const h=new wn;if(l.Image){const p=new Image;p.onload=b(st,h,"TestLoadImage: loaded",!0,c,p),p.onerror=b(st,h,"TestLoadImage: error",!1,c,p),p.onabort=b(st,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=b(st,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function kh(o,c){const h=new wn,p=new AbortController,v=setTimeout(()=>{p.abort(),st(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(v),R.ok?st(h,"TestPingServer: ok",!0,c):st(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(v),st(h,"TestPingServer: error",!1,c)})}function st(o,c,h,p,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),p(h)}catch{}}function Vh(){this.g=new fh}function Dh(o,c,h){const p=h||"";try{Ho(o,function(v,R){let k=v;f(v)&&(k=Li(v)),c.push(p+R+"="+encodeURIComponent(k))})}catch(v){throw c.push(p+"type="+encodeURIComponent("_badmap")),v}}function Er(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Er,Mi),Er.prototype.g=function(){return new Tr(this.l,this.j)},Er.prototype.i=function(o){return function(){return o}}({});function Tr(o,c){me.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Tr,me),r=Tr.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Cn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ea(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ea(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Sn(this):Cn(this),this.readyState==3&&ea(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Sn(this))},r.Qa=function(o){this.g&&(this.response=o,Sn(this))},r.ga=function(){this.g&&Sn(this)};function Sn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Cn(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Cn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Tr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ta(o){let c="";return ne(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Gi(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ta(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Y(o,c,h))}function ee(o){me.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(ee,me);var Nh=/^https?$/i,Oh=["POST","PUT"];r=ee.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fi.g(),this.v=this.o?ko(this.o):ko(Fi),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){na(this,R);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var v in p)h.set(v,p[v]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())h.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),v=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Oh,c,void 0))||p||v||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of h)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sa(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){na(this,R)}};function na(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,ra(o),Ir(o)}function ra(o){o.A||(o.A=!0,we(o,"complete"),we(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,we(this,"complete"),we(this,"abort"),Ir(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),ee.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ia(this):this.bb())},r.bb=function(){ia(this)};function ia(o){if(o.h&&typeof u<"u"&&(!o.v[1]||je(o)!=4||o.Z()!=2)){if(o.u&&je(o)==4)Po(o.Ea,0,o);else if(we(o,"readystatechange"),je(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=k===0){var v=String(o.D).match(Ko)[1]||null;!v&&l.self&&l.self.location&&(v=l.self.location.protocol.slice(0,-1)),p=!Nh.test(v?v.toLowerCase():"")}h=p}if(h)we(o,"complete"),we(o,"success");else{o.m=6;try{var R=2<je(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",ra(o)}}finally{Ir(o)}}}}function Ir(o,c){if(o.g){sa(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||we(o,"ready");try{h.onreadystatechange=p}catch{}}}function sa(o){o.I&&(l.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function je(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),dh(c)}};function oa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Lh(o){const c={};o=(o.g&&2<=je(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(H(o[p]))continue;var h=w(o[p]);const v=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[v]||[];c[v]=R,R.push(h)}I(c,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function aa(o){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bn("baseRetryDelayMs",5e3,o),this.cb=bn("retryDelaySeedMs",1e4,o),this.Wa=bn("forwardChannelMaxRetries",2,o),this.wa=bn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new jo(o&&o.concurrentRequestLimit),this.Da=new Vh,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=aa.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,p){ve(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=ga(this,null,this.W),vr(this)};function Hi(o){if(ua(o),o.G==3){var c=o.U++,h=qe(o.I);if(Y(h,"SID",o.K),Y(h,"RID",c),Y(h,"TYPE","terminate"),kn(o,h),c=new rt(o,o.j,c),c.L=2,c.v=yr(qe(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=_a(c.j,null),c.g.ea(c.v)),c.F=Date.now(),mr(c)}ma(o)}function wr(o){o.g&&(Qi(o),o.g.cancel(),o.g=null)}function ua(o){wr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ar(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function vr(o){if(!$o(o.h)&&!o.s){o.s=!0;var c=o.Ga;mn||Io(),gn||(mn(),gn=!0),Si.add(c,o),o.B=0}}function Mh(o,c){return zo(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=In(P(o.Ga,o,c),pa(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const v=new rt(this,this.j,o);let R=this.o;if(this.S&&(R?(R=g(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(v.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=la(this,v,c),h=qe(this.I),Y(h,"RID",o),Y(h,"CVER",22),this.D&&Y(h,"X-HTTP-Session-Id",this.D),kn(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(ta(R)))+"&"+c:this.m&&Gi(h,this.m,R)),Wi(this.h,v),this.Ua&&Y(h,"TYPE","init"),this.P?(Y(h,"$req",c),Y(h,"SID","null"),v.T=!0,qi(v,h,null)):qi(v,h,c),this.G=2}}else this.G==3&&(o?ca(this,o):this.i.length==0||$o(this.h)||ca(this))};function ca(o,c){var h;c?h=c.l:h=o.U++;const p=qe(o.I);Y(p,"SID",o.K),Y(p,"RID",h),Y(p,"AID",o.T),kn(o,p),o.m&&o.o&&Gi(p,o.m,o.o),h=new rt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=la(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Wi(o.h,h),qi(h,p,c)}function kn(o,c){o.H&&ne(o.H,function(h,p){Y(c,p,h)}),o.l&&Ho({},function(h,p){Y(c,p,h)})}function la(o,c,h){h=Math.min(o.i.length,h);var p=o.l?P(o.l.Na,o.l,o):null;e:{var v=o.i;let R=-1;for(;;){const k=["count="+h];R==-1?0<h?(R=v[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let J=!0;for(let ce=0;ce<h;ce++){let G=v[ce].g;const ge=v[ce].map;if(G-=R,0>G)R=Math.max(0,v[ce].g-100),J=!1;else try{Dh(ge,k,"req"+G+"_")}catch{p&&p(ge)}}if(J){p=k.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function ha(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;mn||Io(),gn||(mn(),gn=!0),Si.add(c,o),o.v=0}}function Ki(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=In(P(o.Fa,o),pa(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,da(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=In(P(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ve(10),wr(this),da(this))};function Qi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function da(o){o.g=new rt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=qe(o.qa);Y(c,"RID","rpc"),Y(c,"SID",o.K),Y(c,"AID",o.T),Y(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Y(c,"TO",o.ja),Y(c,"TYPE","xmlhttp"),kn(o,c),o.m&&o.o&&Gi(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=yr(qe(c)),h.m=null,h.P=!0,Fo(h,o)}r.Za=function(){this.C!=null&&(this.C=null,wr(this),Ki(this),ve(19))};function Ar(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function fa(o,c){var h=null;if(o.g==c){Ar(o),Qi(o),o.g=null;var p=2}else if(zi(o.h,c))h=c.D,Wo(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var v=o.B;p=dr(),we(p,new Lo(p,h)),vr(o)}else ha(o);else if(v=c.s,v==3||v==0&&0<c.X||!(p==1&&Mh(o,c)||p==2&&Ki(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),v){case 1:vt(o,5);break;case 4:vt(o,10);break;case 3:vt(o,6);break;default:vt(o,2)}}}function pa(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function vt(o,c){if(o.j.info("Error code "+c),c==2){var h=P(o.fb,o),p=o.Xa;const v=!p;p=new wt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||gr(p,"https"),yr(p),v?bh(p.toString(),h):kh(p.toString(),h)}else ve(2);o.G=0,o.l&&o.l.sa(c),ma(o),ua(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function ma(o){if(o.G=0,o.ka=[],o.l){const c=Go(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function ga(o,c,h){var p=h instanceof wt?qe(h):new wt(h);if(p.g!="")c&&(p.g=c+"."+p.g),_r(p,p.s);else{var v=l.location;p=v.protocol,c=c?c+"."+v.hostname:v.hostname,v=+v.port;var R=new wt(null);p&&gr(R,p),c&&(R.g=c),v&&_r(R,v),h&&(R.l=h),p=R}return h=o.D,c=o.ya,h&&c&&Y(p,h,c),Y(p,"VER",o.la),kn(o,p),p}function _a(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ee(new Er({eb:h})):new ee(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ya(){}r=ya.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Rr(){}Rr.prototype.g=function(o,c){return new Re(o,c)};function Re(o,c){me.call(this),this.g=new aa(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!H(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!H(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new qt(this)}V(Re,me),Re.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Re.prototype.close=function(){Hi(this.g)},Re.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Li(o),o=h);c.i.push(new Eh(c.Ya++,o)),c.G==3&&vr(c)},Re.prototype.N=function(){this.g.l=null,delete this.j,Hi(this.g),delete this.g,Re.aa.N.call(this)};function Ea(o){xi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}V(Ea,xi);function Ta(){Ui.call(this),this.status=1}V(Ta,Ui);function qt(o){this.g=o}V(qt,ya),qt.prototype.ua=function(){we(this.g,"a")},qt.prototype.ta=function(o){we(this.g,new Ea(o))},qt.prototype.sa=function(o){we(this.g,new Ta)},qt.prototype.ra=function(){we(this.g,"b")},Rr.prototype.createWebChannel=Rr.prototype.g,Re.prototype.send=Re.prototype.o,Re.prototype.open=Re.prototype.m,Re.prototype.close=Re.prototype.close,Uc=function(){return new Rr},xc=function(){return dr()},Mc=Tt,gs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fr.NO_ERROR=0,fr.TIMEOUT=8,fr.HTTP_ERROR=6,xr=fr,Mo.COMPLETE="complete",Lc=Mo,Vo.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",me.prototype.listen=me.prototype.K,Nn=Vo,ee.prototype.listenOnce=ee.prototype.L,ee.prototype.getLastError=ee.prototype.Ka,ee.prototype.getLastErrorCode=ee.prototype.Ba,ee.prototype.getStatus=ee.prototype.Z,ee.prototype.getResponseJson=ee.prototype.Oa,ee.prototype.getResponseText=ee.prototype.oa,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Ha,Oc=ee}).apply(typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{});const Xa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Vs("@firebase/firestore");function $t(){return Nt.logLevel}function N(r,...t){if(Nt.logLevel<=q.DEBUG){const n=t.map(Ws);Nt.debug(`Firestore (${cn}): ${r}`,...n)}}function Ye(r,...t){if(Nt.logLevel<=q.ERROR){const n=t.map(Ws);Nt.error(`Firestore (${cn}): ${r}`,...n)}}function Zt(r,...t){if(Nt.logLevel<=q.WARN){const n=t.map(Ws);Nt.warn(`Firestore (${cn}): ${r}`,...n)}}function Ws(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(r="Unexpected state"){const t=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: `+r;throw Ye(t),new Error(t)}function Q(r,t){r||U()}function B(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Ze{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Um{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ee.UNAUTHENTICATED))}shutdown(){}}class Fm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Bm{constructor(t){this.t=t,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Q(this.o===void 0);let i=this.i;const s=d=>this.i!==i?(i=this.i,n(d)):Promise.resolve();let a=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new bt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const d=a;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},l=d=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new bt)}},0),u()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Q(typeof i.accessToken=="string"),new Fc(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new Ee(t)}}class qm{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class jm{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new qm(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $m{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Q(this.o===void 0);const i=a=>{a.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?n(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>i(a))};const s=a=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Q(typeof n.token=="string"),this.R=n.token,new $m(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<r;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Wm(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<n&&(i+=t.charAt(s[a]%t.length))}return i}}function $(r,t){return r<t?-1:r>t?1:0}function en(r,t,n){return r.length===t.length&&r.every((i,s)=>n(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(t){return oe.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new oe(n,i)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new oe(0,0))}static max(){return new F(new oe(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,n,i){n===void 0?n=0:n>t.length&&U(),i===void 0?i=t.length-n:i>t.length-n&&U(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Wn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Wn?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const a=t.get(s),u=n.get(s);if(a<u)return-1;if(a>u)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class X extends Wn{construct(t,n,i){return new X(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new X(n)}static emptyPath(){return new X([])}}const Gm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends Wn{construct(t,n,i){return new he(t,n,i)}static isValidIdentifier(t){return Gm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new he(["__name__"])}static fromServerFormat(t){const n=[];let i="",s=0;const a=()=>{if(i.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let u=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,s+=2}else l==="`"?(u=!u,s++):l!=="."||u?(i+=l,s++):(a(),s++)}if(a(),u)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new he(n)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return X.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}function Hm(r,t){const n=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,s=F.fromTimestamp(i===1e9?new oe(n+1,0):new oe(n,i));return new mt(s,M.empty(),t)}function Km(r){return new mt(r.readTime,r.key,-1)}class mt{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new mt(F.min(),M.empty(),-1)}static max(){return new mt(F.max(),M.empty(),-1)}}function Qm(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=M.comparator(r.documentKey,t.documentKey),n!==0?n:$(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ym{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==Jm)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new S((i,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(i,s)},this.catchCallback=a=>{this.wrapFailure(n,a).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):S.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):S.reject(n)}static resolve(t){return new S((n,i)=>{n(t)})}static reject(t){return new S((n,i)=>{i(t)})}static waitFor(t){return new S((n,i)=>{let s=0,a=0,u=!1;t.forEach(l=>{++s,l.next(()=>{++a,u&&a===s&&n()},d=>i(d))}),u=!0,a===s&&n()})}static or(t){let n=S.resolve(!1);for(const i of t)n=n.next(s=>s?S.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,a)=>{i.push(n.call(this,s,a))}),this.waitFor(i)}static mapArray(t,n){return new S((i,s)=>{const a=t.length,u=new Array(a);let l=0;for(let d=0;d<a;d++){const f=d;n(t[f]).next(m=>{u[f]=m,++l,l===a&&i(u)},m=>s(m))}})}static doWhile(t,n){return new S((i,s)=>{const a=()=>{t()===!0?n().next(()=>{a()},s):i()};a()})}}function Xm(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function hn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}di.oe=-1;function fi(r){return r==null}function Xr(r){return r===0&&1/r==-1/0}function Zm(r){return typeof r=="number"&&Number.isInteger(r)&&!Xr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Za(t)),t=tg(r.get(n),t);return Za(t)}function tg(r,t){let n=t;const i=r.length;for(let s=0;s<i;s++){const a=r.charAt(s);switch(a){case"\0":n+="";break;case"":n+="";break;default:n+=a}}return n}function Za(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Ot(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function qc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n){this.comparator=t,this.root=n||le.EMPTY}insert(t,n){return new Z(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,le.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,le.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new br(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new br(this.root,t,this.comparator,!1)}getReverseIterator(){return new br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new br(this.root,t,this.comparator,!0)}}class br{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=n?i(t.key,n):1,n&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class le{constructor(t,n,i,s,a){this.key=t,this.value=n,this.color=i??le.RED,this.left=s??le.EMPTY,this.right=a??le.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,a){return new le(t??this.key,n??this.value,i??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const a=i(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,n,i),null):a===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return le.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return le.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}le.EMPTY=null,le.RED=!0,le.BLACK=!1;le.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,n,i,s,a){return this}insert(t,n,i){return new le(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new tu(this.data.getIterator())}getIteratorFrom(t){return new tu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof ae)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,a=i.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ae(this.comparator);return n.data=t,n}}class tu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.fields=t,t.sort(he.comparator)}static empty(){return new De([])}unionWith(t){let n=new ae(he.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new De(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return en(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new jc("Invalid base64 string: "+a):a}}(t);return new fe(n)}static fromUint8Array(t){const n=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(t);return new fe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const ng=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(r){if(Q(!!r),typeof r=="string"){let t=0;const n=ng.exec(r);if(Q(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:re(r.seconds),nanos:re(r.nanos)}}function re(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function _t(r){return typeof r=="string"?fe.fromBase64String(r):fe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pi(r){const t=r.mapValue.fields.__previous_value__;return Gs(t)?pi(t):t}function Gn(r){const t=gt(r.mapValue.fields.__local_write_time__.timestampValue);return new oe(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t,n,i,s,a,u,l,d,f){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=f}}class Hn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Hn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Hn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Gs(r)?4:sg(r)?9007199254740991:ig(r)?10:11:U()}function Ue(r,t){if(r===t)return!0;const n=yt(r);if(n!==yt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Gn(r).isEqual(Gn(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=gt(s.timestampValue),l=gt(a.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,a){return _t(s.bytesValue).isEqual(_t(a.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,a){return re(s.geoPointValue.latitude)===re(a.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(a.geoPointValue.longitude)}(r,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return re(s.integerValue)===re(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=re(s.doubleValue),l=re(a.doubleValue);return u===l?Xr(u)===Xr(l):isNaN(u)&&isNaN(l)}return!1}(r,t);case 9:return en(r.arrayValue.values||[],t.arrayValue.values||[],Ue);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},l=a.mapValue.fields||{};if(eu(u)!==eu(l))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(l[d]===void 0||!Ue(u[d],l[d])))return!1;return!0}(r,t);default:return U()}}function Kn(r,t){return(r.values||[]).find(n=>Ue(n,t))!==void 0}function tn(r,t){if(r===t)return 0;const n=yt(r),i=yt(t);if(n!==i)return $(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,t.booleanValue);case 2:return function(a,u){const l=re(a.integerValue||a.doubleValue),d=re(u.integerValue||u.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(r,t);case 3:return nu(r.timestampValue,t.timestampValue);case 4:return nu(Gn(r),Gn(t));case 5:return $(r.stringValue,t.stringValue);case 6:return function(a,u){const l=_t(a),d=_t(u);return l.compareTo(d)}(r.bytesValue,t.bytesValue);case 7:return function(a,u){const l=a.split("/"),d=u.split("/");for(let f=0;f<l.length&&f<d.length;f++){const m=$(l[f],d[f]);if(m!==0)return m}return $(l.length,d.length)}(r.referenceValue,t.referenceValue);case 8:return function(a,u){const l=$(re(a.latitude),re(u.latitude));return l!==0?l:$(re(a.longitude),re(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return ru(r.arrayValue,t.arrayValue);case 10:return function(a,u){var l,d,f,m;const E=a.fields||{},P=u.fields||{},b=(l=E.value)===null||l===void 0?void 0:l.arrayValue,V=(d=P.value)===null||d===void 0?void 0:d.arrayValue,L=$(((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return L!==0?L:ru(b,V)}(r.mapValue,t.mapValue);case 11:return function(a,u){if(a===kr.mapValue&&u===kr.mapValue)return 0;if(a===kr.mapValue)return 1;if(u===kr.mapValue)return-1;const l=a.fields||{},d=Object.keys(l),f=u.fields||{},m=Object.keys(f);d.sort(),m.sort();for(let E=0;E<d.length&&E<m.length;++E){const P=$(d[E],m[E]);if(P!==0)return P;const b=tn(l[d[E]],f[m[E]]);if(b!==0)return b}return $(d.length,m.length)}(r.mapValue,t.mapValue);default:throw U()}}function nu(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return $(r,t);const n=gt(r),i=gt(t),s=$(n.seconds,i.seconds);return s!==0?s:$(n.nanos,i.nanos)}function ru(r,t){const n=r.values||[],i=t.values||[];for(let s=0;s<n.length&&s<i.length;++s){const a=tn(n[s],i[s]);if(a)return a}return $(n.length,i.length)}function nn(r){return _s(r)}function _s(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const i=gt(n);return`time(${i.seconds},${i.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return _t(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return M.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let i="[",s=!0;for(const a of n.values||[])s?s=!1:i+=",",i+=_s(a);return i+"]"}(r.arrayValue):"mapValue"in r?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",a=!0;for(const u of i)a?a=!1:s+=",",s+=`${u}:${_s(n.fields[u])}`;return s+"}"}(r.mapValue):U()}function Ur(r){switch(yt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=pi(r);return t?16+Ur(t):16;case 5:return 2*r.stringValue.length;case 6:return _t(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,a)=>s+Ur(a),0)}(r.arrayValue);case 10:case 11:return function(i){let s=0;return Ot(i.fields,(a,u)=>{s+=a.length+Ur(u)}),s}(r.mapValue);default:throw U()}}function iu(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ys(r){return!!r&&"integerValue"in r}function Hs(r){return!!r&&"arrayValue"in r}function su(r){return!!r&&"nullValue"in r}function ou(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Fr(r){return!!r&&"mapValue"in r}function ig(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Un(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Ot(r.mapValue.fields,(n,i)=>t.mapValue.fields[n]=Un(i)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Un(r.arrayValue.values[n]);return t}return Object.assign({},r)}function sg(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.value=t}static empty(){return new Ce({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Fr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Un(n)}setAll(t){let n=he.emptyPath(),i={},s=[];t.forEach((u,l)=>{if(!n.isImmediateParentOf(l)){const d=this.getFieldsMap(n);this.applyChanges(d,i,s),i={},s=[],n=l.popLast()}u?i[l.lastSegment()]=Un(u):s.push(l.lastSegment())});const a=this.getFieldsMap(n);this.applyChanges(a,i,s)}delete(t){const n=this.field(t.popLast());Fr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ue(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];Fr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){Ot(n,(s,a)=>t[s]=a);for(const s of i)delete t[s]}clone(){return new Ce(Un(this.value))}}function $c(r){const t=[];return Ot(r.fields,(n,i)=>{const s=new he([n]);if(Fr(i)){const a=$c(i.mapValue).fields;if(a.length===0)t.push(s);else for(const u of a)t.push(s.child(u))}else t.push(s)}),new De(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,n,i,s,a,u,l){this.key=t,this.documentType=n,this.version=i,this.readTime=s,this.createTime=a,this.data=u,this.documentState=l}static newInvalidDocument(t){return new Te(t,0,F.min(),F.min(),F.min(),Ce.empty(),0)}static newFoundDocument(t,n,i,s){return new Te(t,1,n,F.min(),i,s,0)}static newNoDocument(t,n){return new Te(t,2,n,F.min(),F.min(),Ce.empty(),0)}static newUnknownDocument(t,n){return new Te(t,3,n,F.min(),F.min(),Ce.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Te&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n){this.position=t,this.inclusive=n}}function au(r,t,n){let i=0;for(let s=0;s<r.position.length;s++){const a=t[s],u=r.position[s];if(a.field.isKeyField()?i=M.comparator(M.fromName(u.referenceValue),n.key):i=tn(u,n.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function uu(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Ue(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,n="asc"){this.field=t,this.dir=n}}function og(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{}class se extends zc{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new ug(t,n,i):n==="array-contains"?new hg(t,i):n==="in"?new dg(t,i):n==="not-in"?new fg(t,i):n==="array-contains-any"?new pg(t,i):new se(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new cg(t,i):new lg(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(tn(n,this.value)):n!==null&&yt(this.value)===yt(n)&&this.matchesComparison(tn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oe extends zc{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Oe(t,n)}matches(t){return Wc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wc(r){return r.op==="and"}function Gc(r){return ag(r)&&Wc(r)}function ag(r){for(const t of r.filters)if(t instanceof Oe)return!1;return!0}function Es(r){if(r instanceof se)return r.field.canonicalString()+r.op.toString()+nn(r.value);if(Gc(r))return r.filters.map(t=>Es(t)).join(",");{const t=r.filters.map(n=>Es(n)).join(",");return`${r.op}(${t})`}}function Hc(r,t){return r instanceof se?function(i,s){return s instanceof se&&i.op===s.op&&i.field.isEqual(s.field)&&Ue(i.value,s.value)}(r,t):r instanceof Oe?function(i,s){return s instanceof Oe&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((a,u,l)=>a&&Hc(u,s.filters[l]),!0):!1}(r,t):void U()}function Kc(r){return r instanceof se?function(n){return`${n.field.canonicalString()} ${n.op} ${nn(n.value)}`}(r):r instanceof Oe?function(n){return n.op.toString()+" {"+n.getFilters().map(Kc).join(" ,")+"}"}(r):"Filter"}class ug extends se{constructor(t,n,i){super(t,n,i),this.key=M.fromName(i.referenceValue)}matches(t){const n=M.comparator(t.key,this.key);return this.matchesComparison(n)}}class cg extends se{constructor(t,n){super(t,"in",n),this.keys=Qc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class lg extends se{constructor(t,n){super(t,"not-in",n),this.keys=Qc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Qc(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>M.fromName(i.referenceValue))}class hg extends se{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Hs(n)&&Kn(n.arrayValue,this.value)}}class dg extends se{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Kn(this.value.arrayValue,n)}}class fg extends se{constructor(t,n){super(t,"not-in",n)}matches(t){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Kn(this.value.arrayValue,n)}}class pg extends se{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Hs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Kn(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,n=null,i=[],s=[],a=null,u=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=a,this.startAt=u,this.endAt=l,this.ue=null}}function cu(r,t=null,n=[],i=[],s=null,a=null,u=null){return new mg(r,t,n,i,s,a,u)}function Ks(r){const t=B(r);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Es(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),fi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>nn(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>nn(i)).join(",")),t.ue=n}return t.ue}function Qs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!og(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!Hc(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!uu(r.startAt,t.startAt)&&uu(r.endAt,t.endAt)}function Ts(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,n=null,i=[],s=[],a=null,u="F",l=null,d=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=u,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gg(r,t,n,i,s,a,u,l){return new dn(r,t,n,i,s,a,u,l)}function Js(r){return new dn(r)}function lu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Jc(r){return r.collectionGroup!==null}function Fn(r){const t=B(r);if(t.ce===null){t.ce=[];const n=new Set;for(const a of t.explicitOrderBy)t.ce.push(a),n.add(a.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new ae(he.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(a=>{n.has(a.canonicalString())||a.isKeyField()||t.ce.push(new Qn(a,i))}),n.has(he.keyField().canonicalString())||t.ce.push(new Qn(he.keyField(),i))}return t.ce}function Me(r){const t=B(r);return t.le||(t.le=_g(t,Fn(r))),t.le}function _g(r,t){if(r.limitType==="F")return cu(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Qn(s.field,a)});const n=r.endAt?new Zr(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new Zr(r.startAt.position,r.startAt.inclusive):null;return cu(r.path,r.collectionGroup,t,r.filters,r.limit,n,i)}}function Is(r,t){const n=r.filters.concat([t]);return new dn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function ws(r,t,n){return new dn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function mi(r,t){return Qs(Me(r),Me(t))&&r.limitType===t.limitType}function Yc(r){return`${Ks(Me(r))}|lt:${r.limitType}`}function zt(r){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>Kc(s)).join(", ")}]`),fi(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>nn(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>nn(s)).join(",")),`Target(${i})`}(Me(r))}; limitType=${r.limitType})`}function gi(r,t){return t.isFoundDocument()&&function(i,s){const a=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):M.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(r,t)&&function(i,s){for(const a of Fn(i))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(r,t)&&function(i,s){for(const a of i.filters)if(!a.matches(s))return!1;return!0}(r,t)&&function(i,s){return!(i.startAt&&!function(u,l,d){const f=au(u,l,d);return u.inclusive?f<=0:f<0}(i.startAt,Fn(i),s)||i.endAt&&!function(u,l,d){const f=au(u,l,d);return u.inclusive?f>=0:f>0}(i.endAt,Fn(i),s))}(r,t)}function yg(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Xc(r){return(t,n)=>{let i=!1;for(const s of Fn(r)){const a=Eg(s,t,n);if(a!==0)return a;i=i||s.field.isKeyField()}return 0}}function Eg(r,t,n){const i=r.field.isKeyField()?M.comparator(t.key,n.key):function(a,u,l){const d=u.data.field(a),f=l.data.field(a);return d!==null&&f!==null?tn(d,f):U()}(r.field,t,n);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,a]of i)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ot(this.inner,(n,i)=>{for(const[s,a]of i)t(s,a)})}isEmpty(){return qc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=new Z(M.comparator);function Xe(){return Tg}const Zc=new Z(M.comparator);function On(...r){let t=Zc;for(const n of r)t=t.insert(n.key,n);return t}function el(r){let t=Zc;return r.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function St(){return Bn()}function tl(){return Bn()}function Bn(){return new Lt(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ig=new Z(M.comparator),wg=new ae(M.comparator);function j(...r){let t=wg;for(const n of r)t=t.add(n);return t}const vg=new ae($);function Ag(){return vg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(t)?"-0":t}}function nl(r){return{integerValue:""+r}}function Rg(r,t){return Zm(t)?nl(t):Ys(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this._=void 0}}function Pg(r,t,n){return r instanceof ei?function(s,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Gs(a)&&(a=pi(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(n,t):r instanceof Jn?il(r,t):r instanceof Yn?sl(r,t):function(s,a){const u=rl(s,a),l=hu(u)+hu(s.Pe);return ys(u)&&ys(s.Pe)?nl(l):Ys(s.serializer,l)}(r,t)}function Sg(r,t,n){return r instanceof Jn?il(r,t):r instanceof Yn?sl(r,t):n}function rl(r,t){return r instanceof ti?function(i){return ys(i)||function(a){return!!a&&"doubleValue"in a}(i)}(t)?t:{integerValue:0}:null}class ei extends _i{}class Jn extends _i{constructor(t){super(),this.elements=t}}function il(r,t){const n=ol(t);for(const i of r.elements)n.some(s=>Ue(s,i))||n.push(i);return{arrayValue:{values:n}}}class Yn extends _i{constructor(t){super(),this.elements=t}}function sl(r,t){let n=ol(t);for(const i of r.elements)n=n.filter(s=>!Ue(s,i));return{arrayValue:{values:n}}}class ti extends _i{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function hu(r){return re(r.integerValue||r.doubleValue)}function ol(r){return Hs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Cg(r,t){return r.field.isEqual(t.field)&&function(i,s){return i instanceof Jn&&s instanceof Jn||i instanceof Yn&&s instanceof Yn?en(i.elements,s.elements,Ue):i instanceof ti&&s instanceof ti?Ue(i.Pe,s.Pe):i instanceof ei&&s instanceof ei}(r.transform,t.transform)}class bg{constructor(t,n){this.version=t,this.transformResults=n}}class Ke{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ke}static exists(t){return new Ke(void 0,t)}static updateTime(t){return new Ke(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Br(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class yi{}function al(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new cl(r.key,Ke.none()):new ir(r.key,r.data,Ke.none());{const n=r.data,i=Ce.empty();let s=new ae(he.comparator);for(let a of t.fields)if(!s.has(a)){let u=n.field(a);u===null&&a.length>1&&(a=a.popLast(),u=n.field(a)),u===null?i.delete(a):i.set(a,u),s=s.add(a)}return new Mt(r.key,i,new De(s.toArray()),Ke.none())}}function kg(r,t,n){r instanceof ir?function(s,a,u){const l=s.value.clone(),d=fu(s.fieldTransforms,a,u.transformResults);l.setAll(d),a.convertToFoundDocument(u.version,l).setHasCommittedMutations()}(r,t,n):r instanceof Mt?function(s,a,u){if(!Br(s.precondition,a))return void a.convertToUnknownDocument(u.version);const l=fu(s.fieldTransforms,a,u.transformResults),d=a.data;d.setAll(ul(s)),d.setAll(l),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(r,t,n):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,n)}function qn(r,t,n,i){return r instanceof ir?function(a,u,l,d){if(!Br(a.precondition,u))return l;const f=a.value.clone(),m=pu(a.fieldTransforms,d,u);return f.setAll(m),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,n,i):r instanceof Mt?function(a,u,l,d){if(!Br(a.precondition,u))return l;const f=pu(a.fieldTransforms,d,u),m=u.data;return m.setAll(ul(a)),m.setAll(f),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),l===null?null:l.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(E=>E.field))}(r,t,n,i):function(a,u,l){return Br(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l}(r,t,n)}function Vg(r,t){let n=null;for(const i of r.fieldTransforms){const s=t.data.field(i.field),a=rl(i.transform,s||null);a!=null&&(n===null&&(n=Ce.empty()),n.set(i.field,a))}return n||null}function du(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&en(i,s,(a,u)=>Cg(a,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class ir extends yi{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mt extends yi{constructor(t,n,i,s,a=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function ul(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=r.data.field(n);t.set(n,i)}}),t}function fu(r,t,n){const i=new Map;Q(r.length===n.length);for(let s=0;s<n.length;s++){const a=r[s],u=a.transform,l=t.data.field(a.field);i.set(a.field,Sg(u,l,n[s]))}return i}function pu(r,t,n){const i=new Map;for(const s of r){const a=s.transform,u=n.data.field(s.field);i.set(s.field,Pg(a,u,t))}return i}class cl extends yi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dg extends yi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&kg(a,t,i[s])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=qn(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=qn(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=tl();return this.mutations.forEach(s=>{const a=t.get(s.key),u=a.overlayedDocument;let l=this.applyToLocalView(u,a.mutatedFields);l=n.has(s.key)?null:l;const d=al(u,l);d!==null&&i.set(s.key,d),u.isValidDocument()||u.convertToNoDocument(F.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),j())}isEqual(t){return this.batchId===t.batchId&&en(this.mutations,t.mutations,(n,i)=>du(n,i))&&en(this.baseMutations,t.baseMutations,(n,i)=>du(n,i))}}class Xs{constructor(t,n,i,s){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(t,n,i){Q(t.mutations.length===i.length);let s=function(){return Ig}();const a=t.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,i[u].version);return new Xs(t,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,W;function Mg(r){switch(r){default:return U();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function ll(r){if(r===void 0)return Ye("GRPC error has no .code"),C.UNKNOWN;switch(r){case ie.OK:return C.OK;case ie.CANCELLED:return C.CANCELLED;case ie.UNKNOWN:return C.UNKNOWN;case ie.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ie.INTERNAL:return C.INTERNAL;case ie.UNAVAILABLE:return C.UNAVAILABLE;case ie.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ie.NOT_FOUND:return C.NOT_FOUND;case ie.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ie.ABORTED:return C.ABORTED;case ie.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ie.DATA_LOSS:return C.DATA_LOSS;default:return U()}}(W=ie||(ie={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=new Ct([4294967295,4294967295],0);function mu(r){const t=xg().encode(r),n=new Nc;return n.update(t),new Uint8Array(n.digest())}function gu(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new Ct([n,i],0),new Ct([s,a],0)]}class Zs{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ln(`Invalid padding: ${n}`);if(i<0)throw new Ln(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Ln(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new Ln(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ie=Ct.fromNumber(this.Te)}Ee(t,n,i){let s=t.add(n.multiply(Ct.fromNumber(i)));return s.compare(Ug)===1&&(s=new Ct([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=mu(t),[i,s]=gu(n);for(let a=0;a<this.hashCount;a++){const u=this.Ee(i,s,a);if(!this.de(u))return!1}return!0}static create(t,n,i){const s=t%8==0?0:8-t%8,a=new Uint8Array(Math.ceil(t/8)),u=new Zs(a,s,n);return i.forEach(l=>u.insert(l)),u}insert(t){if(this.Te===0)return;const n=mu(t),[i,s]=gu(n);for(let a=0;a<this.hashCount;a++){const u=this.Ee(i,s,a);this.Ae(u)}}Ae(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class Ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,n,i,s,a){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const s=new Map;return s.set(t,sr.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Ei(F.min(),s,new Z($),Xe(),j())}}class sr{constructor(t,n,i,s,a){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new sr(i,n,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,n,i,s){this.Re=t,this.removedTargetIds=n,this.key=i,this.Ve=s}}class hl{constructor(t,n){this.targetId=t,this.me=n}}class dl{constructor(t,n,i=fe.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=s}}class _u{constructor(){this.fe=0,this.ge=yu(),this.pe=fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=j(),n=j(),i=j();return this.ge.forEach((s,a)=>{switch(a){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:U()}}),new sr(this.pe,this.ye,t,n,i)}Ce(){this.we=!1,this.ge=yu()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Fg{constructor(t){this.Le=t,this.Be=new Map,this.ke=Xe(),this.qe=Vr(),this.Qe=Vr(),this.Ke=new Z($)}$e(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(n,t.Ve):this.We(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.We(n,t.key,t.Ve)}Ge(t){this.forEachTarget(t,n=>{const i=this.ze(n);switch(t.state){case 0:this.je(n)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.je(n)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.De(t.resumeToken));break;default:U()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((i,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,i=t.me.count,s=this.Ye(n);if(s){const a=s.target;if(Ts(a))if(i===0){const u=new M(a.path);this.We(n,u,Te.newNoDocument(u,F.min()))}else Q(i===1);else{const u=this.Ze(n);if(u!==i){const l=this.Xe(t),d=l?this.et(l,t,u):1;if(d!==0){this.He(n);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,f)}}}}}Xe(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;let u,l;try{u=_t(i).toUint8Array()}catch(d){if(d instanceof jc)return Zt("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Zs(u,s,a)}catch(d){return Zt(d instanceof Ln?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Te===0?null:l}et(t,n,i){return n.me.count===i-this.rt(t,n.targetId)?0:2}rt(t,n){const i=this.Le.getRemoteKeysForTarget(n);let s=0;return i.forEach(a=>{const u=this.Le.nt(),l=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;t.mightContain(l)||(this.We(n,a,null),s++)}),s}it(t){const n=new Map;this.Be.forEach((a,u)=>{const l=this.Ye(u);if(l){if(a.current&&Ts(l.target)){const d=new M(l.target.path);this.st(d).has(u)||this.ot(u,d)||this.We(u,d,Te.newNoDocument(d,t))}a.be&&(n.set(u,a.ve()),a.Ce())}});let i=j();this.Qe.forEach((a,u)=>{let l=!0;u.forEachWhile(d=>{const f=this.Ye(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(a))}),this.ke.forEach((a,u)=>u.setReadTime(t));const s=new Ei(t,n,this.Ke,this.ke,i);return this.ke=Xe(),this.qe=Vr(),this.Qe=Vr(),this.Ke=new Z($),s}Ue(t,n){if(!this.je(t))return;const i=this.ot(t,n.key)?2:0;this.ze(t).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(t))}We(t,n,i){if(!this.je(t))return;const s=this.ze(t);this.ot(t,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(t)),this.Qe=this.Qe.insert(n,this._t(n).add(t)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(t){this.Be.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let n=this.Be.get(t);return n||(n=new _u,this.Be.set(t,n)),n}_t(t){let n=this.Qe.get(t);return n||(n=new ae($),this.Qe=this.Qe.insert(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new ae($),this.qe=this.qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||N("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new _u),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}ot(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Vr(){return new Z(M.comparator)}function yu(){return new Z(M.comparator)}const Bg={asc:"ASCENDING",desc:"DESCENDING"},qg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jg={and:"AND",or:"OR"};class $g{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function vs(r,t){return r.useProto3Json||fi(t)?t:{value:t}}function ni(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fl(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function zg(r,t){return ni(r,t.toTimestamp())}function xe(r){return Q(!!r),F.fromTimestamp(function(n){const i=gt(n);return new oe(i.seconds,i.nanos)}(r))}function eo(r,t){return As(r,t).canonicalString()}function As(r,t){const n=function(s){return new X(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?n:n.child(t)}function pl(r){const t=X.fromString(r);return Q(El(t)),t}function Rs(r,t){return eo(r.databaseId,t.path)}function is(r,t){const n=pl(t);if(n.get(1)!==r.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new M(gl(n))}function ml(r,t){return eo(r.databaseId,t)}function Wg(r){const t=pl(r);return t.length===4?X.emptyPath():gl(t)}function Ps(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function gl(r){return Q(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Eu(r,t,n){return{name:Rs(r,t),fields:n.value.mapValue.fields}}function Gg(r,t){let n;if("targetChange"in t){t.targetChange;const i=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:U()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],a=function(f,m){return f.useProto3Json?(Q(m===void 0||typeof m=="string"),fe.fromBase64String(m||"")):(Q(m===void 0||m instanceof Buffer||m instanceof Uint8Array),fe.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&function(f){const m=f.code===void 0?C.UNKNOWN:ll(f.code);return new O(m,f.message||"")}(u);n=new dl(i,s,a,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=is(r,i.document.name),a=xe(i.document.updateTime),u=i.document.createTime?xe(i.document.createTime):F.min(),l=new Ce({mapValue:{fields:i.document.fields}}),d=Te.newFoundDocument(s,a,u,l),f=i.targetIds||[],m=i.removedTargetIds||[];n=new qr(f,m,d.key,d)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=is(r,i.document),a=i.readTime?xe(i.readTime):F.min(),u=Te.newNoDocument(s,a),l=i.removedTargetIds||[];n=new qr([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=is(r,i.document),a=i.removedTargetIds||[];n=new qr([],a,s,null)}else{if(!("filter"in t))return U();{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:a}=i,u=new Lg(s,a),l=i.targetId;n=new hl(l,u)}}return n}function Hg(r,t){let n;if(t instanceof ir)n={update:Eu(r,t.key,t.value)};else if(t instanceof cl)n={delete:Rs(r,t.key)};else if(t instanceof Mt)n={update:Eu(r,t.key,t.data),updateMask:n_(t.fieldMask)};else{if(!(t instanceof Dg))return U();n={verify:Rs(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(a,u){const l=u.transform;if(l instanceof ei)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Jn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ti)return{fieldPath:u.field.canonicalString(),increment:l.Pe};throw U()}(0,i))),t.precondition.isNone||(n.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:zg(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:U()}(r,t.precondition)),n}function Kg(r,t){return r&&r.length>0?(Q(t!==void 0),r.map(n=>function(s,a){let u=s.updateTime?xe(s.updateTime):xe(a);return u.isEqual(F.min())&&(u=xe(a)),new bg(u,s.transformResults||[])}(n,t))):[]}function Qg(r,t){return{documents:[ml(r,t.path)]}}function Jg(r,t){const n={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=ml(r,s);const a=function(f){if(f.length!==0)return yl(Oe.create(f,"and"))}(t.filters);a&&(n.structuredQuery.where=a);const u=function(f){if(f.length!==0)return f.map(m=>function(P){return{field:Wt(P.field),direction:Zg(P.dir)}}(m))}(t.orderBy);u&&(n.structuredQuery.orderBy=u);const l=vs(r,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ct:n,parent:s}}function Yg(r){let t=Wg(r.parent);const n=r.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Q(i===1);const m=n.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let a=[];n.where&&(a=function(E){const P=_l(E);return P instanceof Oe&&Gc(P)?P.getFilters():[P]}(n.where));let u=[];n.orderBy&&(u=function(E){return E.map(P=>function(V){return new Qn(Gt(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(P))}(n.orderBy));let l=null;n.limit&&(l=function(E){let P;return P=typeof E=="object"?E.value:E,fi(P)?null:P}(n.limit));let d=null;n.startAt&&(d=function(E){const P=!!E.before,b=E.values||[];return new Zr(b,P)}(n.startAt));let f=null;return n.endAt&&(f=function(E){const P=!E.before,b=E.values||[];return new Zr(b,P)}(n.endAt)),gg(t,s,u,a,l,"F",d,f)}function Xg(r,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function _l(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Gt(n.unaryFilter.field);return se.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Gt(n.unaryFilter.field);return se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Gt(n.unaryFilter.field);return se.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Gt(n.unaryFilter.field);return se.create(u,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(r):r.fieldFilter!==void 0?function(n){return se.create(Gt(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Oe.create(n.compositeFilter.filters.map(i=>_l(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(r):U()}function Zg(r){return Bg[r]}function e_(r){return qg[r]}function t_(r){return jg[r]}function Wt(r){return{fieldPath:r.canonicalString()}}function Gt(r){return he.fromServerFormat(r.fieldPath)}function yl(r){return r instanceof se?function(n){if(n.op==="=="){if(ou(n.value))return{unaryFilter:{field:Wt(n.field),op:"IS_NAN"}};if(su(n.value))return{unaryFilter:{field:Wt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ou(n.value))return{unaryFilter:{field:Wt(n.field),op:"IS_NOT_NAN"}};if(su(n.value))return{unaryFilter:{field:Wt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wt(n.field),op:e_(n.op),value:n.value}}}(r):r instanceof Oe?function(n){const i=n.getFilters().map(s=>yl(s));return i.length===1?i[0]:{compositeFilter:{op:t_(n.op),filters:i}}}(r):U()}function n_(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function El(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,n,i,s,a=F.min(),u=F.min(),l=fe.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new lt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(t){this.ht=t}}function i_(r){const t=Yg({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ws(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.ln=new o_}addToCollectionParentIndex(t,n){return this.ln.add(n),S.resolve()}getCollectionParents(t,n){return S.resolve(this.ln.getEntries(n))}addFieldIndex(t,n){return S.resolve()}deleteFieldIndex(t,n){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,n){return S.resolve()}getDocumentsMatchingTarget(t,n){return S.resolve(null)}getIndexType(t,n){return S.resolve(0)}getFieldIndexes(t,n){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,n){return S.resolve(mt.min())}getMinOffsetFromCollectionGroup(t,n){return S.resolve(mt.min())}updateCollectionGroup(t,n,i){return S.resolve()}updateIndexEntries(t,n){return S.resolve()}}class o_{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new ae(X.comparator),a=!s.has(i);return this.index[n]=s.add(i),a}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new ae(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ae{static withCacheSize(t){return new Ae(t,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae.DEFAULT_COLLECTION_PERCENTILE=10,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ae.DEFAULT=new Ae(41943040,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ae.DISABLED=new Ae(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new rn(0)}static Qn(){return new rn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu([r,t],[n,i]){const s=$(r,n);return s===0?$(t,i):s}class a_{constructor(t){this.Gn=t,this.buffer=new ae(Iu),this.zn=0}jn(){return++this.zn}Hn(t){const n=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Iu(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class u_{constructor(t,n,i){this.garbageCollector=t,this.asyncQueue=n,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){N("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){hn(n)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ln(n)}await this.Yn(3e5)})}}class c_{constructor(t,n){this.Zn=t,this.params=n}calculateTargetCount(t,n){return this.Zn.Xn(t).next(i=>Math.floor(n/100*i))}nthSequenceNumber(t,n){if(n===0)return S.resolve(di.oe);const i=new a_(n);return this.Zn.forEachTarget(t,s=>i.Hn(s.sequenceNumber)).next(()=>this.Zn.er(t,s=>i.Hn(s))).next(()=>i.maxValue)}removeTargets(t,n,i){return this.Zn.removeTargets(t,n,i)}removeOrphanedDocuments(t,n){return this.Zn.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Tu)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tu):this.tr(t,n))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,n){let i,s,a,u,l,d,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(t,s))).next(E=>(i=E,l=Date.now(),this.removeTargets(t,i,n))).next(E=>(a=E,d=Date.now(),this.removeOrphanedDocuments(t,i))).next(E=>(f=Date.now(),$t()<=q.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-m}ms
	Determined least recently used ${s} in `+(l-u)+`ms
	Removed ${a} targets in `+(d-l)+`ms
	Removed ${E} documents in `+(f-d)+`ms
Total Duration: ${f-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E})))}}function l_(r,t){return new c_(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.changes=new Lt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Te.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?S.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t,n,i,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(i!==null&&qn(i.mutation,s,De.empty(),oe.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,j()).next(()=>i))}getLocalViewOfDocuments(t,n,i=j()){const s=St();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,i).next(a=>{let u=On();return a.forEach((l,d)=>{u=u.insert(l,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,n){const i=St();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,j()))}populateOverlays(t,n,i){const s=[];return i.forEach(a=>{n.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((u,l)=>{n.set(u,l)})})}computeViews(t,n,i,s){let a=Xe();const u=Bn(),l=function(){return Bn()}();return n.forEach((d,f)=>{const m=i.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Mt)?a=a.insert(f.key,f):m!==void 0?(u.set(f.key,m.mutation.getFieldMask()),qn(m.mutation,f,m.mutation.getFieldMask(),oe.now())):u.set(f.key,De.empty())}),this.recalculateAndSaveOverlays(t,a).next(d=>(d.forEach((f,m)=>u.set(f,m)),n.forEach((f,m)=>{var E;return l.set(f,new d_(m,(E=u.get(f))!==null&&E!==void 0?E:null))}),l))}recalculateAndSaveOverlays(t,n){const i=Bn();let s=new Z((u,l)=>u-l),a=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(u=>{for(const l of u)l.keys().forEach(d=>{const f=n.get(d);if(f===null)return;let m=i.get(d)||De.empty();m=l.applyToLocalView(f,m),i.set(d,m);const E=(s.get(l.batchId)||j()).add(d);s=s.insert(l.batchId,E)})}).next(()=>{const u=[],l=s.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),f=d.key,m=d.value,E=tl();m.forEach(P=>{if(!a.has(P)){const b=al(n.get(P),i.get(P));b!==null&&E.set(P,b),a=a.add(P)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,E))}return S.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Jc(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,s):this.getDocumentsMatchingCollectionQuery(t,n,i,s)}getNextDocuments(t,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,s-a.size):S.resolve(St());let l=-1,d=a;return u.next(f=>S.forEach(f,(m,E)=>(l<E.largestBatchId&&(l=E.largestBatchId),a.get(m)?S.resolve():this.remoteDocumentCache.getEntry(t,m).next(P=>{d=d.insert(m,P)}))).next(()=>this.populateOverlays(t,f,a)).next(()=>this.computeViews(t,d,f,j())).next(m=>({batchId:l,changes:el(m)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new M(n)).next(i=>{let s=On();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,i,s){const a=n.collectionGroup;let u=On();return this.indexManager.getCollectionParents(t,a).next(l=>S.forEach(l,d=>{const f=function(E,P){return new dn(P,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(n,d.child(a));return this.getDocumentsMatchingCollectionQuery(t,f,i,s).next(m=>{m.forEach((E,P)=>{u=u.insert(E,P)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,n,i,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,a,s))).next(u=>{a.forEach((d,f)=>{const m=f.getKey();u.get(m)===null&&(u=u.insert(m,Te.newInvalidDocument(m)))});let l=On();return u.forEach((d,f)=>{const m=a.get(d);m!==void 0&&qn(m.mutation,f,De.empty(),oe.now()),gi(n,f)&&(l=l.insert(d,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,n){return S.resolve(this.Tr.get(n))}saveBundleMetadata(t,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:xe(s.createTime)}}(n)),S.resolve()}getNamedQuery(t,n){return S.resolve(this.Ir.get(n))}saveNamedQuery(t,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:i_(s.bundledQuery),readTime:xe(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.overlays=new Z(M.comparator),this.Er=new Map}getOverlay(t,n){return S.resolve(this.overlays.get(n))}getOverlays(t,n){const i=St();return S.forEach(n,s=>this.getOverlay(t,s).next(a=>{a!==null&&i.set(s,a)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((s,a)=>{this.Tt(t,n,a)}),S.resolve()}removeOverlaysForBatchId(t,n,i){const s=this.Er.get(i);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Er.delete(i)),S.resolve()}getOverlaysForCollection(t,n,i){const s=St(),a=n.length+1,u=new M(n.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const d=l.getNext().value,f=d.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===a&&d.largestBatchId>i&&s.set(d.getKey(),d)}return S.resolve(s)}getOverlaysForCollectionGroup(t,n,i,s){let a=new Z((f,m)=>f-m);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>i){let m=a.get(f.largestBatchId);m===null&&(m=St(),a=a.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=St(),d=a.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,m)=>l.set(f,m)),!(l.size()>=s)););return S.resolve(l)}Tt(t,n,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Er.get(s.largestBatchId).delete(i.key);this.Er.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new Og(n,i));let a=this.Er.get(n);a===void 0&&(a=j(),this.Er.set(n,a)),this.Er.set(n,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.sessionToken=fe.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.dr=new ae(ue.Ar),this.Rr=new ae(ue.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,n){const i=new ue(t,n);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.gr(new ue(t,n))}pr(t,n){t.forEach(i=>this.removeReference(i,n))}yr(t){const n=new M(new X([])),i=new ue(n,t),s=new ue(n,t+1),a=[];return this.Rr.forEachInRange([i,s],u=>{this.gr(u),a.push(u.key)}),a}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const n=new M(new X([])),i=new ue(n,t),s=new ue(n,t+1);let a=j();return this.Rr.forEachInRange([i,s],u=>{a=a.add(u.key)}),a}containsKey(t){const n=new ue(t,0),i=this.dr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class ue{constructor(t,n){this.key=t,this.br=n}static Ar(t,n){return M.comparator(t.key,n.key)||$(t.br,n.br)}static Vr(t,n){return $(t.br,n.br)||M.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ae(ue.Ar)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,s){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Ng(a,n,i,s);this.mutationQueue.push(u);for(const l of s)this.vr=this.vr.add(new ue(l.key,a)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(u)}lookupMutationBatch(t,n){return S.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this.Fr(i),a=s<0?0:s;return S.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new ue(n,0),s=new ue(n,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([i,s],u=>{const l=this.Cr(u.br);a.push(l)}),S.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new ae($);return n.forEach(s=>{const a=new ue(s,0),u=new ue(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,u],l=>{i=i.add(l.br)})}),S.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let a=i;M.isDocumentKey(a)||(a=a.child(""));const u=new ue(new M(a),0);let l=new ae($);return this.vr.forEachWhile(d=>{const f=d.key.path;return!!i.isPrefixOf(f)&&(f.length===s&&(l=l.add(d.br)),!0)},u),S.resolve(this.Mr(l))}Mr(t){const n=[];return t.forEach(i=>{const s=this.Cr(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Q(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return S.forEach(n.mutations,s=>{const a=new ue(s.key,n.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.vr=i})}Ln(t){}containsKey(t,n){const i=new ue(n,0),s=this.vr.firstAfterOrEqual(i);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Or(t,n){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const n=this.Fr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t){this.Nr=t,this.docs=function(){return new Z(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,s=this.docs.get(i),a=s?s.size:0,u=this.Nr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return S.resolve(i?i.document.mutableCopy():Te.newInvalidDocument(n))}getEntries(t,n){let i=Xe();return n.forEach(s=>{const a=this.docs.get(s);i=i.insert(s,a?a.document.mutableCopy():Te.newInvalidDocument(s))}),S.resolve(i)}getDocumentsMatchingQuery(t,n,i,s){let a=Xe();const u=n.path,l=new M(u.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:f,value:{document:m}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Qm(Km(m),i)<=0||(s.has(m.key)||gi(n,m))&&(a=a.insert(m.key,m.mutableCopy()))}return S.resolve(a)}getAllFromCollectionGroup(t,n,i,s){U()}Lr(t,n){return S.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new E_(this)}getSize(t){return S.resolve(this.size)}}class E_ extends h_{constructor(t){super(),this.hr=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(t,s)):this.hr.removeEntry(i)}),S.waitFor(n)}getFromCache(t,n){return this.hr.getEntry(t,n)}getAllFromCache(t,n){return this.hr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t){this.persistence=t,this.Br=new Lt(n=>Ks(n),Qs),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.kr=0,this.qr=new to,this.targetCount=0,this.Qr=rn.qn()}forEachTarget(t,n){return this.Br.forEach((i,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.kr&&(this.kr=n),S.resolve()}Un(t){this.Br.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Qr=new rn(n),this.highestTargetId=n),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,n){return this.Un(n),this.targetCount+=1,S.resolve()}updateTargetData(t,n){return this.Un(n),S.resolve()}removeTargetData(t,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,n,i){let s=0;const a=[];return this.Br.forEach((u,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.Br.delete(u),a.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),S.waitFor(a).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,n){const i=this.Br.get(n)||null;return S.resolve(i)}addMatchingKeys(t,n,i){return this.qr.mr(n,i),S.resolve()}removeMatchingKeys(t,n,i){this.qr.pr(n,i);const s=this.persistence.referenceDelegate,a=[];return s&&n.forEach(u=>{a.push(s.markPotentiallyOrphaned(t,u))}),S.waitFor(a)}removeMatchingKeysForTargetId(t,n){return this.qr.yr(n),S.resolve()}getMatchingKeysForTargetId(t,n){const i=this.qr.Sr(n);return S.resolve(i)}containsKey(t,n){return S.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,n){this.Kr={},this.overlays={},this.$r=new di(0),this.Ur=!1,this.Ur=!0,this.Wr=new g_,this.referenceDelegate=t(this),this.Gr=new T_(this),this.indexManager=new s_,this.remoteDocumentCache=function(s){return new y_(s)}(i=>this.referenceDelegate.zr(i)),this.serializer=new r_(n),this.jr=new p_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new m_,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.Kr[t.toKey()];return i||(i=new __(n,this.referenceDelegate),this.Kr[t.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,n,i){N("MemoryPersistence","Starting transaction:",t);const s=new I_(this.$r.next());return this.referenceDelegate.Hr(),i(s).next(a=>this.referenceDelegate.Jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Yr(t,n){return S.or(Object.values(this.Kr).map(i=>()=>i.containsKey(t,n)))}}class I_ extends Ym{constructor(t){super(),this.currentSequenceNumber=t}}class no{constructor(t){this.persistence=t,this.Zr=new to,this.Xr=null}static ei(t){return new no(t)}get ti(){if(this.Xr)return this.Xr;throw U()}addReference(t,n,i){return this.Zr.addReference(i,n),this.ti.delete(i.toString()),S.resolve()}removeReference(t,n,i){return this.Zr.removeReference(i,n),this.ti.add(i.toString()),S.resolve()}markPotentiallyOrphaned(t,n){return this.ti.add(n.toString()),S.resolve()}removeTarget(t,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(a=>this.ti.add(a.toString()))}).next(()=>i.removeTargetData(t,n))}Hr(){this.Xr=new Set}Jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.ti,i=>{const s=M.fromPath(i);return this.ni(t,s).next(a=>{a||n.removeEntry(s,F.min())})}).next(()=>(this.Xr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ni(t,n).next(i=>{i?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(t){return 0}ni(t,n){return S.or([()=>S.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Yr(t,n)])}}class ri{constructor(t,n){this.persistence=t,this.ri=new Lt(i=>eg(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=l_(this,n)}static ei(t,n){return new ri(t,n)}Hr(){}Jr(t){return S.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}Xn(t){const n=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>n.next(s=>i+s))}nr(t){let n=0;return this.er(t,i=>{n++}).next(()=>n)}er(t,n){return S.forEach(this.ri,(i,s)=>this.ir(t,i,s).next(a=>a?S.resolve():n(s)))}removeTargets(t,n,i){return this.persistence.getTargetCache().removeTargets(t,n,i)}removeOrphanedDocuments(t,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.Lr(t,u=>this.ir(t,u,n).next(l=>{l||(i++,a.removeEntry(u,F.min()))})).next(()=>a.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,n){return this.ri.set(n,t.currentSequenceNumber),S.resolve()}removeTarget(t,n){const i=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,n,i){return this.ri.set(i,t.currentSequenceNumber),S.resolve()}removeReference(t,n,i){return this.ri.set(i,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,n){return this.ri.set(n,t.currentSequenceNumber),S.resolve()}zr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Ur(t.data.value)),n}ir(t,n,i){return S.or([()=>this.persistence.Yr(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.ri.get(n);return S.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.Wi=i,this.Gi=s}static zi(t,n){let i=j(),s=j();for(const a of n.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new ro(t,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Zh()?8:Xm(Ie())>0?6:4}()}initialize(t,n){this.Zi=t,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(t,n,i,s){const a={result:null};return this.Xi(t,n).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.es(t,n,s,i).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new w_;return this.ts(t,n,u).next(l=>{if(a.result=l,this.Hi)return this.ns(t,n,u,l.size)})}).next(()=>a.result)}ns(t,n,i,s){return i.documentReadCount<this.Ji?($t()<=q.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",zt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),S.resolve()):($t()<=q.DEBUG&&N("QueryEngine","Query:",zt(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Yi*s?($t()<=q.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",zt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Me(n))):S.resolve())}Xi(t,n){if(lu(n))return S.resolve(null);let i=Me(n);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ws(n,null,"F"),i=Me(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(a=>{const u=j(...a);return this.Zi.getDocuments(t,u).next(l=>this.indexManager.getMinOffset(t,i).next(d=>{const f=this.rs(n,l);return this.ss(n,f,u,d.readTime)?this.Xi(t,ws(n,null,"F")):this.os(t,f,n,d)}))})))}es(t,n,i,s){return lu(n)||s.isEqual(F.min())?S.resolve(null):this.Zi.getDocuments(t,i).next(a=>{const u=this.rs(n,a);return this.ss(n,u,i,s)?S.resolve(null):($t()<=q.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zt(n)),this.os(t,u,n,Hm(s,-1)).next(l=>l))})}rs(t,n){let i=new ae(Xc(t));return n.forEach((s,a)=>{gi(t,a)&&(i=i.add(a))}),i}ss(t,n,i,s){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const a=t.limitType==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ts(t,n,i){return $t()<=q.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",zt(n)),this.Zi.getDocumentsMatchingQuery(t,n,mt.min(),i)}os(t,n,i,s){return this.Zi.getDocumentsMatchingQuery(t,i,s).next(a=>(n.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,n,i,s){this.persistence=t,this._s=n,this.serializer=s,this.us=new Z($),this.cs=new Lt(a=>Ks(a),Qs),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(i)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new f_(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.us))}}function R_(r,t,n,i){return new A_(r,t,n,i)}async function Il(r,t){const n=B(r);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(a=>(s=a,n.Ps(t),n.mutationQueue.getAllMutationBatches(i))).next(a=>{const u=[],l=[];let d=j();for(const f of s){u.push(f.batchId);for(const m of f.mutations)d=d.add(m.key)}for(const f of a){l.push(f.batchId);for(const m of f.mutations)d=d.add(m.key)}return n.localDocuments.getDocuments(i,d).next(f=>({Ts:f,removedBatchIds:u,addedBatchIds:l}))})})}function P_(r,t){const n=B(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),a=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,d,f,m){const E=f.batch,P=E.keys();let b=S.resolve();return P.forEach(V=>{b=b.next(()=>m.getEntry(d,V)).next(L=>{const D=f.docVersions.get(V);Q(D!==null),L.version.compareTo(D)<0&&(E.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),m.addEntry(L)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(d,E))}(n,i,t,a).next(()=>a.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let d=j();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(d=d.add(l.batch.mutations[f].key));return d}(t))).next(()=>n.localDocuments.getDocuments(i,s))})}function wl(r){const t=B(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Gr.getLastRemoteSnapshotVersion(n))}function S_(r,t){const n=B(r),i=t.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];t.targetChanges.forEach((m,E)=>{const P=s.get(E);if(!P)return;l.push(n.Gr.removeMatchingKeys(a,m.removedDocuments,E).next(()=>n.Gr.addMatchingKeys(a,m.addedDocuments,E)));let b=P.withSequenceNumber(a.currentSequenceNumber);t.targetMismatches.get(E)!==null?b=b.withResumeToken(fe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,i)),s=s.insert(E,b),function(L,D,z){return L.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(P,b,m)&&l.push(n.Gr.updateTargetData(a,b))});let d=Xe(),f=j();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(a,m))}),l.push(C_(a,u,t.documentUpdates).next(m=>{d=m.Is,f=m.Es})),!i.isEqual(F.min())){const m=n.Gr.getLastRemoteSnapshotVersion(a).next(E=>n.Gr.setTargetsMetadata(a,a.currentSequenceNumber,i));l.push(m)}return S.waitFor(l).next(()=>u.apply(a)).next(()=>n.localDocuments.getLocalViewOfDocuments(a,d,f)).next(()=>d)}).then(a=>(n.us=s,a))}function C_(r,t,n){let i=j(),s=j();return n.forEach(a=>i=i.add(a)),t.getEntries(r,i).next(a=>{let u=Xe();return n.forEach((l,d)=>{const f=a.get(l);d.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),d.isNoDocument()&&d.version.isEqual(F.min())?(t.removeEntry(l,d.readTime),u=u.insert(l,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(l,d)):N("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",d.version)}),{Is:u,Es:s}})}function b_(r,t){const n=B(r);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function k_(r,t){const n=B(r);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Gr.getTargetData(i,t).next(a=>a?(s=a,S.resolve(s)):n.Gr.allocateTargetId(i).next(u=>(s=new lt(t,u,"TargetPurposeListen",i.currentSequenceNumber),n.Gr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.us.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(i.targetId,i),n.cs.set(t,i.targetId)),i})}async function Ss(r,t,n){const i=B(r),s=i.us.get(t),a=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",a,u=>i.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!hn(u))throw u;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}i.us=i.us.remove(t),i.cs.delete(s.target)}function wu(r,t,n){const i=B(r);let s=F.min(),a=j();return i.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,m){const E=B(d),P=E.cs.get(m);return P!==void 0?S.resolve(E.us.get(P)):E.Gr.getTargetData(f,m)}(i,u,Me(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(u,l.targetId).next(d=>{a=d})}).next(()=>i._s.getDocumentsMatchingQuery(u,t,n?s:F.min(),n?a:j())).next(l=>(V_(i,yg(t),l),{documents:l,ds:a})))}function V_(r,t,n){let i=r.ls.get(t)||F.min();n.forEach((s,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),r.ls.set(t,i)}class vu{constructor(){this.activeTargetIds=Ag()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class D_{constructor(){this._o=new vu,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,n,i){this.ao[t]=n}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new vu,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr=null;function ss(){return Dr===null?Dr=function(){return 268435456+Math.round(2147483648*Math.random())}():Dr++,"0x"+Dr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="WebChannelConnection";class M_ extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+n.host,this.Mo=`projects/${s}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Oo(n,i,s,a,u){const l=ss(),d=this.No(n,i.toUriEncodedString());N("RestConnection",`Sending RPC '${n}' ${l}:`,d,s);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,a,u),this.Bo(n,d,f,s).then(m=>(N("RestConnection",`Received RPC '${n}' ${l}: `,m),m),m=>{throw Zt("RestConnection",`RPC '${n}' ${l} failed with error: `,m,"url: ",d,"request:",s),m})}ko(n,i,s,a,u,l){return this.Oo(n,i,s,a,u)}Lo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,u)=>n[u]=a),s&&s.headers.forEach((a,u)=>n[u]=a)}No(n,i){const s=O_[n];return`${this.Fo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,n,i,s){const a=ss();return new Promise((u,l)=>{const d=new Oc;d.setWithCredentials(!0),d.listenOnce(Lc.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case xr.NO_ERROR:const m=d.getResponseJson();N(ye,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),u(m);break;case xr.TIMEOUT:N(ye,`RPC '${t}' ${a} timed out`),l(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case xr.HTTP_ERROR:const E=d.getStatus();if(N(ye,`RPC '${t}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const b=P==null?void 0:P.error;if(b&&b.status&&b.message){const V=function(D){const z=D.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(z)>=0?z:C.UNKNOWN}(b.status);l(new O(V,b.message))}else l(new O(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new O(C.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{N(ye,`RPC '${t}' ${a} completed.`)}});const f=JSON.stringify(s);N(ye,`RPC '${t}' ${a} sending request:`,s),d.send(n,"POST",f,i,15)})}qo(t,n,i){const s=ss(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Uc(),l=xc(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Lo(d.initMessageHeaders,n,i),d.encodeInitMessageHeaders=!0;const m=a.join("");N(ye,`Creating RPC '${t}' stream ${s}: ${m}`,d);const E=u.createWebChannel(m,d);let P=!1,b=!1;const V=new L_({Eo:D=>{b?N(ye,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(P||(N(ye,`Opening RPC '${t}' stream ${s} transport.`),E.open(),P=!0),N(ye,`RPC '${t}' stream ${s} sending:`,D),E.send(D))},Ao:()=>E.close()}),L=(D,z,H)=>{D.listen(z,K=>{try{H(K)}catch(te){setTimeout(()=>{throw te},0)}})};return L(E,Nn.EventType.OPEN,()=>{b||(N(ye,`RPC '${t}' stream ${s} transport opened.`),V.So())}),L(E,Nn.EventType.CLOSE,()=>{b||(b=!0,N(ye,`RPC '${t}' stream ${s} transport closed`),V.Do())}),L(E,Nn.EventType.ERROR,D=>{b||(b=!0,Zt(ye,`RPC '${t}' stream ${s} transport errored:`,D),V.Do(new O(C.UNAVAILABLE,"The operation could not be completed")))}),L(E,Nn.EventType.MESSAGE,D=>{var z;if(!b){const H=D.data[0];Q(!!H);const K=H,te=(K==null?void 0:K.error)||((z=K[0])===null||z===void 0?void 0:z.error);if(te){N(ye,`RPC '${t}' stream ${s} received error:`,te);const Se=te.status;let ne=function(y){const T=ie[y];if(T!==void 0)return ll(T)}(Se),I=te.message;ne===void 0&&(ne=C.INTERNAL,I="Unknown error status: "+Se+" with message "+te.message),b=!0,V.Do(new O(ne,I)),E.close()}else N(ye,`RPC '${t}' stream ${s} received:`,H),V.vo(H)}}),L(l,Mc.STAT_EVENT,D=>{D.stat===gs.PROXY?N(ye,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===gs.NOPROXY&&N(ye,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function os(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(r){return new $g(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,n,i=1e3,s=1.5,a=6e4){this.li=t,this.timerId=n,this.Qo=i,this.Ko=s,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const n=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-i);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n,i,s,a,u,l,d){this.li=t,this.Yo=i,this.Zo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new vl(t,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Ye(n.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(n)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Xo===n&&this.I_(i,s)},i=>{t(()=>{const s=new O(C.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(s)})})}I_(t,n){const i=this.T_(this.Xo);this.stream=this.d_(t,n),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{i(()=>this.E_(s))}),this.stream.onMessage(s=>{i(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return n=>{this.li.enqueueAndForget(()=>this.Xo===t?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class x_ extends Al{constructor(t,n,i,s,a,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,u),this.serializer=a}d_(t,n){return this.connection.qo("Listen",t,n)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const n=Gg(this.serializer,t),i=function(a){if(!("targetChange"in a))return F.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?F.min():u.readTime?xe(u.readTime):F.min()}(t);return this.listener.R_(n,i)}V_(t){const n={};n.database=Ps(this.serializer),n.addTarget=function(a,u){let l;const d=u.target;if(l=Ts(d)?{documents:Qg(a,d)}:{query:Jg(a,d).ct},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=fl(a,u.resumeToken);const f=vs(a,u.expectedCount);f!==null&&(l.expectedCount=f)}else if(u.snapshotVersion.compareTo(F.min())>0){l.readTime=ni(a,u.snapshotVersion.toTimestamp());const f=vs(a,u.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const i=Xg(this.serializer,t);i&&(n.labels=i),this.c_(n)}m_(t){const n={};n.database=Ps(this.serializer),n.removeTarget=t,this.c_(n)}}class U_ extends Al{constructor(t,n,i,s,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,u),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,n){return this.connection.qo("Write",t,n)}A_(t){return Q(!!t.streamToken),this.lastStreamToken=t.streamToken,Q(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const n=Kg(t.writeResults,t.commitTime),i=xe(t.commitTime);return this.listener.y_(i,n)}w_(){const t={};t.database=Ps(this.serializer),this.c_(t)}g_(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>Hg(this.serializer,i))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_ extends class{}{constructor(t,n,i,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,n,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Oo(t,As(n,i),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())})}ko(t,n,i,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,l])=>this.connection.ko(t,As(n,i),s,u,l,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new O(C.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class B_{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ye(n),this.C_=!1):N("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t,n,i,s,a){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(u=>{i.enqueueAndForget(async()=>{xt(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=B(d);f.k_.add(4),await or(f),f.K_.set("Unknown"),f.k_.delete(4),await Ii(f)}(this))})}),this.K_=new B_(i,s)}}async function Ii(r){if(xt(r))for(const t of r.q_)await t(!0)}async function or(r){for(const t of r.q_)await t(!1)}function Rl(r,t){const n=B(r);n.B_.has(t.targetId)||(n.B_.set(t.targetId,t),ao(n)?oo(n):fn(n).s_()&&so(n,t))}function io(r,t){const n=B(r),i=fn(n);n.B_.delete(t),i.s_()&&Pl(n,t),n.B_.size===0&&(i.s_()?i.a_():xt(n)&&n.K_.set("Unknown"))}function so(r,t){if(r.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}fn(r).V_(t)}function Pl(r,t){r.U_.xe(t),fn(r).m_(t)}function oo(r){r.U_=new Fg({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>r.B_.get(t)||null,nt:()=>r.datastore.serializer.databaseId}),fn(r).start(),r.K_.F_()}function ao(r){return xt(r)&&!fn(r).i_()&&r.B_.size>0}function xt(r){return B(r).k_.size===0}function Sl(r){r.U_=void 0}async function j_(r){r.K_.set("Online")}async function $_(r){r.B_.forEach((t,n)=>{so(r,t)})}async function z_(r,t){Sl(r),ao(r)?(r.K_.O_(t),oo(r)):r.K_.set("Unknown")}async function W_(r,t,n){if(r.K_.set("Online"),t instanceof dl&&t.state===2&&t.cause)try{await async function(s,a){const u=a.cause;for(const l of a.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,u),s.B_.delete(l),s.U_.removeTarget(l))}(r,t)}catch(i){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await ii(r,i)}else if(t instanceof qr?r.U_.$e(t):t instanceof hl?r.U_.Je(t):r.U_.Ge(t),!n.isEqual(F.min()))try{const i=await wl(r.localStore);n.compareTo(i)>=0&&await function(a,u){const l=a.U_.it(u);return l.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const m=a.B_.get(f);m&&a.B_.set(f,m.withResumeToken(d.resumeToken,u))}}),l.targetMismatches.forEach((d,f)=>{const m=a.B_.get(d);if(!m)return;a.B_.set(d,m.withResumeToken(fe.EMPTY_BYTE_STRING,m.snapshotVersion)),Pl(a,d);const E=new lt(m.target,d,f,m.sequenceNumber);so(a,E)}),a.remoteSyncer.applyRemoteEvent(l)}(r,n)}catch(i){N("RemoteStore","Failed to raise snapshot:",i),await ii(r,i)}}async function ii(r,t,n){if(!hn(t))throw t;r.k_.add(1),await or(r),r.K_.set("Offline"),n||(n=()=>wl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),r.k_.delete(1),await Ii(r)})}function Cl(r,t){return t().catch(n=>ii(r,n,t))}async function wi(r){const t=B(r),n=Et(t);let i=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;G_(t);)try{const s=await b_(t.localStore,i);if(s===null){t.L_.length===0&&n.a_();break}i=s.batchId,H_(t,s)}catch(s){await ii(t,s)}bl(t)&&kl(t)}function G_(r){return xt(r)&&r.L_.length<10}function H_(r,t){r.L_.push(t);const n=Et(r);n.s_()&&n.f_&&n.g_(t.mutations)}function bl(r){return xt(r)&&!Et(r).i_()&&r.L_.length>0}function kl(r){Et(r).start()}async function K_(r){Et(r).w_()}async function Q_(r){const t=Et(r);for(const n of r.L_)t.g_(n.mutations)}async function J_(r,t,n){const i=r.L_.shift(),s=Xs.from(i,t,n);await Cl(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await wi(r)}async function Y_(r,t){t&&Et(r).f_&&await async function(i,s){if(function(u){return Mg(u)&&u!==C.ABORTED}(s.code)){const a=i.L_.shift();Et(i).__(),await Cl(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,s)),await wi(i)}}(r,t),bl(r)&&kl(r)}async function Ru(r,t){const n=B(r);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const i=xt(n);n.k_.add(3),await or(n),i&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.k_.delete(3),await Ii(n)}async function X_(r,t){const n=B(r);t?(n.k_.delete(2),await Ii(n)):t||(n.k_.add(2),await or(n),n.K_.set("Unknown"))}function fn(r){return r.W_||(r.W_=function(n,i,s){const a=B(n);return a.b_(),new x_(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(r.datastore,r.asyncQueue,{Ro:j_.bind(null,r),mo:$_.bind(null,r),po:z_.bind(null,r),R_:W_.bind(null,r)}),r.q_.push(async t=>{t?(r.W_.__(),ao(r)?oo(r):r.K_.set("Unknown")):(await r.W_.stop(),Sl(r))})),r.W_}function Et(r){return r.G_||(r.G_=function(n,i,s){const a=B(n);return a.b_(),new U_(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:K_.bind(null,r),po:Y_.bind(null,r),p_:Q_.bind(null,r),y_:J_.bind(null,r)}),r.q_.push(async t=>{t?(r.G_.__(),await wi(r)):(await r.G_.stop(),r.L_.length>0&&(N("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,n,i,s,a){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,s,a){const u=Date.now()+i,l=new uo(t,n,u,s,a);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function co(r,t){if(Ye("AsyncQueue",`${t}: ${r}`),hn(r))return new O(C.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{static emptySet(t){return new Jt(t.comparator)}constructor(t){this.comparator=t?(n,i)=>t(n,i)||M.comparator(n.key,i.key):(n,i)=>M.comparator(n.key,i.key),this.keyedMap=On(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Jt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,a=i.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Jt;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.z_=new Z(M.comparator)}track(t){const n=t.doc.key,i=this.z_.get(n);i?t.type!==0&&i.type===3?this.z_=this.z_.insert(n,t):t.type===3&&i.type!==1?this.z_=this.z_.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.z_=this.z_.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.z_=this.z_.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.z_=this.z_.remove(n):t.type===1&&i.type===2?this.z_=this.z_.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.z_=this.z_.insert(n,{type:2,doc:t.doc}):U():this.z_=this.z_.insert(n,t)}j_(){const t=[];return this.z_.inorderTraversal((n,i)=>{t.push(i)}),t}}class sn{constructor(t,n,i,s,a,u,l,d,f){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,n,i,s,a){const u=[];return n.forEach(l=>{u.push({type:0,doc:l})}),new sn(t,n,Jt.emptySet(n),u,i,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class ey{constructor(){this.queries=Su(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,i){const s=B(n),a=s.queries;s.queries=Su(),a.forEach((u,l)=>{for(const d of l.J_)d.onError(i)})})(this,new O(C.ABORTED,"Firestore shutting down"))}}function Su(){return new Lt(r=>Yc(r),mi)}async function ty(r,t){const n=B(r);let i=3;const s=t.query;let a=n.queries.get(s);a?!a.Y_()&&t.Z_()&&(i=2):(a=new Z_,i=t.Z_()?0:1);try{switch(i){case 0:a.H_=await n.onListen(s,!0);break;case 1:a.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(u){const l=co(u,`Initialization of query '${zt(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,a),a.J_.push(t),t.ea(n.onlineState),a.H_&&t.ta(a.H_)&&lo(n)}async function ny(r,t){const n=B(r),i=t.query;let s=3;const a=n.queries.get(i);if(a){const u=a.J_.indexOf(t);u>=0&&(a.J_.splice(u,1),a.J_.length===0?s=t.Z_()?0:1:!a.Y_()&&t.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function ry(r,t){const n=B(r);let i=!1;for(const s of t){const a=s.query,u=n.queries.get(a);if(u){for(const l of u.J_)l.ta(s)&&(i=!0);u.H_=s}}i&&lo(n)}function iy(r,t,n){const i=B(r),s=i.queries.get(t);if(s)for(const a of s.J_)a.onError(n);i.queries.delete(t)}function lo(r){r.X_.forEach(t=>{t.next()})}var Cs,Cu;(Cu=Cs||(Cs={})).na="default",Cu.Cache="cache";class sy{constructor(t,n,i){this.query=t,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new sn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ia?this.oa(t)&&(this.ra.next(t),n=!0):this._a(t,this.onlineState)&&(this.aa(t),n=!0),this.sa=t,n}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),n=!0),n}_a(t,n){if(!t.fromCache||!this.Z_())return!0;const i=n!=="Offline";return(!this.options.ua||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(t){t=sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==Cs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.key=t}}class Dl{constructor(t){this.key=t}}class oy{constructor(t,n){this.query=t,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=j(),this.mutatedKeys=j(),this.Va=Xc(t),this.ma=new Jt(this.Va)}get fa(){return this.da}ga(t,n){const i=n?n.pa:new Pu,s=n?n.ma:this.ma;let a=n?n.mutatedKeys:this.mutatedKeys,u=s,l=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const P=s.get(m),b=gi(this.query,E)?E:null,V=!!P&&this.mutatedKeys.has(P.key),L=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;P&&b?P.data.isEqual(b.data)?V!==L&&(i.track({type:3,doc:b}),D=!0):this.ya(P,b)||(i.track({type:2,doc:b}),D=!0,(d&&this.Va(b,d)>0||f&&this.Va(b,f)<0)&&(l=!0)):!P&&b?(i.track({type:0,doc:b}),D=!0):P&&!b&&(i.track({type:1,doc:P}),D=!0,(d||f)&&(l=!0)),D&&(b?(u=u.add(b),a=L?a.add(m):a.delete(m)):(u=u.delete(m),a=a.delete(m)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const m=this.query.limitType==="F"?u.last():u.first();u=u.delete(m.key),a=a.delete(m.key),i.track({type:1,doc:m})}return{ma:u,pa:i,ss:l,mutatedKeys:a}}ya(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,s){const a=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const u=t.pa.j_();u.sort((m,E)=>function(b,V){const L=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return L(b)-L(V)}(m.type,E.type)||this.Va(m.doc,E.doc)),this.wa(i),s=s!=null&&s;const l=n&&!s?this.Sa():[],d=this.Ra.size===0&&this.current&&!s?1:0,f=d!==this.Aa;return this.Aa=d,u.length!==0||f?{snapshot:new sn(this.query,t.ma,a,u,t.mutatedKeys,d===0,f,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Pu,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(n=>this.da=this.da.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=j(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const n=[];return t.forEach(i=>{this.Ra.has(i)||n.push(new Dl(i))}),this.Ra.forEach(i=>{t.has(i)||n.push(new Vl(i))}),n}va(t){this.da=t.ds,this.Ra=j();const n=this.ga(t.documents);return this.applyChanges(n,!0)}Ca(){return sn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class ay{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class uy{constructor(t){this.key=t,this.Fa=!1}}class cy{constructor(t,n,i,s,a,u){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new Lt(l=>Yc(l),mi),this.Oa=new Map,this.Na=new Set,this.La=new Z(M.comparator),this.Ba=new Map,this.ka=new to,this.qa={},this.Qa=new Map,this.Ka=rn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function ly(r,t,n=!0){const i=Ul(r);let s;const a=i.xa.get(t);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Ca()):s=await Nl(i,t,n,!0),s}async function hy(r,t){const n=Ul(r);await Nl(n,t,!0,!1)}async function Nl(r,t,n,i){const s=await k_(r.localStore,Me(t)),a=s.targetId,u=r.sharedClientState.addLocalQueryTarget(a,n);let l;return i&&(l=await dy(r,t,a,u==="current",s.resumeToken)),r.isPrimaryClient&&n&&Rl(r.remoteStore,s),l}async function dy(r,t,n,i,s){r.Ua=(E,P,b)=>async function(L,D,z,H){let K=D.view.ga(z);K.ss&&(K=await wu(L.localStore,D.query,!1).then(({documents:I})=>D.view.ga(I,K)));const te=H&&H.targetChanges.get(D.targetId),Se=H&&H.targetMismatches.get(D.targetId)!=null,ne=D.view.applyChanges(K,L.isPrimaryClient,te,Se);return ku(L,D.targetId,ne.ba),ne.snapshot}(r,E,P,b);const a=await wu(r.localStore,t,!0),u=new oy(t,a.ds),l=u.ga(a.documents),d=sr.createSynthesizedTargetChangeForCurrentChange(n,i&&r.onlineState!=="Offline",s),f=u.applyChanges(l,r.isPrimaryClient,d);ku(r,n,f.ba);const m=new ay(t,n,u);return r.xa.set(t,m),r.Oa.has(n)?r.Oa.get(n).push(t):r.Oa.set(n,[t]),f.snapshot}async function fy(r,t,n){const i=B(r),s=i.xa.get(t),a=i.Oa.get(s.targetId);if(a.length>1)return i.Oa.set(s.targetId,a.filter(u=>!mi(u,t))),void i.xa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Ss(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&io(i.remoteStore,s.targetId),bs(i,s.targetId)}).catch(ln)):(bs(i,s.targetId),await Ss(i.localStore,s.targetId,!0))}async function py(r,t){const n=B(r),i=n.xa.get(t),s=n.Oa.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),io(n.remoteStore,i.targetId))}async function my(r,t,n){const i=wy(r);try{const s=await function(u,l){const d=B(u),f=oe.now(),m=l.reduce((b,V)=>b.add(V.key),j());let E,P;return d.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=Xe(),L=j();return d.hs.getEntries(b,m).next(D=>{V=D,V.forEach((z,H)=>{H.isValidDocument()||(L=L.add(z))})}).next(()=>d.localDocuments.getOverlayedDocuments(b,V)).next(D=>{E=D;const z=[];for(const H of l){const K=Vg(H,E.get(H.key).overlayedDocument);K!=null&&z.push(new Mt(H.key,K,$c(K.value.mapValue),Ke.exists(!0)))}return d.mutationQueue.addMutationBatch(b,f,z,l)}).next(D=>{P=D;const z=D.applyToLocalDocumentSet(E,L);return d.documentOverlayCache.saveOverlays(b,D.batchId,z)})}).then(()=>({batchId:P.batchId,changes:el(E)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,l,d){let f=u.qa[u.currentUser.toKey()];f||(f=new Z($)),f=f.insert(l,d),u.qa[u.currentUser.toKey()]=f}(i,s.batchId,n),await ar(i,s.changes),await wi(i.remoteStore)}catch(s){const a=co(s,"Failed to persist write");n.reject(a)}}async function Ol(r,t){const n=B(r);try{const i=await S_(n.localStore,t);t.targetChanges.forEach((s,a)=>{const u=n.Ba.get(a);u&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Fa=!0:s.modifiedDocuments.size>0?Q(u.Fa):s.removedDocuments.size>0&&(Q(u.Fa),u.Fa=!1))}),await ar(n,i,t)}catch(i){await ln(i)}}function bu(r,t,n){const i=B(r);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.xa.forEach((a,u)=>{const l=u.view.ea(t);l.snapshot&&s.push(l.snapshot)}),function(u,l){const d=B(u);d.onlineState=l;let f=!1;d.queries.forEach((m,E)=>{for(const P of E.J_)P.ea(l)&&(f=!0)}),f&&lo(d)}(i.eventManager,t),s.length&&i.Ma.R_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function gy(r,t,n){const i=B(r);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.Ba.get(t),a=s&&s.key;if(a){let u=new Z(M.comparator);u=u.insert(a,Te.newNoDocument(a,F.min()));const l=j().add(a),d=new Ei(F.min(),new Map,new Z($),u,l);await Ol(i,d),i.La=i.La.remove(a),i.Ba.delete(t),ho(i)}else await Ss(i.localStore,t,!1).then(()=>bs(i,t,n)).catch(ln)}async function _y(r,t){const n=B(r),i=t.batch.batchId;try{const s=await P_(n.localStore,t);Ml(n,i,null),Ll(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ar(n,s)}catch(s){await ln(s)}}async function yy(r,t,n){const i=B(r);try{const s=await function(u,l){const d=B(u);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return d.mutationQueue.lookupMutationBatch(f,l).next(E=>(Q(E!==null),m=E.keys(),d.mutationQueue.removeMutationBatch(f,E))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,m,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>d.localDocuments.getDocuments(f,m))})}(i.localStore,t);Ml(i,t,n),Ll(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await ar(i,s)}catch(s){await ln(s)}}function Ll(r,t){(r.Qa.get(t)||[]).forEach(n=>{n.resolve()}),r.Qa.delete(t)}function Ml(r,t,n){const i=B(r);let s=i.qa[i.currentUser.toKey()];if(s){const a=s.get(t);a&&(n?a.reject(n):a.resolve(),s=s.remove(t)),i.qa[i.currentUser.toKey()]=s}}function bs(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const i of r.Oa.get(t))r.xa.delete(i),n&&r.Ma.Wa(i,n);r.Oa.delete(t),r.isPrimaryClient&&r.ka.yr(t).forEach(i=>{r.ka.containsKey(i)||xl(r,i)})}function xl(r,t){r.Na.delete(t.path.canonicalString());const n=r.La.get(t);n!==null&&(io(r.remoteStore,n),r.La=r.La.remove(t),r.Ba.delete(n),ho(r))}function ku(r,t,n){for(const i of n)i instanceof Vl?(r.ka.addReference(i.key,t),Ey(r,i)):i instanceof Dl?(N("SyncEngine","Document no longer in limbo: "+i.key),r.ka.removeReference(i.key,t),r.ka.containsKey(i.key)||xl(r,i.key)):U()}function Ey(r,t){const n=t.key,i=n.path.canonicalString();r.La.get(n)||r.Na.has(i)||(N("SyncEngine","New document in limbo: "+n),r.Na.add(i),ho(r))}function ho(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const t=r.Na.values().next().value;r.Na.delete(t);const n=new M(X.fromString(t)),i=r.Ka.next();r.Ba.set(i,new uy(n)),r.La=r.La.insert(n,i),Rl(r.remoteStore,new lt(Me(Js(n.path)),i,"TargetPurposeLimboResolution",di.oe))}}async function ar(r,t,n){const i=B(r),s=[],a=[],u=[];i.xa.isEmpty()||(i.xa.forEach((l,d)=>{u.push(i.Ua(d,t,n).then(f=>{var m;if((f||n)&&i.isPrimaryClient){const E=f?!f.fromCache:(m=n==null?void 0:n.targetChanges.get(d.targetId))===null||m===void 0?void 0:m.current;i.sharedClientState.updateQueryState(d.targetId,E?"current":"not-current")}if(f){s.push(f);const E=ro.zi(d.targetId,f);a.push(E)}}))}),await Promise.all(u),i.Ma.R_(s),await async function(d,f){const m=B(d);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>S.forEach(f,P=>S.forEach(P.Wi,b=>m.persistence.referenceDelegate.addReference(E,P.targetId,b)).next(()=>S.forEach(P.Gi,b=>m.persistence.referenceDelegate.removeReference(E,P.targetId,b)))))}catch(E){if(!hn(E))throw E;N("LocalStore","Failed to update sequence numbers: "+E)}for(const E of f){const P=E.targetId;if(!E.fromCache){const b=m.us.get(P),V=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(V);m.us=m.us.insert(P,L)}}}(i.localStore,a))}async function Ty(r,t){const n=B(r);if(!n.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const i=await Il(n.localStore,t);n.currentUser=t,function(a,u){a.Qa.forEach(l=>{l.forEach(d=>{d.reject(new O(C.CANCELLED,u))})}),a.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await ar(n,i.Ts)}}function Iy(r,t){const n=B(r),i=n.Ba.get(t);if(i&&i.Fa)return j().add(i.key);{let s=j();const a=n.Oa.get(t);if(!a)return s;for(const u of a){const l=n.xa.get(u);s=s.unionWith(l.view.fa)}return s}}function Ul(r){const t=B(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ol.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Iy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=gy.bind(null,t),t.Ma.R_=ry.bind(null,t.eventManager),t.Ma.Wa=iy.bind(null,t.eventManager),t}function wy(r){const t=B(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=_y.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=yy.bind(null,t),t}class si{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ti(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,n){return null}Ya(t,n){return null}Ha(t){return R_(this.persistence,new v_,t.initialUser,this.serializer)}ja(t){return new Tl(no.ei,this.serializer)}za(t){return new D_}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}si.provider={build:()=>new si};class vy extends si{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,n){Q(this.persistence.referenceDelegate instanceof ri);const i=this.persistence.referenceDelegate.garbageCollector;return new u_(i,t.asyncQueue,n)}ja(t){const n=this.cacheSizeBytes!==void 0?Ae.withCacheSize(this.cacheSizeBytes):Ae.DEFAULT;return new Tl(i=>ri.ei(i,n),this.serializer)}}class ks{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>bu(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ty.bind(null,this.syncEngine),await X_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ey}()}createDatastore(t){const n=Ti(t.databaseInfo.databaseId),i=function(a){return new M_(a)}(t.databaseInfo);return function(a,u,l,d){return new F_(a,u,l,d)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,s,a,u,l){return new q_(i,s,a,u,l)}(this.localStore,this.datastore,t.asyncQueue,n=>bu(this.syncEngine,n,0),function(){return Au.p()?new Au:new N_}())}createSyncEngine(t,n){return function(s,a,u,l,d,f,m){const E=new cy(s,a,u,l,d,f);return m&&(E.$a=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const a=B(s);N("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await or(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ks.provider={build:()=>new ks};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Ye("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(t,n,i,s,a){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=Bc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async u=>{N("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(N("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=co(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function as(r,t){r.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let i=n.initialUser;r.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Il(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Vu(r,t){r.asyncQueue.verifyOperationInProgress();const n=await Py(r);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(i=>Ru(t.remoteStore,i)),r.setAppCheckTokenChangeListener((i,s)=>Ru(t.remoteStore,s)),r._onlineComponents=t}async function Py(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await as(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Zt("Error using user provided cache. Falling back to memory cache: "+n),await as(r,new si)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await as(r,new vy(void 0));return r._offlineComponents}async function Fl(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Vu(r,r._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Vu(r,new ks))),r._onlineComponents}function Sy(r){return Fl(r).then(t=>t.syncEngine)}async function Du(r){const t=await Fl(r),n=t.eventManager;return n.onListen=ly.bind(null,t.syncEngine),n.onUnlisten=fy.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=hy.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=py.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(r,t,n){if(!n)throw new O(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Cy(r,t,n,i){if(t===!0&&i===!0)throw new O(C.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Ou(r){if(!M.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Lu(r){if(M.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function vi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":U()}function jn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vi(r);throw new O(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Cy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bl((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ai{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mu(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Um;switch(i.type){case"firstParty":return new jm(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Nu.get(n);i&&(N("ComponentProvider","Removing Datastore"),Nu.delete(n),i.terminate())}(this),Promise.resolve()}}function by(r,t,n,i={}){var s;const a=(r=jn(r,Ai))._getSettings(),u=`${t}:${n}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),i.mockUserToken){let l,d;if(typeof i.mockUserToken=="string")l=i.mockUserToken,d=Ee.MOCK_USER;else{l=Gh(i.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=i.mockUserToken.sub||i.mockUserToken.user_id;if(!f)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ee(f)}r._authCredentials=new Fm(new Fc(l,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Ut(this.firestore,t,this._query)}}class Pe{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pe(this.firestore,t,this._key)}}class pt extends Ut{constructor(t,n,i){super(t,n,Js(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pe(this.firestore,null,new M(t))}withConverter(t){return new pt(this.firestore,t,this._path)}}function Zy(r,t,...n){if(r=de(r),ql("collection","path",t),r instanceof Ai){const i=X.fromString(t,...n);return Lu(i),new pt(r,null,i)}{if(!(r instanceof Pe||r instanceof pt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(X.fromString(t,...n));return Lu(i),new pt(r.firestore,null,i)}}function ky(r,t,...n){if(r=de(r),arguments.length===1&&(t=Bc.newId()),ql("doc","path",t),r instanceof Ai){const i=X.fromString(t,...n);return Ou(i),new Pe(r,null,new M(i))}{if(!(r instanceof Pe||r instanceof pt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(X.fromString(t,...n));return Ou(i),new Pe(r.firestore,r instanceof pt?r.converter:null,new M(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new vl(this,"async_queue_retry"),this.fu=()=>{const i=os();i&&N("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=t;const n=os();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const n=os();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new bt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!hn(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const n=this.gu.then(()=>(this.Ru=!0,t().catch(i=>{this.Au=i,this.Ru=!1;const s=function(u){let l=u.message||"";return u.stack&&(l=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),l}(i);throw Ye("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ru=!1,i))));return this.gu=n,n}enqueueAfterDelay(t,n,i){this.pu(),this.mu.indexOf(t)>-1&&(n=0);const s=uo.createAndSchedule(this,t,n,i,a=>this.Su(a));return this.du.push(s),s}pu(){this.Au&&U()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const n of this.du)if(n.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.du)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const n=this.du.indexOf(t);this.du.splice(n,1)}}function Uu(r){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const a of i)if(a in s&&typeof s[a]=="function")return!0;return!1}(r,["next","error","complete"])}class oi extends Ai{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new xu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new xu(t),this._firestoreClient=void 0,await t}}}function Vy(r,t){const n=typeof r=="object"?r:Ju(),i=typeof r=="string"?r:"(default)",s=Ns(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=zh("firestore");a&&by(s,...a)}return s}function jl(r){if(r._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Dy(r),r._firestoreClient}function Dy(r){var t,n,i;const s=r._freezeSettings(),a=function(l,d,f,m){return new rg(l,d,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Bl(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Ry(r._authCredentials,r._appCheckCredentials,r._queue,a,r._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this._byteString=t}static fromBase64String(t){try{return new on(fe.fromBase64String(t))}catch(n){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new on(fe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==s[a])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=/^__.*__$/;class Oy{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new Mt(t,this.data,this.fieldMask,n,this.fieldTransforms):new ir(t,this.data,n,this.fieldTransforms)}}function zl(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class go{constructor(t,n,i,s,a,u){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new go(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.xu({path:i,Nu:!1});return s.Lu(t),s}Bu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.xu({path:i,Nu:!1});return s.Fu(),s}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return ai(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(zl(this.Mu)&&Ny.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class Ly{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||Ti(t)}$u(t,n,i,s=!1){return new go({Mu:t,methodName:n,Ku:i,path:he.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wl(r){const t=r._freezeSettings(),n=Ti(r._databaseId);return new Ly(r._databaseId,!!t.ignoreUndefinedProperties,n)}function My(r,t,n,i,s,a={}){const u=r.$u(a.merge||a.mergeFields?2:0,t,n,s);Kl("Data must be an object, but it was:",u,i);const l=Gl(i,u);let d,f;if(a.merge)d=new De(u.fieldMask),f=u.fieldTransforms;else if(a.mergeFields){const m=[];for(const E of a.mergeFields){const P=Uy(t,E,n);if(!u.contains(P))throw new O(C.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);By(m,P)||m.push(P)}d=new De(m),f=u.fieldTransforms.filter(E=>d.covers(E.field))}else d=null,f=u.fieldTransforms;return new Oy(new Ce(l),d,f)}function xy(r,t,n,i=!1){return _o(n,r.$u(i?4:3,t))}function _o(r,t){if(Hl(r=de(r)))return Kl("Unsupported field value:",t,r),Gl(r,t);if(r instanceof $l)return function(i,s){if(!zl(s.Mu))throw s.qu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(i,s){const a=[];let u=0;for(const l of i){let d=_o(l,s.ku(u));d==null&&(d={nullValue:"NULL_VALUE"}),a.push(d),u++}return{arrayValue:{values:a}}}(r,t)}return function(i,s){if((i=de(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Rg(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=oe.fromDate(i);return{timestampValue:ni(s.serializer,a)}}if(i instanceof oe){const a=new oe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ni(s.serializer,a)}}if(i instanceof po)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof on)return{bytesValue:fl(s.serializer,i._byteString)};if(i instanceof Pe){const a=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(a))throw s.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:eo(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof mo)return function(u,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(d=>{if(typeof d!="number")throw l.qu("VectorValues must only contain numeric values.");return Ys(l.serializer,d)})}}}}}}(i,s);throw s.qu(`Unsupported field value: ${vi(i)}`)}(r,t)}function Gl(r,t){const n={};return qc(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ot(r,(i,s)=>{const a=_o(s,t.Ou(i));a!=null&&(n[i]=a)}),{mapValue:{fields:n}}}function Hl(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof oe||r instanceof po||r instanceof on||r instanceof Pe||r instanceof $l||r instanceof mo)}function Kl(r,t,n){if(!Hl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=vi(n);throw i==="an object"?t.qu(r+" a custom object"):t.qu(r+" "+i)}}function Uy(r,t,n){if((t=de(t))instanceof fo)return t._internalPath;if(typeof t=="string")return Ql(r,t);throw ai("Field path arguments must be of type string or ",r,!1,void 0,n)}const Fy=new RegExp("[~\\*/\\[\\]]");function Ql(r,t,n){if(t.search(Fy)>=0)throw ai(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new fo(...t.split("."))._internalPath}catch{throw ai(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function ai(r,t,n,i,s){const a=i&&!i.isEmpty(),u=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(a||u)&&(d+=" (found",a&&(d+=` in field ${i}`),u&&(d+=` in document ${s}`),d+=")"),new O(C.INVALID_ARGUMENT,l+r+d)}function By(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,n,i,s,a){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new qy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ri("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qy extends Jl{data(){return super.data()}}function Ri(r,t){return typeof t=="string"?Ql(r,t):t instanceof fo?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yo{}class Yl extends yo{}function eE(r,t,...n){let i=[];t instanceof yo&&i.push(t),i=i.concat(n),function(a){const u=a.filter(d=>d instanceof Eo).length,l=a.filter(d=>d instanceof Pi).length;if(u>1||u>0&&l>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)r=s._apply(r);return r}class Pi extends Yl{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new Pi(t,n,i)}_apply(t){const n=this._parse(t);return Xl(t._query,n),new Ut(t.firestore,t.converter,Is(t._query,n))}_parse(t){const n=Wl(t.firestore);return function(a,u,l,d,f,m,E){let P;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Bu(E,m);const b=[];for(const V of E)b.push(Fu(d,a,V));P={arrayValue:{values:b}}}else P=Fu(d,a,E)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Bu(E,m),P=xy(l,u,E,m==="in"||m==="not-in");return se.create(f,m,P)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function tE(r,t,n){const i=t,s=Ri("where",r);return Pi._create(s,i,n)}class Eo extends yo{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Eo(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Oe.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,a){let u=s;const l=a.getFlattenedFilters();for(const d of l)Xl(u,d),u=Is(u,d)}(t._query,n),new Ut(t.firestore,t.converter,Is(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class To extends Yl{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new To(t,n)}_apply(t){const n=function(s,a,u){if(s.startAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qn(a,u)}(t._query,this._field,this._direction);return new Ut(t.firestore,t.converter,function(s,a){const u=s.explicitOrderBy.concat([a]);return new dn(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function nE(r,t="asc"){const n=t,i=Ri("orderBy",r);return To._create(i,n)}function Fu(r,t,n){if(typeof(n=de(n))=="string"){if(n==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jc(t)&&n.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(X.fromString(n));if(!M.isDocumentKey(i))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return iu(r,new M(i))}if(n instanceof Pe)return iu(r,n._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vi(n)}.`)}function Bu(r,t){if(!Array.isArray(r)||r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Xl(r,t){const n=function(s,a){for(const u of s)for(const l of u.getFlattenedFilters())if(a.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class $y{convertValue(t,n="none"){switch(yt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return re(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(_t(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw U()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return Ot(t,(s,a)=>{i[s]=this.convertValue(a,n)}),i}convertVectorValue(t){var n,i,s;const a=(s=(i=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(u=>re(u.doubleValue));return new mo(a)}convertGeoPoint(t){return new po(re(t.latitude),re(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=pi(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Gn(t));default:return null}}convertTimestamp(t){const n=gt(t);return new oe(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=X.fromString(t);Q(El(i));const s=new Hn(i.get(1),i.get(3)),a=new M(i.popFirst(5));return s.isEqual(n)||Ye(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(r,t,n){let i;return i=r?r.toFirestore(t):t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Zl extends Jl{constructor(t,n,i,s,a,u){super(t,n,i,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new jr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(Ri("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class jr extends Zl{data(t={}){return super.data(t)}}class Wy{constructor(t,n,i,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Mn(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new jr(this._firestore,this._userDataWriter,i.key,i,new Mn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(l=>{const d=new jr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Mn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>a||l.type!==3).map(l=>{const d=new jr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Mn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return l.type!==0&&(f=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),m=u.indexOf(l.doc.key)),{type:Gy(l.type),doc:d,oldIndex:f,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Gy(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class eh extends $y{constructor(t){super(),this.firestore=t}convertBytes(t){return new on(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}function rE(r,t){const n=jn(r.firestore,oi),i=ky(r),s=zy(r.converter,t);return Hy(n,[My(Wl(r.firestore),"addDoc",i._key,s,r.converter!==null,{}).toMutation(i._key,Ke.exists(!1))]).then(()=>i)}function iE(r,...t){var n,i,s;r=de(r);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||Uu(t[u])||(a=t[u],u++);const l={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Uu(t[u])){const E=t[u];t[u]=(n=E.next)===null||n===void 0?void 0:n.bind(E),t[u+1]=(i=E.error)===null||i===void 0?void 0:i.bind(E),t[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let d,f,m;if(r instanceof Pe)f=jn(r.firestore,oi),m=Js(r._key.path),d={next:E=>{t[u]&&t[u](Ky(f,r,E))},error:t[u+1],complete:t[u+2]};else{const E=jn(r,Ut);f=jn(E.firestore,oi),m=E._query;const P=new eh(f);d={next:b=>{t[u]&&t[u](new Wy(f,P,E,b))},error:t[u+1],complete:t[u+2]},jy(r._query)}return function(P,b,V,L){const D=new Ay(L),z=new sy(b,D,V);return P.asyncQueue.enqueueAndForget(async()=>ty(await Du(P),z)),()=>{D.eu(),P.asyncQueue.enqueueAndForget(async()=>ny(await Du(P),z))}}(jl(f),m,l,d)}function Hy(r,t){return function(i,s){const a=new bt;return i.asyncQueue.enqueueAndForget(async()=>my(await Sy(i),s,a)),a.promise}(jl(r),t)}function Ky(r,t,n){const i=n.docs.get(t._key),s=new eh(r);return new Zl(r,s,t._key,i,new Mn(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){cn=s})(an),Yt(new kt("firestore",(i,{instanceIdentifier:s,options:a})=>{const u=i.getProvider("app").getImmediate(),l=new oi(new Bm(i.getProvider("auth-internal")),new zm(i.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(f.options.projectId,m)}(u,s),u);return a=Object.assign({useFetchStreams:n},a),l._setSettings(a),l},"PUBLIC").setMultipleInstances(!0)),ft(Xa,"4.7.5",t),ft(Xa,"4.7.5","esm2017")})();const Qy={apiKey:"AIzaSyDuf1p0JIvRWSWW8eDJ6C0_qRjdAOagPac",authDomain:"my-first-project-e4ec6.firebaseapp.com",projectId:"my-first-project-e4ec6",storageBucket:"my-first-project-e4ec6.firebasestorage.app",messagingSenderId:"365216987541",appId:"1:365216987541:web:7f6cacf577bbcc2b79de9c"},th=Qu(Qy),At=Mm(th),sE=Vy(th);function oE(){const r=async(f,m,E)=>{const P="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png";try{const V=(await Ep(At,m,E)).user;wp(V,{displayName:f,photoURL:P}).then(()=>{window.location.href="../index.html"})}catch(b){console.log("Error found in register : ",b.message)}},t=(f,m)=>{Tp(At,f,m).then(E=>{l(E.user),window.location.href="../index.html"}).catch(E=>{console.log("Error found in login user : ",e.message)})},n=()=>{Rp(At).then(()=>{d(),window.location.href="../signin.html"}).catch(f=>{console.log("Error Found in logout user : ",f.message)})},i=async(f,m)=>{try{await yp(At,f),m.textContent="Reset password email has sent. Please check inbox.",m.style.color="green"}catch(E){console.log("Error found in reset password email : ",E.message),m.textContent="Error : "+E.message,m.style.color="red"}},s=()=>{const f=new $e;Wp(At,f).then(m=>{l(m.user),window.location.href="../index.html"}).catch(m=>{console.log("Error Found in google sign-in : ",m.message)})},a=()=>{qa(At,f=>{if(f)return!0;window.location.href="../signin.html"})},u=f=>{qa(At,m=>{m&&f(m)})},l=f=>{localStorage.setItem("username",f.displayName)},d=()=>{localStorage.removeItem("username")};return{registerUser:r,loginUser:t,logoutUser:n,resetPassword:i,googleLogin:s,isLoggedIn:a,getUser:u}}export{oE as A,oe as T,rE as a,nE as b,Zy as c,sE as d,iE as o,eE as q,tE as w};

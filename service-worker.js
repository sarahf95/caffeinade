"use strict";var precacheConfig=[["/index.html","6efa263c3425eb43558e845f08954e21"],["/static/css/main.9dc9225f.css","ad4fed89f8c24a55502d454b1f23c6d2"],["/static/js/main.429aaa35.js","9bc979b528abc42cab729b4972b2750d"],["/static/media/SweetSensations.cfc38b60.ttf","cfc38b60ee39a1dc72d8a62c8601c137"],["/static/media/agave.e9188b36.png","e9188b369ab47fa535840d41818a49de"],["/static/media/andre.3682b9f4.png","3682b9f493765373c98833564afb6e99"],["/static/media/black-raspberry.74c05413.svg","74c05413d2bf052563a133d150d88428"],["/static/media/bottles-basket.f4dbff1d.JPG","f4dbff1d1595c6624eb936c394bc1e80"],["/static/media/carnival.d48516b8.png","d48516b8d80fc3565b61dc99fa9970f8"],["/static/media/end-quote.25a7d10b.svg","25a7d10bec4b66fe5dced859dba3fc88"],["/static/media/henry.d97df8bd.png","d97df8bd64dfb3d8799e3a7788dda3f8"],["/static/media/lemon-bottle.676e6cdf.JPG","676e6cdf8a16a06b7c677404668a5bf2"],["/static/media/lemon.2b7f2d27.png","2b7f2d27de90165bc6c7a78ffb7c5ba0"],["/static/media/logo.6395b357.jpg","6395b357640c7835f49c713d273ceb8f"],["/static/media/nikki.0b329fb8.png","0b329fb85d5bd786062d9bcd57c77719"],["/static/media/open-quote.1babbdc5.svg","1babbdc5974fe9a6cd0add70f2946a42"],["/static/media/raspberry-white.0121180b.png","0121180b4d9278e0d289e18e723b50cb"],["/static/media/sarah.876cd40a.png","876cd40ad0ba661220843d6923b7732d"],["/static/media/streetfair.3812686c.png","3812686ceec17eab74d1a7f68fa08d20"],["/static/media/table.a0d0dfb2.JPG","a0d0dfb29e9a8318684b0e4288d44a75"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
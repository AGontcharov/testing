"use strict";var precacheConfig=[["/alexgontcharov.github.io/index.html","82fa710331332c726d4e67525182196f"],["/alexgontcharov.github.io/static/css/main.ab00e5bd.css","7e99ebb9c7d8568b2d9803e0e766320b"],["/alexgontcharov.github.io/static/js/main.f95f9c11.js","a1c20232c8b927b01a5f243953416710"],["/alexgontcharov.github.io/static/media/GeneticAlgorithms.16036da6.png","16036da6cdb036108ebc7e841db30b82"],["/alexgontcharov.github.io/static/media/NotAvailable.9207e476.jpg","9207e4762a32bea22b2cf740e5b5dc90"],["/alexgontcharov.github.io/static/media/Qlik.aaf74e57.png","aaf74e579a22bb01246fef1037d0cebc"],["/alexgontcharov.github.io/static/media/artificialNeuralNetwork.2316affd.jpg","2316affde2150b5e51ae5634cadbe224"],["/alexgontcharov.github.io/static/media/cover.13e58b56.jpg","13e58b56354121b036079abf6b1aaac3"],["/alexgontcharov.github.io/static/media/dialogc.cf28c99a.png","cf28c99a45bc9d0006eaaa2edf2f8ea0"],["/alexgontcharov.github.io/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/alexgontcharov.github.io/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/alexgontcharov.github.io/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/alexgontcharov.github.io/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/alexgontcharov.github.io/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/alexgontcharov.github.io/static/media/profile.f8c8492a.jpg","f8c8492a662a4f0ebd61d482f4569872"],["/alexgontcharov.github.io/static/media/scubaDiving.8e8dbaf8.jpg","8e8dbaf89290f06949872597b41596eb"],["/alexgontcharov.github.io/static/media/wildebeest.2571edb8.png","2571edb8c390bd08127f8a94597afbdf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/alexgontcharov.github.io/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
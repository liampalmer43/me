"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/me/index.html","79c8c2efa9d275b84e2f9cf94e010f72"],["/me/static/css/main.2e3de6f7.css","ecd4a6f24e6502de62c73c5cb40459ec"],["/me/static/js/main.3923205f.js","0bcc59c2b5c7d0e77b1e88c7c74cabd5"],["/me/static/media/18U_action.925d07f4.jpg","925d07f4f05184d588085a99d04f5088"],["/me/static/media/18U_podium.70ec698f.jpg","70ec698f5bcd5765e6261284aa9f4658"],["/me/static/media/CS489_ML_Report.ffb096bc.pdf","ffb096bca524b1b229e1ee8ae0d0be8c"],["/me/static/media/KWClassicW16.7b06ae9b.jpg","7b06ae9bc3d93d83841e3ee91417dfda"],["/me/static/media/Liam_Resume.4e84e63a.pdf","4e84e63afe41ac93138097cfbcb02080"],["/me/static/media/Liam_Transcript.510a6d15.pdf","510a6d15dadf5de5be422e02e16db4f9"],["/me/static/media/adroll_logo.17227a86.jpg","17227a86388e8a28b2c326f9ff6db3cc"],["/me/static/media/cbva.c6df7a8e.jpg","c6df7a8e12afb10ad5551045274bf37a"],["/me/static/media/cyprus1.47f3cd9e.jpg","47f3cd9efeb04214de5628c564b6199a"],["/me/static/media/cyprus2.87e387df.jpg","87e387dfc81a4f978f13ee1dc3ca6296"],["/me/static/media/giddit.fa098301.png","fa09830175ce36a14081712ea3c121e5"],["/me/static/media/google_games.dda28e89.png","dda28e892f7bc2d43ac0cd7aeca14eb9"],["/me/static/media/google_games_word.b6a23723.png","b6a237239b5f99b709c508e3d837bcb7"],["/me/static/media/hack_harvard.f1602132.jpg","f1602132418814badf2b39f435b5aba3"],["/me/static/media/hack_harvard1.8fae5378.jpeg","8fae5378c1d8d385841d69fe83f07080"],["/me/static/media/hackohio.bdd04315.jpg","bdd04315d070bcd187cc57625de459d4"],["/me/static/media/holyoke1.c11ed16c.jpeg","c11ed16c2ea87dde08f08c8e70d6fb25"],["/me/static/media/holyoke2.5e1500f5.jpeg","5e1500f5edec223c8c8e6804c045e956"],["/me/static/media/holyoke3.1f8aaa4f.jpg","1f8aaa4fbdc35039052a4080c7367537"],["/me/static/media/intramuralF16.cc4a9f20.jpeg","cc4a9f20127903f1e6d182640e1883e2"],["/me/static/media/intramuralW16.2012354b.jpeg","2012354bbb990c0d59cbb427bad7b40d"],["/me/static/media/intramuralW17.92889d85.jpg","92889d856d60c63d49fd4f38ebfb00bb"],["/me/static/media/myo.d005e62f.png","d005e62f4ab96252323a1686e59472ec"],["/me/static/media/ootm.ed2d4b61.jpg","ed2d4b616f33767be53adf10a6674016"],["/me/static/media/ootm_scores.fc2b776b.png","fc2b776b0664c3460646dc71ebd05f99"],["/me/static/media/oracle_logo.3498e2d2.png","3498e2d2f6612f3d620c9851b63889c2"],["/me/static/media/picto_story.2e8816ce.png","2e8816cefe002bbb5b691e4da9777b83"],["/me/static/media/psu.5de6aacf.jpg","5de6aacfca227d5bff193d0a8e5a2de3"],["/me/static/media/sidefx_logo.03a55c3e.png","03a55c3e4176b9d1241ca18d02435db3"],["/me/static/media/u18.6faea2c5.jpeg","6faea2c50238af4130ae1d1a412fe67a"],["/me/static/media/u22.355584f3.jpeg","355584f3b6801926fdf6f8e314978884"],["/me/static/media/u24.1ffa61ff.jpg","1ffa61ff29732a5abecb41131352de78"],["/me/static/media/uwaterloo_logo.d9cda810.gif","d9cda810fe25048254fe31aaaa08ca8c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/me/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
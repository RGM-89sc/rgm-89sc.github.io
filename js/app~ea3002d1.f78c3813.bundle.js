(self.webpackChunkrgm_blog=self.webpackChunkrgm_blog||[]).push([[636],{5637:function(n,t,e){"use strict";e.d(t,{lX:function(){return m},q_:function(){return k},PP:function(){return A},ob:function(){return h},Ep:function(){return s}});var o=e(3400),i=e(9611),r=e(3269);function a(n){return"/"===n.charAt(0)?n:"/"+n}function c(n){return"/"===n.charAt(0)?n.substr(1):n}function u(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function f(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function s(n){var t=n.pathname,e=n.search,o=n.hash,i=t||"/";return e&&"?"!==e&&(i+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(i+="#"===o.charAt(0)?o:"#"+o),i}function h(n,t,e,r){var a;"string"==typeof n?(a=function(n){var t=n||"/",e="",o="",i=t.indexOf("#");-1!==i&&(o=t.substr(i),t=t.substr(0,i));var r=t.indexOf("?");return-1!==r&&(e=t.substr(r),t=t.substr(0,r)),{pathname:t,search:"?"===e?"":e,hash:"#"===o?"":o}}(n)).state=t:(void 0===(a=(0,o.Z)({},n)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(a.key=e),r?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=(0,i.Z)(a.pathname,r.pathname)):a.pathname=r.pathname:a.pathname||(a.pathname="/"),a}function d(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,o,i){if(null!=n){var r="function"==typeof n?n(t,e):n;"string"==typeof r?"function"==typeof o?o(r,i):i(!0):i(!1!==r)}else i(!0)},appendListener:function(n){var e=!0;function o(){e&&n.apply(void 0,arguments)}return t.push(o),function(){e=!1,t=t.filter((function(n){return n!==o}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];t.forEach((function(n){return n.apply(void 0,e)}))}}}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);function v(n,t){t(window.confirm(n))}var p="popstate",w="hashchange";function g(){try{return window.history.state||{}}catch(n){return{}}}function m(n){void 0===n&&(n={}),l||(0,r.Z)(!1);var t,e=window.history,i=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,c=!(-1===window.navigator.userAgent.indexOf("Trident")),m=n,y=m.forceRefresh,P=void 0!==y&&y,x=m.getUserConfirmation,O=void 0===x?v:x,b=m.keyLength,k=void 0===b?6:b,T=n.basename?f(a(n.basename)):"";function A(n){var t=n||{},e=t.key,o=t.state,i=window.location,r=i.pathname+i.search+i.hash;return T&&(r=u(r,T)),h(r,o,e)}function L(){return Math.random().toString(36).substr(2,k)}var E=d();function C(n){(0,o.Z)(G,n),G.length=e.length,E.notifyListeners(G.location,G.action)}function S(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||R(A(n.state))}function U(){R(A(g()))}var I=!1;function R(n){if(I)I=!1,C();else{E.confirmTransitionTo(n,"POP",O,(function(t){t?C({action:"POP",location:n}):function(n){var t=G.location,e=H.indexOf(t.key);-1===e&&(e=0);var o=H.indexOf(n.key);-1===o&&(o=0);var i=e-o;i&&(I=!0,F(i))}(n)}))}}var Z=A(g()),H=[Z.key];function M(n){return T+s(n)}function F(n){e.go(n)}var B=0;function _(n){1===(B+=n)&&1===n?(window.addEventListener(p,S),c&&window.addEventListener(w,U)):0===B&&(window.removeEventListener(p,S),c&&window.removeEventListener(w,U))}var q=!1;var G={length:e.length,action:"POP",location:Z,createHref:M,push:function(n,t){var o="PUSH",r=h(n,t,L(),G.location);E.confirmTransitionTo(r,o,O,(function(n){if(n){var t=M(r),a=r.key,c=r.state;if(i)if(e.pushState({key:a,state:c},null,t),P)window.location.href=t;else{var u=H.indexOf(G.location.key),f=H.slice(0,u+1);f.push(r.key),H=f,C({action:o,location:r})}else window.location.href=t}}))},replace:function(n,t){var o="REPLACE",r=h(n,t,L(),G.location);E.confirmTransitionTo(r,o,O,(function(n){if(n){var t=M(r),a=r.key,c=r.state;if(i)if(e.replaceState({key:a,state:c},null,t),P)window.location.replace(t);else{var u=H.indexOf(G.location.key);-1!==u&&(H[u]=r.key),C({action:o,location:r})}else window.location.replace(t)}}))},go:F,goBack:function(){F(-1)},goForward:function(){F(1)},block:function(n){void 0===n&&(n=!1);var t=E.setPrompt(n);return q||(_(1),q=!0),function(){return q&&(q=!1,_(-1)),t()}},listen:function(n){var t=E.appendListener(n);return _(1),function(){_(-1),t()}}};return G}var y="hashchange",P={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+c(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:c,decodePath:a},slash:{encodePath:a,decodePath:a}};function x(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function O(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function b(n){window.location.replace(x(window.location.href)+"#"+n)}function k(n){void 0===n&&(n={}),l||(0,r.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),i=e.getUserConfirmation,c=void 0===i?v:i,p=e.hashType,w=void 0===p?"slash":p,g=n.basename?f(a(n.basename)):"",m=P[w],k=m.encodePath,T=m.decodePath;function A(){var n=T(O());return g&&(n=u(n,g)),h(n)}var L=d();function E(n){(0,o.Z)(q,n),q.length=t.length,L.notifyListeners(q.location,q.action)}var C=!1,S=null;function U(){var n,t,e=O(),o=k(e);if(e!==o)b(o);else{var i=A(),r=q.location;if(!C&&(t=i,(n=r).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(S===s(i))return;S=null,function(n){if(C)C=!1,E();else{var t="POP";L.confirmTransitionTo(n,t,c,(function(e){e?E({action:t,location:n}):function(n){var t=q.location,e=H.lastIndexOf(s(t));-1===e&&(e=0);var o=H.lastIndexOf(s(n));-1===o&&(o=0);var i=e-o;i&&(C=!0,M(i))}(n)}))}}(i)}}var I=O(),R=k(I);I!==R&&b(R);var Z=A(),H=[s(Z)];function M(n){t.go(n)}var F=0;function B(n){1===(F+=n)&&1===n?window.addEventListener(y,U):0===F&&window.removeEventListener(y,U)}var _=!1;var q={length:t.length,action:"POP",location:Z,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=x(window.location.href)),e+"#"+k(g+s(n))},push:function(n,t){var e="PUSH",o=h(n,void 0,void 0,q.location);L.confirmTransitionTo(o,e,c,(function(n){if(n){var t=s(o),i=k(g+t);if(O()!==i){S=t,function(n){window.location.hash=n}(i);var r=H.lastIndexOf(s(q.location)),a=H.slice(0,r+1);a.push(t),H=a,E({action:e,location:o})}else E()}}))},replace:function(n,t){var e="REPLACE",o=h(n,void 0,void 0,q.location);L.confirmTransitionTo(o,e,c,(function(n){if(n){var t=s(o),i=k(g+t);O()!==i&&(S=t,b(i));var r=H.indexOf(s(q.location));-1!==r&&(H[r]=t),E({action:e,location:o})}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(n){void 0===n&&(n=!1);var t=L.setPrompt(n);return _||(B(1),_=!0),function(){return _&&(_=!1,B(-1)),t()}},listen:function(n){var t=L.appendListener(n);return B(1),function(){B(-1),t()}}};return q}function T(n,t,e){return Math.min(Math.max(n,t),e)}function A(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,i=t.initialEntries,r=void 0===i?["/"]:i,a=t.initialIndex,c=void 0===a?0:a,u=t.keyLength,f=void 0===u?6:u,l=d();function v(n){(0,o.Z)(P,n),P.length=P.entries.length,l.notifyListeners(P.location,P.action)}function p(){return Math.random().toString(36).substr(2,f)}var w=T(c,0,r.length-1),g=r.map((function(n){return h(n,void 0,"string"==typeof n?p():n.key||p())})),m=s;function y(n){var t=T(P.index+n,0,P.entries.length-1),o=P.entries[t];l.confirmTransitionTo(o,"POP",e,(function(n){n?v({action:"POP",location:o,index:t}):v()}))}var P={length:g.length,action:"POP",location:g[w],index:w,entries:g,createHref:m,push:function(n,t){var o="PUSH",i=h(n,t,p(),P.location);l.confirmTransitionTo(i,o,e,(function(n){if(n){var t=P.index+1,e=P.entries.slice(0);e.length>t?e.splice(t,e.length-t,i):e.push(i),v({action:o,location:i,index:t,entries:e})}}))},replace:function(n,t){var o="REPLACE",i=h(n,t,p(),P.location);l.confirmTransitionTo(i,o,e,(function(n){n&&(P.entries[P.index]=i,v({action:o,location:i}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(n){var t=P.index+n;return t>=0&&t<P.entries.length},block:function(n){return void 0===n&&(n=!1),l.setPrompt(n)},listen:function(n){return l.appendListener(n)}};return P}}}]);
//# sourceMappingURL=app~ea3002d1.f78c3813.bundle.js.map
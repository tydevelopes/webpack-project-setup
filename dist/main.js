!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";e.r(r);e(1);function n(t){return function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}console.log("Ready to code!");var o,u,a,i=(a=[1,3,-4,6,32,0],[Math.max.apply(Math,n(a)),Math.min.apply(Math,n(a))]),l=(u=2,function(t){if(Array.isArray(t))return t}(o=i)||function(t,r){var e=[],n=!0,o=!1,u=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){o=!0,u=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return e}(o,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),c=l[0],f=l[1];console.log("Max: ".concat(c,", Min: ").concat(f))},function(t,r,e){}]);
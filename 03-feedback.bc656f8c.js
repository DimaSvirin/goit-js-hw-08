!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,b=Math.min,m=function(){return s.Date.now()};function y(e,t,n){var i,o,u,f,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function T(e){return c=e,a=setTimeout(w,t),d?y(e):f}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=m();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-l);return s?b(n,u-(e-c)):n}(e))}function O(e){return a=void 0,v&&i?y(e):(i=o=void 0,f)}function x(){var e=m(),n=h(e);if(i=arguments,o=this,l=e,n){if(void 0===a)return T(l);if(s)return a=setTimeout(w,t),y(l)}return void 0===a&&(a=setTimeout(w,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=o=a=void 0},x.flush=function(){return void 0===a?f:O(m())},x}function g(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=f.test(t);return r||a.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var T={},h=document.querySelector(".feedback-form");function w(){var e=JSON.stringify(T);localStorage.setItem("feedback-form-state",e)}h.addEventListener("submit",(function(n){n.preventDefault();new FormData(n.currentTarget);if(""===email.value||""===message.value)return alert("Please fill in all the fields!");e(t)(w,500),n.currentTarget.reset()})),h.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,w()}),500))}();
//# sourceMappingURL=03-feedback.bc656f8c.js.map

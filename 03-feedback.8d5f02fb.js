var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function m(e,t,n){var o,r,i,f,u,a,c=0,m=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,u=setTimeout(S,t),m?g(e):f}function j(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=i}function S(){var e=d();if(j(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-a);return b?s(n,i-(e-c)):n}(e))}function T(e){return u=void 0,y&&o?g(e):(o=r=void 0,f)}function O(){var e=d(),n=j(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return h(a);if(b)return u=setTimeout(S,t),g(a)}return void 0===u&&(u=setTimeout(S,t)),f}return t=p(t)||0,v(n)&&(m=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},O.flush=function(){return void 0===u?f:T(d())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var f="function"==typeof e.valueOf?e.valueOf():e;e=v(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),y=document.querySelector(".feedback-form input"),g=document.querySelector(".feedback-form textarea");b.addEventListener("submit",(function(e){if(e.preventDefault(),""===y.value||""===g.value){const e=["Try again","Not enough text","Go on to type","I believe in you"];for(let t of e)return alert(e[Math.floor(Math.random()*e.length)])}const t=localStorage.getItem("feedback-form-state");JSON.parse(t);localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),b.addEventListener("input",(function(){const e={emailInput:y.value,messageImput:g.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}));
//# sourceMappingURL=03-feedback.8d5f02fb.js.map
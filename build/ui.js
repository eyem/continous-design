(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,":root {\n  --color-white: #fff;\n  --color-blue: #4b2fee;\n  --color-blue-secondary: #1d0d79;\n  --color-blue-hover: #09032c;\n\n  --time-short-animation: 0.25s;\n  --time-regular-animation: 0.65s;\n}\n\nhtml,\nbody {\n  font-size: 16px;\n}\n\nhtml,\nbody,\niframe {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,\n    'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 0.75em;\n}\n\nmain {\n  width: 100%;\n\n  z-index: 1;\n  position: fixed;\n  transform: translateY(0);\n  transition: var(--time-regular-animation);\n  box-sizing: border-box;\n  padding: 0.5em;\n  background-color: var(--color-white);\n}\n\nlabel {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,\n    'Open Sans', 'Helvetica Neue', sans-serif;\n  display: block !important;\n}\n\ninput {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,\n    'Open Sans', 'Helvetica Neue', sans-serif;\n\n  width: 100%;\n  height: 2em;\n  display: block;\n\n  padding: 0.5em;\n  margin-bottom: 1em;\n  font-size: 0.9rem;\n}\n\nbutton {\n  width: 100%;\n  height: 3em;\n\n  border: 0;\n  border-radius: 0.5em;\n  font-weight: 700;\n  background-color: var(--color-blue);\n  color: var(--color-white);\n\n  margin: 0 0 1em 0;\n  text-decoration: none;\n  cursor: pointer;\n  text-align: center;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  transition: var(--time-short-animation);\n}\n\nbutton:hover,\nbutton:focus {\n  background-color: var(--color-blue-hover);\n  transition: var(--time-short-animation);\n}\n\n.ButtonSecondary {\n  background-color: var(--color-blue-secondary);\n}\n\n/* Helper classes */\n.Input {\n  width: 48%;\n}\n\n.Flex {\n  display: flex;\n  justify-content: space-between;\n}\n",""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var u=0;u<n.length;u++){var s=[].concat(n[u]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},o=[],r=0;r<n.length;r++){var u=n[r],s=e.base?u[0]+e.base:u[0],c=t[s]||0,l="".concat(s," ").concat(c);t[s]=c+1;var d=a(l),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:l,updater:h(p,e),references:1}),o.push(l)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,l=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function d(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,v=0;function h(n,e){var t,o,r;if(e.singleton){var i=v++;t=f||(f=s(e)),o=d.bind(null,t,i,!1),r=d.bind(null,t,i,!0)}else t=s(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var s=u(n,e),c=0;c<t.length;c++){var l=a(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(28);function r(){const n=document.querySelector("#InputToken"),e=document.querySelector("#InputUser"),t=document.querySelector("#InputRepo"),o=document.querySelector("#InputWorkflow"),r=document.querySelector("#InputMessage"),i=document.querySelector("#InputBranch"),a=document.querySelector("#InputVersion");if(!(n&&e&&t&&o&&r&&i&&a))throw new Error("Missing required inputs in getInputs()!");return{tokenInput:n,userInput:e,repoInput:t,workflowInput:o,messageInput:r,branchInput:i,versionInput:a}}function i(n,e=!1){return n&&e?n.value&&""!==n.value?n.value:n.placeholder:n&&!e&&n.value?n.value:""}function a(){const{tokenInput:n,userInput:e,repoInput:t,workflowInput:o,messageInput:a,branchInput:u,versionInput:s}=r();return{token:i(n),user:i(e),repo:i(t),workflow:i(o,!0),message:i(a,!0),branch:i(u,!0),version:i(s,!0)}}e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var u=function(n,e,t,o){return new(t||(t=Promise))((function(r,i){function a(n){try{s(o.next(n))}catch(n){i(n)}}function u(n){try{s(o.throw(n))}catch(n){i(n)}}function s(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,u)}s((o=o.apply(n,e||[])).next())}))},s=function(n,e,t,o){return new(t||(t=Promise))((function(r,i){function a(n){try{s(o.next(n))}catch(n){i(n)}}function u(n){try{s(o.throw(n))}catch(n){i(n)}}function s(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,u)}s((o=o.apply(n,e||[])).next())}))};!function(){console.log("Thanks for using the Figma GitHub Actions plugin!");const n="FIGMA_GITHUB_ACTIONS_PLUGIN";(function(n){const e=document.querySelector("#ButtonStore"),t=document.querySelector("#ButtonClear"),o=document.querySelector("#ButtonStart");if(!o||!e||!t)throw new Error("Missing required buttons and inputs in addEventListeners()!");e.onclick=()=>s(this,void 0,void 0,(function*(){parent.postMessage({pluginMessage:{type:"store",key:n,data:JSON.stringify(a())}},"*")})),t.onclick=()=>s(this,void 0,void 0,(function*(){parent.postMessage({pluginMessage:{type:"clear",key:n,data:""}},"*")})),o.onclick=()=>s(this,void 0,void 0,(function*(){return yield function(){return u(this,void 0,void 0,(function*(){let{user:n,repo:e,workflow:t,token:o,branch:r,message:i,version:s}=a();const c=`https://api.github.com/repos/${n}/${e}/actions/workflows/${t}/dispatches`;"latest"===s.toLowerCase()&&(s=""),yield fetch(c,{method:"POST",headers:{Accept:"application/vnd.github.v3+json","Content-Type":"application/json","User-Agent":"Figma GitHub Actions plugin",Authorization:`token ${o}`},body:JSON.stringify({ref:`${r}`,inputs:{message:i,version:s}})}).then((n=>u(this,void 0,void 0,(function*(){const e=yield n.text();204===n.status?alert("Successfully started GitHub Actions workflow!"):alert(e)})))).catch((n=>alert(n)))}))}()}))})(n),function(n){var e,t,o,r;e=this,t=void 0,r=function*(){parent.postMessage({pluginMessage:{type:"load",key:"FIGMA_GITHUB_ACTIONS_PLUGIN"}},"*")},new((o=void 0)||(o=Promise))((function(n,i){function a(n){try{s(r.next(n))}catch(n){i(n)}}function u(n){try{s(r.throw(n))}catch(n){i(n)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(n){n(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))}(),onmessage=n=>{n.data.pluginMessage,function(n){const{tokenInput:e,userInput:t,repoInput:o,workflowInput:i,messageInput:a,branchInput:u,versionInput:s}=r();if("cleared"===n)e.value="",t.value="",o.value="",i.value="",a.value="",u.value="",s.value="";else{const{token:r,user:c,repo:l,workflow:d,branch:p,version:f,message:v}=n;e.value=r,t.value=c,o.value=l,i.value=d,a.value=v,u.value=p,s.value=f}}(n.data.pluginMessage)}}()})()})();
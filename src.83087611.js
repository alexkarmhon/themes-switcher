parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"hql5":[function(require,module,exports) {
const e=document.querySelector("#theme-switch-toggle"),t=document.querySelector("body"),{LIGHT:o,DARK:c}={LIGHT:"light-theme",DARK:"dark-theme"};let l=localStorage.getItem("theme-color")||o;function s(){t.classList.toggle(o),t.classList.toggle(c),l=l===o?c:o,localStorage.setItem("theme-color",l),console.log("Theme is changes")}t.classList.add(l),e.checked=l===c,e.addEventListener("change",s);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/switcher.js");
},{"./sass/main.scss":"clu1","./js/switcher.js":"hql5"}]},{},["Focm"], null)
//# sourceMappingURL=/themes-switcher/src.83087611.js.map
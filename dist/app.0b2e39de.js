parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CHbW":[function(require,module,exports) {

},{}],"gOZl":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}require("./style.css");var i="http://metaphorpsum.com/paragraphs/1/10",s=document.getElementById("words"),o=document.getElementById("timer");function c(e){return document.querySelector(e)}function u(e,t){var n=new XMLHttpRequest;n.onload=function(){var e=this.responseText;t(e)},n.open("GET",i),n.send()}function l(e){e.split(" ").forEach(function(e){var t=document.createElement("span");t.innerText=e,s.appendChild(t)}),s.querySelector("span").classList.add("highlight")}function a(){var e=p.correctTypedWords.join("").length,t=p.misspelledWords.join("").length,n=p.misspelledWords.length,r=p.correctTypedWords.length,i=e+t;d(Math.floor(e/5/1),(e/i*100).toFixed(1),e,r,t,n)}function d(e,t,n,r,i,s){c("#speed").innerText=e,c("#accuracy").innerText=t+"%",c("#correctCharaters").innerText=n,c("#correctWords").innerText=r,c("#incorrectCharaters").innerText=i,c("#incorrectwords").innerText=s}u(i,l);var p={misspelledWords:[],correctTypedWords:[],clear:function(){this.misspelledWords=[],this.correctTypedWords=[]}};function h(e){return e.nextElementSibling.offsetLeft}function m(e){return s.querySelectorAll("span")[e]}function f(){var e=s.style.getPropertyValue("--transformTop").slice(0,-2);s.style.setProperty("--transformTop","".concat(-42+Number(e),"px"))}var v=function(){function t(){var n=this;e(this,t),r(this,"updateTimer",function(){var e=setInterval(function(){n.timerTime--,o.innerText="00:".concat(n.timerTime),0===n.timerTime&&(o.innerText="00:00",clearInterval(e),n.clearAll(),a())},1e3)}),r(this,"runTimer",function(){n.timerRunning||(n.timerTime=59,n.timerRunning=!0,n.updateTimer())}),r(this,"keyPress",function(e){var t=m(n.wordIndex),r=t.innerText;" "===e.key&&(t.classList.remove("highlight"),r===n.input.value?(t.classList.remove("incorrect"),t.classList.add("correct"),p.correctTypedWords.push(r)):r!==n.input.value&&(t.classList.remove("correct"),t.classList.add("incorrect"),p.misspelledWords.push(r)),t.offsetLeft>h(t)&&f())}),r(this,"keyUp",function(e){if(" "===e.key)return n.input.value=null,n.wordIndex++,void m(n.wordIndex).classList.add("highlight");var t=m(n.wordIndex),r=n.input.value.length;t.innerText.slice(0,r)!==n.input.value.trim()?(t.classList.remove("correct"),t.classList.add("incorrect")):t.classList.remove("incorrect")}),r(this,"refresh",function(){s.innerText=null,s.style.setProperty("--transformTop",0),u(i,l),n.timerRunning=!1,n.timerTime=0,o.innerText="01:00",n.input.removeAttribute("disabled"),n.input.value=null,n.input.focus(),n.wordIndex=0,p.clear()}),this.input=c("#inputField"),this.btn=c("#refresh"),this.timerRunning=!1,this.timerTime=0,this.wordIndex=0,this.input.addEventListener("keyup",this.keyUp),this.input.addEventListener("keypress",this.keyPress),this.input.addEventListener("keydown",this.runTimer),this.btn.addEventListener("click",this.refresh)}return n(t,[{key:"clearAll",value:function(){s.innerText=null,this.input.value=null,this.input.setAttribute("disabled","true")}}]),t}();new v;
},{"./style.css":"CHbW"}]},{},["gOZl"], null)
//# sourceMappingURL=/app.0b2e39de.js.map
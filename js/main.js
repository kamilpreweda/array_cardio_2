!function(e){var n={};function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst people = [\r\n  { name: 'Wes', year: 1988 },\r\n  { name: 'Kait', year: 1986 },\r\n  { name: 'Irv', year: 1970 },\r\n  { name: 'Lux', year: 2015 }\r\n];\r\nconst comments = [\r\n  { text: 'Love this!', id: 523423 },\r\n  { text: 'Super good', id: 823423 },\r\n  { text: 'You are the best', id: 2039842 },\r\n  { text: 'Ramen is my fav food ever', id: 123523 },\r\n  { text: 'Nice Nice Nice!', id: 542328 }\r\n];\r\n\r\n// Some and Every Checks\r\n// Array.prototype.some() // is at least one person 19 or older?\r\n\r\nconst isAdult = people.some(person => new Date().getFullYear() - person.year >= 19);\r\nconsole.log({ isAdult });\r\n\r\n// Array.prototype.every() // is everyone 19 or older?\r\n\r\nconst allAdults = people.every(person => new Date().getFullYear() - person.year >= 19);\r\nconsole.log({ allAdults });\r\n\r\n// Array.prototype.find()\r\n// Find is like filter, but instead returns just the one you are looking for\r\n// find the comment with the ID of 823423\r\n\r\nconst comment = comments.find(comment => comment.id === 823423 ? console.log(comment) : false);\r\n\r\n// Array.prototype.findIndex()\r\n// Find the comment with this ID\r\n// delete the comment with the ID of 823423;\r\n\r\nconst index = comments.findIndex(comment => comment.id === 823423);\r\nconsole.log(index);\r\n\r\n// comments.splice(index, 1);\r\n\r\n// or\r\n\r\nconst newComments = [\r\n  ...comments.slice(0, index),\r\n  ...comments.slice(index + 1)\r\n];\r\n\r\nconsole.table(newComments);\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQSxHQUFHLDBCQUEwQjtBQUM3QixHQUFHLDJCQUEyQjtBQUM5QixHQUFHLDBCQUEwQjtBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUcsaUNBQWlDO0FBQ3BDLEdBQUcsaUNBQWlDO0FBQ3BDLEdBQUcsd0NBQXdDO0FBQzNDLEdBQUcsZ0RBQWdEO0FBQ25ELEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxVQUFVOztBQUV2Qjs7QUFFQTtBQUNBLGFBQWEsWUFBWTs7QUFFekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG5jb25zdCBwZW9wbGUgPSBbXHJcbiAgeyBuYW1lOiAnV2VzJywgeWVhcjogMTk4OCB9LFxyXG4gIHsgbmFtZTogJ0thaXQnLCB5ZWFyOiAxOTg2IH0sXHJcbiAgeyBuYW1lOiAnSXJ2JywgeWVhcjogMTk3MCB9LFxyXG4gIHsgbmFtZTogJ0x1eCcsIHllYXI6IDIwMTUgfVxyXG5dO1xyXG5jb25zdCBjb21tZW50cyA9IFtcclxuICB7IHRleHQ6ICdMb3ZlIHRoaXMhJywgaWQ6IDUyMzQyMyB9LFxyXG4gIHsgdGV4dDogJ1N1cGVyIGdvb2QnLCBpZDogODIzNDIzIH0sXHJcbiAgeyB0ZXh0OiAnWW91IGFyZSB0aGUgYmVzdCcsIGlkOiAyMDM5ODQyIH0sXHJcbiAgeyB0ZXh0OiAnUmFtZW4gaXMgbXkgZmF2IGZvb2QgZXZlcicsIGlkOiAxMjM1MjMgfSxcclxuICB7IHRleHQ6ICdOaWNlIE5pY2UgTmljZSEnLCBpZDogNTQyMzI4IH1cclxuXTtcclxuXHJcbi8vIFNvbWUgYW5kIEV2ZXJ5IENoZWNrc1xyXG4vLyBBcnJheS5wcm90b3R5cGUuc29tZSgpIC8vIGlzIGF0IGxlYXN0IG9uZSBwZXJzb24gMTkgb3Igb2xkZXI/XHJcblxyXG5jb25zdCBpc0FkdWx0ID0gcGVvcGxlLnNvbWUocGVyc29uID0+IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIHBlcnNvbi55ZWFyID49IDE5KTtcclxuY29uc29sZS5sb2coeyBpc0FkdWx0IH0pO1xyXG5cclxuLy8gQXJyYXkucHJvdG90eXBlLmV2ZXJ5KCkgLy8gaXMgZXZlcnlvbmUgMTkgb3Igb2xkZXI/XHJcblxyXG5jb25zdCBhbGxBZHVsdHMgPSBwZW9wbGUuZXZlcnkocGVyc29uID0+IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIHBlcnNvbi55ZWFyID49IDE5KTtcclxuY29uc29sZS5sb2coeyBhbGxBZHVsdHMgfSk7XHJcblxyXG4vLyBBcnJheS5wcm90b3R5cGUuZmluZCgpXHJcbi8vIEZpbmQgaXMgbGlrZSBmaWx0ZXIsIGJ1dCBpbnN0ZWFkIHJldHVybnMganVzdCB0aGUgb25lIHlvdSBhcmUgbG9va2luZyBmb3JcclxuLy8gZmluZCB0aGUgY29tbWVudCB3aXRoIHRoZSBJRCBvZiA4MjM0MjNcclxuXHJcbmNvbnN0IGNvbW1lbnQgPSBjb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5pZCA9PT0gODIzNDIzID8gY29uc29sZS5sb2coY29tbWVudCkgOiBmYWxzZSk7XHJcblxyXG4vLyBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KClcclxuLy8gRmluZCB0aGUgY29tbWVudCB3aXRoIHRoaXMgSURcclxuLy8gZGVsZXRlIHRoZSBjb21tZW50IHdpdGggdGhlIElEIG9mIDgyMzQyMztcclxuXHJcbmNvbnN0IGluZGV4ID0gY29tbWVudHMuZmluZEluZGV4KGNvbW1lbnQgPT4gY29tbWVudC5pZCA9PT0gODIzNDIzKTtcclxuY29uc29sZS5sb2coaW5kZXgpO1xyXG5cclxuLy8gY29tbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbi8vIG9yXHJcblxyXG5jb25zdCBuZXdDb21tZW50cyA9IFtcclxuICAuLi5jb21tZW50cy5zbGljZSgwLCBpbmRleCksXHJcbiAgLi4uY29tbWVudHMuc2xpY2UoaW5kZXggKyAxKVxyXG5dO1xyXG5cclxuY29uc29sZS50YWJsZShuZXdDb21tZW50cyk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);
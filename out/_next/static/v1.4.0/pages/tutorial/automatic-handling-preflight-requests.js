(window.webpackJsonp=window.webpackJsonp||[]).push([["2280"],{"8+/o":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/automatic-handling-preflight-requests",function(){var e=n("jRU6");return{page:e.default||e}}])},jRU6:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),o=n("kB0P"),r={title:"Automatic handling of preflight OPTIONS requests",description:"Front and API are not on the same domain? Handle preflight requests automatically with Mockoon"};t.default=function(){return l.a.createElement(o.a,{meta:r},l.a.createElement("div",{className:"content"},"When mocking, chances are front application and mocked API won’t be on the ",l.a.createElement("strong",null,"same domain"),", thus triggering browsers OPTIONS preflight requests.",l.a.createElement("br",null),"Failing to answer to these requests may prevent your application from working. Luckily, Mockoon can handle this for you:",l.a.createElement("ol",null,l.a.createElement("li",null,"Open the ",l.a.createElement("strong",null,"environment settings")," by clicking on the cog in the upper right corner:"))),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-8 is-offset-2"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"/static/images/tutorials/open-settings.gif",alt:"Open environment settings"})))),l.a.createElement("div",{className:"content"},l.a.createElement("ol",null,l.a.createElement("li",{value:"2"},"Enable ",l.a.createElement("strong",null,"CORS option"),", ensure that blue crossing arrows are displayed next to the environment name which indicates that CORS option has been successfully activated."))),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-8 is-offset-2"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"/static/images/tutorials/enable-cors-mode.gif",alt:"Enable CORS mode"})))),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"You may need to restart the environment for the changes to take effect."),l.a.createElement("p",null,"Starting from now Mockoon will automatically answer with a 200 HTTP status code to all preflight OPTIONS requests. The following headers will also be added to the response:"),l.a.createElement("p",null,l.a.createElement("code",null,"Access-Control-Allow-Origin: *"),l.a.createElement("br",null),l.a.createElement("code",null,"Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS"),l.a.createElement("br",null),l.a.createElement("code",null,"Access-Control-Allow-Headers: Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With"),l.a.createElement("br",null)),l.a.createElement("p",null,"Mockoon won’t send any CORS header if you define a route with the OPTIONS method in your environment (i.e. ",l.a.createElement("code",null,"OPTIONS /my-route"),"), leaving you in full control of the headers you want to add.")))}}},[["8+/o","5d41","9da1"]]]);
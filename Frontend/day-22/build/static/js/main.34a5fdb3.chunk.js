(this["webpackJsonpday-22"]=this["webpackJsonpday-22"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(7),r=c.n(s),i=c(3),o=(c(13),c(0)),u=function(e){var t=e.templates,c=e.setMeme;return Object(o.jsx)("div",{className:"templates",children:t.map((function(e){return Object(o.jsx)("div",{className:"template",onClick:function(){c(e)},children:Object(o.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,")")},className:"image"})},e.id)}))})},m=c(8),j=c(4),l=function(e){var t=e.meme,c=e.setMeme,a=Object(n.useState)({template_id:t.id,username:"dhruvgamer99",password:"dhruvgarg",boxes:[]}),s=Object(i.a)(a,2),r=s[0],u=s[1];return Object(o.jsxs)("div",{className:"meme",children:[Object(o.jsx)("img",{src:t.url,alt:""}),Object(o.jsx)("div",{children:Object(m.a)(Array(t.box_count)).map((function(e,t){return Object(o.jsx)("input",{type:"text",placeholder:"Meme Caption ".concat(t+1),onChange:function(e){var c=r.boxes;c[t]={text:e.target.value},u(Object(j.a)(Object(j.a)({},r),{},{boxes:c}))}},t)}))}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){var e="https://api.imgflip.com/caption_image?template_id=".concat(r.template_id,"&username=").concat(r.username,"&password=").concat(r.password);r.boxes.map((function(t,c){e+="&boxes[".concat(c,"][text]=").concat(t.text)})),fetch(e).then((function(e){return e.json()})).then((function(e){c(Object(j.a)(Object(j.a)({},t),{},{url:e.data.url}))}))},children:"Generate Meme"}),Object(o.jsx)("button",{onClick:function(){c(null)},children:"Choose Template"})]})]})};var b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(i.a)(s,2),m=r[0],j=r[1];return Object(n.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){a(e.data.memes)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Meme Generator"}),null===m?Object(o.jsx)(u,{templates:c,setMeme:j}):Object(o.jsx)(l,{meme:m,setMeme:j})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.34a5fdb3.chunk.js.map
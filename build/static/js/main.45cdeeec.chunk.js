(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{23:function(e,t,o){},24:function(e,t,o){},29:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),c=o(11),r=o.n(c),d=(o(23),o(2)),s=(o(24),o(5)),i=o.n(s),l=o(13),u=o(8),m=o(14),v=(o(10),o(9)),j=o.n(v),f=o(0);var b=function(e){var t=e.todoItemKey,o=e.deleteTodoItem,a=e.updateTodoItemMessage,c=e.todo,r=Object(n.useRef)(null),d=!1,s=c;return Object(n.useEffect)((function(){var e=document.getElementById(t);function o(o){var n=e.contains(o.target);d&&!n&&(a(t,r.current.value),d=!1)}return document.addEventListener("click",(function(e){return o(e)})),function(){document.removeEventListener("click",(function(e){return o(e)}))}})),Object(f.jsxs)("div",{className:j.a.todoItemContainer,children:[Object(f.jsx)("input",{type:"text",placeholder:"what to do... ",defaultValue:s,id:t,ref:r,className:j.a.messageInput,onChange:function(e){d=!0,console.log("textinput changed")}}),Object(f.jsx)("div",{className:j.a.deleteContainer,onClick:function(){o(t)},children:"\u2718"})]})},g=o(3),C=o.n(g);var O=function(e){var t=e.cardKey,o=e.card,a=e.addTodoItem,c=e.deleteTodoItem,r=e.removeCard,s=e.updateTodoItemMessage,i=e.updateCardName,l=e.removeState,u=Object(n.useRef)(null),m=Object(n.useRef)(null),v=Object(n.useState)(e.card.name),j=Object(d.a)(v,2),g=j[0],O=(j[1],!1),_=function(){l&&r(t)},h=function(e){c(t,e)},p=function(e,o){s(t,e,o)};return Object(n.useEffect)((function(){var e=document.getElementById(t);document.getElementById(u);function o(o){var n=e.contains(o.target);O&&!n&&(console.log("TodoItem oh shet clicked outside"),console.log("cardjs updateCardNameWthTar targetval: ",m.current.value),i(t,m.current.value),O=!1)}return e.addEventListener("click",(function(){return O=!0})),u.current.addEventListener("click",_),document.addEventListener("click",(function(e){return o(e)})),function(){e.removeEventListener("click",(function(){return O=!0})),document.removeEventListener("click",(function(e){return o(e)}))}})),Object(f.jsxs)("div",{className:l?C.a.cardRemoveContainer:C.a.cardContainer,children:[Object(f.jsxs)("div",{className:C.a.titleContainer,children:[Object(f.jsx)("input",{type:"text",placeholder:"Enter a name...",defaultValue:g,id:t,ref:m,className:C.a.titleInput,onChange:function(){O=!0,console.log("inputEdited Changed from CardJS: ",t," ",O)}}),Object(f.jsx)("div",{className:C.a.addTodo,onClick:function(){a(t),console.log("add button clicked")},children:"\uff0b"})]}),Object(f.jsx)("div",{className:C.a.scrollableContainer,children:Object.keys(o.todoList).map((function(e,t){return Object(f.jsx)(b,{todo:o.todoList[e],todoItemKey:e,deleteTodoItem:h,updateTodoItemMessage:p},t)}))}),Object(f.jsx)("div",{ref:u,className:C.a.removeOverlayContainer,children:l?Object(f.jsx)("div",{className:C.a.removeOverlay,children:"CLICK TO REMOVE"}):Object(f.jsx)("span",{})})]})},_=o(4),h=o.n(_);var p=function(){var e=new Object;e={0:{name:"",todoList:{0:""},todoListKey:1}};var t="true"===localStorage.getItem("saveAction");console.log("checkSaveAction: ",t);var o=Object(n.useState)(e),a=Object(d.a)(o,2),c=a[0],r=a[1],s=Object(n.useState)(1),v=Object(d.a)(s,2),j=v[0],b=v[1],g=Object(n.useState)(!1),C=Object(d.a)(g,2),_=C[0],p=C[1],I=Object(n.useState)(!0),x=Object(d.a)(I,2),N=x[0],y=x[1],T=function(){localStorage.setItem("savedCards",JSON.stringify(c)),localStorage.setItem("saveAction",N),localStorage.setItem("cardKey",j),console.log("updateLocal done")},E=function(){p(!1);var t=Object.assign({},c);t[j]=Object.assign({},e[0]),b((function(e){return e+1})),r(t),T()},k=function(e){console.log("removeCard cardKey: ",e);var t=Object.assign({},c);delete t[e],r((function(e){return t})),T()},L=function(e,t){var o=Object.assign({},c);console.log("before updateCardName: ",o),o[e].name=t,console.log("after updateCardName: ",o),r((function(e){return o})),console.log("todojs updateCardName: ",c[e].name),T()},S=function(e){var t=Object.assign({},c);t[e].todoList=Object(m.a)(Object(m.a)({},t[e].todoList),{},Object(u.a)({},t[e].todoListKey,"")),t[e].todoListKey++,r((function(e){return t})),console.log("todojs addTodoItem cards: ",c),T()},K=function(){var e=Object(l.a)(i.a.mark((function e(t,o){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object.keys(c[t].todoList).length>1&&(n=Object.assign({},c),console.log("todoJs deleteTodoItem todoList: ",n[t].todoList),console.log("todoJs deleteTodoItem todoItemKey: ",o),console.log("todoJs deleteTodoItem: b4 ",n[t].todoList[o]),delete n[t].todoList[o],console.log("todoJs deleteTodoItem: after ",n[t].todoList[o]),r((function(e){return n})),console.log("todoJs deleteTodoItem cards: ",c),console.log("todoJs deleteTodoItem tempCards: ",n),T());case 1:case"end":return e.stop()}}),e)})));return function(t,o){return e.apply(this,arguments)}}(),B=function(e,t,o){var n=Object.assign({},c);n[e].todoList[t]=o,r((function(e){return n})),localStorage.setItem("savedCards",JSON.stringify(c)),T()};return Object(n.useEffect)(Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,r(JSON.parse(localStorage.getItem("savedCards")));case 3:b(parseInt(localStorage.getItem("cardKey"))),console.log("Todojs UseEffect key: ",j),console.log("Todojs UseEffect localStorage key: ",localStorage.getItem("cardKey"));case 6:localStorage.setItem("saveAction",N);case 7:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){var e=document.getElementById("addCardButton"),t=document.getElementById("removeCardButton"),o=function(){p((function(e){return!e}))};return e.addEventListener("click",E),t.addEventListener("click",o),console.log("Todo UseEffeect cards: ",c),function(){e.removeEventListener("click",E),t.removeEventListener("click",o)}}),[E]),Object(f.jsxs)("div",{className:h.a.todoContainer,children:[Object(f.jsxs)("div",{className:h.a.editsContainer,children:[Object(f.jsxs)("div",{className:h.a.editButtons,children:[Object(f.jsx)("button",{className:h.a.addEvent,id:"addCardButton",children:"\uff0b"}),Object(f.jsx)("button",{className:h.a.removeEvent,id:"removeCardButton",children:"\uff0d"})]}),Object(f.jsxs)("label",{className:h.a.saveListContainer,children:[Object(f.jsx)("input",{type:"checkbox",name:"saveList",className:h.a.saveCheckbox,checked:N,onChange:function(){localStorage.setItem("saveAction",!N),y((function(e){return!e}))}}),"Auto Save"]})]}),Object(f.jsx)("div",{className:h.a.cardsContainer,children:Object.keys(c).map((function(e,t){return console.log("Todo.js cardKey: ",e),console.log("todojs objecke: ",Object.keys(c)),Object(f.jsx)(O,{removeCard:k,removeState:_,card:c[e],cardKey:e,addTodoItem:S,deleteTodoItem:K,updateTodoItemMessage:B,updateCardName:L},t)}))})]})},I=o(6),x=o.n(I);var N=function(){return Object(f.jsxs)("div",{className:x.a.headerContainer,children:[Object(f.jsx)("div",{className:x.a.headerName1,id:"header1",children:"\u2611"}),Object(f.jsx)("div",{className:x.a.headerName2,id:"header2",children:"To"}),Object(f.jsx)("div",{className:x.a.headerName3,id:"header3",children:"Do"})]})};var y=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(N,{}),Object(f.jsx)(p,{})]})},T=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,31)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;o(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),T()},3:function(e,t,o){e.exports={cardContainer:"Card_cardContainer__1Yq8N",cardRemoveContainer:"Card_cardRemoveContainer__EGAmy",titleContainer:"Card_titleContainer__1_Sjo",titleInput:"Card_titleInput__f_Zqq",addTodo:"Card_addTodo__1vo79",scrollableContainer:"Card_scrollableContainer__3YWRM",removeOverlayContainer:"Card_removeOverlayContainer__2FRpd",removeOverlay:"Card_removeOverlay__4Fnmi"}},4:function(e,t,o){e.exports={todoContainer:"Todo_todoContainer__nbPdp",editsContainer:"Todo_editsContainer__1psJG",saveListContainer:"Todo_saveListContainer__2b_gH",saveCheckbox:"Todo_saveCheckbox__h9sq4",addEvent:"Todo_addEvent__4Pkl4",removeEvent:"Todo_removeEvent__27I1p",cardsContainer:"Todo_cardsContainer__2jcC0"}},6:function(e,t,o){e.exports={headerContainer:"Header_headerContainer__2X8Hm",headerName:"Header_headerName__4yG5r",headerName1:"Header_headerName1__dtBpX",headerName2:"Header_headerName2__3ZbDF",headerName3:"Header_headerName3__1KWp6"}},9:function(e,t,o){e.exports={todoItemContainer:"TodoItem_todoItemContainer__16-3q",messageInput:"TodoItem_messageInput__1pX0X"}}},[[29,1,2]]]);
//# sourceMappingURL=main.45cdeeec.chunk.js.map
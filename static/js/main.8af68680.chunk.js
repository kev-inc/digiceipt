(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(31)},24:function(e,a,t){},28:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),r=t.n(c),s=(t(22),t(24),t(6)),o=t(7),m=t(11),i=t(8),p=t(12),d=t(33),u=t(35),E=t(34),h=t(32),b=function(e){return l.a.createElement("div",{className:"Nav"},l.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-top"},l.a.createElement(h.a,{to:"/",className:"navbar-brand"},"Digiceipt"),l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement(h.a,{className:"btn btn-light",to:"/home"},l.a.createElement("i",{className:"fas fa-home"})))),l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement("span",{className:"navbar-brand"},"Digiceipt")))},N=function(e){return l.a.createElement("div",{className:"Home container"},l.a.createElement("div",{className:"welcome m-3 p-3 shadow-sm bg-primary text-light"},l.a.createElement("h4",null,"Welcome back,",l.a.createElement("br",null),"Kevin")),l.a.createElement("div",{className:"actions m-2 row"},l.a.createElement(h.a,{className:"shadow-sm btn bg-success col p-2 m-2 text-light",to:"/scan"},l.a.createElement("i",{className:"fas fa-qrcode"}),l.a.createElement("br",null),"Add new receipt"),l.a.createElement(h.a,{className:"shadow-sm btn bg-warning col p-2 m-2 text-light",to:"/history"},l.a.createElement("i",{className:"fas fa-history"}),l.a.createElement("br",null),"View previous receipts")))},v=[{shopName:"GONG CHA",shopBranch:"Fine Foods @ NUS UTown",GST:"M-201009405",pax:1,table:0,items:[{qty:1,name:"MT w Pearl (Cold)",price:3},{qty:1,name:"Hazelnut Milk Tea",price:4.5}],subtotal:7.5,total:7.5,date:new Date("2018-12-15")},{shopName:"Harry's International Pte Ltd",shopBranch:"Harry's @ Clarke Quay",GST:"M-201009405",BRN:"199103579R",pax:2,table:7,items:[{qty:1,name:"BBQ BABY BACK RIBS",price:29,optional:[{desc:"EATIGO 50%",price:-14.5}]},{qty:1,name:"CRANBERRY JUICE",price:6},{qty:1,name:"JAZZ BURGER",price:22,optional:[{desc:"EATIGO 50%",price:-11}]}],subtotal:31.5,svc:3.15,gst:2.43,total:37.08,date:new Date("2018-12-13")}],g=function(e){return l.a.createElement("div",{className:"History"},v.map(function(e,a){return l.a.createElement("div",{className:"receipts",key:a},l.a.createElement("div",{className:"shadow-sm p-3 m-2 text-left"},e.shopName,l.a.createElement("span",{className:"float-right"},l.a.createElement(h.a,{className:"btn btn-light",to:"/view/"+a},l.a.createElement("i",{className:"fas fa-external-link-alt"}))),l.a.createElement("br",null),"Date issued: ",e.date.toLocaleDateString("en-SG")))}))},f=function(e){return l.a.createElement("div",{className:"Login m-4"},l.a.createElement("div",{className:"h3 mb-3"},"Log in to Digiceipt"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Email Address"})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password"})),l.a.createElement(h.a,{className:"btn btn-success btn-lg",to:"/home"},"Log in"))},w=function(e){return l.a.createElement("div",{className:"Welcome"},l.a.createElement("div",{className:"welcome m-2"},l.a.createElement("h3",null,"Welcome to Digiceipt!"),l.a.createElement("h4",{className:"font-weight-light text-muted"},"Your one stop for all your receipts!")),l.a.createElement("hr",null),l.a.createElement("div",{className:"actions m-2"},l.a.createElement(h.a,{className:"btn btn-primary btn-lg m-2",to:"/login"},l.a.createElement("i",{className:"fas fa-play-circle"})," Get started"),l.a.createElement("br",null)))},y=function(e){return l.a.createElement("div",{className:"Receipt"},l.a.createElement("pre",null,l.a.createElement("div",{className:"top"},e.receipt.shopName,l.a.createElement("br",null),e.receipt.shopBranch,l.a.createElement("br",null),"GST NO: ",e.receipt.GST,l.a.createElement("br",null),l.a.createElement("br",null),"Pax:",e.receipt.pax," TABLE: ",e.receipt.table," ",l.a.createElement("br",null)),l.a.createElement("hr",null),l.a.createElement("div",{className:"middle text-left"},e.receipt.items.map(function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("span",null,e.qty," ",e.name),l.a.createElement("span",{className:"float-right"},"$",e.price.toFixed(2)),e.optional?e.optional.map(function(e,a){return l.a.createElement("div",{key:a},e.desc," ",l.a.createElement("span",{className:"float-right"},"$",e.price.toFixed(2)),l.a.createElement("br",null))}):null)}),l.a.createElement("hr",null),"SUBTOTAL",l.a.createElement("span",{className:"float-right"},"$",e.receipt.subtotal.toFixed(2)),l.a.createElement("br",null),e.receipt.svc?l.a.createElement("span",null,"SVC CHG",l.a.createElement("span",{className:"float-right"},"$",e.receipt.svc.toFixed(2)),l.a.createElement("br",null)):null,e.receipt.gst?l.a.createElement("span",null,"GST",l.a.createElement("span",{className:"float-right"},"$",e.receipt.gst.toFixed(2))):null,l.a.createElement("hr",null),l.a.createElement("span",{className:"font-weight-bold"},"TOTAL",l.a.createElement("span",{className:"float-right"},"$",e.receipt.total.toFixed(2))),l.a.createElement("hr",null),l.a.createElement("div",{className:"text-center"},"--- END ---"))))};function k(){alert("Added!")}var x=function(e){return l.a.createElement("div",{className:"modal show",style:{display:"".concat(e.showModal?"block":"none"),backgroundColor:"#00000066"}},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Add this receipt?"),l.a.createElement("button",{type:"button",className:"close",onClick:e.closeModal},l.a.createElement("span",null,"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(y,{receipt:v[e.receiptSelected]})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:e.closeModal},"Cancel"),l.a.createElement(h.a,{onClick:k,to:"/history",className:"btn btn-success"},"Add receipt")))))},M=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).closeModal=function(){t.setState({showModal:!1})},t.state={showModal:!1,receiptSelected:0},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"openModal",value:function(e){console.log(this.state.showModal),this.setState({showModal:!0,receiptSelected:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Scanner"},l.a.createElement("div",{className:"h3"},"Scanner page"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.openModal(0)}},"gongcha"),l.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.openModal(1)}},"harry's"),l.a.createElement(x,{receiptSelected:this.state.receiptSelected,closeModal:this.closeModal,showModal:this.state.showModal,openModal:this.openModal}))}}]),a}(l.a.Component),S=function(e){return l.a.createElement("div",{className:"ViewReceipt p-4"},l.a.createElement("div",{className:"shadow-sm mb-4 p-4"},l.a.createElement(y,{receipt:v[e.match.params.receiptId]})),l.a.createElement(h.a,{className:"btn btn-danger btn-block",to:"/history"},"Back"))},B=(t(28),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(u.a,null,l.a.createElement(E.a,{path:"/",exact:!0,component:w}),l.a.createElement(E.a,{path:"/history",component:g}),l.a.createElement(E.a,{path:"/login",component:f}),l.a.createElement(E.a,{path:"/home",component:N}),l.a.createElement(E.a,{path:"/scan",component:M}),l.a.createElement(E.a,{path:"/view/:receiptId",component:S}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.8af68680.chunk.js.map
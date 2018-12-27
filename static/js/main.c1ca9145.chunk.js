(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(55)},30:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),r=a.n(l),s=(a(28),a(30),a(5)),o=a(6),m=a(8),i=a(7),p=a(9),u=a(57),h=a(59),d=a(58),E=a(56),b=function(e){return c.a.createElement("div",{className:"Nav"},c.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-top"},c.a.createElement(E.a,{to:"/",className:"navbar-brand"},"Digiceipt"),c.a.createElement("ul",{className:"nav navbar-nav navbar-right"},c.a.createElement(E.a,{className:"btn btn-light",to:"/home"},c.a.createElement("i",{className:"fas fa-home"})))),c.a.createElement("nav",{className:"navbar navbar-light bg-light"},c.a.createElement("span",{className:"navbar-brand"},"Digiceipt")))},g=function(e){return c.a.createElement("div",{className:"Home container"},c.a.createElement("div",{className:"welcome m-3 p-3 shadow-sm bg-primary text-light"},c.a.createElement("h4",null,"Welcome back,",c.a.createElement("br",null),"Kevin")),c.a.createElement("div",{className:"actions m-2 row"},c.a.createElement(E.a,{className:"shadow-sm btn bg-success col p-2 m-2 text-light",to:"/scan"},c.a.createElement("i",{className:"fas fa-qrcode"}),c.a.createElement("br",null),"Add new receipt"),c.a.createElement(E.a,{className:"shadow-sm btn bg-warning col p-2 m-2 text-light",to:"/history"},c.a.createElement("i",{className:"fas fa-history"}),c.a.createElement("br",null),"View previous receipts")))},N=[{shopName:"GONG CHA",shopBranch:"Fine Foods @ NUS UTown",GST:"M-201009405",pax:1,table:0,items:[{qty:1,name:"MT w Pearl (Cold)",price:3},{qty:1,name:"Hazelnut Milk Tea",price:4.5}],subtotal:7.5,total:7.5,date:new Date("2018-12-15")},{shopName:"Harry's International Pte Ltd",shopBranch:"Harry's @ Clarke Quay",GST:"M-201009405",BRN:"199103579R",pax:2,table:7,items:[{qty:1,name:"BBQ BABY BACK RIBS",price:29,optional:[{desc:"EATIGO 50%",price:-14.5}]},{qty:1,name:"CRANBERRY JUICE",price:6},{qty:1,name:"JAZZ BURGER",price:22,optional:[{desc:"EATIGO 50%",price:-11}]}],subtotal:31.5,svc:3.15,gst:2.43,total:37.08,date:new Date("2018-12-13")}],f=function(e){return c.a.createElement("div",{className:"History p-4"},c.a.createElement("h3",{className:"font-weight-light"},"Past receipts"),N.map(function(e,t){return c.a.createElement("div",{className:"receipts",key:t},c.a.createElement("div",{className:"shadow-sm p-3 m-2 text-left"},e.shopName,c.a.createElement("span",{className:"float-right"},c.a.createElement(E.a,{className:"btn btn-light",to:"/view/"+t},c.a.createElement("i",{className:"fas fa-external-link-alt"}))),c.a.createElement("br",null),"Date issued: ",e.date.toLocaleDateString("en-SG")))}))},v=function(e){return c.a.createElement("div",{className:"Login m-4"},c.a.createElement("div",{className:"h3 mb-3"},"Log in to Digiceipt"),c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Email Address"})),c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password"})),c.a.createElement(E.a,{className:"btn btn-success btn-lg",to:"/home"},"Log in"),c.a.createElement("p",null,"Just click on log in don't need to enter anything"))},w=function(e){return c.a.createElement("div",{className:"Welcome p-4"},c.a.createElement("div",{className:"welcome m-2"},c.a.createElement("h3",null,"Welcome to Digiceipt!"),c.a.createElement("h4",{className:"font-weight-light text-muted"},"Your one stop for all your receipts!")),c.a.createElement("hr",null),c.a.createElement("div",{className:"actions m-2"},c.a.createElement(E.a,{className:"btn btn-primary btn-lg m-2",to:"/login"},c.a.createElement("i",{className:"fas fa-play-circle"})," Get started"),c.a.createElement("br",null)))},y=a(12),S=a(19),C=a.n(S),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={delay:300,result:"No result"},a.handleScan=a.handleScan.bind(Object(y.a)(Object(y.a)(a))),a.handleError=a.handleError.bind(Object(y.a)(Object(y.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleScan",value:function(e){e&&this.setState({result:e})}},{key:"handleError",value:function(e){console.log(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Scanner p-4"},c.a.createElement("h3",{className:"font-weight-light"},"Scan new receipt"),c.a.createElement(C.a,{delay:this.state.delay,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}}),c.a.createElement("p",null,"For testing only:"),c.a.createElement(E.a,{to:"/confirm/0",className:"btn btn-primary btn-block"},"gongcha"),c.a.createElement(E.a,{to:"/confirm/1",className:"btn btn-primary btn-block"},"harry's"),c.a.createElement(E.a,{to:"/ocr",className:"btn btn-danger btn-block"},"Manual Scan"))}}]),t}(c.a.Component),O=function(e){return c.a.createElement("div",{className:"Receipt"},c.a.createElement("pre",null,c.a.createElement("div",{className:"top"},e.receipt.shopName,c.a.createElement("br",null),e.receipt.shopBranch,c.a.createElement("br",null),"GST NO: ",e.receipt.GST,c.a.createElement("br",null),c.a.createElement("br",null),"Pax:",e.receipt.pax," TABLE: ",e.receipt.table," ",c.a.createElement("br",null)),c.a.createElement("hr",null),c.a.createElement("div",{className:"middle text-left"},e.receipt.items.map(function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("span",null,e.qty," ",e.name),c.a.createElement("span",{className:"float-right"},"$",e.price.toFixed(2)),e.optional?e.optional.map(function(e,t){return c.a.createElement("div",{key:t},e.desc," ",c.a.createElement("span",{className:"float-right"},"$",e.price.toFixed(2)),c.a.createElement("br",null))}):null)}),c.a.createElement("hr",null),"SUBTOTAL",c.a.createElement("span",{className:"float-right"},"$",e.receipt.subtotal.toFixed(2)),c.a.createElement("br",null),e.receipt.svc?c.a.createElement("span",null,"SVC CHG",c.a.createElement("span",{className:"float-right"},"$",e.receipt.svc.toFixed(2)),c.a.createElement("br",null)):null,e.receipt.gst?c.a.createElement("span",null,"GST",c.a.createElement("span",{className:"float-right"},"$",e.receipt.gst.toFixed(2))):null,c.a.createElement("hr",null),c.a.createElement("span",{className:"font-weight-bold"},"TOTAL",c.a.createElement("span",{className:"float-right"},"$",e.receipt.total.toFixed(2))),c.a.createElement("hr",null),c.a.createElement("div",{className:"text-center"},"--- END ---"))))},x=function(e){return c.a.createElement("div",{className:"ViewReceipt p-4"},c.a.createElement("div",{className:"shadow-sm mb-4 p-4"},c.a.createElement(O,{receipt:N[e.match.params.receiptId]})),c.a.createElement(E.a,{className:"btn btn-danger btn-block",to:"/history"},"Back"))};var A=function(e){return c.a.createElement("div",{className:"ConfirmReceipt p-4 container"},c.a.createElement("h3",{className:"font-weight-light"},"Add this receipt?"),c.a.createElement("div",{className:"shadow-sm mb-4 p-4"},c.a.createElement(O,{receipt:N[e.match.params.receiptId]})),c.a.createElement("div",{className:"row"},c.a.createElement(E.a,{className:"btn btn-secondary m-2 col",to:"/scan"},"Cancel"),c.a.createElement(E.a,{className:"btn btn-success m-2 col",onClick:function(){alert("Receipt successfully added!")},to:"/history"},"Add")))},j=a(20),T=a.n(j),M=a(21),B=a.n(M),R=(a(50),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).state={ocrState:"",percentCompleted:0,shopName:"",totalAmount:""},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.scanPicture(this.props.shopName,this.props.totalAmount)}},{key:"scanPicture",value:function(e,t){var a=this,n=window.Tesseract;n.recognize(e,{lang:"eng"}).progress(function(e){"recognizing text"===e.status?a.setState({ocrState:e.status,percentCompleted:e.progress}):a.setState({ocrState:e.status})}).then(function(e){a.setState({shopName:e.text})}),n.recognize(t,{lang:"eng"}).progress(function(e){"recognizing text"===e.status?a.setState({ocrState:e.status,percentCompleted:e.progress}):a.setState({ocrState:e.status})}).then(function(e){a.setState({totalAmount:e.text})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"OcrResult"},c.a.createElement("div",{className:"status"},c.a.createElement("span",null,this.state.ocrState.toLocaleUpperCase())),c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"progress-bar",style:{width:"".concat(100*this.state.percentCompleted,"%")}})),c.a.createElement("div",{className:"result"},c.a.createElement("pre",null,"shopname: ",this.state.shopName,"totalamount: ",this.state.totalAmount)))}}]),t}(c.a.Component)),I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).onChange=function(t){e.setState({crop:t})},e.onComplete=function(t,a){var n=new Image;n.src=e.props.picture;var c=e.getCroppedImg(n,a);null===e.state.croppedTitle?e.setState({croppedTitle:c,showModal:!0}):e.setState({croppedAmount:c,showModal:!0})},e.openModal=function(){e.setState({showModal:!0})},e.cancelModal=function(){null===e.state.croppedAmount?e.setState({crop:{x:0,y:0},showModal:!1,croppedTitle:null}):e.setState({crop:{x:0,y:0},showModal:!1,croppedAmount:null})},e.confirm=function(){e.setState({crop:{x:0,y:0},showModal:!1}),console.log(e.state),null!==e.state.croppedAmount&&null!==e.state.croppedTitle&&e.setState({finished:!0})},e.state={crop:{x:0,y:0},showModal:!1,croppedTitle:null,croppedAmount:null,finished:!1},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"getCroppedImg",value:function(e,t){var a=document.createElement("canvas");return a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(e,t.x,t.y,t.width,t.height,0,0,t.width,t.height),a.toDataURL("image/jpeg")}},{key:"render",value:function(){var e=c.a.createElement("div",{className:"modal",style:{display:"block"}},c.a.createElement("div",{className:"modal-dialog"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title"},"Confirm crop?"),c.a.createElement("button",{type:"button",className:"close",onClick:this.cancelModal},c.a.createElement("span",null,"\xd7"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("p",null,"Do you want to save this as the ",null===this.state.croppedAmount?"shop name":"total amount","?"),null===this.state.croppedAmount?c.a.createElement("img",{src:this.state.croppedTitle}):c.a.createElement("img",{src:this.state.croppedAmount})),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.confirm},"Confirm"),c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.cancelModal},"Close")))));return c.a.createElement("div",null,this.state.finished?c.a.createElement(R,{shopName:this.state.croppedTitle,totalAmount:this.state.croppedAmount}):c.a.createElement("div",{className:"CropImage"},this.state.showModal?e:null,c.a.createElement(B.a,{src:this.props.picture,onComplete:this.onComplete,onChange:this.onChange,crop:this.state.crop}),c.a.createElement("h3",{className:"font-weight-light"},"Shop name"),c.a.createElement("img",{src:this.state.croppedTitle,alt:""}),c.a.createElement("h3",{className:"font-weight-light"},"Total price"),c.a.createElement("img",{src:this.state.croppedAmount,alt:""}),c.a.createElement("button",{className:"btn btn-danger btn-block",onClick:this.props.retake},"Retake photo")))}}]),t}(c.a.Component),G=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).setRef=function(t){e.webcam=t},e.capture=function(){var t=e.webcam.getScreenshot();e.setState({image:t})},e.scanAgain=function(){e.setState({image:null})},e.state={image:null},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Ocr p-4"},null===this.state.image?c.a.createElement("div",{className:"camera"},c.a.createElement(T.a,{audio:!1,width:"100%",ref:this.setRef,screenshotFormat:"image/jpeg"}),c.a.createElement("button",{className:"btn btn-success btn-block",onClick:this.capture},"Capture")):c.a.createElement(I,{picture:this.state.image,retake:this.scanAgain}))}}]),t}(c.a.Component),D=(a(52),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(b,null),c.a.createElement(h.a,null,c.a.createElement(d.a,{path:"/",exact:!0,component:w}),c.a.createElement(d.a,{path:"/history",component:f}),c.a.createElement(d.a,{path:"/login",component:v}),c.a.createElement(d.a,{path:"/home",component:g}),c.a.createElement(d.a,{path:"/scan",component:k}),c.a.createElement(d.a,{path:"/view/:receiptId",component:x}),c.a.createElement(d.a,{path:"/confirm/:receiptId",component:A}),c.a.createElement(d.a,{path:"/ocr",component:G}),c.a.createElement(d.a,{path:"/ocrresult",component:R}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.c1ca9145.chunk.js.map
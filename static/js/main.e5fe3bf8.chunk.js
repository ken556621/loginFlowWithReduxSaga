(this.webpackJsonpauthentication=this.webpackJsonpauthentication||[]).push([[0],{45:function(e,t,n){e.exports=n(63)},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),i=n.n(c),u=n(14),o=n(6),s=n(7),l=n(9),h=n(8),m=n(20),p=n(10),d=n(24),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.authenticated;return r.a.createElement("div",null,r.a.createElement("h1",null,e?"Welcome!":"You are not signed in!"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.a,{to:"/public"},"Public Page")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/protected"},"Protected Page"))))}}]),n}(a.Component);var O=Object(u.b)((function(e){return{authenticated:e.user.authenticated,authenticating:e.user.authenticating}}))(b),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("h3",null,"Public"))}}]),n}(a.Component),g=n(26);var v=n(28),E=n(23),j=n.n(E),y=n(27);n(58),n(59);function w(){var e=Object(g.a)(["\n    display: block;\n    color: #db3d44;\n    margin-top: 4px;\n"]);return w=function(){return e},e}function S(){var e=Object(g.a)(["\n    display: inline-block;\n    width: 100%;\n    padding: 5px 12px;\n    font-size: 13px;\n    color: #222222;\n    background-color: #ffffff;\n    background-image: none;\n    border: 1px solid #cccccc;\n    border-radius: 3px;\n"]);return S=function(){return e},e}function N(){var e=Object(g.a)(["\n    margin-bottom: 8px;\n"]);return N=function(){return e},e}var x=v.a.div(N()),I=v.a.input(S()),C=v.a.div(w()),k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){"userName"===e.target.name?(""===e.target.value?a.setState({emptyUserName:!0}):a.setState({emptyUserName:!1}),a.setState({userName:e.target.value})):"password"===e.target.name&&(""===e.target.value?a.setState({emptyPassword:!0}):a.setState({emptyPassword:!1}),a.setState({password:e.target.value}))},a.handleSubmit=function(){var e=a.state,t=e.userName,n=e.password,r=a.props,c=r.dispatch,i=r.history;return"guest"!==t.trim()||"guest"!==n.trim()?(a.setState({invalid:!0}),void c({type:"LOGIN_FAIL"})):void c(function(e,t,n){return{type:"LOGIN_REQUEST",userName:e,password:t,redirect:n}}(t,n,(function(){return i.push("/protected")})))},a.handleKeyDown=function(e){"Enter"===e.key&&a.handleSubmit()},a.handleCancel=function(){var e=a.props,t=e.closeSignInForm;(0,e.dispatch)({type:"LOGIN_CANCEL"}),t()},a.state={userName:"",password:"",emptyUserName:!1,emptyPassword:!1,invalid:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.emptyUserName,n=e.emptyPassword,a=e.invalid;return r.a.createElement(j.a,{onClose:this.handleCancel},r.a.createElement(j.a.Header,null,r.a.createElement(j.a.Title,null,"Sign In")),r.a.createElement(j.a.Body,null,r.a.createElement(x,null,r.a.createElement("label",null,"Username"),r.a.createElement("div",null,r.a.createElement(I,{onChange:this.handleChange,name:"userName",type:"text",placeholder:"Enter username"}))),t?r.a.createElement(C,null,"This is required field!"):null,r.a.createElement(x,null,r.a.createElement("label",null,"Password"),r.a.createElement("div",null,r.a.createElement(I,{onChange:this.handleChange,onKeyDown:this.handleKeyDown,name:"password",type:"password",placeholder:"Enter password"}))),n?r.a.createElement(C,null,"This is required field!"):null,a?r.a.createElement(C,null,"Incorrect username or password."):null),r.a.createElement(j.a.Footer,null,r.a.createElement(y.Button,{onClick:this.handleCancel,btnStyle:"flat"},"Cancel"),t||n?r.a.createElement(y.Button,{onClick:this.handleSubmit,disabled:!0,btnStyle:"primary"},"Sign In"):r.a.createElement(y.Button,{onClick:this.handleSubmit,btnStyle:"primary"},"Sign In")))}}]),n}(a.Component);var L=Object(u.b)((function(e){return{authenticated:e.user.authenticated,authenticating:e.user.authenticating}}))(k),F=function(e){var t=e.text,n=e.cb;return r.a.createElement("button",{onClick:n},t)},U=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).showSignInForm=function(){a.setState({isSignInForm:!0})},a.closeSignInForm=function(){a.setState({isSignInForm:!1})},a.state={isSignInForm:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.isSignInForm,t=this.props.history;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(L,{closeSignInForm:this.closeSignInForm,history:t}):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("h3",null,"You must sign in to view the page at/protected"),r.a.createElement(F,{text:"Sign In",cb:this.showSignInForm})))}}]),n}(a.Component);var R=Object(u.b)((function(e){return{authenticated:e.user.authenticated,authenticating:e.user.authenticating}}))(U),_=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSignOut=function(){var t=e.props,n=t.dispatch,a=t.history;n({type:"LOGOUT"}),a.push("/")},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{text:"Sign Out",cb:this.handleSignOut}),r.a.createElement(O,null),r.a.createElement("h3",null,"Protected"))}}]),n}(a.Component);var G=Object(u.b)((function(e){return{authenticated:e.user.authenticated,authenticating:e.user.authenticating}}))(_),P=r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/public",component:f}),r.a.createElement(m.a,{path:"/login",component:R}),r.a.createElement(m.a,{path:"/protected",component:function(e){var t=function(t){Object(l.a)(a,t);var n=Object(h.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.authenticated,n=e.authenticating,a=e.history;n?t||a.push("/login"):t?console.log("Login"):a.push("/login")}},{key:"render",value:function(){var t=this.props,n=t.authenticated;return t.authenticating?r.a.createElement("h1",null,"Is loading"):n?r.a.createElement(e,this.props):r.a.createElement("div",null)}}]),a}(a.Component);return Object(u.b)((function(e){return{authenticating:e.user.authenticating,authenticated:e.user.authenticated}}))(t)}(G)}),r.a.createElement(m.a,{path:"/",component:O})),T=(n(61),Object(p.a)()),A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(m.b,{history:T},P)}}]),n}(a.Component),D=n(17),B=n(42),M=n(44),W=n(13),K={authenticated:!1,authenticating:!1,formState:{userName:"",password:""},errorMsg:""},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_REQUEST_ASYNC":return Object(W.a)(Object(W.a)({},e),{},{authenticating:!0,authenticated:!1});case"LOGIN_SUCCESS":return Object(W.a)(Object(W.a)({},e),{},{authenticating:!1,authenticated:!0});case"UPDATE_USER":return Object(W.a)(Object(W.a)({},e),{},{authenticating:!1,authenticated:!0,formState:{userName:t.userName,password:t.password}});case"LOGIN_FAIL":return Object(W.a)(Object(W.a)({},e),{},{authenticating:!1,authenticated:!1,errorMsg:"Login Fail"});case"LOGOUT":return Object(W.a)(Object(W.a)({},e),{},{authenticating:!1,authenticated:!1});case"LOGIN_ERROR":return Object(W.a)(Object(W.a)({},e),{},{authenticating:!1,authenticated:!1,errorMsg:"Login Error"});default:return e}},Y=Object(D.combineReducers)({user:Q}),q=n(15),J=n.n(q),z=n(12),H=n(43),$=J.a.mark(te),V=J.a.mark(ne),X=J.a.mark(ae);function Z(){return ee.apply(this,arguments)}function ee(){return(ee=Object(H.a)(J.a.mark((function e(){var t,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e,t){setTimeout((function(){e("Finish checking")}),4e3)})),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){var t,n,a;return J.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.userName,n=e.password,a=e.redirect,r.prev=1,r.next=4,Object(z.b)(Z);case 4:return r.next=6,Object(z.e)({type:"LOGIN_SUCCESS"});case 6:return r.next=8,Object(z.e)({type:"UPDATE_USER",userName:t,password:n});case 8:return r.next=10,Object(z.b)((function(){a()}));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),r.next=16,Object(z.e)({type:"LOGIN_ERROR"});case 16:case"end":return r.stop()}}),$,null,[[1,12]])}function ne(e){var t;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(z.d)(te,{userName:e.userName,password:e.password,redirect:e.redirect});case 3:return t=n.sent,n.next=6,Object(z.f)("LOGIN_CANCEL");case 6:return n.next=8,Object(z.c)(t);case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(z.e)({type:"LOGIN_ERROR"});case 14:case"end":return n.stop()}}),V,null,[[0,10]])}function ae(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.g)("LOGIN_REQUEST",ne);case 2:case"end":return e.stop()}}),X)}var re=J.a.mark(ce);function ce(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([ae()]);case 2:case"end":return e.stop()}}),re)}var ie=Object(M.a)(),ue=Object(D.createStore)(Y,{},Object(B.composeWithDevTools)(Object(D.applyMiddleware)(ie)));ie.run(ce);var oe=ue;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:oe},r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.e5fe3bf8.chunk.js.map
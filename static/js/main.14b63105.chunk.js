(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(t,n,e){"use strict";(function(t){var r=e(10),a=e(11),o=e(14),i=e(12),c=e(15),l=e(0),u=e.n(l),s=e(9),d=e(67),f=e(153),m=e(13),p=e(83),g=function(n){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){var n=this.props,e=n.basictype,r=n.hotitem;return u.a.createElement(d.a,null,u.a.createElement(f.a,null),u.a.createElement(d.d,null,e.map(function(n,e){return u.a.createElement(s.b,{key:e,to:"/detail/"+n.get("id"),className:"li"},u.a.createElement("img",{alt:n.get("list").get("type_name"),src:t.constants.baseUrl+n.get("list").get("img_url")}),u.a.createElement("span",{className:"normol"}," ",n.get("list").get("type_name")))})),u.a.createElement(d.b,null,"\u70ed\u9500\u5355\u54c1"),u.a.createElement(d.c,null,"   ",r.map(function(n,e){return u.a.createElement("li",{key:e},u.a.createElement("em",null,"HOT"),u.a.createElement(s.b,{to:"/detail/"+n.get("id")},u.a.createElement("img",{alt:n.get("list").get("type_name"),src:t.constants.baseUrl+n.get("list").get("img_url")}),u.a.createElement("h6",null," ",n.get("list").get("model_no")),u.a.createElement("p",null," ",n.get("list").get("describe1")),u.a.createElement("span",null,n.get("list").get("sale_price"))))})))}},{key:"componentDidMount",value:function(){this.props.getHome()}}]),e}(l.Component);n.a=Object(m.b)(function(t){return{basictype:t.getIn(["home","basictype"]),hotitem:t.getIn(["home","hotitem"])}},function(t){return{getHome:function(){t(p.a.getHome())}}})(g)}).call(this,e(30))},146:function(t,n,e){t.exports=e.p+"static/media/bg.bb6483f1.jpg"},152:function(t,n,e){t.exports=e.p+"static/media/cartempty.2753f87d.png"},153:function(t,n,e){"use strict";(function(t){e(304);var r=e(154),a=e(10),o=e(11),i=e(14),c=e(12),l=e(15),u=e(0),s=e.n(u),d=e(13),f=e(9);e(306);function m(t,n,e){console.log(t,n,e)}var p=function(n){function e(){return Object(a.a)(this,e),Object(i.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(l.a)(e,n),Object(o.a)(e,[{key:"render",value:function(){var n=this.props.list;return s.a.createElement("div",null,s.a.createElement(r.a,{afterChange:m},n.map(function(n,e){return s.a.createElement(f.b,{key:e,to:"/detail/"+n.get("linkUrl")},s.a.createElement("img",{alt:"\u5c0f\u56fe\u7247",className:"r",src:t.constants.baseUrl+n.get("imgUrl")}))})))}}]),e}(u.Component);n.a=Object(d.b)(function(t){return{list:t.getIn(["home","poster"])}},null)(p)}).call(this,e(30))},158:function(t,n,e){t.exports=e(320)},306:function(t,n,e){(function(t){t.constants={baseUrl:"http://shop-test.dxracer.cn/"}}).call(this,e(30))},320:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"searchFocus",function(){return C}),e.d(r,"searchBlur",function(){return H}),e.d(r,"mouseEnter",function(){return G}),e.d(r,"mouseLeave",function(){return M}),e.d(r,"changePage",function(){return D}),e.d(r,"getList",function(){return J});var a={};e.r(a),e.d(a,"getList",function(){return U});var o={};e.r(o),e.d(o,"logout",function(){return V}),e.d(o,"login",function(){return X});var i=e(0),c=e.n(i),l=e(16),u=e.n(l),s=e(10),d=e(11),f=e(14),m=e(12),p=e(15),g=e(13),h=e(3),b=e(4);function E(){var t=Object(h.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\na{\n\ttext-decoration:none;\n\tcolor:#666;\n}\n*,::after,::before{box-sizing:border-box}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n.fr{\n\tfloat:right;\n}\n"]);return E=function(){return t},t}var v=Object(b.a)(E());function x(){var t=Object(h.a)(["\n@font-face {font-family: \"iconfont\";\n  src: url('./iconfont.eot?t=1552895025895'); /* IE9 */\n  src: url('./iconfont.eot?t=1552895025895#iefix') format('embedded-opentype'), /* IE6-IE8 */\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATAAAsAAAAACVgAAARyAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDQAqFUIR3ATYCJAMYCw4ABCAFhG0HWhsnCFFUTyJkPyRJAg2beQxIDjAIuAQFFAC8wQEJVEA8fO3H/tzdfYtKgySaxJJHTSQySXQ6lQSxUapXD/nPv5rLEBmx48Py1X+BFfqDvQDOZVMYX6erVIVshetPv6PeNLuHaQ3VnIBagZ8Huo76lfvhfqZrarB89m0ukUkRQZ+2AY4HNKCouCiQAyyQE/Ubxi4v8jiBdqNS5s7Vw7MRKPRxgTjtGmYECZNSwQit2lqwtIhHaLSme+Y6Hrzfjz/zEZA0mT718ORSGsdP/Y/ZWFAEOHYwIB7OAbaKjDmGQtwWus7ZQXSOrV3e3bHF0K5Vkj6H3ge+D/2YrSgopADZhsLt2nUa//IoskYSRKWrOhFxN9bwqW8hFD4DEDKfgaJqdShESHxnSy5JVwcc0oUPEGt08pj3S7IiSX19ZRi2tg4tZjWNDNS25p14APfv56E8DskyFSWej2cID7LpSUl4POykHeNEw6L9KCHlo8IYy07ff9+s70H8JdlWNGFbITy0X0poJmq8+sixacPj4kTFmDC6oHW0HLyCJuHV8shKdvqMZgvSaTRt/jG2AoAEOU3KbyKRUtELh3H7R2HgLSvOIUTpUk8qioRvboQ8vUVcq51zy+BVE4OZ7aZLDWnHxKED9tyRB247+VMykiR+rj0fPOAq5EiuqWJC3LBcQVyQs4Mk/Tk+ffozz43RTMn+/SVM1F79W1EnVP7+VTkxM7bvT36iUWl0NQRE+8xnWzJNUnziXQ07dEsdS3WLuJEuvzh1o9TUWsHqZWRcdKjIeEpaqlAbm64Xk+ywYepebX537XMfN6tSBwPT6mh1ZVopHPDngtNLEu84xd1ZrKHwbWlFRCbHxCxYHiGr/InYuOlCkCdSjfZY68wvV5/NpkaFvJ1DN10z1v9jYv/J3gL+Jd3rmFMVfjMQg0ozQCuC19c1/vCibF/yk471B812GhqxBvtMPib7zuj7sWI3LklP0M+Ih+BHg4MH17hsisFt16+32XJMzbgt8sdscnlf3G3cnDP/O8LsGBjYgeUMduIdGAtcPuwNYQCA8se+gFU9lmKfxsAS7el4d/yhPYgt/qi/kfbT6ONczbBvOgK2gOcDUwWr/gsqkO/Ab6HWWPz/iBvWFUWqm2uR0K0agWor9hUJ7drx3/j6/Q3lGWJEjtDKiSEkLUYgazWGLcQ5aHRYhKrVOrSbdb26wwDNFqUNM74AhF7fkHR7gqzXD7YQf6Ex7B+q3rCh3VHobtlhIrooViMjlMA/oRPLrEwrRX7hIzb7yHRc6jFfUW9dAKq8TCeucUY9xIztramJFCi9THAFTsNxXGDVS4+C8pZoPRSFKvqgXCyTEdmmIYYgCXCfQEdYzJTTmkSZn3+EGrsRoytQZd5XSNt0nYNKrmyAvVbNjVCX0nvzplEjROFRiraYgCvoQKMRXYC1eFAPCSTXdgivDgrUTDVV5dNrprvcBu30u2ukyFGiiRotys3azcHSZX/fRYtWNEtOQ5FF3cXQzdESNjeS9Z1jNAwAAA==') format('woff2'),\n  url('./iconfont.woff?t=1552895025895') format('woff'),\n  url('./iconfont.ttf?t=1552895025895') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url('./iconfont.svg?t=1552895025895#iconfont') format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 18px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);return x=function(){return t},t}var j=Object(b.a)(x()),O=e(46),y=e(9),A=e(56),I=e(143),k=e(144),w=e(7),S=Object(w.fromJS)({focused:!1,mouseIn:!1,list:[],page:1,totalPage:1}),N=e(35),R=e.n(N),C=function(){return{type:"header/SEARCH_FOCUS"}},H=function(){return{type:"header/SEARCH_BLUR"}},G=function(){return{type:"header/MOUSE_ENTER"}},M=function(){return{type:"header/MOUSE_LEAVE"}},D=function(t){return{type:"header/CHANGE_PAGE",page:t}},J=function(){return function(t){R.a.get("api/headerList.json").then(function(n){var e=n.data;t(function(t){return{type:"header/CHANGE_LIST",data:Object(w.fromJS)(t),totalPage:Math.ceil(t.length/10)}}(e.data))}).catch(function(){console.log("error")})}},L=Object(w.fromJS)({list:[]}),U=function(){return function(t){R.a.get("/api/type.json").then(function(n){var e=n.data;t(function(t){return{type:"nav/SET_LIST",data:Object(w.fromJS)(t)}}(e))}).catch(function(){console.log("error")})}},F=e(83),Q=e(33),T=e.n(Q),P=Object(w.fromJS)({login:!1,token:"",loginUserId:""}),Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"login/CHANGE_LOGIN":return t.merge({login:Object(w.fromJS)(n.value),token:Object(w.fromJS)(n.token),loginUserId:Object(w.fromJS)(n.loginUserId)});case"login/LOGOUT":return t.set("login",n.value);default:return t}},z=R.a.create();z.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",z.defaults.headers.common.token=localStorage.getItem("token"),z.defaults.headers.common.loginUserId=localStorage.getItem("loginUserId"),z.interceptors.request.use(function(t){return t}),z.interceptors.response.use(function(t){return t.data},function(t){return Promise.reject(t)});var Z=z,V=function(){return{type:"login/LOGOUT",value:!1}},X=function(t,n){return function(e){Z.get("api/auth.json",{loginName:t,passWord:n}).then(function(t){var n,r;200===t.code?(localStorage.setItem("token",t.object.token),localStorage.setItem("loginUserId",t.object.userId),T.a.save("login",!0),e((n=t.object.token,r=t.object.userId,{type:"login/CHANGE_LOGIN",value:!0,token:n,userId:r}))):(T.a.remove("login"),localStorage.removeItem("token"),localStorage.removeItem("loginUserId"))})}},B=Object(k.combineReducers)({header:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"header/SEARCH_FOCUS":return t.set("focused",!0);case"header/SEARCH_BLUR":return t.set("focused",!1);case"header/CHANGE_LIST":return t.merge({list:n.data,totalPage:n.totalPage});case"header/MOUSE_ENTER":return t.set("mouseIn",!0);case"header/MOUSE_LEAVE":return t.set("mouseIn",!1);case"header/CHANGE_PAGE":return t.set("page",n.page);default:return t}},home:F.b,login:Y,nav:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"nav/SET_LIST":return t.set("list",n.data);default:return t}},detail:Y}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.c,K=Object(A.d)(B,W(Object(A.a)(I.a))),q=e(39),_=e.n(q);function $(){var t=Object(h.a)(["\n\tfloat: right;\n\tmargin-top: 9px;\n\tmargin-right: 20px;\n\tpadding: 0 20px;\n\tline-height: 38px;\n\tborder-radius: 19px;\n\tborder: 1px solid #ec6149;\n\tfont-siz: 14px;\n\t&.reg {\n\t\tcolor: #ec6149;\n\t}\n\t&.writting {\n\t\tcolor: #fff;\n\t\tbackground: #ec6149;\n\t}\n"]);return $=function(){return t},t}function tt(){var t=Object(h.a)(["\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\theight: 56px;\n"]);return tt=function(){return t},t}function nt(){var t=Object(h.a)(["\n\tline-height: 50px;\n\tpadding: 0 15px;\n\tfont-size: 16px;\n\tcolor: #fff;\n\t&.left {\n\t\tdisplay:inline-block;\n\t}\n\t&.right {\n\t\tfloat: right;\n\n\t}\n\t&.active {\n\t\tcolor: #ea6f5a;\n\t}\n"]);return nt=function(){return t},t}function et(){var t=Object(h.a)(["\n\twidth: 1200px;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tmargin: 0 auto;\n   color:#ccc;\n"]);return et=function(){return t},t}function rt(){var t=Object(h.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: block;\n\twidth: 265px;\n\theight: 42px;\n\tbackground: url(",");\n\tbackground-size: contain;\n"]);return rt=function(){return t},t}function at(){var t=Object(h.a)(["\n\tz-index: 1;\n\tposition: relative;\n\theight: 50px;\n\tline-height:50px;\n\tborder-bottom: 1px solid #f0f0f0;\n\tbackground:#1b1b1b;\n"]);return at=function(){return t},t}var ot=b.b.div(at()),it=(b.b.div(rt(),_.a),b.b.div(et())),ct=b.b.div(nt()),lt=(b.b.div(tt()),b.b.div($()),function(t){function n(){return Object(s.a)(this,n),Object(f.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(d.a)(n,[{key:"render",value:function(){var t=this.props,n=t.login,e=t.logout;return c.a.createElement(ot,null,c.a.createElement(it,null,c.a.createElement(ct,{className:"left active"},"\u9996\u9875"),"|",c.a.createElement(ct,{className:"left"},"\u5408\u4f5c\u62db\u5546"),"|",c.a.createElement(ct,{className:"left"},"\u64cd\u4f5c\u6307\u5357"),"|",c.a.createElement(ct,{className:"right"},c.a.createElement(y.b,{to:"/cart"}," ",c.a.createElement("i",{className:"iconfont"},"\ue63b"))),c.a.createElement(ct,{className:"right"},"\u6ce8\u518c "),n?c.a.createElement(ct,{onClick:e,className:"right"},"\u9000\u51fa"):c.a.createElement(y.b,{to:"/login"},c.a.createElement(ct,{className:"right"},"\u767b\u5f55"))))}}]),n}(i.Component)),ut=Object(g.b)(function(t){return{focused:t.getIn(["header","focused"]),list:t.getIn(["header","list"]),page:t.getIn(["header","page"]),totalPage:t.getIn(["header","totalPage"]),mouseIn:t.getIn(["header","mouseIn"]),login:T.a.load("login")}},function(t){return{handleInputFocus:function(n){0===n.size&&t(r.getList()),t(r.searchFocus())},handleInputBlur:function(){t(r.searchBlur())},handleMouseEnter:function(){t(r.mouseEnter())},handleMouseLeave:function(){t(r.mouseLeave())},handleChangePage:function(n,e,a){var o=a.style.transform.replace(/[^0-9]/gi,"");o=o?parseInt(o,10):0,a.style.transform="rotate("+(o+360)+"deg)",t(n<e?r.changePage(n+1):r.changePage(1))},logout:function(){t(o.logout())}}})(lt);function st(){var t=Object(h.a)(["{\n\tborder-width: 1px 1px 1px 0;\nborder-style: solid;\nborder-color: #d9d9d9;\nwidth: 35px;\nbackground: #fff;\nheight: 35px;\n    display: inline-block;\n\t\tline-height:35px;\n\t\ttext-align:center;\n\t}"]);return st=function(){return t},t}function dt(){var t=Object(h.a)(["{\n\t    background: #fff;\n\t\t\tfloat: right;\n\t\t\tinput{\n\t\t\t\twidth: 160px;\nborder: 1px solid #d9d9d9;\nfloat: left;\npadding-left: 5px;\nheight: 35px;\n    display: inline-block;\n\n\t\t\t}\n}"]);return dt=function(){return t},t}function ft(){var t=Object(h.a)(["\nfloat:left;\nmargin-top: 5px;\na{\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tcolor: #313131;\n\tmargin-left:13px;\n\tmargin-right:13px;\n}\n"]);return ft=function(){return t},t}function mt(){var t=Object(h.a)(["\nwidth: 265px;\nheight: 42px;\nbackground: url(",");\nbackground-size: contain;\nfloat:left;\n"]);return mt=function(){return t},t}function pt(){var t=Object(h.a)(["\n\twidth:1200px;\n\tmargin:0 auto;\n\toverflow:hidden;\n"]);return pt=function(){return t},t}function gt(){var t=Object(h.a)(["\n\tbackground:#f4f6f8;\n  padding-top:35px;\n  padding-bottom:28px;\n"]);return gt=function(){return t},t}var ht=b.b.div(gt()),bt=b.b.div(pt()),Et=b.b.div(mt(),_.a),vt=b.b.div(ft()),xt=b.b.div(dt()),jt=b.b.div(st()),Ot=function(t){function n(){return Object(s.a)(this,n),Object(f.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(d.a)(n,[{key:"render",value:function(){var t=this.props.list;return c.a.createElement(vt,null,t.map(function(t,n){return c.a.createElement(y.b,{key:n,to:"/detail/"+t.get("id")},t.get("typeName"))}))}}]),n}(i.Component),yt=Object(g.b)(function(t){return{list:t.getIn(["nav","list"])}},null)(Ot),At=function(t){function n(){return Object(s.a)(this,n),Object(f.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement(xt,null,c.a.createElement("input",null),c.a.createElement(jt,null,c.a.createElement("i",{className:"iconfont"},"\ue637")," "))}}]),n}(i.Component),It=Object(g.b)(null,null)(At),kt=function(t){function n(){return Object(s.a)(this,n),Object(f.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement(ht,null,c.a.createElement(bt,null,c.a.createElement(y.b,{to:"/"}," ",c.a.createElement(Et,null)),c.a.createElement(yt,null),c.a.createElement(It,null)))}},{key:"componentDidMount",value:function(){this.props.getList()}}]),n}(i.Component),wt=Object(g.b)(null,function(t){return{getList:function(){t(a.getList())}}})(kt),St=(e(124),e(57)),Nt=(e(321),e(59)),Rt=(e(196),e(114)),Ct=(e(198),e(20)),Ht=e(146),Gt=e.n(Ht);function Mt(){var t=Object(h.a)(["\nmargin-top:40px;\nfloat:right;\nz-index: 100;\nwidth: 410px;\nmin-height: 530px;\nbackground-color: #fff;\npadding: 53px 46px;\n.h42{\n\theight:50px;\n}\n.login-form-button{\n\twidth: 320px;\n\t\theight:50px;\n}\n"]);return Mt=function(){return t},t}function Dt(){var t=Object(h.a)(["\nbackground: url(",")  scroll no-repeat 0 0;\nheight:650px;\n.main_width{\n\twidth:1200px;\n\tmargin:0  auto;\n\toverflow:hidden;\n\th4{\n\t\tfont-size: 24px;\nfont-weight: 400;\ncolor: #333;\nheight: 31px;\nline-height: 31px;\nmargin-bottom: 20px;\n\t}\n}\n"]);return Dt=function(){return t},t}function Jt(){var t=Object(h.a)(["\nwidth: 265px;\nheight: 42px;\nbackground: url(",");\nbackground-size: contain;\n"]);return Jt=function(){return t},t}function Lt(){var t=Object(h.a)(["\n\t\t\t.nav{\n\t\t\t\tpadding-top: 35px;\n\t\t   \tpadding-bottom: 23px;\n\t\t\t\t.main_width{\n\t\t\t\t\twidth:1200px;\n\t\t\t\t\tmargin:0  auto;\n\t\t\t\t}\n\t\t\t}\n"]);return Lt=function(){return t},t}var Ut=b.b.div(Lt()),Ft=b.b.div(Jt(),_.a),Qt=b.b.div(Dt(),Gt.a),Tt=b.b.div(Mt()),Pt=function(t){function n(){var t,e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(f.a)(this,(t=Object(m.a)(n)).call.apply(t,[this].concat(a)))).handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields(function(t,n){t||(console.log("Received values of form: ",n),e.props.login(n.userName,n.password))})},e}return Object(p.a)(n,t),Object(d.a)(n,[{key:"render",value:function(){var t=this.props.loginStatus,n=this.props.form.getFieldDecorator;return t?c.a.createElement(O.a,{to:"/"}):c.a.createElement(Ut,null,c.a.createElement("div",{className:"nav"},c.a.createElement("div",{className:"main_width"},c.a.createElement(y.b,{to:"/"},c.a.createElement(Ft,null)))),c.a.createElement(Qt,null,c.a.createElement("div",{className:"main_width"},c.a.createElement(Tt,null,c.a.createElement(Nt.a,{onSubmit:this.handleSubmit,className:"login-form"},c.a.createElement(Nt.a.Item,null,n("userName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"}]})(c.a.createElement(Rt.a,{className:"h42",prefix:c.a.createElement(Ct.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u624b\u673a\u53f7"}))),c.a.createElement(Nt.a.Item,null,n("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(c.a.createElement(Rt.a,{className:"h42",prefix:c.a.createElement(Ct.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),c.a.createElement(Nt.a.Item,null,c.a.createElement(St.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55"),c.a.createElement("a",{className:"login-form-forgot",href:""},"\u5fd8\u8bb0\u5bc6\u7801"),c.a.createElement("a",{href:"",className:"fr"},"\u53bb\u6ce8\u518c>")))))))}}]),n}(i.PureComponent);Pt=Nt.a.create({})(Pt);var Yt=Object(g.b)(function(t){return{loginStatus:T.a.load("login")}},function(t){return{login:function(n,e){t(o.login(n,e))}}})(Pt);function zt(){var t=Object(h.a)(["\nbackground-color: #eee;\npadding: 50px 0 70px;\njustify-content: center;\n.cartTablenull{\n  width: 650px;\nheight: 210px;\nmargin: 0 auto;\n}\nimg{\n  opacity: .5;\nwidth: 240px;\n}\nspan{\n  font-weight: 700;\nfont-style: normal;\nfont-size: 36px;\ncolor: #999;\nfloat: right;\nwidth: 360px;\nmargin-top: 35px;\n}\n.go{\n  width: 180px;\nheight: 50px;\nborder: 1px solid red;\nborder-radius: 0;\nbox-shadow: none;\nfont-weight: 400;\nfont-size: 18px;\ncolor: red;\ntext-align: center;\nbackground-color: #fff;\nmargin-top: 15px;\ndisplay: inline-block;\nline-height: 50px;\n}\n"]);return zt=function(){return t},t}function Zt(){var t=Object(h.a)(["\ndisplay:flex;\nmin-height:300px;\njustify-content:center;\nflex-direction: column;\nalign-items: center;\nbackground:#eee;\nh1{\n  font-weight: 700;\nfont-style: normal;\nfont-size: 36px;\ncolor: #999;\n}\nbutton{\n  width: 180px;\nheight: 50px;\nborder: 1px solid red;\nborder-radius: 0;\nbox-shadow: none;\nfont-weight: 400;\nfont-size: 18px;\ncolor: red;\ntext-align: center;\nbackground-color: #fff;\nmargin-top: 15px;\ndisplay: inline-block;\nline-height: 50px;\n}\n"]);return Zt=function(){return t},t}function Vt(){var t=Object(h.a)(["\nfont-size: 24px;\ncolor: #333;\nline-height: 24px;\nfloat:left;\nmargin-left:10px\n"]);return Vt=function(){return t},t}function Xt(){var t=Object(h.a)(["\nwidth:1200px;\nmargin:0 auto;\noverflow:hidden;\n"]);return Xt=function(){return t},t}function Bt(){var t=Object(h.a)(["\n  padding-top: 35px;\npadding-bottom: 23px;\nbackground-color: #fff;\nborder-bottom: 2px solid red;\n"]);return Bt=function(){return t},t}function Wt(){var t=Object(h.a)(["\nwidth: 265px;\nheight: 42px;\nbackground: url(",");\nbackground-size: contain;\nfloat:left;\n"]);return Wt=function(){return t},t}var Kt=b.b.div(Wt(),_.a),qt=b.b.div(Bt()),_t=b.b.div(Xt()),$t=b.b.span(Vt()),tn=b.b.div(Zt()),nn=b.b.div(zt()),en=e(152),rn=e.n(en),an=function(t){function n(){return Object(s.a)(this,n),Object(f.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(d.a)(n,[{key:"render",value:function(){var t=this.props.loginStatus;return c.a.createElement("div",null,c.a.createElement(qt,null,c.a.createElement(_t,null," ",c.a.createElement(y.b,{to:"/"},c.a.createElement(Kt,null)),c.a.createElement($t,null,"\u6211\u7684\u8d2d\u7269\u8f66"))),t?c.a.createElement(nn,null,c.a.createElement("div",{className:"cartTablenull"},"  ",c.a.createElement("img",{src:rn.a}),c.a.createElement("span",null,"\u60a8\u7684\u8d2d\u7269\u8f66\u8fd8\u662f\u7a7a\u7684\uff01  ",c.a.createElement(y.b,{className:"go",to:"/"},"\u9a6c\u4e0a\u53bb\u8d2d\u7269")))):c.a.createElement(tn,null,c.a.createElement("h1",null,"\u60a8\u5c1a\u672a\u767b\u5f55"),c.a.createElement("button",null,c.a.createElement(y.b,{to:"/login"},"\u53bb\u767b\u5f55"))))}}]),n}(i.Component),on=Object(g.b)(function(t){return{loginStatus:T.a.load("login")}},null)(an),cn=e(113),ln=function(t){return c.a.createElement("div",{className:"primary-layout"},c.a.createElement("main",null,c.a.createElement(O.d,null,c.a.createElement(O.b,{path:"/",exact:!0,component:sn}),c.a.createElement(O.b,{path:"/layout",component:fn}),c.a.createElement(O.b,{path:"/cart",component:dn}),c.a.createElement(O.b,{path:"/users",component:mn}),c.a.createElement(O.b,{path:"/login",component:Yt}),c.a.createElement(O.a,{to:"/login"}))))},un=function(){return c.a.createElement("div",null,c.a.createElement(ut,null),c.a.createElement(wt,null))},sn=function(){return c.a.createElement("div",null,c.a.createElement(un,null),c.a.createElement(cn.a,null))},dn=function(t){var n=t.match;return c.a.createElement("div",null,c.a.createElement(ut,null),c.a.createElement(O.d,null,c.a.createElement(O.b,{exact:!0,path:"".concat(n.path),component:on})))},fn=function(t){var n=t.match;return c.a.createElement("div",null,c.a.createElement(un,null),c.a.createElement(O.d,null,c.a.createElement(O.b,{exact:!0,path:"".concat(n.path,"/home"),component:cn.a}),c.a.createElement(O.b,{path:"".concat(n.path,"/detail"),component:jn})))},mn=function(t){var n=t.match;return c.a.createElement("div",{className:"user-sub-layout"},c.a.createElement("aside",null,c.a.createElement(bn,null)),c.a.createElement("div",{className:"primary-content"},c.a.createElement(O.d,null,c.a.createElement(O.b,{exact:!0,path:n.path,component:xn}),c.a.createElement(O.b,{path:"".concat(n.path,"/add"),component:En}),c.a.createElement(O.b,{path:"".concat(n.path,"/:userId/edit"),component:vn}),c.a.createElement(O.b,{path:"".concat(n.path,"/:userId"),component:hn}))))},pn=function(t){var n=t.match;return c.a.createElement("div",null,"UserId: ",n.params.userId)},gn=function(t){var n=t.match;return c.a.createElement("div",null,"UserId: ",n.params.userId)},hn=function(t){var n=t.match;return c.a.createElement("div",null,"User Profile:",c.a.createElement(O.b,{path:"".concat(n.url,"/comments"),component:pn}),c.a.createElement(O.b,{path:"".concat(n.path,"/settings"),component:gn}))},bn=function(){return c.a.createElement("div",null,"UserNav")},En=function(){return c.a.createElement("div",null,"AddUserPage")},vn=function(){return c.a.createElement("div",null,"EditUserPage")},xn=function(){return c.a.createElement("div",null,"\u7528\u6237\u4e3b\u9875")},jn=function(){return c.a.createElement("div",null,"\u8be6\u60c5")},On=function(t){function n(){return Object(s.a)(this,n),Object(f.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement(g.a,{store:K},c.a.createElement(i.Fragment,null,c.a.createElement(v,null),c.a.createElement(j,null),c.a.createElement(y.a,null,c.a.createElement(ln,null))))}}]),n}(i.Component);u.a.render(c.a.createElement(On,null),document.getElementById("root"))},39:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAAqCAYAAACgJ65IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OURGRERBRDJCNEJDMTFFOEIxM0RDMTgxRDFGQjYzNkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OURGRERBRDNCNEJDMTFFOEIxM0RDMTgxRDFGQjYzNkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5REZEREFEMEI0QkMxMUU4QjEzREMxODFEMUZCNjM2QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5REZEREFEMUI0QkMxMUU4QjEzREMxODFEMUZCNjM2QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlWN+QoAAAwTSURBVHja7F0LlFVV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"},67:function(t,n,e){"use strict";e.d(n,"a",function(){return h}),e.d(n,"d",function(){return b}),e.d(n,"b",function(){return E}),e.d(n,"c",function(){return v});var r=e(3),a=e(4);function o(){var t=Object(r.a)(["\noverflow:hidden;\n li{\n\t text-align: center;\nfont-size: 13px;\nposition: relative;\nwidth: 292px;\nheight: 370px;\ncursor: pointer;\nfloat: left;\nborder: 1px solid transparent;\ntransition: border-color .1s ease;\n }\n li:hover{\n    border-color: #ddd;\n\n }\n em{\n\t position: absolute;\nleft: 15px;\ntop: 15px;\nwidth: 51px;\nheight: 20px;\ntext-align: center;\nborder: 2px solid #080103;\ncolor: #000;\nfont-size: 11px;\nfont-weight: 700;\nline-height: 17px;\n }\n a{\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\n }\n img{\n\t max-height: 290px;\nmax-width: 290px;\ndisplay: block;\n }\n h6{\n\t color: #111;\n    font-size: 13px;\n }\n p{\n\t color: #888;\nmargin-top: 5px;\nmargin-bottom: 10px;\ntext-align: left;\npadding: 0 5px;\n }\n span{\n\t     font-weight: 700;\n\t\t\t     color: #ff0037;\n }\n\n"]);return o=function(){return t},t}function i(){var t=Object(r.a)(["\n\t\tpadding-top: 35px;\npadding-bottom: 8px;\nfont-size: 25px;\ncolor: #313131;\n"]);return i=function(){return t},t}function c(){var t=Object(r.a)(["\n\t\t    margin-top: 10px;\n\t\t\t\tmargin-left:-11px;\n\t\t\t\toverflow:hidden;\n\t\t\t\t.li{\n\t\t\t\t\tfloat: left;\n    position: relative;\n    cursor: pointer;\n\t\tmargin-left:11px;\n\t\t\t\t}\n\t\t\t\t.normol{\n\t\t\t\t\tfont-size: 24px;\ncolor: #fff;\nposition: absolute;\ntop: 35px;\nleft: 40px;\n\t\t\t\t}\n\t\t"]);return c=function(){return t},t}function l(){var t=Object(r.a)(["\n\tcursor:pointer;\n       width: 100%;\n    height: 40px;\n    line-height:40px;\n    margin: 30px auto 60px;\n    text-align: center;\n    font-size: 15px;\n    border-radius: 20px;\n    color: #fff;\n    background-color: #a5a5a5;\n    display: block;"]);return l=function(){return t},t}function u(){var t=Object(r.a)(["\n    margin: 0 0 8px;\n    font-size: 13px;\n    line-height: 24px;\n    color: #999;"]);return u=function(){return t},t}function s(){var t=Object(r.a)(["\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 1.5;"]);return s=function(){return t},t}function d(){var t=Object(r.a)(["\nwidth:458px"]);return d=function(){return t},t}function f(){var t=Object(r.a)(["\npadding:20px 0;\nborder-top:1px solid #ddd;\nposition:relative;\n.r{\n\t    position: absolute;\n    top: 50%;\n    margin-top: -60px;\n    right: 0;\n    width: 150px;\n    height: 100px;\n        border-radius: 4px;\n    border: 1px solid #f0f0f0;\n}\n"]);return f=function(){return t},t}function m(){var t=Object(r.a)(["\n\twidth:29.16667%\n\tfloat:right;\n\t.recommend{\n\t\twidth:100%;\n\t}\n"]);return m=function(){return t},t}function p(){var t=Object(r.a)(["\n\tpadding-left:15px;\n\tbox-sizing:border-box;\n\twidth:66.66%;\n\tfloat:left;\n"]);return p=function(){return t},t}function g(){var t=Object(r.a)(["\n\twidth:1200px;\n\tmargin:20px auto 0;\n\theight:100%;\n\t.img{\n\t\twidth:625px;\n\t\theight:270px;\n\t\tdisplay:block;\n\t\tmargin-bottom:20px\n\t}\n"]);return g=function(){return t},t}var h=a.b.div(g()),b=(a.b.div(p()),a.b.div(m()),a.b.div(f()),a.b.div(d()),a.b.div(s()),a.b.p(u()),a.b.div(l()),a.b.div(c())),E=a.b.div(i()),v=a.b.ul(o())},83:function(t,n,e){"use strict";var r={};e.r(r),e.d(r,"acticleList",function(){return u}),e.d(r,"bannerList",function(){return s}),e.d(r,"getHome",function(){return d}),e.d(r,"getHomeInfo",function(){return f}),e.d(r,"getMoreList",function(){return m});var a=e(7),o=Object(a.fromJS)({bannerList:[],articleList:[],recommondList:[],articlePage:0,totalpage:0,poster:[],basictype:[],hotitem:[]}),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"home/CHANGE_HOME_DATA":return function(t,n){return t.merge({poster:Object(a.fromJS)(n.poster),basictype:Object(a.fromJS)(n.basictype),hotitem:Object(a.fromJS)(n.hotitem)})}(t,n);case"home/ACTICLE_LIST":return t.merge({articleList:Object(a.fromJS)(n.result),articlePage:Object(a.fromJS)(n.nextpage),totalpage:Object(a.fromJS)(n.totalpage)});case"home/BANNER_LIST":return t.set("bannerList",Object(a.fromJS)(n.result));default:return t}},c=e(35),l=e.n(c),u=function(t,n,e){return{type:"home/ACTICLE_LIST",result:t,nextpage:n,totalpage:e}},s=function(t){return{type:"home/BANNER_LIST",result:t}},d=function(){return function(t){l.a.get("api/home.json").then(function(n){var e;t({type:"home/CHANGE_HOME_DATA",poster:(e=n.data.data).poster,basictype:e.basictype,hotitem:e.hotitem})})}},f=function(){return function(t){l.a.post("/api/article",{page:0}).then(function(n){t(u(n.data.datas,0,n.data.totalpage))})}},m=function(t){return function(n){l.a.post("/api/article",{page:t+1}).then(function(e){n(u(e.data.datas,t+1,e.data.totalpage))})}};e.d(n,"b",function(){return i}),e.d(n,"a",function(){return r})}},[[158,1,2]]]);
//# sourceMappingURL=main.14b63105.chunk.js.map
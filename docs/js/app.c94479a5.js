(function(){var t={93976:function(t,s,e){"use strict";var a=e(36369),n=function(){var t=this,s=t._self._c;return s("div",[s("router-view",{key:t.$router.currentRoute.path})],1)},o=[],i=e(1001),c={},r=(0,i.Z)(c,n,o,!1,null,null,null),l=r.exports,h=e(55996),d=e(79425),u=(e(57024),e(72631)),m=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mx-auto content container text-center",staticStyle:{"max-width":"540px"}},[s("b-card",{staticClass:"my-3"},[s("img",{staticClass:"my-3 rounded",attrs:{id:"photo",src:e(8412)}}),s("div",{staticClass:"row text"},[s("div",{staticClass:"col-6"},[t._v(" 长者 "),s("br"),t._v(" (1926 - 现今)"),s("br"),t._v(" 万寿无疆 ")]),s("div",{staticClass:"col-6"},[t._v(" 女王 "),s("br"),t._v(" (1926 - 2022)"),s("br"),t._v(" 驾鹤归去 ")])]),s("div",{staticClass:"row my-1 mt-5"},[s("div",{staticClass:"col"},[s("h4",[t._v("斯人已逝，生者如斯")])])]),s("div",{staticClass:"row my-1"},[s("div",{staticClass:"col"},[s("h4",[t._v("欢迎参加 "),s("span",{staticClass:"highlight-text"},[t._v("听我说续续你")]),t._v(" 活动")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("b-button",{attrs:{variant:"success",size:"lg"},on:{click:function(s){return t.startGame()}}},[t._v("点击继续")])],1)])])],1)},v=[],f={name:"SplashView",methods:{startGame(){this.$router.push({name:"GameView"})}}},g=f,S=(0,i.Z)(g,m,v,!1,null,"d7183998",null),_=S.exports,p=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mx-auto content container text-center"},[s("img",{staticClass:"my-3",staticStyle:{"max-width":"60%",width:"280px"},attrs:{src:e(95030)}}),s("div",{staticClass:"my-4"},[s("div",{staticClass:"row my-2"},[s("div",{staticClass:"col",staticStyle:{"font-size":"1.5rem"}},[t._v(" 当前总共为长者增加 "),s("span",{staticClass:"highlight-text"},[t._v(t._s(t.totalSeconds))]),t._v(" 秒 ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v(" 共计 "),s("span",{staticClass:"highlight-text"},[t._v(t._s(t.year))]),t._v(" 年 "),s("span",{staticClass:"highlight-text"},[t._v(t._s(t.month))]),t._v(" 月 "),s("span",{staticClass:"highlight-text"},[t._v(t._s(t.day))]),t._v(" 天 "),s("span",{staticClass:"highlight-text"},[t._v(t._s(t.hour))]),t._v(" 时 "),s("span",{staticClass:"highlight-text"},[t._v(t._s(t.minute))]),t._v(" 分 "),s("span",{staticClass:"highlight-text"},[t._v(t._s(t.second))]),t._v(" 秒 ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h4",[t._v("你已经为长者增加 "),s("span",{staticClass:"highlight-text"},[t._v(t._s(t.addedSeconds))]),t._v(" 秒")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h5",[t._v(t._s(t.gameTimeLeft/1e3)+" 秒内疯狂点击 +1s!")])])]),s("div",{staticClass:"row my-2"},[s("div",{staticClass:"col"},[t.gameStart?t._e():s("b-button",{attrs:{variant:"success",size:"lg"},on:{click:function(s){return t.startGame()}}},[t._v("倒数 3 秒开始 "),s("br"),t._v(" "),s("span",{staticStyle:{"font-size":"0.8rem"}},[t._v("续续倒计时")])]),t.gameStart?s("b-button",{staticClass:"p-3 px-5",staticStyle:{"font-size":"1.5rem","font-style":"bold"},attrs:{variant:"warning",size:"lg",disabled:t.gameButtonDisabled},on:{click:function(s){return t.addSeconds()}}},[t._v(t._s(t.gameButtonText))]):t._e()],1)]),s("hr",{staticClass:"my-4"}),t._m(0),s("b-modal",{attrs:{id:"game-end-modal","hide-footer":"","hide-header":"","no-close-on-esc":"","no-close-on-backdrop":""}},[s("div",{staticClass:"p-3"},[s("div",{staticClass:"modal-card text-center p-4"},[s("h2",[t._v("听我说续续你")]),s("img",{staticClass:"my-3",staticStyle:{"max-width":"60%",width:"220px"},attrs:{src:e(95030)}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v(" 苟利国家生死以 ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v(" 岂因祸福避趋之 ")])]),s("div",{staticClass:"row my-3"},[s("div",{staticClass:"col"},[t._v(" 您在 +1S 续续活动中"),s("br"),t._v("总共贡献了 "),s("span",{staticClass:"highlight-text"},[t._v(t._s(t.totalScores))]),t._v(" 秒 ")])]),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col"},[s("h2",[t._v("超越了 "),s("span",{staticClass:"highlight-text"},[t._v(t._s(t.percentage)+"%")]),t._v(" 的参与者")])])]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col"},[t.showConnectWallet?s("b-button",{attrs:{variant:"success",size:"lg"},on:{click:function(s){return t.connectWalletNow()}}},[t._v("连接钱包获得额外 10 秒续续！")]):t._e()],1)]),s("img",{staticClass:"mt-3",staticStyle:{width:"80px"},attrs:{src:e(18976)}}),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col"},[t._v(" 截图分享，一起帮长者续续！ ")])])]),s("div",{staticClass:"mx-auto text-left p-2"},[s("div",[t._v("1. 连接钱包后可获得额外 10 秒续续")]),s("div",{staticClass:"mt-2"},[t._v("2. "),s("span",{staticClass:"highlight-text"},[t._v("续续总秒数排名靠前")]),t._v("的记者们, 将会有高概率于近期获得"),s("span",{staticClass:"highlight-text"},[t._v("长者系列 NFT 空投")]),t._v(" (请密切关注twitter: "),s("a",{attrs:{target:"_blank",href:"https://google.com"}},[t._v("zhangzhe.live")]),t._v(")")])])])])],1)},C=[function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"row my-3",staticStyle:{"font-weight":"bold"}},[s("div",{staticClass:"col"},[t._v(" 你需要关注的点: ")])]),s("div",{staticClass:"mx-auto text-left p-2"},[s("p",[t._v("1. 同年出生的女皇已经离开, 我们衷心希望 96 岁高龄的长者能一直坚挺下去: 请大家帮我们一起祈福")]),s("p",[t._v("2. "),s("span",{staticClass:"highlight-text"},[t._v("续续总秒数排名靠前")]),t._v("的记者们, 将会有高概率于近期获得"),s("span",{staticClass:"highlight-text"},[t._v("长者系列 NFT 空投")]),t._v(" (请密切关注twitter: "),s("a",{attrs:{target:"_blank",href:"https://google.com"}},[t._v("zhangzhe.live")]),t._v(")")]),s("p",[t._v("3. 我们将有后续玩法于近日推出，敬请大家期待")])])])}];function w(t){localStorage.setItem("score",t)}function y(){let t=localStorage.getItem("score");return null!=t&&Number.isInteger(1*t)?1*t:0}function b(t){localStorage.setItem("walletScore",t)}function x(){let t=localStorage.getItem("walletScore");return null!=t&&Number.isInteger(1*t)?1*t:0}function T(t){localStorage.setItem("wallet",t)}function M(){return localStorage.getItem("wallet")}var I=e(35085),O=e.n(I),k=e(46670),z=e.n(k),G=e(1847);const L={walletconnect:{package:G.Z,options:{infuraId:{NODE_ENV:"production",BASE_URL:"/"}.INFURA_ID}}},N=new(z())({network:"mainnet",cacheProvider:!0,providerOptions:L});var P;async function j(){if(!P){const t=await N.connect();P=new(O())(t)}return await P.eth.getAccounts()}var Z={name:"GameView",components:{},data(){return{totalSeconds:0,addedSeconds:0,totalScores:0,gameStartTimeout:3,gameTimeLeft:3e3,gameStart:!1,showConnectWallet:!0}},created(){const t=y(),s=x(),e=t+s;if(t>0&&s>0||t>0&&0===s&&!M())return this.totalScores=e,this.gameStartTimeout=0,this.gameTimeLeft=0,this.gameStart=!0,M()&&(this.showConnectWallet=!1),void setTimeout((()=>{this.$bvModal.show("game-end-modal")}),500)},methods:{startGame(){this.gameStart=!0,this.addedSeconds=0,M()?(this.gameStartTimeout=3,this.gameTimeLeft=1e4):(this.gameStartTimeout=3,this.gameTimeLeft=3e3);const t=setInterval((()=>{!this.gameStart||this.gameStartTimeout<=0||(this.gameStartTimeout-=1)}),1e3),s=setInterval((()=>{!this.gameStart||this.gameTimeLeft<=0||this.gameStartTimeout>0||(this.gameTimeLeft-=10,this.gameTimeLeft<=0&&(this.onGameEnd(),clearInterval(t),clearInterval(s)))}),10)},addSeconds(){!this.gameStart||this.gameTimeLeft<=0||this.gameStartTimeout>0||this.addedSeconds++},onGameEnd(){M()?b(this.addedSeconds):w(this.addedSeconds);const t=y(),s=x();this.totalScores=t+s,M()&&(this.showConnectWallet=!1),this.$bvModal.show("game-end-modal")},async connectWalletNow(){const t=await j();let s=null;t&&t.length>0&&(s=t[0]),s&&(T(s),this.$bvModal.hide("game-end-modal"),this.startGame())}},computed:{constants(){const t=60,s=60*t,e=24*s,a=30*e,n=12*a;return{minSeconds:t,hourSeconds:s,daySeconds:e,monthSeconds:a,yearSeconds:n}},year(){return Math.floor(this.totalSeconds/this.constants.yearSeconds)},month(){return Math.floor((this.totalSeconds-this.year*this.constants.yearSeconds)/this.constants.monthSeconds)},day(){return Math.floor((this.totalSeconds-this.year*this.constants.yearSeconds-this.month*this.constants.monthSeconds)/this.constants.daySeconds)},hour(){return Math.floor((this.totalSeconds-this.year*this.constants.yearSeconds-this.month*this.constants.monthSeconds-this.day*this.constants.daySeconds)/this.constants.hourSeconds)},minute(){return Math.floor((this.totalSeconds-this.year*this.constants.yearSeconds-this.month*this.constants.monthSeconds-this.day*this.constants.daySeconds-this.hour*this.constants.hourSeconds)/this.constants.minSeconds)},second(){return this.totalSeconds-this.year*this.constants.yearSeconds-this.month*this.constants.monthSeconds-this.day*this.constants.daySeconds-this.hour*this.constants.hourSeconds-this.minute*this.constants.minSeconds},percentage(){const t=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return this.totalScores<=10?t.format(10+20*Math.random()):this.totalScores>10&&this.totalScores<=30?t.format(30+20*Math.random()):this.totalScores>30&&this.totalScores<=60?t.format(50+20*Math.random()):this.totalScores>60&&this.totalScores<=80?t.format(70+20*Math.random()):this.totalScores>80&&this.totalScores<=90?t.format(90+5*Math.random()):this.totalScores>90&&this.totalScores<=100?t.format(95+4*Math.random()):this.totalScores>100?t.format(+Math.random()+99):0},gameButtonDisabled(){return!this.gameStart||this.gameTimeLeft<=0||this.gameStartTimeout>0},gameButtonText(){return this.gameStartTimeout>0?`倒计时 ${this.gameStartTimeout} 秒后开始`:"+1s!"}}},F=Z,$=(0,i.Z)(F,p,C,!1,null,"46dca77c",null),D=$.exports;a["default"].use(u.ZP);const E=[{path:"/",name:"SplashView",component:_},{path:"/game",name:"GameView",component:D}],V=new u.ZP({mode:"history",base:"./",routes:E});var W=V,B=e(63822);a["default"].use(B.ZP);const A=new B.ZP.Store({state:{account:null},mutations:{}});var R=A;a["default"].use(h.XG7),a["default"].use(d.A7),a["default"].config.productionTip=!1,new a["default"]({render:t=>t(l),router:W,store:R}).$mount("#app")},95030:function(t,s,e){"use strict";t.exports=e.p+"img/glass.964532c5.png"},8412:function(t,s,e){"use strict";t.exports=e.p+"img/photo.1dcb7bc5.png"},18976:function(t,s,e){"use strict";t.exports=e.p+"img/qrcode.1c913e18.png"},88677:function(){},62808:function(){},36563:function(){},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){},55896:function(){},87500:function(){}},s={};function e(a){var n=s[a];if(void 0!==n)return n.exports;var o=s[a]={id:a,loaded:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}e.m=t,function(){e.amdO={}}(),function(){var t=[];e.O=function(s,a,n,o){if(!a){var i=1/0;for(h=0;h<t.length;h++){a=t[h][0],n=t[h][1],o=t[h][2];for(var c=!0,r=0;r<a.length;r++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](a[r])}))?a.splice(r--,1):(c=!1,o<i&&(i=o));if(c){t.splice(h--,1);var l=n();void 0!==l&&(s=l)}}return s}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[a,n,o]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var n,o,i=a[0],c=a[1],r=a[2],l=0;if(i.some((function(s){return 0!==t[s]}))){for(n in c)e.o(c,n)&&(e.m[n]=c[n]);if(r)var h=r(e)}for(s&&s(a);l<i.length;l++)o=i[l],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(h)},a=self["webpackChunkelder"]=self["webpackChunkelder"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(93976)}));a=e.O(a)})();
//# sourceMappingURL=app.c94479a5.js.map
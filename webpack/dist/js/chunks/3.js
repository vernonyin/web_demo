webpackJsonp([3,6],{86:function(e,t,r){var n,s;r(87),n=r(88),s=r(92),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},87:function(e,t,r){t=e.exports=r(4)(),t.push([e.id,"",""])},88:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(89),u=n(s);t["default"]={route:{data:function(e){var t=e.to;e.next;console.log(t);var r=[],n="";if(1==t.query.center&&(n="center=1",r.push({text:"中心",link:"/results/report/center"})),t.query.dn&&t.query.did||1==t.query.dep){var s="/results/report/department";t.query.did&&t.query.dn&&(s=s+"?"+n+"&dn="+t.query.dn+"&did="+t.query.did),r.push({text:t.query.dn||"部门",link:s})}if(t.query.tid&&t.query.tn||1==t.query.team){var u="/results/report/team";t.query.tid&&t.query.tn&&(u=u+"?"+n+"&tid="+t.query.tid+"&tn="+t.query.tn),r.push({text:t.query.tn||"团队",link:u})}if(t.query.pid&&t.query.pn&&(n=n+"&pn="+t.query.pn+"&pid="+t.query.pid,r.push({text:t.query.pn,link:"/results/report/personal?"+n})),0==r.length)switch(t.name){case"report-center":r.push({text:"中心",link:"/results/report/center"});break;case"report-department":r.push({text:"部门",link:"/results/report/department"});break;case"report-team":r.push({text:"团队",link:"/results/report/team"});break;case"report-personal":r.push({text:"个人",link:"/results/report/personal"})}this.crumbs=r}},data:function(){return{crumbs:[]}},components:{crumb:u["default"]},methods:{}}},89:function(e,t,r){var n,s;n=r(90),s=r(91),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},90:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{items:{type:Array,required:!0}},data:function(){return{}}}},91:function(e,t){e.exports=' <ul class=crumbs> <li v-for="(index, item) in items"> <span class="arrow-min right" v-if="index > 0"></span> <a v-if="index < items.length - 1" href=# v-link="{path: item.link}">{{item.text}}</a> <span v-if="index === items.length - 1">{{item.text}}</span> </li> </ul> '},92:function(e,t){e.exports=' <div class="content--wrap content--results"> <div class=crumb-container> <crumb :items=crumbs></crumb> </div> <router-view transition-mode=out-in></router-view> </div> '}});
//# sourceMappingURL=3.js.map
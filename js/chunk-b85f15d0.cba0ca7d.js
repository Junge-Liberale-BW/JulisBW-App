(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b85f15d0"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},3210:function(t,e,a){"use strict";var r=a("f06b"),s=a.n(r);s.a},"6d94":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("div",{staticClass:"text-page"},[a("h1",{staticClass:"heading-cyan"},[t._v(" SUCHE: ")]),a("div",{staticClass:"search-wrapper center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search",attrs:{type:"text",placeholder:"Suche nach Abkürzung..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),a("div",{staticClass:"list-wrapper"},[a("table",{staticClass:"list-table"},t._l(t.filteredList,(function(e,r){return a("div",{key:r},[""==t.search&&(0==r||r>0&&e.abbr.toUpperCase()[0]!==t.filteredList[r-1].abbr.toUpperCase()[0])?a("tr",{staticClass:"text-magenta letter"},[a("td",[t._v(t._s(e.abbr.toUpperCase()[0]))])]):t._e(),a("tr",[a("td",{staticClass:"abbr"},[t._v(" "+t._s(e.abbr)+" ")]),a("td",{staticClass:"explanation"},[t._v(" "+t._s(e.explanation)+" ")])])])})),0)])])],1)},s=[],n=(a("4de4"),a("caad"),a("ac1f"),a("2532"),a("841c"),a("0418")),i={name:"KRzelABC",components:{Header:n["a"]},data:function(){return{search:""}},computed:{kuerzelList:function(){return this.$store.getters.kuerzel.kuerzel},filteredList:function(){var t=this,e=this.kuerzelList.filter((function(e){return(e.abbr+" "+e.explanation).toLowerCase().includes(t.search.toLowerCase())}));return e.sort((function(t,e){return t.abbr.toLowerCase()>e.abbr.toLowerCase()?1:-1})),e}}},c=i,o=(a("3210"),a("2877")),u=Object(o["a"])(c,r,s,!1,null,"86253eda",null);e["default"]=u.exports},"841c":function(t,e,a){"use strict";var r=a("d784"),s=a("825a"),n=a("1d80"),i=a("129f"),c=a("14c3");r("search",1,(function(t,e,a){return[function(e){var a=n(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,a):new RegExp(e)[t](String(a))},function(t){var r=a(e,t,this);if(r.done)return r.value;var n=s(t),o=String(this),u=n.lastIndex;i(u,0)||(n.lastIndex=0);var l=c(n,o);return i(n.lastIndex,u)||(n.lastIndex=u),null===l?-1:l.index}]}))},f06b:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b85f15d0.cba0ca7d.js.map
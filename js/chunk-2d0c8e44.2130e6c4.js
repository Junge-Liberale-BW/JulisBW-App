(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8e44"],{"578d":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Header"),s("div",{staticClass:"kachel-wrapper"},e._l(e.themen_liste,(function(t,n){return s("div",{key:n,staticClass:"wide-kachel-wrapper"},[s("div",{staticClass:"wide-kachel",on:{click:function(t){return e.wechsel_seite(n)}}},[s("i",{class:"las la-4x la-"+t.icon}),s("br"),e._v(" "+e._s(t.title)+" ")])])})),0)],1)},i=[],c=s("0418"),a={name:"UnsereThemen",components:{Header:c["a"]},computed:{themen_liste:function(){return this.$store.getters.unsereThemen}},methods:{wechsel_seite:function(e){this.$store.dispatch("wechsel_seite",{name:"Themen-Ansicht",params:{id:e}})}}},r=a,l=s("2877"),h=Object(l["a"])(r,n,i,!1,null,"12106e9e",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0c8e44.2130e6c4.js.map
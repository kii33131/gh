webpackJsonp([12],{JSFw:function(t,e){},j0xF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("LvZm"),o=(i.a,{components:{Look:i.a},data:function(){return{title:"劳模工匠风采",list:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$axios(this.$api.getList,{category:"劳动竞赛信息发布",channel:"劳模工匠风采"},"post").then(function(e){console.log(e,".then--------"),0==e.error_code&&(t.list=e.data.data)}).catch(function(t){console.log(t,".catch--------")})}}}),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("look",{attrs:{list:this.list,title:this.title}})],1)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("JSFw")},null,null);e.default=s.exports}});
//# sourceMappingURL=12.fa10bf73ab51e31f9775.js.map
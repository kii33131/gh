webpackJsonp([51],{BCBr:function(t,e){},rS3j:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("LvZm"),o=(n("mtWM"),i.a,{components:{Look:i.a},data:function(){return{title:"工会组件指南",list:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$axios(this.$api.getList,{category:"入会申请信息发布",channel:"工会组件指南"},"post").then(function(e){console.log(e,".then--------"),0==e.error_code&&(t.list=e.data.data)}).catch(function(t){console.log(t,".catch--------")})}}}),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("look",{attrs:{list:this.list,title:this.title}})],1)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("BCBr")},null,null);e.default=s.exports}});
//# sourceMappingURL=51.42207d23d56b3839634d.js.map
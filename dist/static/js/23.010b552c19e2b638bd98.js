webpackJsonp([23],{hlav:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("LvZm"),o=(i.a,{components:{Look:i.a},data:function(){return{title:"创新成果展示",list:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$axios(this.$api.getList,{category:"劳动竞赛信息发布",channel:"创新成果展示"},"post").then(function(e){console.log(e,".then--------"),0==e.error_code&&(t.list=e.data.data)}).catch(function(t){console.log(t,".catch--------")})}}}),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("look",{attrs:{list:this.list,title:this.title}})],1)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("zNEU")},null,null);e.default=s.exports},zNEU:function(t,e){}});
//# sourceMappingURL=23.010b552c19e2b638bd98.js.map
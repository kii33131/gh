webpackJsonp([34],{"+jcA":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("LvZm"),s=(n.a,{components:{Look:n.a},data:function(){return{title:"关爱行动",list:[{pic:"/static/imgs/index/search.png",title:"关爱行动关爱行动关爱行动关爱行动关爱行动关爱行动",publish:"管理员发布",lookNum:"7780"},{pic:"/static/imgs/index/search.png",title:"关爱行动关爱行动关爱行动关爱行动关爱行动关爱行动",publish:"管理员发布",lookNum:"7780"}]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$axios(this.$api.getList,{category:"女工天地信息发布",channel:"关爱行动"},"post").then(function(e){console.log(e,".then--------"),0==e.error_code&&(t.list=e.data.data)}).catch(function(t){console.log(t,".catch--------")})}}}),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("look",{attrs:{list:this.list,title:this.title}})],1)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(t){i("SafX")},null,null);e.default=o.exports},SafX:function(t,e){}});
//# sourceMappingURL=34.c548feab75d2c53f5fbd.js.map
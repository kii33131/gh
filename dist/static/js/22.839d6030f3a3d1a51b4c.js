webpackJsonp([22],{S5gx:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("LvZm"),s=(n.a,{components:{Look:n.a},data:function(){return{title:"财务制度",list:[{pic:"/static/imgs/index/search.png",title:"财务制度财务制度财务制度",publish:"管理员发布",lookNum:"7780"},{pic:"/static/imgs/index/search.png",title:"财务制度财务制度财务制度财务制度",publish:"管理员发布",lookNum:"7780"}]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$axios(this.$api.getList,{category:"财务经审信息发布",channel:"财务制度"},"post").then(function(e){console.log(e,".then--------"),0==e.error_code&&(t.list=e.data.data)}).catch(function(t){console.log(t,".catch--------")})}}}),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("look",{attrs:{list:this.list,title:this.title}})],1)},staticRenderFns:[]};var a=i("VU/8")(s,o,!1,function(t){i("URUv")},null,null);e.default=a.exports},URUv:function(t,e){}});
//# sourceMappingURL=22.839d6030f3a3d1a51b4c.js.map
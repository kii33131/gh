webpackJsonp([15],{"4VgH":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{name:"",phone:"",email:"",content:""}},methods:{submit:function(){var t=this;if(""!=this.name)if(""!=this.phone)if(""!=this.email)if(""!=this.content)if(this.$refs.phone.valid)if(this.$refs.email.valid){var e={name:this.name,phone:this.phone,email:this.email,note:this.content};this.$axios(this.$api.addSuggest,e,"post").then(function(e){0==e.error_code&&(t.$vux.toast.text("提交成功"),t.$router.go(-1),t.list=e.data)}).catch(function(t){console.log(t,".catch--------")})}else this.$vux.toast.text("邮箱格式错误");else this.$vux.toast.text("手机号码格式错误");else this.$vux.toast.text("请输入内容");else this.$vux.toast.text("请输入邮箱地址");else this.$vux.toast.text("请输入电话号码");else this.$vux.toast.text("请输入姓名")}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"submit-wrapper"},[i("group",[i("x-input",{attrs:{title:"姓名",placeholder:"请输入姓名","placeholder-align":"right","text-align":"right"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),i("x-input",{ref:"phone",attrs:{"is-type":"china-mobile",title:"联系电话",placeholder:"请输入手机号码","placeholder-align":"right","text-align":"right"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),i("x-input",{ref:"email",attrs:{"is-type":"email",title:"联系邮箱",placeholder:"请输入邮箱地址","placeholder-align":"right","text-align":"right"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),i("x-textarea",{attrs:{title:"内容",placeholder:"请输入内容",rows:5},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),i("button",{staticClass:"submit-btn",on:{click:t.submit}},[t._v("提交")])],1)},staticRenderFns:[]};var l=i("VU/8")(a,n,!1,function(t){i("GUYN")},null,null);e.default=l.exports},GUYN:function(t,e){}});
//# sourceMappingURL=15.639e5c7d75331e8c1ad3.js.map
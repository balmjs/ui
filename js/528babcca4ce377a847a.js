webpackJsonp([8],{511:function(t,n,e){var a=e(0)(e(622),e(656),null,null,null);t.exports=a.exports},542:function(t,n,e){"use strict";n.a={data:function(){return{menu1:[{icon:"inbox",name:"Inbox"},{icon:"star",name:"Star"},{icon:"send",name:"Sent Mail"},{icon:"drafts",name:"Drafts"}],menu2:[{icon:"email",name:"All Mail"},{icon:"delete",name:"Trash"},{icon:"report",name:"Spam"}],open:!1}},methods:{openMenu:function(){this.open=!0},onOpen:function(t){console.log("open",t)},onClose:function(t){this.open=!1,console.log("close",t)}}}},622:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(542);n.default={mixins:[a.a]}},656:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo--drawer demo--permanent-drawer-above-toolbar"},[e("ui-permanent-drawer",{attrs:{hasSpacer:""}},[e("ui-list-group",[e("ui-list-nav",t._l(t.menu1,function(n,a){return e("ui-item-link",{key:a},[e("ui-item-start",{attrs:{icon:n.icon}}),t._v("\n          "+t._s(n.name)+"\n        ")],1)})),t._v(" "),e("ui-list-divider"),t._v(" "),e("ui-list-nav",t._l(t.menu2,function(n,a){return e("ui-item-link",{key:a},[e("ui-item-start",{attrs:{icon:n.icon}}),t._v("\n          "+t._s(n.name)+"\n        ")],1)}))],1)],1),t._v(" "),e("div",{staticClass:"demo-content"},[e("ui-toolbar",{class:t.zSpace(4)},[e("ui-toolbar-row",[e("ui-toolbar-section",{attrs:{align:"start"}},[e("span",{staticClass:"catalog-back"},[e("ui-toolbar-anchor",{attrs:{type:"menu",href:"javascript:void(0)"},nativeOn:{click:function(n){!function(){t.$router.back()}()}}},[t._v("")])],1),t._v(" "),e("ui-toolbar-title",{staticClass:"catalog-title"},[t._v("Permanent Drawer Above Toolbar")])],1)],1)],1),t._v(" "),e("main",{staticClass:"demo-main"},[e("h1",{class:t.typography("display1")},[t._v("Permanent Drawer")]),t._v(" "),e("p",{class:t.typography("body1")},[t._v("It sits to the left of this content.")])])],1)],1)},staticRenderFns:[]}}});
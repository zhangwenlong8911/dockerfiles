(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7361"],{EHAl:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return u}),n.d(t,"a",function(){return p});var a=n("t3Un"),s="/pulsar-manager/admin/v2",r="/admin/v2";function i(){return Object(a.a)({url:s+"/tenants",method:"get"})}function c(e){return Object(a.a)({url:r+"/tenants/"+e,method:"get"})}function o(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/tenants/"+e,method:"put",data:t})}function u(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/tenants/"+e,method:"post",data:t})}function p(e){return Object(a.a)({url:r+"/tenants/"+e,method:"delete"})}},F2Sz:function(e,t,n){"use strict";n.d(t,"f",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"d",function(){return o}),n.d(t,"l",function(){return u}),n.d(t,"c",function(){return p}),n.d(t,"h",function(){return l}),n.d(t,"k",function(){return m}),n.d(t,"m",function(){return d}),n.d(t,"p",function(){return f}),n.d(t,"g",function(){return h}),n.d(t,"o",function(){return b}),n.d(t,"i",function(){return g}),n.d(t,"A",function(){return j}),n.d(t,"x",function(){return N}),n.d(t,"n",function(){return v}),n.d(t,"r",function(){return y}),n.d(t,"j",function(){return O}),n.d(t,"B",function(){return T}),n.d(t,"K",function(){return C}),n.d(t,"I",function(){return _}),n.d(t,"J",function(){return k}),n.d(t,"H",function(){return L}),n.d(t,"s",function(){return $}),n.d(t,"E",function(){return x}),n.d(t,"G",function(){return F}),n.d(t,"a",function(){return S}),n.d(t,"b",function(){return R}),n.d(t,"t",function(){return M}),n.d(t,"F",function(){return P}),n.d(t,"w",function(){return V}),n.d(t,"v",function(){return E}),n.d(t,"u",function(){return z}),n.d(t,"q",function(){return A}),n.d(t,"z",function(){return U}),n.d(t,"y",function(){return q}),n.d(t,"C",function(){return D}),n.d(t,"D",function(){return I});var a=n("t3Un"),s="/pulsar-manager/admin/v2",r="/admin/v2";function i(e,t){return Object(a.a)({url:s+"/namespaces/"+e,method:"get",params:{query:t}})}function c(e,t){return Object(a.a)({url:s+"/namespaces/"+e+"/"+t+"/stats",method:"get"})}function o(e){return Object(a.a)({url:r+"/namespaces/"+e,method:"get"})}function u(e,t,n){return Object(a.a)({url:r+"/namespaces/"+e+"/"+t,method:"put",data:n})}function p(e){return Object(a.a)({url:r+"/namespaces/"+e,method:"delete"})}function l(e){return Object(a.a)({url:r+"/namespaces/"+e+"/permissions",method:"get"})}function m(e,t,n){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/permissions/"+t,method:"post",data:n})}function d(e,t){return Object(a.a)({url:r+"/namespaces/"+e+"/permissions/"+t,method:"delete"})}function f(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/replication",method:"post",data:t})}function h(e,t){return Object(a.a)({url:r+"/namespaces/"+e+"/"+t+"/replication",method:"get"})}function b(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/backlogQuota",method:"post",data:t})}function g(e){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/persistence",method:"get"})}function j(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/persistence",method:"post",data:t})}function N(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/messageTTL",method:"post",data:t})}function v(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/antiAffinity",method:"post",data:t})}function y(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/deduplication",method:"post",data:t})}function O(e){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/retention",method:"get"})}function T(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/retention",method:"post",data:t})}function C(e,t,n){return Object(a.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:r+"/namespaces/"+t+"/unload",method:"put",data:n})}function _(e,t,n){return w("",e,t,n)}function k(e,t,n){return w(e,"",t,n)}function w(e,t,n,s){return Object(a.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e,"x-pulsar-broker":t},url:r+"/namespaces/"+n+"/"+s+"/unload",method:"put"})}function L(e,t,n,s){return Object(a.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:r+"/namespaces/"+t+"/"+n+"/split?unload="+s,method:"put"})}function $(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/dispatchRate",method:"post",data:t})}function x(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/subscribeRate",method:"post",data:t})}function F(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/subscriptionDispatchRate",method:"post",data:t})}function S(e,t){return Object(a.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:r+"/namespaces/"+t+"/clearBacklog",method:"post"})}function R(e,t,n){return Object(a.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:r+"/namespaces/"+t+"/"+n+"/clearBacklog",method:"post"})}function M(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/encryptionRequired",method:"post",data:t})}function P(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/subscriptionAuthMode",method:"post",data:t})}function V(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/maxProducersPerTopic",method:"post",data:t})}function E(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/maxConsumersPerTopic",method:"post",data:t})}function z(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/maxConsumersPerSubscription",method:"post",data:t})}function A(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/compactionThreshold",method:"put",data:t})}function U(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/offloadThreshold",method:"put",data:t})}function q(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/offloadDeletionLagMs",method:"put",data:t})}function D(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/schemaAutoUpdateCompatibilityStrategy",method:"put",data:t})}function I(e,t){return Object(a.a)({headers:{"Content-Type":"application/json"},url:r+"/namespaces/"+e+"/schemaValidationEnforced",method:"post",data:t})}},MPvg:function(e,t,n){"use strict";n.r(t);var a=n("P2sY"),s=n.n(a),r=n("EHAl"),i=n("IcTm"),c=n("F2Sz"),o=n("Yfch"),u={tenant:Object(i.a)()},p={name:"TenantInfo",data:function(){return{postForm:s()({},u),adminRoles:"",tenantsListOptions:[],listQuery:{namespace:"",page:1,limit:20},activeName:"namespaces",listLoading:!1,tableKey:0,total:0,listNamespaces:[],temp:{tenant:"",namespace:"",limit:""},dialogFormVisible:!1,dialogStatus:"",rules:{namespace:[{required:!0,message:this.$i18n.t("namespace.namespaceNameIsRequired"),trigger:"blur"}]},currentTabName:"",textMap:{createNamespace:this.$i18n.t("namespace.newNamespace"),deleteNamespace:this.$i18n.t("namespace.deleteNamespace")},tempNamespacesList:[],searchNamespace:"",searchList:[]}},created:function(){this.getRemoteTenantsList(),this.getNamespacesList()},methods:{getRemoteTenantsList:function(){var e=this;Object(r.b)().then(function(t){if(t.data)for(var n=0;n<t.data.total;n++)e.tenantsListOptions.push(t.data.data[n].tenant)})},getNamespacesList:function(){var e=this;Object(c.f)(this.postForm.tenant,this.listQuery).then(function(t){if(t.data.data){e.listNamespaces=[];for(var n=0;n<t.data.data.length;n++)e.listNamespaces.push({tenant:e.postForm.tenant,namespace:t.data.data[n].namespace,topics:t.data.data[n].topics});e.total=e.listNamespaces.length,setTimeout(function(){e.listLoading=!1},1500)}})},handleFilterNamespace:function(){if(this.tempNamespacesList.length<=0)for(var e=0;e<this.listNamespaces.length;e++)this.tempNamespacesList.push(this.listNamespaces[e]);if(Object(o.a)(this.searchNamespace))this.listNamespaces=this.tempNamespacesList;else{this.searchList=[];for(var t=0;t<this.listNamespaces.length;t++)-1!==this.listNamespaces[t].namespace.indexOf(this.searchNamespace)&&this.searchList.push(this.listNamespaces[t]);this.listNamespaces=this.searchList}},handleCreateNamespace:function(){this.temp.namespace="",this.dialogStatus="createNamespace",this.dialogFormVisible=!0},createNamespace:function(){var e=this;Object(c.l)(this.postForm.tenant,this.temp.namespace,this.temp).then(function(){e.listNamespaces=[],e.getNamespacesList(),e.dialogFormVisible=!1,e.$notify({title:"success",message:e.$i18n.t("namespace.createNsSuccessNotification"),type:"success",duration:2e3})})},handleOptions:function(){var e=this;this.$refs.temp.validate(function(t){if(t)switch(e.dialogStatus){case"createNamespace":e.createNamespace();break;case"deleteNamespace":e.deleteNamespace()}})},handleDeleteNamespace:function(e){this.dialogStatus="deleteNamespace",this.dialogFormVisible=!0,this.temp.tenant=e.tenant,this.temp.namespace=e.namespace},deleteNamespace:function(){var e=this,t=this.temp.tenant+"/"+this.temp.namespace;Object(c.c)(t).then(function(t){e.$notify({title:"success",message:e.$i18n.t("namespace.deleteNsSuccessNotification"),type:"success",duration:2e3}),e.dialogFormVisible=!1,e.listNamespaces=[],e.getNamespacesList()})}}},l=(n("zRf0"),n("KHd+")),m=Object(l.a)(p,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"createPost-container"},[n("el-form",{staticClass:"form-container",attrs:{inline:!0,model:e.postForm}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Tenant"}},[n("el-select",{attrs:{placeholder:e.$t("tenant.selectTenantMessage")},on:{change:function(t){return e.getNamespacesList(e.postForm.tenant)}},model:{value:e.postForm.tenant,callback:function(t){e.$set(e.postForm,"tenant",t)},expression:"postForm.tenant"}},e._l(e.tenantsListOptions,function(e,t){return n("el-option",{key:e+t,attrs:{label:e,value:e}})}),1)],1)],1)],1),e._v(" "),n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:e.$t("tabs.namespace"),name:"namespaces"}},[n("div",{staticClass:"filter-container"},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:e.$t("namespace.searchNamespaces")},nativeOn:{keyup:function(t){return"keyCode"in t&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilterNamespace(t)}},model:{value:e.searchNamespace,callback:function(t){e.searchNamespace=t},expression:"searchNamespace"}}),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilterNamespace}}),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreateNamespace}},[e._v(e._s(e.$t("namespace.newNamespace")))])],1),e._v(" "),n("el-row",{attrs:{gutter:24}},[n("el-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:24},xl:{span:24}}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.listNamespaces,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("namespace.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{staticClass:"link-type",attrs:{to:"/management/namespaces/"+t.row.tenant+"/"+t.row.namespace+"/namespace?tab=overview"}},[n("span",[e._v(e._s(t.row.namespace))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("topic.topicNumber"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{staticClass:"link-type",attrs:{to:"/management/namespaces/"+t.row.tenant+"/"+t.row.namespace+"/namespace?tab=topics"}},[n("span",[e._v(e._s(t.row.topics))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:"/management/namespaces/"+t.row.tenant+"/"+t.row.namespace+"/namespace"}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[e._v(e._s(e.$t("table.edit")))])],1),e._v(" "),"deleted"!=t.row.status?n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDeleteNamespace(t.row)}}},[e._v(e._s(e.$t("table.delete")))]):e._e()]}}])})],1)],1)],1)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"temp",attrs:{model:e.temp,rules:e.rules,"label-position":"top"}},["createNamespace"===e.dialogStatus?n("el-form-item",{attrs:{label:e.$t("table.namespace"),prop:"namespace"}},[n("el-input",{attrs:{placeholder:e.$t("namespace.inputNamespaceMessage")},model:{value:e.temp.namespace,callback:function(t){e.$set(e.temp,"namespace",t)},expression:"temp.namespace"}})],1):e._e(),e._v(" "),"deleteNamespace"===e.dialogStatus?n("el-form-item",[n("h4",[e._v(e._s(e.$t("namespace.deleteNamespaceMessage")))])]):e._e(),e._v(" "),"deleteTenant"===e.dialogStatus?n("el-form-item",[n("h4",[e._v(e._s(e.$t("tenant.deleteTenantMessage")))])]):e._e(),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleOptions()}}},[e._v(e._s(e.$t("table.confirm")))]),e._v(" "),n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))])],1)],1)],1)],1)},[],!1,null,"67090981",null);m.options.__file="tenant.vue";t.default=m.exports},Yfch:function(e,t,n){"use strict";function a(e){return void 0===e||null===e||""===e}function s(e,t){return function(n,a,s){if(a&&0!==a.length||!t)try{if(new URL(a).protocol!==e)return void s(new Error("Please input an `"+e+"` service URL"));s()}catch(e){s(new Error("Please input a valid service URL"))}else s()}}function r(e){var t=e.charAt(e.length-1),n=e.substring(0,e.length-1);switch(t){case"k":case"K":return 1024*Number(n);case"m":case"M":return 1024*Number(n)*1024;case"g":case"G":return 1024*Number(n)*1024*1024;case"t":case"T":return 1024*Number(n)*1024*1024*1024;default:return Number(e)}}n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return r})},"sM+6":function(e,t,n){},zRf0:function(e,t,n){"use strict";var a=n("sM+6");n.n(a).a}}]);
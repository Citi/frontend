(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d5551a4"],{"192b":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-group",{attrs:{id:e.id,label:e.label,"label-for":e.id+"-input","label-class":e.labelClasses}},[a("b-input-group",{class:e.inputGroupSize},[e.icon?a("b-input-group-prepend",[a("b-input-group-text",[a("i",{class:e.icon})])],1):e._e(),a("b-form-input",e._g({class:e.inputClasses,attrs:{id:e.id+"-input",type:e.type,placeholder:e.label,state:e.feedbackState(),autocomplete:e.autocomplete,autofocus:e.isFocused,required:e.isRequired,readonly:e.readonly,disabled:e.isDisabled,trim:""},on:{blur:function(t){e.hadFocus=!0}},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},e.inputListeners)),e.tooltip?a("b-input-group-append",[a("b-input-group-text",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e.tooltip}},[a("i",{staticClass:"cui-info font-lg"})])],1):e._e()],1),"true"===this.feedback?a("b-form-invalid-feedback",{attrs:{state:e.feedbackState()}},[e._v("\n    "+e._s(e.feedbackText)+"\n  ")]):e._e()],1)},i=[],r=a("900c"),n={props:{id:String,label:String,value:String,inputGroupSize:String,icon:String,type:String,autocomplete:String,autofocus:String,tooltip:String,feedbackText:String,feedback:String,lazy:String,required:String,readonly:Boolean,disabled:String,state:{default:void 0,type:Boolean}},data:function(){return{isFocused:!1,isRequired:!1,isDisabled:!1,hadFocus:!1}},beforeMount:function(){this.isFocused=r["a"].toBoolean(this.autofocus),this.isRequired=r["a"].toBoolean(this.required),this.isDisabled=r["a"].toBoolean(this.disabled)},computed:{innerValue:{get:function(){return this.value&&this.value.length,this.value},set:function(e){return e}},inputListeners:function(){var e=this;return Object.assign({},this.$listeners,{input:function(t){e.$emit("input",t)}})},inputClasses:function(){return this.isRequired?"required":null},labelClasses:function(){return this.isRequired?"required":null}},methods:{feedbackState:function(){if(!this.isDisabled||this.isRequired)return void 0!==this.state?this.state:r["a"].toBoolean(this.lazy)&&r["a"].toBoolean(this.required)?!!(this.value&&this.value.length>0)||!this.hadFocus&&void 0:!!(this.value&&this.value.length>0)||void 0}}},s=n,l=a("2877"),u=Object(l["a"])(s,o,i,!1,null,null,null);t["a"]=u.exports},"41c0":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-group",{attrs:{id:e.id,label:e.label,"label-for":e.id+"-input","label-class":e.labelClasses}},[a("b-input-group",{class:e.inputGroupSize},[e.icon?a("b-input-group-prepend",[a("b-input-group-text",[a("i",{class:e.icon})])],1):e._e(),a("b-form-select",e._g({class:e.inputClasses,attrs:{id:e.id+"-input",options:e.options,autofocus:e.isFocused,disabled:e.disabled,required:e.isRequired,state:e.feedbackState()},on:{blur:function(t){e.hadFocus=!0}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e.inputListeners)),e.tooltip?a("b-input-group-append",[a("b-input-group-text",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e.tooltip}},[a("i",{staticClass:"cui-info font-lg"})])],1):e._e()],1),"true"===this.feedback?a("b-form-invalid-feedback",{attrs:{state:e.feedbackState()}},[e._v("\n    "+e._s(e.feedbackText)+"\n  ")]):e._e()],1)},i=[],r=a("900c"),n={props:{id:String,label:String,value:String,options:Array,inputGroupSize:String,icon:String,type:String,autocomplete:String,autofocus:String,tooltip:String,feedbackText:String,feedback:String,lazy:String,required:String,disabled:Boolean,state:{default:void 0,type:Boolean}},data:function(){return{isFocused:!1,isRequired:!1,hadFocus:!1}},beforeMount:function(){this.isFocused=r["a"].toBoolean(this.autofocus),this.isRequired=r["a"].toBoolean(this.required)},computed:{inputListeners:function(){var e=this;return Object.assign({},this.$listeners,{input:function(t){e.$emit("input",t)}})},inputClasses:function(){return this.isRequired?"required":null},labelClasses:function(){return this.isRequired?"required":null}},methods:{feedbackState:function(){return void 0!==this.state?this.state:r["a"].toBoolean(this.lazy)&&r["a"].toBoolean(this.required)?!!(this.value&&this.value.length>0)||!this.hadFocus&&void 0:!!(this.value&&this.value.length>0)||void 0}}},s=n,l=a("2877"),u=Object(l["a"])(s,o,i,!1,null,null,null);t["a"]=u.exports},7395:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return 0===e.vulnerabilities?a("span",{staticClass:"progress"},[a("b-progress",{staticClass:"table-progress",attrs:{max:"0","show-value":""}},[a("b-progress-bar",{staticClass:"table-progress",attrs:{value:"0"}})],1)],1):a("span",{staticClass:"progress"},[a("b-progress",{staticClass:"table-progress",attrs:{max:e.vulnerabilities,"show-value":""}},[a("b-progress-bar",{staticClass:"severity-critical-bg",attrs:{value:e.critical}}),a("b-progress-bar",{staticClass:"severity-high-bg",attrs:{value:e.high}}),a("b-progress-bar",{staticClass:"severity-medium-bg",attrs:{value:e.medium}}),a("b-progress-bar",{staticClass:"severity-low-bg",attrs:{value:e.low}}),a("b-progress-bar",{staticClass:"severity-unassigned-bg",attrs:{value:e.unassigned}})],1)],1)},i=[],r={props:{vulnerabilities:Number,critical:Number,high:Number,medium:Number,low:Number,unassigned:Number}},n=r,s=a("2877"),l=Object(s["a"])(n,o,i,!1,null,null,null);t["a"]=l.exports},"7fe3":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"permission",rawName:"v-permission",value:"VIEW_PORTFOLIO",expression:"'VIEW_PORTFOLIO'"}],staticClass:"componentSearch animated fadeIn"},[a("portfolio-widget-row",{attrs:{fetch:!0}}),a("div",{attrs:{id:"componentSearchToolbar"}},[a("b-row",[a("b-col",{attrs:{md:"4",lg:"4"}},[a("b-input-group-form-select",{attrs:{id:"input-subject",required:"true",options:e.subjects},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}})],1),a("b-col",{attrs:{md:"7",lg:"7"}},["COORDINATES"!==e.subject?a("b-input-group-form-input",{attrs:{id:"input-value",required:"true",type:"text",lazy:"true"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.performSearch.apply(null,arguments)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):"COORDINATES"===e.subject?a("b-input-group",[a("b-form-input",{attrs:{id:"input-value-coordinates-group",placeholder:e.$t("message.group"),type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.performSearch.apply(null,arguments)}},model:{value:e.coordinatesGroup,callback:function(t){e.coordinatesGroup=t},expression:"coordinatesGroup"}}),a("b-form-input",{attrs:{id:"input-value-coordinates-name",placeholder:e.$t("message.name"),type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.performSearch.apply(null,arguments)}},model:{value:e.coordinatesName,callback:function(t){e.coordinatesName=t},expression:"coordinatesName"}}),a("b-form-input",{attrs:{id:"input-value-coordinates-version",placeholder:e.$t("message.version"),type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.performSearch.apply(null,arguments)}},model:{value:e.coordinatesVersion,callback:function(t){e.coordinatesVersion=t},expression:"coordinatesVersion"}})],1):e._e()],1),a("b-col",{attrs:{md:"1",lg:"1"}},[a("b-button",{attrs:{variant:"outline-primary"},on:{click:e.performSearch}},[e._v(e._s(e.$t("message.search")))])],1)],1)],1),a("bootstrap-table",{ref:"table",attrs:{columns:e.columns,data:e.data,options:e.options},on:{"on-pre-body":e.onPreBody}})],1)},i=[],r=a("a026"),n=a("900c"),s=a("f1fb"),l=a("31c3"),u=a("7c15"),c=a("41c0"),p=a("192b"),d=a("6c36"),h=a.n(d),m=a("7395"),b=a("8992"),f={mixins:[u["a"]],components:{cSwitch:s["o"],PortfolioWidgetRow:l["a"],BInputGroupFormSelect:c["a"],BInputGroupFormInput:p["a"]},beforeCreate:function(){this.subject=localStorage&&null!==localStorage.getItem("ComponentSearchSubject")?localStorage.getItem("ComponentSearchSubject"):"COORDINATES"},beforeMount:function(){if(this.$route.hash){var e=/#\/search\/(COORDINATES)\/group=([^\/)]*)\/name=([^\/]*)\/version=([^\/]*)/gi,t=e.exec(this.$route.hash);t?(this.subject=t[1].toUpperCase(),this.coordinatesGroup=decodeURIComponent(t[2]),this.coordinatesName=decodeURIComponent(t[3]),this.coordinatesVersion=decodeURIComponent(t[4])):(e=/#\/search\/(?!COORDINATES)([^\/]*)\/(.*)/gi,t=e.exec(this.$route.hash),t&&this.subjects.some((function(e){return e.value===t[1].toUpperCase()}))&&(this.subject=t[1].toUpperCase(),this.value=decodeURIComponent(t[2]))),this.changeSearchUrl=!1}},watch:{subject:function(){localStorage&&localStorage.setItem("ComponentSearchSubject",this.subject)}},methods:{createQueryParams:function(){if("COORDINATES"===this.subject){var e={group:n["a"].trimToNull(this.coordinatesGroup),name:n["a"].trimToNull(this.coordinatesName),version:n["a"].trimToNull(this.coordinatesVersion)},t=encodeURIComponent;return Object.keys(e).filter((function(t){return e[t]})).map((function(a){return t(a)+"="+t(e[a])})).join("&")}if("PACKAGE_URL"===this.subject){var a=n["a"].trimToNull(this.value);return null!=a?"purl="+encodeURIComponent(a):""}if("CPE"===this.subject){var o=n["a"].trimToNull(this.value);return null!=o?"cpe="+encodeURIComponent(o):""}if("SWID_TAGID"===this.subject){var i=n["a"].trimToNull(this.value);return null!=i?"swidTagId="+encodeURIComponent(i):""}},performSearch:function(){if("HASH"===this.subject){var e=encodeURIComponent(n["a"].trimToNull(this.value));this.options.url="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_COMPONENT,"/hash/").concat(e),this.$refs.table.refresh({silent:!0})}else{var t=this.createQueryParams();this.options.url="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_COMPONENT,"/identity?").concat(t),this.$refs.table.refresh({silent:!0})}if(this.changeSearchUrl)if("COORDINATES"===this.subject){var a=this.coordinatesGroup?encodeURIComponent(this.coordinatesGroup):"",o=this.coordinatesName?encodeURIComponent(this.coordinatesName):"",i=this.coordinatesVersion?encodeURIComponent(this.coordinatesVersion):"";this.$router.replace({path:"components",hash:"#/search/"+this.subject+"/group="+a+"/name="+o+"/version="+i})}else{var r=this.value?encodeURIComponent(this.value):"";this.$router.replace({path:"components",hash:"#/search/"+this.subject+"/"+r})}},onPreBody:function(){Object(b["d"])(this,"ComponentSearch",this.$refs.table.columns),this.changeSearchUrl||(this.performSearch(),this.changeSearchUrl=!0)}},data:function(){return{subject:this.subject,value:null,coordinatesGroup:null,coordinatesName:null,coordinatesVersion:null,subjects:[{value:"COORDINATES",text:this.$t("message.coordinates")},{value:"PACKAGE_URL",text:this.$t("message.package_url")},{value:"CPE",text:this.$t("message.cpe_full")},{value:"SWID_TAGID",text:this.$t("message.swid_tagid")},{value:"HASH",text:this.$t("message.hashes_short_desc")}],changeSearchUrl:!1,columns:[{title:this.$t("message.component"),field:"name",sortable:!0,formatter:function(e,t,a){var o=h.a.uriInUnQuotedAttr("../components/"+t.uuid),i=h.a.uriInUnQuotedAttr("../../../projects/"+t.project.uuid+"/dependencyGraph/"+t.uuid);return t.project.directDependencies?'<a href="'.concat(i,'"<i class="fa fa-sitemap" aria-hidden="true" style="float:right; padding-top: 4px; cursor:pointer" data-toggle="tooltip" data-placement="bottom" title="Show in dependency graph"></i></a> ')+'<a href="'.concat(o,'">').concat(h.a.inHTMLData(e),"</a>"):'<a href="'.concat(o,'">').concat(h.a.inHTMLData(e),"</a>")}},{title:this.$t("message.version"),field:"version",sortable:!0,formatter:function(e,t,a){return h.a.inHTMLData(n["a"].valueWithDefault(e,""))}},{title:this.$t("message.group"),field:"group",sortable:!0,formatter:function(e,t,a){return h.a.inHTMLData(n["a"].valueWithDefault(e,""))}},{title:this.$t("message.package_url"),field:"purl",sortable:!0,formatter:function(e,t,a){return h.a.inHTMLData(n["a"].valueWithDefault(e,""))}},{title:this.$t("message.cpe"),field:"cpe",sortable:!0,formatter:function(e,t,a){return h.a.inHTMLData(n["a"].valueWithDefault(e,""))}},{title:this.$t("message.swid_tagid"),field:"swid",sortable:!0,formatter:function(e,t,a){return h.a.inHTMLData(n["a"].valueWithDefault(e,""))}},{title:this.$t("message.project_name"),field:"project.name",sortable:!1,formatter:function(e,t,a){var o=h.a.uriInUnQuotedAttr("../projects/"+t.project.uuid),i=n["a"].concatenateComponentName(null,t.project.name,t.project.version);return'<a href="'.concat(o,'">').concat(h.a.inHTMLData(i),"</a>")}},{title:this.$t("message.risk_score"),field:"lastInheritedRiskScore",sortable:!0,visible:!1,class:"tight"},{title:this.$t("message.vulnerabilities"),field:"metrics",sortable:!1,visible:!1,formatter:function(e,t,a){if("undefined"===typeof e)return"-";var o=r["default"].extend(m["a"]),i=new o({propsData:{vulnerabilities:e.vulnerabilities,critical:e.critical,high:e.high,medium:e.medium,low:e.low,unassigned:e.unassigned}});return i.$mount(),i.$el.outerHTML}}],data:[],options:{onPostBody:this.initializeTooltips,search:!1,showColumns:!0,showRefresh:!0,pagination:!0,silentSort:!1,toolbar:"#componentSearchToolbar",sidePagination:"server",queryParamsType:"pageSize",pageList:"[10, 25, 50, 100]",pageSize:localStorage&&null!==localStorage.getItem("ComponentSearchPageSize")?Number(localStorage.getItem("ComponentSearchPageSize")):10,sortName:localStorage&&null!==localStorage.getItem("ComponentSearchSortName")?localStorage.getItem("ComponentSearchSortName"):void 0,sortOrder:localStorage&&null!==localStorage.getItem("ComponentSearchSortOrder")?localStorage.getItem("ComponentSearchSortOrder"):void 0,icons:{refresh:"fa-refresh"},responseHandler:function(e,t){return e.total=t.getResponseHeader("X-Total-Count"),e},url:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_COMPONENT,"/identity"),onPageChange:function(e,t){localStorage&&localStorage.setItem("ComponentSearchPageSize",t.toString())},onColumnSwitch:function(e,t){localStorage&&localStorage.setItem("ComponentSearchShow"+n["a"].capitalize(e),t.toString())},onSort:function(e,t){localStorage&&(localStorage.setItem("ComponentSearchSortName",e),localStorage.setItem("ComponentSearchSortOrder",t))}}}}},g=f,v=(a("b72b"),a("2877")),S=Object(v["a"])(g,o,i,!1,null,null,null);t["default"]=S.exports},"9b56":function(e,t,a){},b72b:function(e,t,a){"use strict";a("9b56")}}]);
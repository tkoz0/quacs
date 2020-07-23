(self["webpackJsonp"]=self["webpackJsonp"]||[]).push([["chunk-9d6fb3ca"],{"462b":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",[i("b-jumbotron",{attrs:{header:"Prerequisites","header-level":"4",lead:"Add courses you have already taken to QuACS to perform prerequisite checking"}},[i("p",[t._v(" Once you have added courses you've already taken to the website, sections will warn you if you don't meet the requirements. "),i("br"),t._v(" (You may still be able to be signed into these courses. Contact the professor and ask!) "),i("br"),i("br"),i("span",{staticClass:"font-weight-bold"},[t._v(" This prerequisite information comes from SIS. If SIS only checks prerequisites for some sections of a course, the other sections will not show a warning. This also means that our prerequisite information may disagree with the course catalog, but it will be accurate for course registration.")])]),i("b-form-checkbox",{attrs:{switch:"",size:"lg"},model:{value:t.prerequisiteChecking,callback:function(e){t.prerequisiteChecking=e},expression:"prerequisiteChecking"}},[t._v("Enable prerequisite checking")])],1)],1),i("div",[i("b-card",{attrs:{"no-body":""}},[i("b-tabs",{attrs:{card:""},model:{value:t.tabNumber,callback:function(e){t.tabNumber=e},expression:"tabNumber"}},[i("b-tab",{attrs:{title:"Manual Upload",active:""}},[i("b-row",{staticClass:"my-1"},[i("b-col",[i("b-form-input",{attrs:{state:t.verifyNewCourse,placeholder:"Course Code","aria-lable":"Course Code",trim:"",disabled:!t.prerequisiteChecking,title:t.prerequisiteChecking?"":"Disabled",formatter:t.formatCourse},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addCourse(e)}},model:{value:t.newCourse,callback:function(e){t.newCourse=e},expression:"newCourse"}}),i("b-form-invalid-feedback",[t._v(' Format "ABCD-1234" ')]),i("b-form-valid-feedback",{attrs:{id:"valid-feedback"}},[t._v(' Format "ABCD-1234" ')])],1),i("b-col",[i("b-button",{attrs:{disabled:!t.verifyNewCourse||!t.prerequisiteChecking,title:t.prerequisiteChecking?"":"Disabled"},on:{click:t.addCourse}},[t._v("Add Course")])],1)],1),i("br"),i("h3",[t._v("Courses you have already taken:")]),t._l(t.priorCourses,(function(e){return i("div",{key:e,staticStyle:{"margin-left":"2rem","margin-bottom":"0.5rem"}},[i("font-awesome-icon",{staticClass:"open_close_icon, trash-btn",attrs:{icon:["fas","trash"]},on:{click:function(i){return t.removeCourse(e)}}}),t._v(" "+t._s(e)+" ")],1)}))],2),i("b-tab",{attrs:{title:"Import Courses"}},[i("h3",[t._v("Instructions")]),i("p",[t._v(" In order to import your courses you will need to upload your transcript. Don't worry, QuACS is 100% client-side which means that all the data in your transcript stays on your computer and there is literally no way for anyone - including the QuACS developers - to view the data. ")]),i("h3",{staticClass:"mobile-only"},[t._v(" NOTE: Transcript importing does not work on mobile because there is no way to get your transcript as an html file. We recommend you use a computer for checking prerequisites, or type out your courses by hand if you wish to stay on mobile. "),i("br"),i("br")]),i("p",[t._v(" 1) Go to "),i("a",{attrs:{href:"https://sis.rpi.edu",target:"_blank"}},[t._v("https://sis.rpi.edu")])]),i("p",[t._v("2) Log in and navigate to the Student Menu tab")]),i("p",[t._v('3) Click "View Transcript"')]),i("p",[t._v(' 4) Press the Submit button (leave the options as "All Levels" and "Unofficial Web Transcript") ')]),i("p",[t._v(' 5) Press CTRL+S on your keyboard (or right click and press "Save As") and save the page as a .html file. ')]),i("p",[t._v(' 6) Upload the .html file here on QuACS and click "Import Transcript" ')]),i("p"),i("form",{attrs:{onsubmit:"return false;",method:"post"}},[i("b-form-file",{attrs:{id:"transcriptFileUpload",type:"file",name:"file upload",accept:".html,.htm",state:Boolean(t.file),placeholder:"Click to upload your transcript or drop it here...","drop-placeholder":"Drop transcript here...",required:"",title:t.prerequisiteChecking?"":"Disabled",disabled:!t.prerequisiteChecking},on:{change:function(e){return t.importTranscript()}},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)])],1)],1)],1),i("b-modal",{attrs:{id:"transcriptImportModal",title:"Import Error"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.ok;return[i("b-button",{attrs:{variant:"primary"},on:{click:function(t){return r()}}},[t._v(" Close ")])]}}])},[i("p",[t._v(" There was an issue importing from your transcript. Theses issues are hard to debug because we dont have access to many test transcript files ")]),i("p",[t._v("For now you will have to add your courses by hand, sorry")]),i("p",[t._v(" If you would like to help us fix this issue, join our discord so we can talk ")]),i("a",{attrs:{href:"https://discord.gg/EyGZTAP",title:"Join our development Discord server","aria-label":"Join our development Discord server",target:"_blank"}},[t._v("https://discord.gg/EyGZTAP ")])])],1)},n=[],a=i("9ab4"),s=i("60a3");async function o(t){const e=document.getElementById(t).files;if(e.length<1)throw"missing file";if("text/html"!==e[0].type)throw`wrong type "${e[0].type}"`;const i=await new Promise((t,i)=>{const r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(t){i(t)},r.readAsText(e[0])}),r=new DOMParser,n=r.parseFromString(i,"text/html"),a=n.getElementsByClassName("datadisplaytable")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr"),s={majors:[]};let o=0;for(;o<a.length;o++)if("Name :"===a[o].children[0].innerText)s.name=a[o].children[1].innerText.trim();else if("Student Type:"===a[o].children[0].innerText)s.studentType=a[o].children[1].innerText.trim();else if("Current Program"===a[o].children[0].innerText)o++,s.currentProgram=a[o].children[0].innerText.trim();else if("College:"===a[o].children[0].innerText)s.college=a[o].children[1].innerText.trim();else if(a[o].children[0].innerText.startsWith("Major"))s.majors.push(a[o].children[1].innerText.trim());else if(a[o].children[0].innerText.startsWith("***Transcript type:UWEB is NOT Official ***"))break;if(s.terms=[],o+=4,!a[o].children[0].innerText.startsWith("INSTITUTION CREDIT")){o+=1;while(!a[o].children[0].innerText.startsWith("INSTITUTION CREDIT")){o+=2;const t=[];for(;o<a.length;o++){const e=a[o].getElementsByTagName("td");if(!e[0].innerText.trim())break;t.push({subject:e[0].innerText.trim(),course:e[1].innerText.trim(),title:e[2].innerText.trim(),grade:e[3].innerText.trim(),creditHours:e[4].innerText.trim(),qualityPoints:e[5].innerText.trim(),repeatStatus:e[6].innerText.trim()})}o++;const e=a[o].getElementsByTagName("td");s.terms.push({term:"ap",courses:t,attemptHours:e[0].innerText.trim(),passedHours:e[1].innerText.trim(),earnedHours:e[2].innerText.trim(),gpaHours:e[3].innerText.trim(),qualityPoints:e[4].innerText.trim(),gpa:e[5].innerText.trim()}),o+=4}}o+=1;while(!a[o].children[0].innerText.startsWith("TRANSCRIPT TOTALS")){const t={};t.term=a[o].children[0].innerText.split("Term: ")[1].trim();while("Subject"!==a[o].children[0].innerText)o++,"Major:"===a[o].children[0].innerText?t.major=a[o].children[1].innerText.trim():"Academic Standing:"===a[o].children[0].innerText?t.academicStanding=a[o].children[1].innerText.trim():"Additional Standing:"===a[o].children[0].innerText&&(t.additionalStanding=a[o].children[1].innerText.trim());o++;const e=[];for(;o<a.length;o++){const t=a[o].getElementsByTagName("td");if(a[o].children[0].innerText.includes("Term Totals"))break;e.push({subject:t[0].innerText.trim(),course:t[1].innerText.trim(),title:t[2].innerText.trim(),grade:t[3].innerText.trim(),creditHours:t[4].innerText.trim(),qualityPoints:t[5].innerText.trim(),repeatStatus:t[6].innerText.trim()})}t.courses=e,o+=2;let i=a[o].getElementsByTagName("td");t.currentTerm={},t.currentTerm.attemptHours=i[0].innerText.trim(),t.currentTerm.passedHours=i[1].innerText.trim(),t.currentTerm.earnedHours=i[2].innerText.trim(),t.currentTerm.gpaHours=i[3].innerText.trim(),t.currentTerm.qualityPoints=i[4].innerText.trim(),t.currentTerm.gpa=i[5].innerText.trim(),o++,i=a[o].getElementsByTagName("td"),t.cumulative={},t.cumulative.attemptHours=i[0].innerText.trim(),t.cumulative.passedHours=i[1].innerText.trim(),t.cumulative.earnedHours=i[2].innerText.trim(),t.cumulative.gpaHours=i[3].innerText.trim(),t.cumulative.qualityPoints=i[4].innerText.trim(),t.cumulative.gpa=i[5].innerText.trim(),s.terms.push(t),o+=4}o+=2;let l=a[o].getElementsByTagName("td");for(s.totalInstitution={},s.totalInstitution.attemptHours=l[0].innerText.trim(),s.totalInstitution.passedHours=l[1].innerText.trim(),s.totalInstitution.earnedHours=l[2].innerText.trim(),s.totalInstitution.gpaHours=l[3].innerText.trim(),s.totalInstitution.qualityPoints=l[4].innerText.trim(),s.totalInstitution.gpa=l[5].innerText.trim(),o++,l=a[o].getElementsByTagName("td"),s.totalTransfer={},s.totalTransfer.attemptHours=l[0].innerText.trim(),s.totalTransfer.passedHours=l[1].innerText.trim(),s.totalTransfer.earnedHours=l[2].innerText.trim(),s.totalTransfer.gpaHours=l[3].innerText.trim(),s.totalTransfer.qualityPoints=l[4].innerText.trim(),s.totalTransfer.gpa=l[5].innerText.trim(),o++,l=a[o].getElementsByTagName("td"),s.overall={},s.overall.attemptHours=l[0].innerText.trim(),s.overall.passedHours=l[1].innerText.trim(),s.overall.earnedHours=l[2].innerText.trim(),s.overall.gpaHours=l[3].innerText.trim(),s.overall.qualityPoints=l[4].innerText.trim(),s.overall.gpa=l[5].innerText.trim(),s.inProgressTerms=[],o+=5;o<a.length;o++){const t={};t.term=a[o].children[0].innerText.split("Term: ")[1].trim();while("Subject"!==a[o].children[0].innerText)o++,"Major:"===a[o].children[0].innerText&&(t.major=a[o].children[1].innerText.trim());o++;const e=[];for(;o<a.length;o++){const t=a[o].getElementsByTagName("td");if(!t[0].innerText.trim())break;e.push({subject:t[0].innerText.trim(),course:t[1].innerText.trim(),level:t[2].innerText.trim(),title:t[3].innerText.trim(),creditHours:t[4].innerText.trim()})}t.courses=e,s.inProgressTerms.push(t),o+=2}return s}var l=i("2f62"),c=i("1947"),u=i("205f"),d=i("b28b"),h=i("c3e6"),b=i("dcb3"),f=i("6c06"),p=i("2326"),m=i("228e"),v=i("7b1e"),T=i("a5d7"),g=i("fa73"),y=i("686b"),x=i("493b"),O=i("a953"),j=i("021b"),C=i("d520"),k=i("90ef"),w=i("8c18");function S(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?S(Object(i),!0).forEach((function(e){B(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):S(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function B(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var P="BFormFile",I='Setting "value"/"v-model" to an empty string for reset is deprecated. Set to "null" instead.',N=function t(e){return Object(v["d"])(e)||Object(p["d"])(e)&&e.every((function(e){return t(e)}))},A=b["a"].extend({name:P,mixins:[x["a"],k["a"],j["a"],C["a"],O["a"],w["a"]],inheritAttrs:!1,model:{prop:"value",event:"input"},props:{size:{type:String,default:function(){return Object(m["c"])("BFormControl","size")}},value:{type:[T["a"],Array],default:null,validator:function(t){return""===t?(Object(y["a"])(I,P),!0):Object(v["j"])(t)||N(t)}},accept:{type:String,default:""},capture:{type:Boolean,default:!1},placeholder:{type:String,default:function(){return Object(m["c"])(P,"placeholder")}},browseText:{type:String,default:function(){return Object(m["c"])(P,"browseText")}},dropPlaceholder:{type:String,default:function(){return Object(m["c"])(P,"dropPlaceholder")}},multiple:{type:Boolean,default:!1},directory:{type:Boolean,default:!1},noTraverse:{type:Boolean,default:!1},noDrop:{type:Boolean,default:!1},fileNameFormatter:{type:Function,default:null}},data:function(){return{selectedFile:null,dragging:!1,hasFocus:!1}},computed:{selectLabel:function(){if(this.dragging&&this.dropPlaceholder)return this.dropPlaceholder;if(!this.selectedFile||0===this.selectedFile.length)return this.placeholder;var t=Object(p["b"])(this.selectedFile).filter(f["a"]);return this.hasNormalizedSlot("file-name")?[this.normalizeSlot("file-name",{files:t,names:t.map((function(t){return t.name}))})]:Object(v["e"])(this.fileNameFormatter)?Object(g["e"])(this.fileNameFormatter(t)):t.map((function(t){return t.name})).join(", ")},computedAttrs:function(){return _(_({},this.bvAttrs),{},{type:"file",id:this.safeId(),name:this.name,disabled:this.disabled,required:this.required,form:this.form||null,capture:this.capture||null,accept:this.accept||null,multiple:this.multiple,webkitdirectory:this.directory,"aria-required":this.required?"true":null})}},watch:{selectedFile:function(t,e){t===e||Object(p["d"])(t)&&Object(p["d"])(e)&&t.length===e.length&&t.every((function(t,i){return t===e[i]}))||(!t&&this.multiple?this.$emit("input",[]):this.$emit("input",t))},value:function(t){(!t||Object(p["d"])(t)&&0===t.length)&&this.reset()}},methods:{focusHandler:function(t){this.plain||"focusout"===t.type?this.hasFocus=!1:this.hasFocus=!0},reset:function(){try{var t=this.$refs.input;t.value="",t.type="",t.type="file"}catch(e){}this.selectedFile=this.multiple?[]:null},onFileChange:function(t){var e=this;this.$emit("change",t);var i=t.dataTransfer&&t.dataTransfer.items;if(!i||this.noTraverse)this.setFiles(t.target.files||t.dataTransfer.files);else{for(var r=[],n=0;n<i.length;n++){var a=i[n].webkitGetAsEntry();a&&r.push(this.traverseFileTree(a))}Promise.all(r).then((function(t){e.setFiles(Object(p["c"])(t))}))}},setFiles:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(t)if(this.multiple){for(var e=[],i=0;i<t.length;i++)e.push(t[i]);this.selectedFile=e}else this.selectedFile=t[0]||null;else this.selectedFile=null},onReset:function(){this.selectedFile=this.multiple?[]:null},onDragover:function(t){if(t.preventDefault(),t.stopPropagation(),!this.noDrop&&this.custom){this.dragging=!0;try{t.dataTransfer.dropEffect="copy"}catch(e){}}},onDragleave:function(t){t.preventDefault(),t.stopPropagation(),this.dragging=!1},onDrop:function(t){t.preventDefault(),t.stopPropagation(),this.noDrop||(this.dragging=!1,t.dataTransfer.files&&t.dataTransfer.files.length>0&&this.onFileChange(t))},traverseFileTree:function(t,e){var i=this;return new Promise((function(r){e=e||"",t.isFile?t.file((function(t){t.$path=e,r(t)})):t.isDirectory&&t.createReader().readEntries((function(n){for(var a=[],s=0;s<n.length;s++)a.push(i.traverseFileTree(n[s],e+t.name+"/"));Promise.all(a).then((function(t){r(Object(p["c"])(t))}))}))}))}},render:function(t){var e=t("input",{ref:"input",class:[{"form-control-file":this.plain,"custom-file-input":this.custom,focus:this.custom&&this.hasFocus},this.stateClass],attrs:this.computedAttrs,on:{change:this.onFileChange,focusin:this.focusHandler,focusout:this.focusHandler,reset:this.onReset}});if(this.plain)return e;var i=t("label",{staticClass:"custom-file-label",class:[this.dragging?"dragging":null],attrs:{for:this.safeId(),"data-browse":this.browseText||null}},this.selectLabel);return t("div",{staticClass:"custom-file b-form-file",class:[this.stateClass,B({},"b-custom-control-".concat(this.size),this.size)],attrs:{id:this.safeId("_BV_file_outer_")},on:{dragover:this.onDragover,dragleave:this.onDragleave,drop:this.onDrop}},[e,i])}}),F=i("4797"),$=i("3010"),E=i("5b4c"),H=i("b42e"),q=i("8690"),D=i("365c");function z(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var M={tag:{type:String,default:"div"},fluid:{type:[Boolean,String],default:!1}},L=b["a"].extend({name:"BContainer",functional:!0,props:M,render:function(t,e){var i=e.props,r=e.data,n=e.children;return t(i.tag,Object(H["a"])(r,{class:z({container:!(i.fluid||""===i.fluid),"container-fluid":!0===i.fluid||""===i.fluid},"container-".concat(i.fluid),i.fluid&&!0!==i.fluid)}),n)}});function V(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var U="BJumbotron",W={fluid:{type:Boolean,default:!1},containerFluid:{type:[Boolean,String],default:!1},header:{type:String},headerHtml:{type:String},headerTag:{type:String,default:"h1"},headerLevel:{type:[Number,String],default:"3"},lead:{type:String},leadHtml:{type:String},leadTag:{type:String,default:"p"},tag:{type:String,default:"div"},bgVariant:{type:String,default:function(){return Object(m["c"])(U,"bgVariant")}},borderVariant:{type:String,default:function(){return Object(m["c"])(U,"borderVariant")}},textVariant:{type:String,default:function(){return Object(m["c"])(U,"textVariant")}}},R=b["a"].extend({name:U,functional:!0,props:W,render:function(t,e){var i,r=e.props,n=e.data,a=e.slots,s=e.scopedSlots,o=r.header,l=r.headerHtml,c=r.lead,u=r.leadHtml,d=r.textVariant,h=r.bgVariant,b=r.borderVariant,f=s||{},p=a(),m={},v=t(),T=Object(D["a"])("header",f,p);if(T||o||l){var g=r.headerLevel;v=t(r.headerTag,{class:V({},"display-".concat(g),g),domProps:T?{}:Object(q["a"])(l,o)},Object(D["b"])("header",m,f,p))}var y=t(),x=Object(D["a"])("lead",f,p);(x||c||u)&&(y=t(r.leadTag,{staticClass:"lead",domProps:x?{}:Object(q["a"])(u,c)},Object(D["b"])("lead",m,f,p)));var O=[v,y,Object(D["b"])("default",m,f,p)];return r.fluid&&(O=[t(L,{props:{fluid:r.containerFluid}},O)]),t(r.tag,Object(H["a"])(n,{staticClass:"jumbotron",class:(i={"jumbotron-fluid":r.fluid},V(i,"text-".concat(d),d),V(i,"bg-".concat(h),h),V(i,"border-".concat(b),b),V(i,"border",b),i)}),O)}}),K=i("a15b"),G=i("3702"),J=b["a"].extend({name:"BTab",mixins:[k["a"],w["a"]],inject:{bvTabs:{default:function(){return{}}}},props:{active:{type:Boolean,default:!1},tag:{type:String,default:"div"},buttonId:{type:String},title:{type:String,default:""},titleItemClass:{type:[String,Array,Object]},titleLinkClass:{type:[String,Array,Object]},titleLinkAttributes:{type:Object},disabled:{type:Boolean,default:!1},noBody:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1}},data:function(){return{localActive:this.active&&!this.disabled,show:!1}},computed:{tabClasses:function(){return[{active:this.localActive,disabled:this.disabled,"card-body":this.bvTabs.card&&!this.noBody},this.localActive?this.bvTabs.activeTabClass:null]},controlledBy:function(){return this.buttonId||this.safeId("__BV_tab_button__")},computedNoFade:function(){return!this.bvTabs.fade},computedLazy:function(){return this.bvTabs.lazy||this.lazy},_isTab:function(){return!0}},watch:{localActive:function(t){this.$emit("update:active",t)},active:function(t,e){t!==e&&(t?this.activate():this.deactivate()||this.$emit("update:active",this.localActive))},disabled:function(t,e){t!==e&&t&&this.localActive&&this.bvTabs.firstTab&&(this.localActive=!1,this.bvTabs.firstTab())}},mounted:function(){this.registerTab(),this.show=this.localActive},updated:function(){this.hasNormalizedSlot("title")&&this.bvTabs.updateButton&&this.bvTabs.updateButton(this)},destroyed:function(){this.unregisterTab()},methods:{registerTab:function(){this.bvTabs.registerTab&&this.bvTabs.registerTab(this)},unregisterTab:function(){this.bvTabs.unregisterTab&&this.bvTabs.unregisterTab(this)},activate:function(){return!(!this.bvTabs.activateTab||this.disabled)&&this.bvTabs.activateTab(this)},deactivate:function(){return!(!this.bvTabs.deactivateTab||!this.localActive)&&this.bvTabs.deactivateTab(this)}},render:function(t){var e=t(this.tag,{ref:"panel",staticClass:"tab-pane",class:this.tabClasses,directives:[{name:"show",rawName:"v-show",value:this.localActive,expression:"localActive"}],attrs:{role:"tabpanel",id:this.safeId(),"aria-hidden":this.localActive?"false":"true","aria-labelledby":this.controlledBy||null}},[this.localActive||!this.computedLazy?this.normalizeSlot("default"):t()]);return t(G["b"],{props:{mode:"out-in",noFade:this.computedNoFade}},[e])}}),Q=i("01e7"),Z=i("3c21"),Y=i("47df"),X=function(t,e){return t.map((function(t,e){return[e,t]})).sort(function(t,e){return this(t[1],e[1])||t[0]-e[0]}.bind(e)).map((function(t){return t[1]}))},tt=X,et=i("6d40"),it=i("906c"),rt=i("a8c8"),nt=i("3a58"),at=i("d82f"),st=i("aa59"),ot=i("59fb");function lt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function ct(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(i),!0).forEach((function(e){ut(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):lt(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function ut(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var dt=Object(at["m"])(ot["b"],["tabs","isNavBar","cardHeader"]),ht=function(t){return!t.disabled},bt=b["a"].extend({name:"BTabButtonHelper",inject:{bvTabs:{default:function(){return{}}}},props:{tab:{default:null},tabs:{type:Array,default:function(){return[]}},id:{type:String,default:null},controls:{type:String,default:null},tabIndex:{type:Number,default:null},posInSet:{type:Number,default:null},setSize:{type:Number,default:null},noKeyNav:{type:Boolean,default:!1}},methods:{focus:function(){Object(it["d"])(this.$refs.link)},handleEvt:function(t){var e=function(){t.preventDefault(),t.stopPropagation()};if(!this.tab.disabled){var i=t.type,r=t.keyCode,n=t.shiftKey;"click"===i||"keydown"===i&&r===Q["a"].SPACE?(e(),this.$emit("click",t)):"keydown"!==i||this.noKeyNav||(r===Q["a"].UP||r===Q["a"].LEFT||r===Q["a"].HOME?(e(),n||r===Q["a"].HOME?this.$emit("first",t):this.$emit("prev",t)):r!==Q["a"].DOWN&&r!==Q["a"].RIGHT&&r!==Q["a"].END||(e(),n||r===Q["a"].END?this.$emit("last",t):this.$emit("next",t)))}}},render:function(t){var e=t(st["a"],{ref:"link",staticClass:"nav-link",class:[{active:this.tab.localActive&&!this.tab.disabled,disabled:this.tab.disabled},this.tab.titleLinkClass,this.tab.localActive?this.bvTabs.activeNavItemClass:null],props:{disabled:this.tab.disabled},attrs:ct(ct({},this.tab.titleLinkAttributes),{},{role:"tab",id:this.id,tabindex:this.tabIndex,"aria-selected":this.tab.localActive&&!this.tab.disabled?"true":"false","aria-setsize":this.setSize,"aria-posinset":this.posInSet,"aria-controls":this.controls}),on:{click:this.handleEvt,keydown:this.handleEvt}},[this.tab.normalizeSlot("title")||this.tab.title]);return t("li",{staticClass:"nav-item",class:[this.tab.titleItemClass],attrs:{role:"presentation"}},[e])}}),ft=b["a"].extend({name:"BTabs",mixins:[k["a"],w["a"]],provide:function(){return{bvTabs:this}},model:{prop:"value",event:"input"},props:ct(ct({},dt),{},{tag:{type:String,default:"div"},card:{type:Boolean,default:!1},end:{type:Boolean,default:!1},noFade:{type:Boolean,default:!1},noNavStyle:{type:Boolean,default:!1},noKeyNav:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},contentClass:{type:[String,Array,Object]},navClass:{type:[String,Array,Object]},navWrapperClass:{type:[String,Array,Object]},activeNavItemClass:{type:[String,Array,Object]},activeTabClass:{type:[String,Array,Object]},value:{type:Number,default:null}}),data:function(){return{currentTab:Object(nt["b"])(this.value,-1),tabs:[],registeredTabs:[],isMounted:!1}},computed:{fade:function(){return!this.noFade},localNavClass:function(){var t=[];return this.card&&this.vertical&&t.push("card-header","h-100","border-bottom-0","rounded-0"),[].concat(t,[this.navClass])}},watch:{currentTab:function(t){var e=-1;this.tabs.forEach((function(i,r){t!==r||i.disabled?i.localActive=!1:(i.localActive=!0,e=r)})),this.$emit("input",e)},value:function(t,e){if(t!==e){t=Object(nt["b"])(t,-1),e=Object(nt["b"])(e,0);var i=this.tabs;i[t]&&!i[t].disabled?this.activateTab(i[t]):t<e?this.previousTab():this.nextTab()}},registeredTabs:function(){var t=this;this.$nextTick((function(){Object(it["x"])((function(){t.updateTabs()}))}))},tabs:function(t,e){var i=this;Object(Z["a"])(t.map((function(t){return t._uid})),e.map((function(t){return t._uid})))||this.$nextTick((function(){i.$emit("changed",t.slice(),e.slice())}))},isMounted:function(t){var e=this;t&&Object(it["x"])((function(){e.updateTabs()})),this.setObserver(t)}},created:function(){var t=this;this.$_observer=null,this.currentTab=Object(nt["b"])(this.value,-1),this.$nextTick((function(){t.updateTabs()}))},mounted:function(){var t=this;this.updateTabs(),this.$nextTick((function(){t.isMounted=!0}))},deactivated:function(){this.isMounted=!1},activated:function(){var t=this;this.currentTab=Object(nt["b"])(this.value,-1),this.$nextTick((function(){t.updateTabs(),t.isMounted=!0}))},beforeDestroy:function(){this.isMounted=!1},destroyed:function(){this.tabs=[]},methods:{registerTab:function(t){var e=this;Object(p["a"])(this.registeredTabs,t)||(this.registeredTabs.push(t),t.$once("hook:destroyed",(function(){e.unregisterTab(t)})))},unregisterTab:function(t){this.registeredTabs=this.registeredTabs.slice().filter((function(e){return e!==t}))},setObserver:function(t){if(this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,t){var e=this,i=function(){e.$nextTick((function(){Object(it["x"])((function(){e.updateTabs()}))}))};this.$_observer=Object(Y["a"])(this.$refs.tabsContainer,i,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["id"]})}},getTabs:function(){var t=this.registeredTabs.filter((function(t){return 0===t.$children.filter((function(t){return t._isTab})).length})),e=[];if(this.isMounted&&t.length>0){var i=t.map((function(t){return"#".concat(t.safeId())})).join(", ");e=Object(it["z"])(i,this.$el).map((function(t){return t.id})).filter(f["a"])}return tt(t,(function(t,i){return e.indexOf(t.safeId())-e.indexOf(i.safeId())}))},updateTabs:function(){var t=this.getTabs(),e=t.indexOf(t.slice().reverse().find((function(t){return t.localActive&&!t.disabled})));if(e<0){var i=this.currentTab;i>=t.length?e=t.indexOf(t.slice().reverse().find(ht)):t[i]&&!t[i].disabled&&(e=i)}e<0&&(e=t.indexOf(t.find(ht))),t.forEach((function(t){t.localActive=!1})),t[e]&&(t[e].localActive=!0),this.tabs=t,this.currentTab=e},getButtonForTab:function(t){return(this.$refs.buttons||[]).find((function(e){return e.tab===t}))},updateButton:function(t){var e=this.getButtonForTab(t);e&&e.$forceUpdate&&e.$forceUpdate()},activateTab:function(t){var e=!1;if(t){var i=this.tabs.indexOf(t);if(!t.disabled&&i>-1&&i!==this.currentTab){var r=new et["a"]("activate-tab",{cancelable:!0,vueTarget:this,componentId:this.safeId()});this.$emit(r.type,i,this.currentTab,r),r.defaultPrevented||(e=!0,this.currentTab=i)}}return e||this.currentTab===this.value||this.$emit("input",this.currentTab),e},deactivateTab:function(t){return!!t&&this.activateTab(this.tabs.filter((function(e){return e!==t})).find(ht))},focusButton:function(t){var e=this;this.$nextTick((function(){Object(it["d"])(e.getButtonForTab(t))}))},emitTabClick:function(t,e){Object(v["c"])(e)&&t&&t.$emit&&!t.disabled&&t.$emit("click",e)},clickTab:function(t,e){this.activateTab(t),this.emitTabClick(t,e)},firstTab:function(t){var e=this.tabs.find(ht);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))},previousTab:function(t){var e=Object(rt["a"])(this.currentTab,0),i=this.tabs.slice(0,e).reverse().find(ht);this.activateTab(i)&&t&&(this.focusButton(i),this.emitTabClick(i,t))},nextTab:function(t){var e=Object(rt["a"])(this.currentTab,-1),i=this.tabs.slice(e+1).find(ht);this.activateTab(i)&&t&&(this.focusButton(i),this.emitTabClick(i,t))},lastTab:function(t){var e=this.tabs.slice().reverse().find(ht);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))}},render:function(t){var e=this,i=this.tabs,r=i.find((function(t){return t.localActive&&!t.disabled})),n=i.find((function(t){return!t.disabled})),a=i.map((function(a,s){var o=null;return e.noKeyNav||(o=-1,(r===a||!r&&n===a)&&(o=null)),t(bt,{key:a._uid||s,ref:"buttons",refInFor:!0,props:{tab:a,tabs:i,id:a.controlledBy||(a.safeId?a.safeId("_BV_tab_button_"):null),controls:a.safeId?a.safeId():null,tabIndex:o,setSize:i.length,posInSet:s+1,noKeyNav:e.noKeyNav},on:{click:function(t){e.clickTab(a,t)},first:e.firstTab,prev:e.previousTab,next:e.nextTab,last:e.lastTab}})})),s=t(ot["a"],{ref:"nav",class:this.localNavClass,attrs:{role:"tablist",id:this.safeId("_BV_tab_controls_")},props:{fill:this.fill,justified:this.justified,align:this.align,tabs:!this.noNavStyle&&!this.pills,pills:!this.noNavStyle&&this.pills,vertical:this.vertical,small:this.small,cardHeader:this.card&&!this.vertical}},[this.normalizeSlot("tabs-start")||t(),a,this.normalizeSlot("tabs-end")||t()]);s=t("div",{key:"bv-tabs-nav",class:[{"card-header":this.card&&!this.vertical&&!this.end,"card-footer":this.card&&!this.vertical&&this.end,"col-auto":this.vertical},this.navWrapperClass]},[s]);var o=t();i&&0!==i.length||(o=t("div",{key:"bv-empty-tab",class:["tab-pane","active",{"card-body":this.card}]},this.normalizeSlot("empty")));var l=t("div",{ref:"tabsContainer",key:"bv-tabs-container",staticClass:"tab-content",class:[{col:this.vertical},this.contentClass],attrs:{id:this.safeId("_BV_tab_container_")}},Object(p["b"])(this.normalizeSlot("default"),o));return t(this.tag,{staticClass:"tabs",class:{row:this.vertical,"no-gutters":this.vertical&&this.card},attrs:{id:this.safeId()}},[this.end?l:t(),[s],this.end?t():l])}}),pt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.newCourse="",e.tabNumber=0,e.file=null,e}return Object(a["d"])(e,t),e.prototype.formatCourse=function(t){return t.toUpperCase().replace("_","-").replace(" ","-").substring(0,9)},e.prototype.addCourse=function(){this.verifyNewCourse&&this.$store.commit("prerequisites/addPriorCourse",this.newCourse)},e.prototype.removeCourse=function(t){this.$store.commit("prerequisites/removePriorCourse",t)},e.prototype.importTranscript=function(){var t=this.$store,e=this.$bvModal,i=o("transcriptFileUpload");i.catch((function(t){console.log(t),e.show("transcriptImportModal")})).then((function(e){var i,r,n,s;try{for(var o=Object(a["f"])(e.terms.concat(e.inProgressTerms)),l=o.next();!l.done;l=o.next()){var c=l.value;try{for(var u=(n=void 0,Object(a["f"])(c.courses)),d=u.next();!d.done;d=u.next()){var h=d.value;t.commit("prerequisites/addPriorCourse",h.subject.toUpperCase()+"-"+h.course)}}catch(b){n={error:b}}finally{try{d&&!d.done&&(s=u.return)&&s.call(u)}finally{if(n)throw n.error}}}}catch(f){i={error:f}}finally{try{l&&!l.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}})),this.tabNumber=0},e=Object(a["c"])([Object(s["a"])({components:{"b-button":c["a"],"b-card":u["a"],"b-col":d["a"],"b-form-checkbox":h["a"],"b-form-file":A,"b-form-input":F["a"],"b-form-invalid-feedback":$["a"],"b-form-valid-feedback":E["a"],"b-jumbotron":R,"b-row":K["a"],"b-tab":J,"b-tabs":ft},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({verifyNewCourse:function(){return null!==this.newCourse.match("^[a-zA-Z]{4}[-_\\s]\\d{4}$")},priorCourses:function(){return Object.keys(this.getPriorCourses()).sort()}},Object(l["b"])("prerequisites",["getPriorCourses"])),Object(l["c"])(["courseIdToCourse"])),{prerequisiteChecking:{get:function(){return this.$store.state.prerequisites.enableChecking},set:function(){this.$store.commit("prerequisites/togglePrerequisiteChecking",!this.$store.state.prerequisites.enableChecking)}}})})],e),e}(s["c"]),mt=pt,vt=mt,Tt=(i("b2ba"),i("2877")),gt=Object(Tt["a"])(vt,r,n,!1,null,null,null);e["default"]=gt.exports},"497a":function(t,e,i){},b2ba:function(t,e,i){"use strict";var r=i("497a"),n=i.n(r);n.a}}]);
//# sourceMappingURL=chunk-9d6fb3ca.87bfe08d.js.map
(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[443],{429:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"camera_outer"},[e("video",{attrs:{id:"videoCamera",width:t.videoWidth,height:t.videoHeight,autoplay:""}}),e("canvas",{staticStyle:{display:"none"},attrs:{id:"canvasCamera",width:t.videoWidth,height:t.videoHeight}}),t.imgSrc?e("div",{staticClass:"img_bg_camera"},[e("p",[t._v("效果预览")]),e("img",{staticClass:"tx_img",attrs:{src:t.imgSrc,alt:""}})]):t._e(),e("div",{staticClass:"button",staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.getCompetence()}}},[t._v("打开摄像头")]),e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.stopNavigator()}}},[t._v("关闭摄像头")]),e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.setImage()}}},[t._v("拍照")])],1)])},o=[],a=(r(1703),r(2801),r(8675),r(3462),r(7380),r(1118),{data(){return{videoWidth:250,videoHeight:350,imgSrc:"",thisCancas:null,thisContext:null,thisVideo:null,openVideo:!1}},mounted(){},methods:{getCompetence(){var t=this;t.thisCancas=document.getElementById("canvasCamera"),t.thisContext=this.thisCancas.getContext("2d"),t.thisVideo=document.getElementById("videoCamera"),t.thisVideo.style.display="block",void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(t){var e=navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.getUserMedia;return e?new Promise((function(r,i){e.call(navigator,t,r,i)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))});var e={audio:!1,video:{width:this.videoWidth,height:this.videoHeight,transform:"scaleX(-1)"}};navigator.mediaDevices.getUserMedia(e).then((function(e){"srcObject"in t.thisVideo?t.thisVideo.srcObject=e:t.thisVideo.src=window.URL.createObjectURL(e),t.thisVideo.onloadedmetadata=function(e){t.thisVideo.play()}})).catch((t=>{console.log(t)}))},setImage(){var t=this;t.thisContext.drawImage(t.thisVideo,0,0,t.videoWidth,t.videoHeight);var e=this.thisCancas.toDataURL("image/png");t.imgSrc=e},stopNavigator(){this.thisVideo.srcObject.getTracks()[0].stop()},dataURLtoFile(t,e){var r=t.split(","),i=r[0].match(/:(.*?);/)[1],o=atob(r[1]),a=o.length,s=new Uint8Array(a);while(a--)s[a]=o.charCodeAt(a);return new File([s],e,{type:i})}}}),s=a,n=r(1001),c=(0,n.Z)(s,i,o,!1,null,null,null),d=c.exports},5787:function(t,e,r){var i=r(7976),o=TypeError;t.exports=function(t,e){if(i(e,t))return t;throw o("Incorrect invocation")}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},2801:function(t,e,r){"use strict";var i=r(2109),o=r(7854),a=r(5005),s=r(9114),n=r(3070).f,c=r(2597),d=r(5787),E=r(9587),m=r(6277),R=r(3678),l=r(7741),v=r(9781),h=r(1913),u="DOMException",_=a("Error"),g=a(u),I=function(){d(this,p);var t=arguments.length,e=m(t<1?void 0:arguments[0]),r=m(t<2?void 0:arguments[1],"Error"),i=new g(e,r),o=_(e);return o.name=u,n(i,"stack",s(1,l(o.stack,1))),E(i,this,I),i},p=I.prototype=g.prototype,C="stack"in _(u),A="stack"in new g(1,2),D=g&&v&&Object.getOwnPropertyDescriptor(o,u),T=!!D&&!(D.writable&&D.configurable),N=C&&!T&&!A;i({global:!0,constructor:!0,forced:h||N},{DOMException:N?I:g});var O=a(u),f=O.prototype;if(f.constructor!==O)for(var S in h||n(f,"constructor",s(1,O)),R)if(c(R,S)){var y=R[S],M=y.s;c(O,M)||n(O,M,s(6,y.c))}}}]);
//# sourceMappingURL=about.ae6439b4.js.map
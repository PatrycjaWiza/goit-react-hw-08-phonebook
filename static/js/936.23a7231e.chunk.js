(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[936],{888:function(e,a,r){"use strict";var s=r(9047);function i(){}function t(){}t.resetWarningCache=i,e.exports=function(){function e(e,a,r,i,t,o){if(o!==s){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:i};return r.PropTypes=r,r}},2007:function(e,a,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2936:function(e,a,r){"use strict";r.d(a,{Z:function(){return le}});var s=r(1413),i=r(5987),t=r(1694),o=r.n(t),n=r(2007),l=r.n(n),c=r(2791),d=r(3329),f=["as","className","type","tooltip"],v={type:l().string,tooltip:l().bool,as:l().elementType},m=c.forwardRef((function(e,a){var r=e.as,t=void 0===r?"div":r,n=e.className,l=e.type,c=void 0===l?"valid":l,v=e.tooltip,m=void 0!==v&&v,u=(0,i.Z)(e,f);return(0,d.jsx)(t,(0,s.Z)((0,s.Z)({},u),{},{ref:a,className:o()(n,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=c.createContext({}),b=r(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=c.forwardRef((function(e,a){var r=e.id,t=e.bsPrefix,n=e.className,l=e.type,f=void 0===l?"checkbox":l,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,y=void 0!==u&&u,h=e.as,N=void 0===h?"input":h,Z=(0,i.Z)(e,x),P=(0,c.useContext)(p).controlId;return t=(0,b.vE)(t,"form-check-input"),(0,d.jsx)(N,(0,s.Z)((0,s.Z)({},Z),{},{ref:a,type:f,id:r||P,className:o()(n,t,m&&"is-valid",y&&"is-invalid")}))}));y.displayName="FormCheckInput";var h=y,N=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,n=e.htmlFor,l=(0,i.Z)(e,N),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-check-label"),(0,d.jsx)("label",(0,s.Z)((0,s.Z)({},l),{},{ref:a,htmlFor:n||f,className:o()(t,r)}))}));Z.displayName="FormCheckLabel";var P=Z;var I=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var r=e.id,t=e.bsPrefix,n=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,v=e.reverse,m=void 0!==v&&v,x=e.disabled,y=void 0!==x&&x,N=e.isValid,Z=void 0!==N&&N,j=e.isInvalid,w=void 0!==j&&j,k=e.feedbackTooltip,g=void 0!==k&&k,C=e.feedback,F=e.feedbackType,R=e.className,T=e.style,E=e.title,_=void 0===E?"":E,O=e.type,S=void 0===O?"checkbox":O,z=e.label,V=e.children,L=e.as,H=void 0===L?"input":L,U=(0,i.Z)(e,I);t=(0,b.vE)(t,"form-check"),n=(0,b.vE)(n,"form-switch");var G=(0,c.useContext)(p).controlId,W=(0,c.useMemo)((function(){return{controlId:r||G}}),[G,r]),A=!V&&null!=z&&!1!==z||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,P),D=(0,d.jsx)(h,(0,s.Z)((0,s.Z)({},U),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:Z,isInvalid:w,disabled:y,as:H}));return(0,d.jsx)(p.Provider,{value:W,children:(0,d.jsx)("div",{style:T,className:o()(R,A&&t,f&&"".concat(t,"-inline"),m&&"".concat(t,"-reverse"),"switch"===S&&n),children:V||(0,d.jsxs)(d.Fragment,{children:[D,A&&(0,d.jsx)(P,{title:_,children:z}),C&&(0,d.jsx)(u,{type:F,tooltip:g,children:C})]})})})}));j.displayName="FormCheck";var w=Object.assign(j,{Input:h,Label:P}),k=r(4942),g=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=c.forwardRef((function(e,a){var r,t,n=e.bsPrefix,l=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,y=void 0!==x&&x,h=e.isInvalid,N=void 0!==h&&h,Z=e.plaintext,P=e.readOnly,I=e.as,j=void 0===I?"input":I,w=(0,i.Z)(e,g),C=(0,c.useContext)(p).controlId;(n=(0,b.vE)(n,"form-control"),Z)?r=(0,k.Z)({},"".concat(n,"-plaintext"),!0):(t={},(0,k.Z)(t,n,!0),(0,k.Z)(t,"".concat(n,"-").concat(f),f),r=t);return(0,d.jsx)(j,(0,s.Z)((0,s.Z)({},w),{},{type:l,size:v,ref:a,readOnly:P,id:m||C,className:o()(u,r,y&&"is-valid",N&&"is-invalid","color"===l&&"".concat(n,"-color"))}))}));C.displayName="FormControl";var F=Object.assign(C,{Feedback:u}),R=/-(.)/g;var T=["className","bsPrefix","as"],E=function(e){return e[0].toUpperCase()+(a=e,a.replace(R,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var _=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,t=void 0===r?E(e):r,n=a.Component,l=a.defaultProps,f=c.forwardRef((function(a,r){var t=a.className,l=a.bsPrefix,c=a.as,f=void 0===c?n||"div":c,v=(0,i.Z)(a,T),m=(0,b.vE)(l,e);return(0,d.jsx)(f,(0,s.Z)({ref:r,className:o()(t,m)},v))}));return f.defaultProps=l,f.displayName=t,f}("form-floating"),O=["controlId","as"],S=c.forwardRef((function(e,a){var r=e.controlId,t=e.as,o=void 0===t?"div":t,n=(0,i.Z)(e,O),l=(0,c.useMemo)((function(){return{controlId:r}}),[r]);return(0,d.jsx)(p.Provider,{value:l,children:(0,d.jsx)(o,(0,s.Z)((0,s.Z)({},n),{},{ref:a}))})}));S.displayName="FormGroup";var z=S,V=r(885),L=["as","bsPrefix","className"],H=["className"];var U=c.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,t=e.className,n=(0,i.Z)(e,L);r=(0,b.vE)(r,"col");var l=(0,b.pi)(),c=(0,b.zG)(),d=[],f=[];return l.forEach((function(e){var a,s,i,t=n[e];delete n[e],"object"===typeof t&&null!=t?(a=t.span,s=t.offset,i=t.order):a=t;var o=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(r).concat(o):"".concat(r).concat(o,"-").concat(a)),null!=i&&f.push("order".concat(o,"-").concat(i)),null!=s&&f.push("offset".concat(o,"-").concat(s))})),[(0,s.Z)((0,s.Z)({},n),{},{className:o().apply(void 0,[t].concat(d,f))}),{as:a,bsPrefix:r,spans:d}]}(e),t=(0,V.Z)(r,2),n=t[0],l=n.className,c=(0,i.Z)(n,H),f=t[1],v=f.as,m=void 0===v?"div":v,u=f.bsPrefix,p=f.spans;return(0,d.jsx)(m,(0,s.Z)((0,s.Z)({},c),{},{ref:a,className:o()(l,!p.length&&u)}))}));U.displayName="Col";var G=U,W=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],A=c.forwardRef((function(e,a){var r=e.as,t=void 0===r?"label":r,n=e.bsPrefix,l=e.column,f=e.visuallyHidden,v=e.className,m=e.htmlFor,u=(0,i.Z)(e,W),x=(0,c.useContext)(p).controlId;n=(0,b.vE)(n,"form-label");var y="col-form-label";"string"===typeof l&&(y="".concat(y," ").concat(y,"-").concat(l));var h=o()(v,n,f&&"visually-hidden",l&&y);return m=m||x,l?(0,d.jsx)(G,(0,s.Z)({ref:a,as:"label",className:h,htmlFor:m},u)):(0,d.jsx)(t,(0,s.Z)({ref:a,className:h,htmlFor:m},u))}));A.displayName="FormLabel",A.defaultProps={column:!1,visuallyHidden:!1};var D=A,M=["bsPrefix","className","id"],q=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,n=e.id,l=(0,i.Z)(e,M),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-range"),(0,d.jsx)("input",(0,s.Z)((0,s.Z)({},l),{},{type:"range",ref:a,className:o()(t,r),id:n||f}))}));q.displayName="FormRange";var B=q,Y=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],J=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.size,n=e.htmlSize,l=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,y=(0,i.Z)(e,Y),h=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-select"),(0,d.jsx)("select",(0,s.Z)((0,s.Z)({},y),{},{size:n,ref:a,className:o()(l,r,t&&"".concat(r,"-").concat(t),v&&"is-valid",u&&"is-invalid"),id:x||h}))}));J.displayName="FormSelect";var K=J,Q=["bsPrefix","className","as","muted"],X=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,n=e.as,l=void 0===n?"small":n,c=e.muted,f=(0,i.Z)(e,Q);return r=(0,b.vE)(r,"form-text"),(0,d.jsx)(l,(0,s.Z)((0,s.Z)({},f),{},{ref:a,className:o()(t,r,c&&"text-muted")}))}));X.displayName="FormText";var $=X,ee=c.forwardRef((function(e,a){return(0,d.jsx)(w,(0,s.Z)((0,s.Z)({},e),{},{ref:a,type:"switch"}))}));ee.displayName="Switch";var ae=Object.assign(ee,{Input:w.Input,Label:w.Label}),re=["bsPrefix","className","children","controlId","label"],se=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,n=e.children,l=e.controlId,c=e.label,f=(0,i.Z)(e,re);return r=(0,b.vE)(r,"form-floating"),(0,d.jsxs)(z,(0,s.Z)((0,s.Z)({ref:a,className:o()(t,r),controlId:l},f),{},{children:[n,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));se.displayName="FloatingLabel";var ie=se,te=["className","validated","as"],oe={_ref:l().any,validated:l().bool,as:l().elementType},ne=c.forwardRef((function(e,a){var r=e.className,t=e.validated,n=e.as,l=void 0===n?"form":n,c=(0,i.Z)(e,te);return(0,d.jsx)(l,(0,s.Z)((0,s.Z)({},c),{},{ref:a,className:o()(r,t&&"was-validated")}))}));ne.displayName="Form",ne.propTypes=oe;var le=Object.assign(ne,{Group:z,Control:F,Floating:_,Check:w,Switch:ae,Label:D,Text:$,Range:B,Select:K,FloatingLabel:ie})},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=936.23a7231e.chunk.js.map
import{r as C,j as E}from"./index-0685c264.js";import{B as A}from"./Button-1d2e2c9b.js";import{C as H}from"./Container-ddf6d4be.js";var n={},V={get exports(){return n},set exports(t){n=t}},F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",K=F,U=K;function R(){}function x(){}x.resetWarningCache=R;var z=function(){function t(e,i,s,c,a,u){if(u!==U){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function r(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:x,resetWarningCache:R};return o.PropTypes=o,o};V.exports=z();var T=globalThis&&globalThis.__assign||function(){return T=Object.assign||function(t){for(var r,o=1,e=arguments.length;o<e;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},T.apply(this,arguments)},N={onActivate:n.func,onAddUndo:n.func,onBeforeAddUndo:n.func,onBeforeExecCommand:n.func,onBeforeGetContent:n.func,onBeforeRenderUI:n.func,onBeforeSetContent:n.func,onBeforePaste:n.func,onBlur:n.func,onChange:n.func,onClearUndos:n.func,onClick:n.func,onContextMenu:n.func,onCommentChange:n.func,onCopy:n.func,onCut:n.func,onDblclick:n.func,onDeactivate:n.func,onDirty:n.func,onDrag:n.func,onDragDrop:n.func,onDragEnd:n.func,onDragGesture:n.func,onDragOver:n.func,onDrop:n.func,onExecCommand:n.func,onFocus:n.func,onFocusIn:n.func,onFocusOut:n.func,onGetContent:n.func,onHide:n.func,onInit:n.func,onKeyDown:n.func,onKeyPress:n.func,onKeyUp:n.func,onLoadContent:n.func,onMouseDown:n.func,onMouseEnter:n.func,onMouseLeave:n.func,onMouseMove:n.func,onMouseOut:n.func,onMouseOver:n.func,onMouseUp:n.func,onNodeChange:n.func,onObjectResizeStart:n.func,onObjectResized:n.func,onObjectSelected:n.func,onPaste:n.func,onPostProcess:n.func,onPostRender:n.func,onPreProcess:n.func,onProgressState:n.func,onRedo:n.func,onRemove:n.func,onReset:n.func,onSaveContent:n.func,onSelectionChange:n.func,onSetAttrib:n.func,onSetContent:n.func,onShow:n.func,onSubmit:n.func,onUndo:n.func,onVisualAid:n.func,onSkinLoadError:n.func,onThemeLoadError:n.func,onModelLoadError:n.func,onPluginLoadError:n.func,onIconsLoadError:n.func,onLanguageLoadError:n.func,onScriptsLoad:n.func,onScriptsLoadError:n.func},W=T({apiKey:n.string,id:n.string,inline:n.bool,init:n.object,initialValue:n.string,onEditorChange:n.func,value:n.string,tagName:n.string,cloudChannel:n.string,plugins:n.oneOfType([n.string,n.array]),toolbar:n.oneOfType([n.string,n.array]),disabled:n.bool,textareaName:n.string,tinymceScriptSrc:n.oneOfType([n.string,n.arrayOf(n.string),n.arrayOf(n.shape({src:n.string,async:n.bool,defer:n.bool}))]),rollback:n.oneOfType([n.number,n.oneOf([!1])]),scriptLoading:n.shape({async:n.bool,defer:n.bool,delay:n.number})},N),_=function(t){return typeof t=="function"},I=function(t){return t in N},L=function(t){return t.substr(2)},q=function(t,r,o,e,i,s,c){var a=Object.keys(i).filter(I),u=Object.keys(s).filter(I),l=a.filter(function(f){return s[f]===void 0}),p=u.filter(function(f){return i[f]===void 0});l.forEach(function(f){var d=L(f),v=c[d];o(d,v),delete c[d]}),p.forEach(function(f){var d=e(t,f),v=L(f);c[v]=d,r(v,d)})},G=function(t,r,o,e,i){return q(i,t.on.bind(t),t.off.bind(t),function(s,c){return function(a){var u;return(u=s(c))===null||u===void 0?void 0:u(a,t)}},r,o,e)},j=0,M=function(t){var r=Date.now(),o=Math.floor(Math.random()*1e9);return j++,t+"_"+o+j+String(r)},B=function(t){return t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input")},D=function(t){return typeof t>"u"||t===""?[]:Array.isArray(t)?t:t.split(" ")},$=function(t,r){return D(t).concat(D(r))},J=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},Y=function(t){if(!("isConnected"in Node.prototype)){for(var r=t,o=t.parentNode;o!=null;)r=o,o=r.parentNode;return r===t.ownerDocument}return t.isConnected},P=function(t,r){t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(r):t.setMode(r))},w=globalThis&&globalThis.__assign||function(){return w=Object.assign||function(t){for(var r,o=1,e=arguments.length;o<e;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},w.apply(this,arguments)},Q=function(t,r,o){var e,i,s=t.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=r.id,s.src=r.src,s.async=(e=r.async)!==null&&e!==void 0?e:!1,s.defer=(i=r.defer)!==null&&i!==void 0?i:!1;var c=function(){s.removeEventListener("load",c),s.removeEventListener("error",a),o(r.src)},a=function(u){s.removeEventListener("load",c),s.removeEventListener("error",a),o(r.src,u)};s.addEventListener("load",c),s.addEventListener("error",a),t.head&&t.head.appendChild(s)},X=function(t){var r={},o=function(c,a){var u=r[c];u.done=!0,u.error=a;for(var l=0,p=u.handlers;l<p.length;l++){var f=p[l];f(c,a)}u.handlers=[]},e=function(c,a,u){var l=function(b){return u!==void 0?u(b):console.error(b)};if(c.length===0){l(new Error("At least one script must be provided"));return}for(var p=0,f=!1,d=function(b,O){f||(O?(f=!0,l(O)):++p===c.length&&a())},v=0,h=c;v<h.length;v++){var g=h[v],y=r[g.src];if(y)y.done?d(g.src,y.error):y.handlers.push(d);else{var m=M("tiny-");r[g.src]={id:m,src:g.src,done:!1,error:null,handlers:[d]},Q(t,w({id:m},g),o)}}},i=function(){for(var c,a=0,u=Object.values(r);a<u.length;a++){var l=u[a],p=t.getElementById(l.id);p!=null&&p.tagName==="SCRIPT"&&((c=p.parentNode)===null||c===void 0||c.removeChild(p))}r={}},s=function(){return t};return{loadScripts:e,deleteScripts:i,getDocument:s}},Z=function(){var t=[],r=function(i){var s=t.find(function(c){return c.getDocument()===i});return s===void 0&&(s=X(i),t.push(s)),s},o=function(i,s,c,a,u){var l=function(){return r(i).loadScripts(s,a,u)};c>0?setTimeout(l,c):l()},e=function(){for(var i=t.pop();i!=null;i=t.pop())i.deleteScripts()};return{loadList:o,reinitialize:e}},ee=Z(),k=function(t){var r=t;return r&&r.tinymce?r.tinymce:null},ne=globalThis&&globalThis.__extends||function(){var t=function(r,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])},t(r,o)};return function(r,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");t(r,o);function e(){this.constructor=r}r.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}}(),S=globalThis&&globalThis.__assign||function(){return S=Object.assign||function(t){for(var r,o=1,e=arguments.length;o<e;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},S.apply(this,arguments)},te=function(t){ne(r,t);function r(o){var e=this,i,s,c;return e=t.call(this,o)||this,e.rollbackTimer=void 0,e.valueCursor=void 0,e.rollbackChange=function(){var a=e.editor,u=e.props.value;a&&u&&u!==e.currentContent&&a.undoManager.ignore(function(){if(a.setContent(u),e.valueCursor&&(!e.inline||a.hasFocus()))try{a.selection.moveToBookmark(e.valueCursor)}catch{}}),e.rollbackTimer=void 0},e.handleBeforeInput=function(a){if(e.props.value!==void 0&&e.props.value===e.currentContent&&e.editor&&(!e.inline||e.editor.hasFocus()))try{e.valueCursor=e.editor.selection.getBookmark(3)}catch{}},e.handleBeforeInputSpecial=function(a){(a.key==="Enter"||a.key==="Backspace"||a.key==="Delete")&&e.handleBeforeInput(a)},e.handleEditorChange=function(a){var u=e.editor;if(u&&u.initialized){var l=u.getContent();e.props.value!==void 0&&e.props.value!==l&&e.props.rollback!==!1&&(e.rollbackTimer||(e.rollbackTimer=window.setTimeout(e.rollbackChange,typeof e.props.rollback=="number"?e.props.rollback:200))),l!==e.currentContent&&(e.currentContent=l,_(e.props.onEditorChange)&&e.props.onEditorChange(l,u))}},e.handleEditorChangeSpecial=function(a){(a.key==="Backspace"||a.key==="Delete")&&e.handleEditorChange(a)},e.initialise=function(a){var u,l,p;a===void 0&&(a=0);var f=e.elementRef.current;if(f){if(!Y(f)){if(a===0)setTimeout(function(){return e.initialise(1)},1);else if(a<100)setTimeout(function(){return e.initialise(a+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var d=k(e.view);if(!d)throw new Error("tinymce should have been loaded into global scope");var v=S(S({},e.props.init),{selector:void 0,target:f,readonly:e.props.disabled,inline:e.inline,plugins:$((u=e.props.init)===null||u===void 0?void 0:u.plugins,e.props.plugins),toolbar:(l=e.props.toolbar)!==null&&l!==void 0?l:(p=e.props.init)===null||p===void 0?void 0:p.toolbar,setup:function(h){e.editor=h,e.bindHandlers({}),e.inline&&!B(f)&&h.once("PostRender",function(g){h.setContent(e.getInitialValue(),{no_events:!0})}),e.props.init&&_(e.props.init.setup)&&e.props.init.setup(h)},init_instance_callback:function(h){var g,y,m=e.getInitialValue();e.currentContent=(g=e.currentContent)!==null&&g!==void 0?g:h.getContent(),e.currentContent!==m&&(e.currentContent=m,h.setContent(m),h.undoManager.clear(),h.undoManager.add(),h.setDirty(!1));var b=(y=e.props.disabled)!==null&&y!==void 0?y:!1;P(e.editor,b?"readonly":"design"),e.props.init&&_(e.props.init.init_instance_callback)&&e.props.init.init_instance_callback(h)}});e.inline||(f.style.visibility=""),B(f)&&(f.value=e.getInitialValue()),d.init(v)}},e.id=e.props.id||M("tiny-react"),e.elementRef=C.createRef(),e.inline=(c=(i=e.props.inline)!==null&&i!==void 0?i:(s=e.props.init)===null||s===void 0?void 0:s.inline)!==null&&c!==void 0?c:!1,e.boundHandlers={},e}return Object.defineProperty(r.prototype,"view",{get:function(){var o,e;return(e=(o=this.elementRef.current)===null||o===void 0?void 0:o.ownerDocument.defaultView)!==null&&e!==void 0?e:window},enumerable:!1,configurable:!0}),r.prototype.componentDidUpdate=function(o){var e=this,i,s;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(o),this.editor.initialized)){if(this.currentContent=(i=this.currentContent)!==null&&i!==void 0?i:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==o.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var c=this.editor;c.undoManager.transact(function(){var u;if(!e.inline||c.hasFocus())try{u=c.selection.getBookmark(3)}catch{}var l=e.valueCursor;if(c.setContent(e.props.value),!e.inline||c.hasFocus())for(var p=0,f=[u,l];p<f.length;p++){var d=f[p];if(d)try{c.selection.moveToBookmark(d),e.valueCursor=d;break}catch{}}})}if(this.props.disabled!==o.disabled){var a=(s=this.props.disabled)!==null&&s!==void 0?s:!1;P(this.editor,a?"readonly":"design")}}},r.prototype.componentDidMount=function(){var o=this,e,i,s,c,a;if(k(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(i=(e=this.props).onScriptsLoadError)===null||i===void 0||i.call(e,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((s=this.elementRef.current)===null||s===void 0)&&s.ownerDocument){var u=function(){var p,f;(f=(p=o.props).onScriptsLoad)===null||f===void 0||f.call(p),o.initialise()},l=function(p){var f,d;(d=(f=o.props).onScriptsLoadError)===null||d===void 0||d.call(f,p)};ee.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(a=(c=this.props.scriptLoading)===null||c===void 0?void 0:c.delay)!==null&&a!==void 0?a:0,u,l)}},r.prototype.componentWillUnmount=function(){var o=this,e=this.editor;e&&(e.off(this.changeEvents(),this.handleEditorChange),e.off(this.beforeInputEvent(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(i){e.off(i,o.boundHandlers[i])}),this.boundHandlers={},e.remove(),this.editor=void 0)},r.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},r.prototype.changeEvents=function(){var o,e,i,s=(i=(e=(o=k(this.view))===null||o===void 0?void 0:o.Env)===null||e===void 0?void 0:e.browser)===null||i===void 0?void 0:i.isIE();return s?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},r.prototype.beforeInputEvent=function(){return J()?"beforeinput SelectionChange":"SelectionChange"},r.prototype.renderInline=function(){var o=this.props.tagName,e=o===void 0?"div":o;return C.createElement(e,{ref:this.elementRef,id:this.id})},r.prototype.renderIframe=function(){return C.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},r.prototype.getScriptSources=function(){var o,e,i=(o=this.props.scriptLoading)===null||o===void 0?void 0:o.async,s=(e=this.props.scriptLoading)===null||e===void 0?void 0:e.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:i,defer:s}]:this.props.tinymceScriptSrc.map(function(l){return typeof l=="string"?{src:l,async:i,defer:s}:l});var c=this.props.cloudChannel,a=this.props.apiKey?this.props.apiKey:"no-api-key",u="https://cdn.tiny.cloud/1/".concat(a,"/tinymce/").concat(c,"/tinymce.min.js");return[{src:u,async:i,defer:s}]},r.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},r.prototype.bindHandlers=function(o){var e=this;if(this.editor!==void 0){G(this.editor,o,this.props,this.boundHandlers,function(a){return e.props[a]});var i=function(a){return a.onEditorChange!==void 0||a.value!==void 0},s=i(o),c=i(this.props);!s&&c?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):s&&!c&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},r.propTypes=W,r.defaultProps={cloudChannel:"6"},r}(C.Component);function ae(){const t=C.useRef(null),r=()=>{t.current&&console.log(t.current.getContent())};return E.jsxs(H,{children:[E.jsx("h1",{className:"text-center mb-5 text-emerald-400 text-4xl font-bold",children:"Create Blog!"}),E.jsx(te,{apiKey:"635e0ycpjcgptrtk9kkzm8g6qv6weu3v54388hzb83b8fj7o",onInit:(o,e)=>t.current=e,initialValue:"<p></p>",init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help |styles ",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:30px }"}}),E.jsx(A,{onClick:r,children:"Log editor content"})]})}export{ae as default};

import{d as pe,y as ye}from"./framework.DkFL-jqo.js";var k={};(function A(g,p,T,C){var I=!!(g.Worker&&g.Blob&&g.Promise&&g.OffscreenCanvas&&g.OffscreenCanvasRenderingContext2D&&g.HTMLCanvasElement&&g.HTMLCanvasElement.prototype.transferControlToOffscreen&&g.URL&&g.URL.createObjectURL),L=typeof Path2D=="function"&&typeof DOMMatrix=="function",H=function(){if(!g.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var a=r.transferToImageBitmap();try{e.createPattern(a,"no-repeat")}catch{return!1}return!0}();function N(){}function x(r){var e=p.exports.Promise,a=e!==void 0?e:g.Promise;return typeof a=="function"?new a(r):(r(N,N),null)}var P=function(r,e){return{transform:function(a){if(r)return a;if(e.has(a))return e.get(a);var t=new OffscreenCanvas(a.width,a.height),o=t.getContext("2d");return o.drawImage(a,0,0),e.set(a,t),t},clear:function(){e.clear()}}}(H,new Map),S=function(){var r=Math.floor(16.666666666666668),e,a,t={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var l=Math.random();return t[l]=requestAnimationFrame(function n(s){o===s||o+r-1<s?(o=s,delete t[l],i()):t[l]=requestAnimationFrame(n)}),l},a=function(i){t[i]&&cancelAnimationFrame(t[i])}):(e=function(i){return setTimeout(i,r)},a=function(i){return clearTimeout(i)}),{frame:e,cancel:a}}(),Z=function(){var r,e,a={};function t(o){function i(l,n){o.postMessage({options:l||{},callback:n})}o.init=function(n){var s=n.transferControlToOffscreen();o.postMessage({canvas:s},[s])},o.fire=function(n,s,u){if(e)return i(n,null),e;var d=Math.random().toString(36).slice(2);return e=x(function(h){function f(m){m.data.callback===d&&(delete a[d],o.removeEventListener("message",f),e=null,P.clear(),u(),h())}o.addEventListener("message",f),i(n,d),a[d]=f.bind(null,{data:{callback:d}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var n in a)a[n](),delete a[n]}}return function(){if(r)return r;if(!T&&I){var o=["var CONFETTI, SIZE = {}, module = {};","("+A.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([o])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}t(r)}return r}}(),q={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function G(r,e){return e?e(r):r}function J(r){return r!=null}function v(r,e,a){return G(r&&J(r[e])?r[e]:q[e],a)}function K(r){return r<0?0:Math.floor(r)}function Q(r,e){return Math.floor(Math.random()*(e-r))+r}function B(r){return parseInt(r,16)}function X(r){return r.map(Y)}function Y(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:B(e.substring(0,2)),g:B(e.substring(2,4)),b:B(e.substring(4,6))}}function $(r){var e=v(r,"origin",Object);return e.x=v(e,"x",Number),e.y=v(e,"y",Number),e}function ee(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function re(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ae(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function ne(r,e,a,t,o,i,l,n,s){r.save(),r.translate(e,a),r.rotate(i),r.scale(t,o),r.arc(0,0,1,l,n,s),r.restore()}function te(r){var e=r.angle*(Math.PI/180),a=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function oe(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,t=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",r.beginPath(),L&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(le(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(i-t)*.1,Math.abs(l-o)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var n=Math.PI/10*e.wobble,s=Math.abs(i-t)*.1,u=Math.abs(l-o)*.1,d=e.shape.bitmap.width*e.scalar,h=e.shape.bitmap.height*e.scalar,f=new DOMMatrix([Math.cos(n)*s,Math.sin(n)*s,-Math.sin(n)*u,Math.cos(n)*u,e.x,e.y]);f.multiplySelf(new DOMMatrix(e.shape.matrix));var m=r.createPattern(P.transform(e.shape.bitmap),"no-repeat");m.setTransform(f),r.globalAlpha=1-a,r.fillStyle=m,r.fillRect(e.x-d/2,e.y-h/2,d,h),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(i-t)*e.ovalScalar,Math.abs(l-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):ne(r,e.x,e.y,Math.abs(i-t)*e.ovalScalar,Math.abs(l-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var c=Math.PI/2*3,M=4*e.scalar,y=8*e.scalar,b=e.x,F=e.y,E=5,w=Math.PI/E;E--;)b=e.x+Math.cos(c)*y,F=e.y+Math.sin(c)*y,r.lineTo(b,F),c+=w,b=e.x+Math.cos(c)*M,F=e.y+Math.sin(c)*M,r.lineTo(b,F),c+=w;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(o)),r.lineTo(Math.floor(i),Math.floor(l)),r.lineTo(Math.floor(t),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function ie(r,e,a,t,o){var i=e.slice(),l=r.getContext("2d"),n,s,u=x(function(d){function h(){n=s=null,l.clearRect(0,0,t.width,t.height),P.clear(),o(),d()}function f(){T&&!(t.width===C.width&&t.height===C.height)&&(t.width=r.width=C.width,t.height=r.height=C.height),!t.width&&!t.height&&(a(r),t.width=r.width,t.height=r.height),l.clearRect(0,0,t.width,t.height),i=i.filter(function(m){return oe(l,m)}),i.length?n=S.frame(f):h()}n=S.frame(f),s=h});return{addFettis:function(d){return i=i.concat(d),u},canvas:r,promise:u,reset:function(){n&&S.cancel(n),s&&s()}}}function W(r,e){var a=!r,t=!!v(e||{},"resize"),o=!1,i=v(e,"disableForReducedMotion",Boolean),l=I&&!!v(e||{},"useWorker"),n=l?Z():null,s=a?ee:re,u=r&&n?!!r.__confetti_initialized:!1,d=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,h;function f(c,M,y){for(var b=v(c,"particleCount",K),F=v(c,"angle",Number),E=v(c,"spread",Number),w=v(c,"startVelocity",Number),ue=v(c,"decay",Number),he=v(c,"gravity",Number),de=v(c,"drift",Number),j=v(c,"colors",X),fe=v(c,"ticks",Number),U=v(c,"shapes"),ve=v(c,"scalar"),me=!!v(c,"flat"),z=$(c),_=b,R=[],ge=r.width*z.x,Me=r.height*z.y;_--;)R.push(te({x:ge,y:Me,angle:F,spread:E,startVelocity:w,color:j[_%j.length],shape:U[Q(0,U.length)],ticks:fe,decay:ue,gravity:he,drift:de,scalar:ve,flat:me}));return h?h.addFettis(R):(h=ie(r,R,s,M,y),h.promise)}function m(c){var M=i||v(c,"disableForReducedMotion",Boolean),y=v(c,"zIndex",Number);if(M&&d)return x(function(w){w()});a&&h?r=h.canvas:a&&!r&&(r=ae(y),document.body.appendChild(r)),t&&!u&&s(r);var b={width:r.width,height:r.height};n&&!u&&n.init(r),u=!0,n&&(r.__confetti_initialized=!0);function F(){if(n){var w={getBoundingClientRect:function(){if(!a)return r.getBoundingClientRect()}};s(w),n.postMessage({resize:{width:w.width,height:w.height}});return}b.width=b.height=null}function E(){h=null,t&&(o=!1,g.removeEventListener("resize",F)),a&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,u=!1)}return t&&!o&&(o=!0,g.addEventListener("resize",F,!1)),n?n.fire(c,b,E):f(c,b,E)}return m.reset=function(){n&&n.reset(),h&&h.reset()},m}var O;function D(){return O||(O=W(null,{useWorker:!0,resize:!0})),O}function le(r,e,a,t,o,i,l){var n=new Path2D(r),s=new Path2D;s.addPath(n,new DOMMatrix(e));var u=new Path2D;return u.addPath(s,new DOMMatrix([Math.cos(l)*o,Math.sin(l)*o,-Math.sin(l)*i,Math.cos(l)*i,a,t])),u}function se(r){if(!L)throw new Error("path confetti are not supported in this browser");var e,a;typeof r=="string"?e=r:(e=r.path,a=r.matrix);var t=new Path2D(e),o=document.createElement("canvas"),i=o.getContext("2d");if(!a){for(var l=1e3,n=l,s=l,u=0,d=0,h,f,m=0;m<l;m+=2)for(var c=0;c<l;c+=2)i.isPointInPath(t,m,c,"nonzero")&&(n=Math.min(n,m),s=Math.min(s,c),u=Math.max(u,m),d=Math.max(d,c));h=u-n,f=d-s;var M=10,y=Math.min(M/h,M/f);a=[y,0,0,y,-Math.round(h/2+n)*y,-Math.round(f/2+s)*y]}return{type:"path",path:e,matrix:a}}function ce(r){var e,a=1,t="#000000",o='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,a="scalar"in r?r.scalar:a,o="fontFamily"in r?r.fontFamily:o,t="color"in r?r.color:t);var i=10*a,l=""+i+"px "+o,n=new OffscreenCanvas(i,i),s=n.getContext("2d");s.font=l;var u=s.measureText(e),d=Math.ceil(u.actualBoundingBoxRight+u.actualBoundingBoxLeft),h=Math.ceil(u.actualBoundingBoxAscent+u.actualBoundingBoxDescent),f=2,m=u.actualBoundingBoxLeft+f,c=u.actualBoundingBoxAscent+f;d+=f+f,h+=f+f,n=new OffscreenCanvas(d,h),s=n.getContext("2d"),s.font=l,s.fillStyle=t,s.fillText(e,m,c);var M=1/a;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[M,0,0,M,-d*M/2,-h*M/2]}}p.exports=function(){return D().apply(this,arguments)},p.exports.reset=function(){D().reset()},p.exports.create=W,p.exports.shapeFromPath=se,p.exports.shapeFromText=ce})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),k,!1);const V=k.exports;k.exports.create;const we=pe({__name:"EscookConfetti",setup(A){ye(()=>{window.addEventListener("click",p=>{const T=p.clientX/(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),C=p.clientY/(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight);g(T,C)})});const g=(p,T)=>{var C={spread:360,ticks:50,gravity:0,decay:.94,startVelocity:10,colors:["FFE400","FFBD00","E89400","FFCA6C","FDFFB8"],origin:{x:p,y:T}};function I(){V({...C,particleCount:4,scalar:1.2,shapes:["star"]}),V({...C,particleCount:10,scalar:.75,shapes:["circle"]})}setTimeout(I,0),setTimeout(I,50),setTimeout(I,100)};return(p,T)=>null}});export{we as default};

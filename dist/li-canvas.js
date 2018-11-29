var LiCanvas=function(){"use strict";var t="SET_BACKGROUND_COLOR",o="DRAW_BACKGROUND_IMAGE",n="DRAW_IMAGE_TASK",e="DRAW_TEXT_TASK",i=function(t){return Object.prototype.toString.call(t)==Object.prototype.toString.call([])},a=function(t){return Object.prototype.toString.call(t)==Object.prototype.toString.call({})},r=function(t){return Object.prototype.toString.call(t)==Object.prototype.toString.call("a")};function c(t,o,n){var e=new Image;e.setAttribute("crossOrigin","Anonymous"),e.src=o.src,e.onload=function(){o.hasOwnProperty("borderRadius")?function(t,o,n,e,i,a,r){var c=Math.min(r,i/2,a/2);t.ctx.save(),t.ctx.beginPath(),t.ctx.moveTo(n,e+c),t.ctx.arcTo(n,e,n+c,e,c),t.ctx.lineTo(n+i-c,e),t.ctx.arcTo(n+i,e,n+i,e+c,c),t.ctx.lineTo(n+i,e+a-c),t.ctx.arcTo(n+i,e+a,n+i-c,e+a,c),t.ctx.lineTo(n+c,e+a),t.ctx.arcTo(n,e+a,n,e+a-c,c),t.ctx.lineTo(n,e+c),t.ctx.clip(),t.ctx.drawImage(o,n,e,i,a),t.ctx.restore()}(t,e,o.x,o.y,o.width,o.height,o.borderRadius):t.ctx.drawImage(e,o.x,o.y,o.width,o.height),"function"==typeof n&&n.call(t)}}function s(t,o,n){n.hasOwnProperty("x")&&(t.fontStartX=n.x),n.hasOwnProperty("y")&&(t.fontStartY=n.y);var e=void 0;e=n.hasOwnProperty("width")?n.width:"horizontal"==n.textDirection?t.canvasWidth-t.fontStartX:t.canvasHeight-t.fontStartY,t.ctx.font=[n.fontStyle,n.fontWeight,n.fontSize+"px",n.fontFamily].join(" "),t.ctx.fillStyle=n.color,t.ctx.textBaseline="top","horizontal"==n.textDirection?function(t,o,n,e){for(var i="",a=[],r=0;r<o.length;r++)i+=o[r],(t.ctx.measureText(i).width>=n||r==o.length-1)&&(a.push(i),i="");for(var c=0;c<a.length;c++)t.ctx.fillText(a[c],Math.floor(t.fontStartX),Math.floor(t.fontStartY)),c<a.length-1?t.fontStartY+=e.lineHeight:t.fontStartY+=e.fontSize+e.marginBottom}(t,o,e,n):function(t,o,n,e){for(var i="",a=[],r=0;r<o.length;r++)i+=o[r],(t.ctx.measureText(i).width>=n||r==o.length-1)&&(a.push(i),i="");for(var c=0;c<a.length;c++){for(var s=a[c],f=t.fontStartY,l=0;l<s.length;l++)t.ctx.fillText(s[l],Math.floor(t.fontStartX),Math.floor(t.fontStartY)),t.fontStartY+=e.fontSize;t.fontStartY=f,c<a.length-1?"ltr"==e.rowDirection?t.fontStartX+=e.lineHeight:t.fontStartX-=e.lineHeight:"ltr"==e.rowDirection?t.fontStartX+=e.fontSize+e.marginBottom:t.fontStartX-=e.fontSize+e.marginBottom}}(t,o,e,n)}function f(t,o,n){t.tasks.push({type:o,params:n})}var l=new Array;l[n]=function(t,o,n){c(t,o,n)},l[e]=function(t,o,n){!function(t,o){var n=o.text,e=o.style;if(r(n)){var c=Object.assign({},t.fontStyle,e);s(t,n,c)}else if(i(n))n.forEach(function(o,n){if(r(o)){var i=Object.assign({},t.fontStyle,e);s(t,o,i),0==n&&(delete e.x,delete e.y)}else if(a(o)){var c=Object.assign({},t.fontStyle,e,o);s(t,o.text,c),0==n&&(delete e.x,delete e.y)}});else if(a(n)){var f=Object.assign({},t.fontStyle,e,n);s(t,n.text,f)}}(t,o),n()},l[t]=function(t,o,n){!function(t,o,n){var e=o.backgroundColor;t.ctx.fillStyle=e,t.ctx.fillRect(0,0,t.canvasWidth,t.canvasHeight),"function"==typeof n&&n.call(t)}(t,o,n)},l[o]=function(t,o,n){!function(t,o,n){var e=o.backgroundImage,i=o.backgroundRepeat,a=new Image;a.setAttribute("crossOrigin","Anonymous"),a.src=e,a.onload=function(){var o=t.ctx.createPattern(a,i);t.ctx.fillStyle=o,t.ctx.fillRect(0,0,t.canvasWidth,t.canvasHeight),"function"==typeof n&&n.call(t)}}(t,o,n)};var h={backgroundColor:"#ffffff",fontStyle:{x:0,y:0,fontSize:14,fontStyle:"normal",fontWeight:"normal",fontFamily:"PingFangSC-Regular,'Microsoft YaHei',SimSun,Arial,'Helvetica Neue',sans-serif",lineHeight:20,color:"black",marginBottom:10,textDirection:"horizontal",rowDirection:"ltr"},backgroundImage:"",backgroundRepeat:"repeat"};function g(t,o){!function(t,o){var n=document.createElement("a");n.href=o,n.download=t.saveFileName,n.click()}(t,function(t,o){return t.canvas.toDataURL(o)}(t,o=function(t){return"image/"+(t=(t=t.toLowerCase().replace(/jpg/i,"jpeg")).match(/png|jpeg|gif/)[0])}(o)))}function u(t,o){if(!(this instanceof u))throw new Error("LiCanvas 必须通过new关键词进行实例化");this._init(t,o)}return function(n){n.prototype._init=function(n,e){e.fontStyle=Object.assign({},h.fontStyle,e.fontStyle),this.options=Object.assign({},h,e),this.canvas=document.getElementById(n),this.ctx=this.canvas.getContext("2d"),this.options.width&&(this.canvas.width=this.options.width),this.canvasWidth=this.canvas.width,this.options.height&&(this.canvas.height=this.options.height),this.canvasHeight=this.canvas.height,this.tasks=new Array,this.fontStyle=this.options.fontStyle,this.fontStartX=this.options.fontStyle.x,this.fontStartY=this.options.fontStyle.y,delete this.fontStyle.x,delete this.fontStyle.y,this.options.backgroundColor&&f(this,t,{backgroundColor:this.options.backgroundColor}),this.options.backgroundImage&&f(this,o,{backgroundImage:this.options.backgroundImage,backgroundRepeat:this.options.backgroundRepeat})}}(u),function(e){e.prototype.addDrawImageTask=function(t){var o=this;if(i(t))t.forEach(function(t){f(o,n,t)});else{if(!a(t))throw new Error("addDrawImageTask 参数只支持对象或数组");f(this,n,t)}},e.prototype.addSetBackgroundTask=function(n){var e=n.backgroundColor,i=void 0===e?"":e,a=n.backgroundImage,r=void 0===a?"":a,c=n.backgroundRepeat,s=void 0===c?"repeat":c;i&&f(this,t,{backgroundColor:i}),r&&f(this,o,{backgroundImage:r,backgroundRepeat:s})}}(u),function(t){t.prototype.addDrawTextTask=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,e,{text:t,style:o})}}(u),function(t){t.prototype.draw=function(){!function(t,o){0!=t.tasks.length?function n(){var e=t.tasks.shift();e?l[e.type](t,e.params,n):"function"==typeof o&&o()}():"function"==typeof o&&o()}(this,arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")},t.prototype.getImageData=function(){return this.canvas.toDataURL("image/png")},t.prototype.saveToPng=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lee-canvas";this.saveFileName=t+".png",g(this,"png")},t.prototype.saveToJpeg=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lee-canvas";this.saveFileName=t+".jpeg",g(this,"jpeg")},t.prototype.saveToGif=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lee-canvas";this.saveFileName=t+".gif",g(this,"gif")}}(u),u}();
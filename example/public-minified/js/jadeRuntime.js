/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */
define([],function(){var a=function(a){return Array.isArray||(Array.isArray=function(a){return"[object Array]"==Object.prototype.toString.call(a)}),Object.keys||(Object.keys=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b}),a.attrs=function(c,d){var e=[],f=c.terse;delete c.terse;var g=Object.keys(c),h=g.length;if(h){e.push("");for(var i=0;i<h;++i){var j=g[i],k=c[j];"boolean"==typeof k||null==k?k&&(f?e.push(j):e.push(j+'="'+j+'"')):0==j.indexOf("data")&&"string"!=typeof k?e.push(j+"='"+JSON.stringify(k)+"'"):"class"==j&&Array.isArray(k)?e.push(j+'="'+a.escape(k.join(" "))+'"'):d[j]?e.push(j+'="'+a.escape(k)+'"'):e.push(j+'="'+k+'"')}}return e.join(" ")},a.escape=function(b){return String(b).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},a.rethrow=function(b,c,d){if(!c)throw b;var e=3,f=require("fs").readFileSync(c,"utf8"),g=f.split("\n"),h=Math.max(d-e,0),i=Math.min(g.length,d+e),e=g.slice(h,i).map(function(a,b){var c=b+h+1;return(c==d?"  > ":"    ")+c+"| "+a}).join("\n");throw b.path=c,b.message=(c||"Jade")+":"+d+"\n"+e+"\n\n"+b.message,b},a}({});return a})
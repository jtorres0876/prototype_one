/*
 * jPlayer Player Plugin for Popcorn JavaScript Library
 * http://www.jplayer.org
 *
 * Copyright (c) 2013 Happyworm Ltd
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 *
 * Author: Mark J Panaghiston
 * Version: 1.1.1
 * Date: 5th June 2013
 *
 * For Popcorn Version: 1.3
 * For jPlayer Version: 2.4.0
 * Requires: jQuery 1.3.2+
 * Note: jQuery dependancy cannot be removed since jPlayer 2 is a jQuery plugin. Use of jQuery will be kept to a minimum.
 */
!function(e){var t="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js",o="http://www.jplayer.org/2.4.0/js/jquery.jplayer.min.js",a="http://www.jplayer.org/2.4.0/js/Jplayer.swf",n="html,flash",r=!1,i=!1,s=!1,l={mp3:{codec:'audio/mpeg; codecs="mp3"',flashCanPlay:!0,media:"audio"},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',flashCanPlay:!0,media:"audio"},oga:{codec:'audio/ogg; codecs="vorbis"',flashCanPlay:!1,media:"audio"},wav:{codec:'audio/wav; codecs="1"',flashCanPlay:!1,media:"audio"},webma:{codec:'audio/webm; codecs="vorbis"',flashCanPlay:!1,media:"audio"},fla:{codec:"audio/x-flv",flashCanPlay:!0,media:"audio"},rtmpa:{codec:'audio/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"audio"},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!0,media:"video"},ogv:{codec:'video/ogg; codecs="theora, vorbis"',flashCanPlay:!1,media:"video"},webmv:{codec:'video/webm; codecs="vorbis, vp8"',flashCanPlay:!1,media:"video"},flv:{codec:"video/x-flv",flashCanPlay:!0,media:"video"},rtmpv:{codec:'video/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"video"}},d=function(e){return e&&"object"==typeof e&&e.hasOwnProperty?!0:!1},u=function(e){var t=!1;return/\.mp3$/i.test(e)?t="mp3":/\.mp4$/i.test(e)||/\.m4v$/i.test(e)?t="m4v":/\.m4a$/i.test(e)?t="m4a":/\.ogg$/i.test(e)||/\.oga$/i.test(e)?t="oga":/\.ogv$/i.test(e)?t="ogv":/\.webm$/i.test(e)&&(t="webmv"),t},c=function(e){var t="",o="";if(d(e))for(var a in e)e.hasOwnProperty(a)&&(t+=o+a,o=",");return r&&console.log('getSupplied(): Generated: supplied = "'+t+'"'),t};e.player("jplayer",{_canPlayType:function(e,t){var o,a=e.toLowerCase(),r={media:{},options:{}},i=!1;if("video"!==a&&"audio"!==a&&("string"==typeof t?/^http.*/i.test(t)&&(o=u(t),o&&(r.media[o]=t,r.options.solution=n,r.options.supplied=o)):r=t,d(r)&&d(r.media))){d(r.options)||(r.options={}),r.options.solution||(r.options.solution=n),r.options.supplied||(r.options.supplied=c(r.media));for(var s=r.options.solution.toLowerCase().split(","),p=r.options.supplied.toLowerCase().split(","),y=0;y<s.length;y++)for(var f,v=s[y].replace(/^\s+|\s+$/g,""),m="html"===v,g="flash"===v,P=0;P<p.length;P++)if(o=p[P].replace(/^\s+|\s+$/g,""),l[o]){!f&&m&&(f=document.createElement(l[o].media));var h=!!(f&&f.canPlayType&&f.canPlayType(l[o].codec)),j=h&&m,w=l[o].flashCanPlay&&g;(j||w)&&(i={html:j,type:o},y=s.length,P=p.length)}}return i},_setup:function(){var l,p,y=this,f="unknown",v={},m={},g=!1,P=0,h=null,j=!1,w=null,C=function(){g?(r&&console.log("Dispatched event : durationchange : "+P),y.dispatchEvent("durationchange")):(r&&console.log("DELAYED EVENT (!ready) : durationchange : "+P),clearTimeout(h),h=setTimeout(C,250))},b=function(){var e=function(e){e.jPlayer.status.duration!==P&&(P=e.jPlayer.status.duration,C())},t=function(e){j||100!==e.jPlayer.status.seekPercent||(j=!0,setTimeout(function(){r&&console.log("Trigger : canplaythrough"),p._trigger($.jPlayer.event.canplaythrough)},0))};l.bind($.jPlayer.event.loadstart,function(){setTimeout(function(){r&&console.log("Trigger : loadeddata"),p._trigger($.jPlayer.event.loadeddata)},0)}).bind($.jPlayer.event.progress,function(o){e(o),t(o)}).bind($.jPlayer.event.timeupdate,function(o){e(o),t(o)}).bind($.jPlayer.event.play,function(){setTimeout(function(){r&&console.log("Trigger : playing"),p._trigger($.jPlayer.event.playing)},0)}),r&&console.log("Created CUSTOM event handlers for FLASH")},T=function(){!function(t){l=t("#"+y.id),"string"==typeof y.src?(f=u(y.src),v[f]=y.src,m.supplied=f,m.solution=n):d(y.src)&&(v=d(y.src.media)?y.src.media:{},m=d(y.src.options)?y.src.options:{},m.solution=m.solution||n,m.supplied=m.supplied||c(y.src.media)),m.swfPath=m.swfPath||a,l.bind(t.jPlayer.event.ready,function(e){e.jPlayer.flash.used&&b(),t(this).jPlayer("setMedia",v).jPlayer("load")});var o=t.jPlayer.reservedEvent+" loadeddata durationchange",i=o.split(/\s+/g),s=function(e){l.bind(t.jPlayer.event[e],function(t){r&&console.log("Dispatched event: "+e+(t&&t.jPlayer?" ("+t.jPlayer.status.currentTime+"s)":"")),y.dispatchEvent(e)}),r&&console.log("Created event handler for: "+e)};for(var h in t.jPlayer.event)if(t.jPlayer.event.hasOwnProperty(h)){var j=!0;for(var T in i)if(i.hasOwnProperty(T)&&i[T]===h){j=!1;break}j?s(h):r&&console.log("Skipped auto event handler creation for: "+h)}l.bind(t.jPlayer.event.loadeddata,function(e){r&&console.log("Dispatched event: loadeddata"+(e&&e.jPlayer?" ("+e.jPlayer.status.currentTime+"s)":"")),y.dispatchEvent("loadeddata"),g=!0}),r&&console.log("Created CUSTOM event handler for: loadeddata"),l.bind(t.jPlayer.event.durationchange,function(e){P=e.jPlayer.status.duration,C()}),r&&console.log("Created CUSTOM event handler for: durationchange"),l.bind(t.jPlayer.event.error,function(e){w=e.jPlayer.error,w.code=w.type===t.jPlayer.error.URL?4:0,r&&console.log("Dispatched event: error"),r&&console.dir(w),y.dispatchEvent("error")}),r&&console.log("Created CUSTOM event handler for: error"),e.player.defineProperty(y,"error",{set:function(){return w},get:function(){return w}}),e.player.defineProperty(y,"currentTime",{set:function(e){return p.status.paused?l.jPlayer("pause",e):l.jPlayer("play",e),e},get:function(){return p.status.currentTime}}),e.player.defineProperty(y,"duration",{set:function(){return g?P:0/0},get:function(){return g?P:0/0}}),e.player.defineProperty(y,"muted",{set:function(e){return l.jPlayer("mute",e),p.options.muted},get:function(){return p.options.muted}}),e.player.defineProperty(y,"volume",{set:function(e){return l.jPlayer("volume",e),p.options.volume},get:function(){return p.options.volume}}),e.player.defineProperty(y,"paused",{set:function(){return p.status.paused},get:function(){return p.status.paused}}),y.play=function(){l.jPlayer("play")},y.pause=function(){l.jPlayer("pause")},l.jPlayer(m),p=l.data("jPlayer")}(jQuery)},E=function(){jQuery.jPlayer?T():s?setTimeout(E,250):(s=!0,e.getScript(o,function(){s=!1,T()}))},S=function(){window.jQuery?E():i?setTimeout(S,250):(i=!0,e.getScript(t,function(){i=!1,E()}))};S()},_teardown:function(){jQuery("#"+this.id).jPlayer("destroy")}})}(Popcorn);
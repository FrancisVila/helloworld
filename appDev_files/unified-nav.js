!function(e,a){function t(e,a,t,n,i){var r,s;s=new XMLHttpRequest,r=setTimeout((function(){s.abort(),a(new Error("tinyxhr: aborted by a timeout"),"",s)}),1e4),s.onreadystatechange=function(){4==s.readyState&&(clearTimeout(r),a(200!=s.status&&new Error("tinyxhr: server response status is "+s.status),s.responseText,s))},s.open(t?t.toUpperCase():"GET",e,!0),s.withCredentials=!0,n?(s.setRequestHeader("Content-type",i||"application/x-www-form-urlencoded"),s.send(n)):s.send()}var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},i=Object.keys(n).concat(["'","`","!","@","$","%","(",")","=","+","{","}","[","]"]).join("\\");new RegExp("["+i+"]","g");var r,s,o,c,l,p,d,f,h={data:{},loggedIn:!1,callbacks:{header:[],footer:[],css:[]}},u=~location.href.indexOf("platform.axway.com")?"":"?redirect="+encodeURIComponent(location.href),m={get:function(e,a){t("https://platform.axway.com/api/v1/"+e,(function(e,t,n){m.handleXhrResponse(e,t,n,a)}))},post:function(e,a,n){t("https://platform.axway.com/api/v1/"+e,(function(e,a,t){m.handleXhrResponse(e,a,t,n)}),"post",JSON.stringify(a),"application/javascript")},put:function(e,a,n){t("https://platform.axway.com/api/v1/"+e,(function(e,a,t){m.handleXhrResponse(e,a,t,n)}),"put",JSON.stringify(a),"application/json")},delete:function(e,a,n){t("https://platform.axway.com/api/v1/"+e,(function(e,a,t){m.handleXhrResponse(e,a,t,n)}),"delete",JSON.stringify(a),"application/javascript")},handleXhrResponse:function(e,a,t,n){if(e)return m.handleError(e);try{return(a=JSON.parse(a)).success?n(a.result):m.handleError(a)}catch(e){return m.handleError(e)}},handleError:console.error},v=a.getElementsByTagName("head")[0],y=(JSON.parse("[]"),[]),w=~e.location.hash.indexOf("/auth/activate.confirm/"),g=!1;function x(){S(f,"active"),S(d,"active"),y.forEach((function(e){S(e,"active")})),S(r,"has-appc-unified-feed"),S(r,"has-appc-unified-scroll")}function b(e,t){var n=a.createElement(e);return t&&Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function C(e,a){return!!~e.className.split(" ").indexOf(a)}function k(e,a){if(!C(e,a)){var t=e.className.split(" ");t.push(a),e.className=t.join(" ")}}function S(e,a){e.className=e.className.replace(a,"").replace("  "," ").trim()}function A(e,a){C(e,a)?S(e,a):k(e,a)}function E(e){e.forEach((function(e){e()}))}function N(e){return"<div"+(e.id?' id="'+e.id+'"':"")+' class="appc-unified-dropdown '+(e.active?"active ":"")+(e.classes?e.classes:"")+'"><a href="#">'+e.label+' <i class="platform-icon-angle-down icon-xs"></i></a><div class="dropdown-menu">'+e.links.map((function(e){if(!e)return"";var a=e.textClasses?'<span class="'+e.textClasses+'">'+e.label+"</span>":e.label,t=e.classes||e.active?' class="'+(e.active?"active ":"")+(e.classes||"")+'"':"";return'<a href="'+e.href+'"'+(e.id?' id="'+e.id+'"':"")+t+">"+(e.icon?'<i class="'+e.icon+'"></i>':"")+a+"</a>"})).join("")+"</div></div>"}function L(a,t,n,i){C(t,"active")||setTimeout((function(){A(t,"active"),n&&A(a,"active"),i&&r.clientWidth<e.innerWidth&&(A(r,"has-appc-unified-feed"),k(r,"has-appc-unified-scroll"))}),0)}function M(e){var a=1===e.length&&"object"==typeof e[0]?e[0]:{label:e[0],href:e[1],active:e[2]};return!a.header&&!a.footer&&(a.header=!0),a}function T(e,a,t){return!("header"===e&&!s||"footer"===e&&!p)||(h.callbacks[e].push((function(){a.apply(null,t)})),!1)}function B(e,a){(a=a||{}).before||a.after||(a.footer?a.before=".pull-right":a.after=".pull-left > :last-child");let t=(a.footer?p:s).querySelector(a.before||a.after),n=a.after?t&&t.nextSibling:t,i=n?n.parentNode.insertBefore(e,n):t&&t.parentNode.appendChild(e);return i||console.error(new Error("Unable to locate the element `"+(a.before||a.after)+"` in the unified nav "+(a.footer?"footer.":"header."))),!!i}!a.querySelector('link[rel=stylesheet][href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"]')&&v.appendChild(b("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"})),v.appendChild(b("link",{rel:"stylesheet",type:"text/css",href:"https://d3ilu1xuwhtfe2.cloudfront.net/96e7b97/css/unified-nav.css",onload:function(){g=!0,s&&s.removeAttribute("style"),p&&p.removeAttribute("style"),E(h.callbacks.css)}})),e.Appc={render:function(){(r=a.getElementsByTagName("body")[0]).addEventListener("click",x),w&&(r.className+=" in-activation"),v.appendChild(b("script",{type:"text/javascript",async:!0,defer:!0,src:"https://platform.axway.com/analytics.js?intercom=true&hotjar=false&tour=false"})),function(){var e={id:"appc-unified-header"};g||(e.style="display: none");s=b("nav",e),o=b("div",{id:"appc-unified-header-nav"}),s.appendChild(o),c=b("div",{className:"float-left pull-left"});var a=b("a",{id:"appc-unified-header-home",href:"https://platform.axway.com/#/",innerHTML:'<i class="platform-icon-home icon-l"></i>'});f=b("a",{id:"appc-unified-header-toggle",href:"#",innerHTML:'<i id="appc-unified-header-logo" class="platform-icon-axway icon-nudge-down"></i>'+(w?"":'<i class="platform-icon-angle-down icon-xs"></i>')}),c.appendChild(a),c.appendChild(f),c.appendChild(b("span",{id:"appc-unified-header-sitename"})),o.appendChild(c),l=b("div",{className:"float-right pull-right"}),o.appendChild(l),t=r,n=s,t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),k(r,"has-appc-unified-header"),setTimeout((function(){E(h.callbacks.header)}),0);var t,n}(),function(){var e={id:"appc-unified-footer",innerHTML:'<div class="float-left pull-left"></div><div class="float-right pull-right"><a href="https://docs.axway.com/category/platform">Docs</a><a href="https://support.axway.com/">Support</a><a href="https://status.axway.com/">Status</a><a href="https://docs.axway.com/csh?context=222102509">Release Notes</a><a href="https://www.axway.com/en/axway-platform-terms-of-use">Terms</a></div>'};g||(e.style="display: none");p=b("footer",e),r.appendChild(p),k(r,"has-appc-unified-footer"),E(h.callbacks.footer)}()},afterHeaderRender:function(e){if("function"==typeof e)return s?void e():h.callbacks.header.push(e)},afterFooterRender:function(e){if("function"==typeof e)return p?void e():h.callbacks.footer.push(e)},afterCSSLoaded:function(e){if("function"==typeof e)return g?void e():h.callbacks.css.push(e)},addLink:function(){var e=M(arguments);if(T(e.header?"header":"footer",Appc.addLink,arguments)){var a=b("a",{innerHTML:e.label,href:e.href||"#",className:(e.active?"active ":"")+(e.classes||"")});return B(a,e)&&a}},addHeaderLink:function(){var e=M(arguments);return e.header=!0,Appc.addLink(e)},addFooterLink:function(){var e=M(arguments);return e.footer=!0,Appc.addLink(e)},setSitename:function(){var e=M(arguments);if(T("header",Appc.setSitename,arguments)){var a=document.getElementById("appc-unified-header-sitename"),t=b(e.href?"a":"span",{id:"appc-unified-header-sitename",href:e.href,innerHTML:e.label,className:(e.className||"")+" "+(e.active?"active":"")});a.parentNode.insertBefore(t,a),a.parentNode.removeChild(a)}},setActive:function(e){if(T("header",Appc.setActive,arguments)){var a;try{a=s.querySelector(e)}catch(e){}!a&&(a=s.querySelector('[href="'+e+'"]')),Appc.clearActive(),a&&k(a,"active")}},clearActive:function(e){if(T(e||"header",Appc.clearActive,arguments)){var a="footer"===e?p:s;a.querySelectorAll(".active").forEach((function(e){S(e,"active")}))}},addMenu:function(e){if(T("header",Appc.addMenu,arguments)){var a=b("div",{innerHTML:N(e)}).firstChild;if(B(a,e)){var t=a,n=t.firstChild,i=n.nextSibling;return y.push(i),n.addEventListener("click",(function(e){e.preventDefault(),L(this,i)})),a}}}},a.addEventListener("DOMContentLoaded",Appc.render),Appc.afterHeaderRender((function(){d=b("div",{id:"appc-unified-header-links",className:"role-none",innerHTML:'<div class="app-unified-header-links-section "><div><i class="platform-icon-pencil"></i>Create</div><span><a href="https://platform.axway.com/#/offerings?product=ai">Integration Builder</a><small>Build integrations between applications</small></span><span><a href="https://platform.axway.com/#/product/cli">App Builder</a><small>Build native mobile applications</small></span><span><a href="https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder.html">API Builder</a><small>Build APIs and Microservices</small></span></div><div class="app-unified-header-links-section "><div><i class="platform-icon-build"></i>Manage</div><span><a href="https://platform.axway.com/#/app">Dashboard</a><small>Monitor Applications and Backend Services</small></span><span><a href="https://platform.axway.com/#/offerings?product=ai">Central</a><small>Manage APIs and Services</small></span></div><div class="app-unified-header-links-section "><div><i class="platform-icon-location"></i>Explore</div><span><a href="https://platform.axway.com/#/offerings?product=ai">Unified Catalog</a><small>View published APIs and Services</small></span><span><a href="https://marketplace.axway.com/">Marketplace</a><small>Manage Service Accelerators</small></span><span><a href="https://www.syncplicity.com/">Syncplicity</a><small>Manage shared files and folders</small></span></div><div class="app-unified-header-links-section section-support-learning"><div><i class="platform-icon-bulb"></i>Support & Learning</div><span><a href="https://support.axway.com/">Support</a></span><span><a href="https://docs.axway.com/category/platform">Documentation</a></span><span><a href="https://community.axway.com/">Community</a></span><span><a href="https://devblog.axway.com/">Developer Blog</a></span><span><a href="https://developer.axway.com/">Developer Portal</a></span><span><a href="https://www.axway.com/" class="has-icon"><i class="platform-icon-axway"></i>Axway.com</a></span></div>'}),s.appendChild(d),!w&&f.addEventListener("click",(function(e){e.preventDefault(),L(this,d,!0)}))})),Appc.afterHeaderRender((function(){l&&l.appendChild(b("a",{id:"appc-unified-get-started",href:"https://platform.axway.com/signup",innerHTML:"Get started for FREE!"})),l&&l.appendChild(b("a",{id:"appc-sign-in",href:"https://platform.axway.com/"+u,innerHTML:"Sign In"}))}))}(window,document);
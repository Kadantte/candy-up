function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,m=!1;function p(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:p(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[a]+1;const i=a+1;n[i]=t,r=Math.max(i,r)}const o=[],a=[];let i=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);i>=t;i--)a.push(e[i]);i--}for(;i>=0;i--)a.push(e[i]);o.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(a[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function A(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:N(t,s,e[s])}function P(t){return Array.from(t.childNodes)}function L(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,s,r=!1){L(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function k(t,e,n,s){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function C(t,e,n){return k(t,e,n,y)}function O(t,e,n){return k(t,e,n,w)}function H(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return H(t," ")}function D(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function M(t){const e=D(t,"HTML_TAG_START",0),n=D(t,"HTML_TAG_END",e);if(e===n)return new K;L(t);const s=t.splice(e,n+1);$(s[0]),$(s[s.length-1]);const r=s.slice(1,s.length-1);for(const e of r)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(r)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=A(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=A(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),$(n)}}function B(t,e=document.body){return Array.from(e.querySelectorAll(t))}class K extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=y(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function J(t){h=t}function V(){if(!h)throw new Error("Function called outside component initialization");return h}function W(t){V().$$.on_mount.push(t)}function Y(t){V().$$.after_update.push(t)}function F(t){V().$$.on_destroy.push(t)}const X=[],Q=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function st(t){Z.push(t)}let rt=!1;const ot=new Set;function at(){if(!rt){rt=!0;do{for(let t=0;t<X.length;t+=1){const e=X[t];J(e),it(e.$$)}for(J(null),X.length=0;Q.length;)Q.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];ot.has(e)||(ot.add(e),e())}Z.length=0}while(X.length);for(;tt.length;)tt.pop()();nt=!1,rt=!1,ot.clear()}}function it(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}const ct=new Set;let lt;function ut(){lt={r:0,c:[],p:lt}}function dt(){lt.r||r(lt.c),lt=lt.p}function ft(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function ht(t,e,n,s){if(t&&t.o){if(ct.has(t))return;ct.add(t),lt.c.push((()=>{ct.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function mt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function vt(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,s),a||st((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(st)}function $t(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){-1===t.$$.dirty[0]&&(X.push(t),nt||(nt=!0,et.then(at)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(e,n,o,a,i,c,l,u=[-1]){const d=h;J(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&_t(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){m=!0;const t=P(n.target);f.fragment&&f.fragment.l(t),t.forEach($)}else f.fragment&&f.fragment.c();n.intro&&ft(e.$$.fragment),vt(e,n.target,n.anchor,n.customElement),m=!1,at()}J(d)}class wt{$destroy(){$t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function St(e,n=t){let s;const r=new Set;function o(t){if(a(e,t)&&(e=t,s)){const t=!Et.length;for(const t of r)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.add(c),1===r.size&&(s=n(o)||t),a(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const xt={};var At={owner:"Kadantte",repo:"candy-up",sites:[{name:"Kadantte",url:"https://kadantte.moe"},{name:"Usui",url:"https://usui.moe"},{name:"Anime List",url:"https://list.kadantte.moe"},{name:"Manga List",url:"https://list.kadantte.moe/?type=manga"},{name:"Uzaki Chan",url:"https://uzaki-chan.kadantte.repl.co"},{name:"Yui",url:"https://Yui.kadantte.repl.co"},{name:"Ohys API",url:"https://ohys-api-v2.usui.moe/schedule?day=sun"},{name:"nHentai API",url:"https://nh.usui.moe"},{name:"nHentai CDN",url:"https://nhcdn.ga"},{name:"nHentai CDN-EU",url:"https://eu.nhcdn.ga"},{name:"nHentai CDN-NA",url:"https://na.nhcdn.ga"},{name:"nHentai CDN-ASIA",url:"https://asia.nhcdn.ga"},{name:"Li Da Server",url:"https://me.kadantte.moe"}],"status-website":{cname:"status.kadantte.moe",logoUrl:"https://kadantte.moe/assets/img/candy.png",name:"Candy Status",introTitle:"**Candy Status**",introMessage:"Status page which uses **real-time** data.",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://status.kadantte.moe",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Tt(t,e,n){const s=t.slice();return s[1]=e[n],s}function Nt(e){let n,s,r,o=At["status-website"]&&!At["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=y("img"),this.h()},l(t){n=C(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=At["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}(),a=At["status-website"]&&!At["status-website"].hideNavTitle&&function(e){let n,s,r=At["status-website"].name+"";return{c(){n=y("div"),s=E(r)},l(t){n=C(t,"DIV",{});var e=P(n);s=H(e,r),e.forEach($)},m(t,e){v(t,n,e),g(n,s)},p:t,d(t){t&&$(n)}}}();return{c(){n=y("div"),s=y("a"),o&&o.c(),r=S(),a&&a.c(),this.h()},l(t){n=C(t,"DIV",{});var e=P(n);s=C(e,"A",{href:!0,class:!0});var i=P(s);o&&o.l(i),r=U(i),a&&a.l(i),i.forEach($),e.forEach($),this.h()},h(){N(s,"href",At["status-website"].logoHref||At.path),N(s,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(t,e){At["status-website"]&&!At["status-website"].hideNavLogo&&o.p(t,e),At["status-website"]&&!At["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&$(n),o&&o.d(),a&&a.d()}}}function It(t){let e,n,s,r,o,a,i=t[1].title+"";return{c(){e=y("li"),n=y("a"),s=E(i),a=S(),this.h()},l(t){e=C(t,"LI",{});var r=P(e);n=C(r,"A",{"aria-current":!0,href:!0,class:!0});var o=P(n);s=H(o,i),o.forEach($),a=U(r),r.forEach($),this.h()},h(){N(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",o=t[1].href.replace("$OWNER",At.owner).replace("$REPO",At.repo)),N(n,"class","svelte-a08hsz")},m(t,r){v(t,e,r),g(e,n),g(n,s),g(e,a)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(t){t&&$(e)}}}function Pt(e){let n,s,r,o,a,i=At["status-website"]&&At["status-website"].logoUrl&&Nt(),c=At["status-website"]&&At["status-website"].navbar&&function(t){let e,n=At["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=It(Tt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(1&r){let o;for(n=At["status-website"].navbar,o=0;o<n.length;o+=1){const a=Tt(t,n,o);s[o]?s[o].p(a,r):(s[o]=It(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&$(e)}}}(e),l=At["status-website"]&&At["status-website"].navbarGitHub&&!At["status-website"].navbar&&function(e){let n,s,r,o=At.i18n.navGitHub+"";return{c(){n=y("li"),s=y("a"),r=E(o),this.h()},l(t){n=C(t,"LI",{});var e=P(n);s=C(e,"A",{href:!0,class:!0});var a=P(s);r=H(a,o),a.forEach($),e.forEach($),this.h()},h(){N(s,"href",`https://github.com/${At.owner}/${At.repo}`),N(s,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&$(n)}}}();return{c(){n=y("nav"),s=y("div"),i&&i.c(),r=S(),o=y("ul"),c&&c.c(),a=S(),l&&l.c(),this.h()},l(t){n=C(t,"NAV",{class:!0});var e=P(n);s=C(e,"DIV",{class:!0});var u=P(s);i&&i.l(u),r=U(u),o=C(u,"UL",{class:!0});var d=P(o);c&&c.l(d),a=U(d),l&&l.l(d),d.forEach($),u.forEach($),e.forEach($),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),i&&i.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,a),l&&l.m(o,null)},p(t,[e]){At["status-website"]&&At["status-website"].logoUrl&&i.p(t,e),At["status-website"]&&At["status-website"].navbar&&c.p(t,e),At["status-website"]&&At["status-website"].navbarGitHub&&!At["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&$(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function Lt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Rt extends wt{constructor(t){super(),yt(this,t,Lt,Pt,a,{segment:0})}}var kt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ct(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ot(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ht(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=kt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ct(Ot(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ht(Ct(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Ot(r[8])+'" alt="'+Ot(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ot(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ht(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Ot(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ut(t,e,n){const s=t.slice();return s[3]=e[n],s}function Dt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Mt(t,e,n){const s=t.slice();return s[8]=e[n],s}function jt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${At.path}/themes/${(At["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function Gt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(At["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function qt(e){let n,s;return{c(){n=y("script"),this.h()},l(t){n=C(t,"SCRIPT",{src:!0}),P(n).forEach($),this.h()},h(){c(n.src,s=e[8].src)||N(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function zt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function Bt(e){let n;return{c(){n=y("meta"),this.h()},l(t){n=C(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function Kt(e){let n,s,r,o,a,i,c,u,d,f,h,m,p,b,w,E,A,T,I=Ht(At.i18n.footer.replace(/\$REPO/,`https://github.com/${At.owner}/${At.repo}`))+"",L=(At["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(At["status-website"]||{}).customHeadHtml+"";return{c(){n=new K,s=x(),this.h()},l(t){n=M(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}();let R=((At["status-website"]||{}).themeUrl?Gt:jt)(e),k=(At["status-website"]||{}).scripts&&function(t){let e,n=(At["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=qt(Mt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(At["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Mt(t,n,o);s[o]?s[o].p(a,r):(s[o]=qt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&$(e)}}}(e),O=(At["status-website"]||{}).links&&function(t){let e,n=(At["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=zt(Dt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(At["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Dt(t,n,o);s[o]?s[o].p(a,r):(s[o]=zt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&$(e)}}}(e),H=(At["status-website"]||{}).metaTags&&function(t){let e,n=(At["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Bt(Ut(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(At["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Ut(t,n,o);s[o]?s[o].p(a,r):(s[o]=Bt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&$(e)}}}(e),D=At["status-website"].css&&function(e){let n,s,r=`<style>${At["status-website"].css}</style>`;return{c(){n=new K,s=x(),this.h()},l(t){n=M(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}(),j=At["status-website"].js&&function(e){let n,s,r=`<script>${At["status-website"].js}<\/script>`;return{c(){n=new K,s=x(),this.h()},l(t){n=M(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}(),G=(At["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(At["status-website"]||{}).customBodyHtml+"";return{c(){n=new K,s=x(),this.h()},l(t){n=M(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}();m=new Rt({props:{segment:e[0]}});const q=e[2].default,z=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(q,e,e[1],null);return{c(){L&&L.c(),n=x(),R.c(),s=y("link"),r=y("link"),o=y("link"),k&&k.c(),a=x(),O&&O.c(),i=x(),H&&H.c(),c=x(),D&&D.c(),u=x(),j&&j.c(),d=x(),f=S(),G&&G.c(),h=S(),gt(m.$$.fragment),p=S(),b=y("main"),z&&z.c(),w=S(),E=y("footer"),A=y("p"),this.h()},l(t){const e=B('[data-svelte="svelte-ri9y7q"]',document.head);L&&L.l(e),n=x(),R.l(e),s=C(e,"LINK",{rel:!0,href:!0}),r=C(e,"LINK",{rel:!0,type:!0,href:!0}),o=C(e,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(e),a=x(),O&&O.l(e),i=x(),H&&H.l(e),c=x(),D&&D.l(e),u=x(),j&&j.l(e),d=x(),e.forEach($),f=U(t),G&&G.l(t),h=U(t),bt(m.$$.fragment,t),p=U(t),b=C(t,"MAIN",{class:!0});var l=P(b);z&&z.l(l),l.forEach($),w=U(t),E=C(t,"FOOTER",{class:!0});var g=P(E);A=C(g,"P",{}),P(A).forEach($),g.forEach($),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${At.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(At["status-website"]||{}).faviconSvg||(At["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(At["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),k&&k.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,c),D&&D.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,d),v(t,f,e),G&&G.m(t,e),v(t,h,e),vt(m,t,e),v(t,p,e),v(t,b,e),z&&z.m(b,null),v(t,w,e),v(t,E,e),g(E,A),A.innerHTML=I,T=!0},p(t,[e]){(At["status-website"]||{}).customHeadHtml&&L.p(t,e),R.p(t,e),(At["status-website"]||{}).scripts&&k.p(t,e),(At["status-website"]||{}).links&&O.p(t,e),(At["status-website"]||{}).metaTags&&H.p(t,e),At["status-website"].css&&D.p(t,e),At["status-website"].js&&j.p(t,e),(At["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),z&&z.p&&(!T||2&e)&&function(t,e,n,s,r,o){if(r){const a=l(e,n,s,o);t.p(a,r)}}(z,q,t,t[1],T?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(q,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){T||(ft(m.$$.fragment,t),ft(z,t),T=!0)},o(t){ht(m.$$.fragment,t),ht(z,t),T=!1},d(t){L&&L.d(t),$(n),R.d(t),$(s),$(r),$(o),k&&k.d(t),$(a),O&&O.d(t),$(i),H&&H.d(t),$(c),D&&D.d(t),$(u),j&&j.d(t),$(d),t&&$(f),G&&G.d(t),t&&$(h),$t(m,t),t&&$(p),t&&$(b),z&&z.d(t),t&&$(w),t&&$(E)}}}function Jt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Vt extends wt{constructor(t){super(),yt(this,t,Jt,Kt,a,{segment:0})}}function Wt(t){let e,n,s=t[1].stack+"";return{c(){e=y("pre"),n=E(s)},l(t){e=C(t,"PRE",{});var r=P(e);n=H(r,s),r.forEach($)},m(t,s){v(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&j(n,s)},d(t){t&&$(e)}}}function Yt(e){let n,s,r,o,a,i,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Wt(e);return{c(){s=S(),r=y("h1"),o=E(e[0]),a=S(),i=y("p"),c=E(d),l=S(),f&&f.c(),u=x(),this.h()},l(t){B('[data-svelte="svelte-1moakz"]',document.head).forEach($),s=U(t),r=C(t,"H1",{class:!0});var n=P(r);o=H(n,e[0]),n.forEach($),a=U(t),i=C(t,"P",{class:!0});var h=P(i);c=H(h,d),h.forEach($),l=U(t),f&&f.l(t),u=x(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(i,"class","svelte-17w3omn")},m(t,e){v(t,s,e),v(t,r,e),g(r,o),v(t,a,e),v(t,i,e),g(i,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&j(o,t[0]),2&e&&d!==(d=t[1].message+"")&&j(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Wt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&$(s),t&&$(r),t&&$(a),t&&$(i),t&&$(l),f&&f.d(t),t&&$(u)}}}function Ft(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Xt extends wt{constructor(t){super(),yt(this,t,Ft,Yt,a,{status:0,error:1})}}function Qt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&gt(n.$$.fragment),s=x()},l(t){n&&bt(n.$$.fragment,t),s=x()},m(t,e){n&&vt(n,t,e),v(t,s,e),r=!0},p(t,e){const r=16&e?mt(o,[pt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){ut();const t=n;ht(t.$$.fragment,1,0,(()=>{$t(t,1)})),dt()}a?(n=new a(i()),gt(n.$$.fragment),ft(n.$$.fragment,1),vt(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&ft(n.$$.fragment,t),r=!0)},o(t){n&&ht(n.$$.fragment,t),r=!1},d(t){t&&$(s),n&&$t(n,t)}}}function Zt(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,s){vt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}function te(t){let e,n,s,r;const o=[Zt,Qt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=x()},l(t){n.l(t),s=x()},m(t,n){a[e].m(t,n),v(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(ut(),ht(a[c],1,1,(()=>{a[c]=null})),dt(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),ft(n,1),n.m(s.parentNode,s))},i(t){r||(ft(n),r=!0)},o(t){ht(n),r=!1},d(t){a[e].d(t),t&&$(s)}}}function ee(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Vt({props:o}),{c(){gt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,e){vt(n,t,e),s=!0},p(t,[e]){const s=12&e?mt(r,[4&e&&{segment:t[2][0]},8&e&&pt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ft(n.$$.fragment,t),s=!0)},o(t){ht(n.$$.fragment,t),s=!1},d(t){$t(n,t)}}}function ne(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return Y(l),u=xt,d=s,V().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class se extends wt{constructor(t){super(),yt(this,t,ne,ee,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const re=[],oe=[{js:()=>Promise.all([import("./index.a2bdbfa5.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.5fbdbdf1.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].c6c66131.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].60580158.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.d99c118e.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ae=(ie=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ie(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ie(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ie;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ce(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function le(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,de=1;const fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},he={};let me,pe;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(me))return null;let e=t.pathname.slice(me.length);if(""===e&&(e="/"),!re.some((t=>t.test(e))))for(let n=0;n<ae.length;n+=1){const s=ae[n],r=s.pattern.exec(e);if(r){const n=ge(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function ve(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=le(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=be(r);if(o){ye(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),fe.pushState({id:ue},"",r.href)}}function $e(){return{x:pageXOffset,y:pageYOffset}}function _e(t){if(he[ue]=$e(),t.state){const e=be(new URL(location.href));e?ye(e,t.state.id):location.href=location.href}else!function(t){de=t}(de+1),function(t){ue=t}(de),fe.replaceState({id:ue},"",location.href)}function ye(t,e,n,s){return ce(this,void 0,void 0,(function*(){const r=!!e;if(r)ue=e;else{const t=$e();he[ue]=t,ue=e=++de,he[ue]=n?t:{x:0,y:0}}if(yield pe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=he[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),he[ue]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function we(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,Se=null;function xe(t){const e=le(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=be(new URL(t,we(document)));if(e)Se&&t===Se.href||(Se={href:t,promise:qe(e)}),Se.promise}(e.href)}function Ae(t){clearTimeout(Ee),Ee=setTimeout((()=>{xe(t)}),20)}function Te(t,e={noscroll:!1,replaceState:!1}){const n=be(new URL(t,we(document)));if(n){const s=ye(n,null,e.noscroll);return fe[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),s}return location.href=t,new Promise((()=>{}))}const Ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ie,Pe,Le,Re=!1,ke=[],Ce="{}";const Oe={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:St(null),session:St(Ne&&Ne.session)};let He,Ue,De;function Me(t,e){const{error:n}=t;return Object.assign({error:n},e)}function je(t){return ce(this,void 0,void 0,(function*(){Ie&&Oe.preloading.set(!0);const e=function(t){return Se&&Se.href===t.href?Se.promise:qe(t)}(t),n=Pe={},s=yield e,{redirect:r}=s;if(n===Pe)if(r)yield Te(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Ge(n,e,Me(e,t.page))}}))}function Ge(t,e,n){return ce(this,void 0,void 0,(function*(){Oe.page.set(n),Oe.preloading.set(!1),Ie?Ie.$set(e):(e.stores={page:{subscribe:Oe.page.subscribe},preloading:{subscribe:Oe.preloading.subscribe},session:Oe.session},e.level0={props:yield Le},e.notify=Oe.page.notify,Ie=new se({target:De,props:e,hydrate:!0})),ke=t,Ce=JSON.stringify(n.query),Re=!0,Ue=!1}))}function qe(t){return ce(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Le){const t=()=>({});Le=Ne.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},He)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>ce(this,void 0,void 0,(function*(){const d=s[i];if(function(t,e,n,s){if(s!==Ce)return!0;const r=ke[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,d,l,r)&&(u=!0),o.segments[c]=s[i+1],!e)return{segment:d};const f=c++;let h;if(Ue||u||!ke[i]||ke[i].part!==e.i){u=!1;const{default:s,preload:r}=yield oe[e.i].js();let o;o=Re||!Ne.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},He):{}:Ne.preloaded[i+1],h={component:s,props:o,segment:d,match:l,part:e.i}}else h=ke[i];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var ze,Be,Ke;Oe.session.subscribe((t=>ce(void 0,void 0,void 0,(function*(){if(He=t,!Re)return;Ue=!0;const e=be(new URL(location.href)),n=Pe={},{redirect:s,props:r,branch:o}=yield qe(e);n===Pe&&(s?yield Te(s.location,{replaceState:!0}):yield Ge(o,r,Me(r,e.page)))})))),ze={target:document.querySelector("#sapper")},Be=ze.target,De=Be,Ke=Ne.baseUrl,me=Ke,pe=je,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{fe.scrollRestoration="auto"})),addEventListener("load",(()=>{fe.scrollRestoration="manual"})),addEventListener("click",ve),addEventListener("popstate",_e),addEventListener("touchstart",xe),addEventListener("mousemove",Ae),Ne.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=Ne;Le||(Le=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Le},level1:{props:{status:o,error:a},component:Xt},segments:r},c=ge(n);Ge([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;fe.replaceState({id:de},"",e);const n=be(new URL(location.href));if(n)return ye(n,de,!0,t)}));export{$t as A,A as B,r as C,Q as D,M as E,c as F,d as G,K as H,B as I,Ht as J,w as K,O as L,Te as M,G as N,T as O,e as P,I as Q,mt as R,wt as S,Y as T,F as U,u as V,pt as W,st as X,z as Y,P as a,H as b,C as c,$ as d,y as e,N as f,v as g,g as h,yt as i,S as j,U as k,ut as l,ht as m,t as n,dt as o,ft as p,W as q,At as r,a as s,E as t,j as u,x as v,_ as w,gt as x,bt as y,vt as z};

import __inject_styles from './inject_styles.803b7e80.js';
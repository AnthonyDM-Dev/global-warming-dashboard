(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4,11,12,15,16,17],{379:function(t,e,n){var content=n(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("4017d566",content,!0,{sourceMap:!1})},380:function(t,e,n){"use strict";n.r(e);n(382);var r=n(60),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",[t("div",{staticClass:"loadingio-spinner-spinner-mlxo459am8"},[t("div",{staticClass:"ldio-bbrp5gztfbd"},[t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div")])])])}],!1,null,"6673b91a",null);e.default=component.exports},381:function(t,e,n){"use strict";n.r(e);var r={name:"LoadingOverlay",components:{SpinnerLoader:n(380).default}},o=(n(390),n(60)),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"loading-overlay"},[t("SpinnerLoader")],1)}),[],!1,null,"26d690cd",null);e.default=component.exports;installComponents(component,{SpinnerLoader:n(380).default})},382:function(t,e,n){"use strict";n(379)},383:function(t,e,n){var r=n(90)(!1);r.push([t.i,"@-webkit-keyframes ldio-bbrp5gztfbd-6673b91a{0%{opacity:1}to{opacity:0}}@keyframes ldio-bbrp5gztfbd-6673b91a{0%{opacity:1}to{opacity:0}}.ldio-bbrp5gztfbd div[data-v-6673b91a]{left:46px;top:23px;position:absolute;-webkit-animation:ldio-bbrp5gztfbd-6673b91a 1s linear infinite;animation:ldio-bbrp5gztfbd-6673b91a 1s linear infinite;background:#ffb30f;width:8px;height:14px;border-radius:4px/7px;transform-origin:4px 27px}.ldio-bbrp5gztfbd div[data-v-6673b91a]:first-child{transform:rotate(0deg);-webkit-animation-delay:-.9166666667s;animation-delay:-.9166666667s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(2){transform:rotate(30deg);-webkit-animation-delay:-.8333333333s;animation-delay:-.8333333333s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(3){transform:rotate(60deg);-webkit-animation-delay:-.75s;animation-delay:-.75s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(4){transform:rotate(90deg);-webkit-animation-delay:-.6666666667s;animation-delay:-.6666666667s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(5){transform:rotate(120deg);-webkit-animation-delay:-.5833333333s;animation-delay:-.5833333333s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(6){transform:rotate(150deg);-webkit-animation-delay:-.5s;animation-delay:-.5s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(7){transform:rotate(180deg);-webkit-animation-delay:-.4166666667s;animation-delay:-.4166666667s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(8){transform:rotate(210deg);-webkit-animation-delay:-.3333333333s;animation-delay:-.3333333333s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(9){transform:rotate(240deg);-webkit-animation-delay:-.25s;animation-delay:-.25s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(10){transform:rotate(270deg);-webkit-animation-delay:-.1666666667s;animation-delay:-.1666666667s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(11){transform:rotate(300deg);-webkit-animation-delay:-.0833333333s;animation-delay:-.0833333333s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(12){transform:rotate(330deg);-webkit-animation-delay:0s;animation-delay:0s;background:#ffb30f}.loadingio-spinner-spinner-mlxo459am8[data-v-6673b91a]{width:60px;height:60px;display:inline-block;overflow:hidden;background:transparent}.ldio-bbrp5gztfbd[data-v-6673b91a]{width:100%;height:100%;position:relative;transform:translateZ(0) scale(.6);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:0 0}.ldio-bbrp5gztfbd div[data-v-6673b91a]{box-sizing:content-box}",""]),t.exports=r},384:function(t,e,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("13850443",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n.r(e);var r={name:"VideoHeader",props:{title:{type:String,default:null},video:{type:String,default:null}}},o=(n(427),n(60)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"heading"},[e("img",{staticClass:"heading__video",attrs:{src:"/videos/"+t.video}}),t._v(" "),e("div",{staticClass:"heading__overlay"}),t._v(" "),e("p",{staticClass:"heading__text"},[t._v("\n    "+t._s(t.title)+"\n  ")])])}),[],!1,null,"adcde03c",null);e.default=component.exports},386:function(t,e,n){"use strict";n.r(e);n(399);var r=n(412),o=(n(413),{name:"LineChart",components:{LoadingOverlay:n(381).default},props:{id:{type:String,default:null},hasLoader:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},hasFilters:{type:Boolean,default:!1},filters:{type:Array,default:null},filterType:{type:String,default:null},filterSelected:{type:[String,Number],default:null},chartWidth:{type:Number,default:400},chartHeight:{type:Number,default:250},settings:{type:Object,default:null}},data:function(){return{myChart:null}},watch:{settings:{handler:function(t){t&&this.updateChart()},deep:!0}},methods:{cloneObj:function(data){return JSON.parse(JSON.stringify(data))},editData:function(){this.myChart.data.labels=this.cloneObj(this.settings.data.labels),this.myChart.data.datasets=this.cloneObj(this.settings.data.datasets),this.myChart.update()},updateChart:function(){var t=document.getElementById(this.id);this.myChart instanceof r.a?this.editData():this.myChart=new r.a(t,this.cloneObj(this.settings))}}}),d=(n(434),n(60)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"line-chart"},[e("canvas",{attrs:{id:t.id,width:t.chartWidth,height:t.chartHeight}}),t._v(" "),t.hasFilters?e("div",{staticClass:"line-chart__filters"},[e("p",[t._v("Filter by "+t._s(t.filterType)+": ")]),t._v(" "),e("div",{staticClass:"line-chart__filters-wrapper"},t._l(t.filters,(function(n,i){return e("button",{key:i,staticClass:"actions__button-filter",class:{selected:t.filterSelected===n.value},style:{color:t.filterSelected===n.value?"white":""},on:{click:function(e){return t.$emit("change-filter",n.value)}}},[e("p",[t._v(t._s(n.label))])])})),0)]):t._e(),t._v(" "),t.hasLoader&&t.isLoading?e("LoadingOverlay"):t._e()],1)}),[],!1,null,"81d1cb20",null);e.default=component.exports;installComponents(component,{LoadingOverlay:n(381).default})},387:function(t,e,n){"use strict";n.r(e);n(389);var r={name:"YoutubeVideo",props:{link:{type:String,default:null}}},o=(n(438),n(60)),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"youtube-video"},[t("iframe",{attrs:{width:"622",height:"350",src:this.link,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,"428a587c",null);e.default=component.exports},388:function(t,e,n){"use strict";n.r(e);var r={name:"ActionButtons"},o=(n(440),n(60)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"actions"},[e("button",{staticClass:"actions__button-back",on:{click:function(e){return t.$emit("go-back")}}},[e("p",[t._v("GO BACK")])])])}),[],!1,null,"e18e5fb4",null);e.default=component.exports},389:function(t,e,n){"use strict";var r=n(1),o=n(396);r({target:"String",proto:!0,forced:n(397)("link")},{link:function(t){return o(this,"a","href",t)}})},390:function(t,e,n){"use strict";n(384)},391:function(t,e,n){var r=n(90)(!1);r.push([t.i,".loading-overlay[data-v-26d690cd]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center}",""]),t.exports=r},393:function(t,e,n){"use strict";var r=n(12),o=(n(61),n(73),n(92)),d=Object(o.d)({isVisible:!1,title:"Something went wrong.",description:"Please check your internet connection or try again in few moments.",backgroundColor:"#c23131e8"});e.a=function(){var t=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d.value.isVisible=!0,t.next=3,setTimeout((function(){d.value.isVisible=!1}),3e3);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{popup:d,triggerPopup:t}}},394:function(t,e,n){"use strict";n(21),n(399),n(50),n(44);var r=n(468),o=n(488);e.a=function(){var t=function t(data,e,n){return n<e.length-1?t(data[e[n]],e,n+1):data[e[n]]};return{updateChartData:function(t,e,n){t[e].data=n},updateMaxY:function(t,e,n,r,o,d){for(var c=[],l=function(i){c.push(e.reduce((function(t,e){return t>Number(e[n[i]])?t:Number(e[n[i]])}),o))},i=0;i<n.length;i++)l(i);t.lineChart.options.scales[d].max=Math.max.apply(Math,c)+r},updateMinY:function(t,e,n,r,o,d){for(var c=[],l=function(i){c.push(e.reduce((function(t,e){return t<Number(e[n[i]])?t:Number(e[n[i]])}),o))},i=0;i<n.length;i++)l(i);t.lineChart.options.scales[d].min=Math.min.apply(Math,c)-r},parseData:function(data,e,n){return Array.isArray(e)||Array.isArray(n)?data.map((function(r){return{x:t(r,e,0),y:t(r,n,0)}})):data.map((function(t){return{x:t[e],y:t[n]}}))},filterData:function(data,t,e,n){if("all"===n)return data;switch(e){case"years":var d=Object(r.a)(Object(o.a)(new Date,{years:n}));return data.filter((function(e){return e[t]>=d}));case"months":var c=Object(r.a)(Object(o.a)(new Date,{months:n}));return data.filter((function(e){return e[t]>=c}));default:return data}},removeNoise:function(data,t,e){return data.filter((function(a){return a[t]!==e}))}}}},395:function(t,e,n){"use strict";n(399),n(49),n(123);var r=n(468),o=n(377),d=n(378),c=n(376);function l(t){Object(c.a)(1,arguments);var e=Object(d.a)(t);return Object(o.a)(1e3*e)}var sub=n(488);e.a=function(){var t=function(t){var e=Number(t.split(".")[1]),n=Number(t.split(".").shift()),o=Math.floor(e/12)+1;return Object(r.a)(new Date(n,o,1))};return{formatTime:function(data,e,n){var o=JSON.parse(JSON.stringify(data));if("number"===e)for(var i=0;i<o.length;i++)o[i].time=t(o[i][n[0]]);else if("splittedData"===e)for(var d=0;d<o.length;d++)o[d].time=Object(r.a)(new Date(Number(o[d][n[0]]),Number(o[d][n[1]]),Number(o[d][n[2]])||null));else if("unix"===e)for(var c=0;c<o.length;c++)o[c].time=Object(r.a)(l(o[c][n[0]]));return o},convertDecimalsToFullYear:t,convertDateToUnix:function(t){return function(t){return Object(c.a)(1,arguments),Math.floor(Object(r.a)(t)/1e3)}(t)},subtractFromDate:function(t,e){return Object(sub.a)(t,e)},capitalize:function(t){for(var e=t.split(" "),i=0;i<e.length;i++)e[i]=e[i].charAt(0).toUpperCase()+e[i].slice(1);return e.join(" ")}}}},396:function(t,e,n){var r=n(5),o=n(31),d=n(18),c=/"/g,l=r("".replace);t.exports=function(t,e,n,r){var f=d(o(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+l(d(r),c,"&quot;")+'"'),v+">"+f+"</"+e+">"}},397:function(t,e,n){var r=n(6);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},398:function(t,e,n){"use strict";n(45),n(216),n(50);var r=n(92),o=n(395),d=n(394),c=Object(o.a)(),l=c.convertDateToUnix,f=c.subtractFromDate,v=Object(d.a)().parseData,h=Object(r.d)(null),m=Object(r.d)(null),y=Object(r.d)(null),x=Object(r.a)((function(){return null!=m.value}));e.a=function(){var t=Object(r.d)(l(new Date(2019,10,27))),e=Object(r.d)(l(f(new Date,{months:1}))),n=function(t){if(t)for(var e=0;e<t.length;e++)for(var n=Object.keys(t[e]),r=Object.values(t[e]),o=0;o<n.length;o++)y.value.datasets[n[o]]=r[o]},o=function(t){var e=t[0].x[0];y.value.labels=m.value.map((function(t){return t[e]}))},d=function(t){for(var e=0;e<t.length;e++)y.value.datasets[e].data=v(m.value,t[e].x,t[e].y)};return Object(r.h)(h,(function(t){m.value=t}),{deep:!0}),{lineData:h,lineFilteredData:m,lineChartData:y,hasLineFilteredData:x,startDate:t,endDate:e,setLineChartData:function(t,e,r,c){y.value=t,r&&n(e),o(c),d(c)},resetLineChart:function(){h.value=null}}}},405:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("d6bd71bc",content,!0,{sourceMap:!1})},408:function(t,e,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("52350642",content,!0,{sourceMap:!1})},410:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("57f1b28b",content,!0,{sourceMap:!1})},411:function(t,e,n){var content=n(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("49897ecb",content,!0,{sourceMap:!1})},427:function(t,e,n){"use strict";n(405)},428:function(t,e,n){var r=n(90)(!1);r.push([t.i,".heading[data-v-adcde03c]{position:relative;height:300px;overflow:hidden}.heading__video[data-v-adcde03c]{width:100%;-o-object-fit:cover;object-fit:cover}.heading__overlay[data-v-adcde03c]{position:absolute;top:0;left:0;width:100%;height:300px;background-color:rgba(0,0,0,.2)}.heading__text[data-v-adcde03c]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:60px;font-weight:200;color:#fff;text-align:center}@media screen and (max-width:1199px)and (min-width:768px){.heading[data-v-adcde03c]{height:230px}}",""]),t.exports=r},434:function(t,e,n){"use strict";n(408)},435:function(t,e,n){var r=n(90)(!1);r.push([t.i,".actions[data-v-81d1cb20]{position:relative;min-height:20px}.actions__button-filter[data-v-81d1cb20]{margin:5px 15px;font-size:16px;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:none;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-filter[data-v-81d1cb20]:hover{font-size:20px;transition:font-size .6s}.actions__button-back[data-v-81d1cb20]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%);font-size:16px;font-weight:200;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:0;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-back[data-v-81d1cb20]:hover{font-size:20px;transition:font-size .6s}.actions__button-link[data-v-81d1cb20]{text-decoration:underline;font-size:16px;background-color:transparent;border:none;color:#ffdf0f;font-weight:100;padding:5px}.selected[data-v-81d1cb20]{font-size:20px;transition:font-size .6s}@media screen and (max-width:575px){.actions__button-filter[data-v-81d1cb20]{margin:5px;font-size:14px;font-weight:700;padding:7px}.actions__button[data-v-81d1cb20]:hover{font-size:16px;transition:font-size .6s}.selected[data-v-81d1cb20]{font-size:16px}}.line-chart[data-v-81d1cb20]{position:relative;background-color:hsla(0,0%,100%,.8)}.line-chart__filters[data-v-81d1cb20]{display:flex;font-size:20px;justify-content:center;align-items:center;background-color:transparent;border:0}.line-chart__filters-wrapper[data-v-81d1cb20]{display:flex}@media screen and (max-width:575px){.line-chart__filters[data-v-81d1cb20]{display:flex;flex-direction:column}}",""]),t.exports=r},438:function(t,e,n){"use strict";n(410)},439:function(t,e,n){var r=n(90)(!1);r.push([t.i,".youtube-video[data-v-428a587c]{width:100%;display:flex;justify-content:center;margin-bottom:40px}",""]),t.exports=r},440:function(t,e,n){"use strict";n(411)},441:function(t,e,n){var r=n(90)(!1);r.push([t.i,".actions[data-v-e18e5fb4]{position:relative;min-height:20px}.actions__button-filter[data-v-e18e5fb4]{margin:5px 15px;font-size:16px;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:none;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-filter[data-v-e18e5fb4]:hover{font-size:20px;transition:font-size .6s}.actions__button-back[data-v-e18e5fb4]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%);font-size:16px;font-weight:200;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:0;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-back[data-v-e18e5fb4]:hover{font-size:20px;transition:font-size .6s}.actions__button-link[data-v-e18e5fb4]{text-decoration:underline;font-size:16px;background-color:transparent;border:none;color:#ffdf0f;font-weight:100;padding:5px}.selected[data-v-e18e5fb4]{font-size:20px;transition:font-size .6s}@media screen and (max-width:575px){.actions__button-filter[data-v-e18e5fb4]{margin:5px;font-size:14px;font-weight:700;padding:7px}.actions__button[data-v-e18e5fb4]:hover{font-size:16px;transition:font-size .6s}.selected[data-v-e18e5fb4]{font-size:16px}}",""]),t.exports=r},468:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(377),o=n(376);function d(t){Object(o.a)(1,arguments);var e=Object(r.a)(t),n=e.getTime();return n}},488:function(t,e,n){"use strict";n.d(e,"a",(function(){return sub}));var r=n(452),o=n(376),d=n(378);function c(t,e){Object(o.a)(2,arguments);var n=Object(d.a)(e);return Object(r.a)(t,-n)}var l=n(426);function f(t,e){Object(o.a)(2,arguments);var n=Object(d.a)(e);return Object(l.a)(t,-n)}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function sub(t,e){if(Object(o.a)(2,arguments),!e||"object"!==v(e))return new Date(NaN);var n=e.years?Object(d.a)(e.years):0,r=e.months?Object(d.a)(e.months):0,l=e.weeks?Object(d.a)(e.weeks):0,h=e.days?Object(d.a)(e.days):0,m=e.hours?Object(d.a)(e.hours):0,y=e.minutes?Object(d.a)(e.minutes):0,x=e.seconds?Object(d.a)(e.seconds):0,_=f(t,r+12*n),w=c(_,h+7*l),k=y+60*m,O=x+60*k,j=1e3*O,z=new Date(w.getTime()-j);return z}}}]);
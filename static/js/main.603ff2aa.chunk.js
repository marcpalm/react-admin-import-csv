(this["webpackJsonptest-ra"]=this["webpackJsonptest-ra"]||[]).push([[0],{1004:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function l(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.GetCSVItems=t.CheckCSVValidation=t.GetIdsColliding=void 0;var a=n(1005),i=n(483);function l(e){var t=new i.SimpleLogger("import-controller",!0);return t.setEnabled(e),t}t.GetIdsColliding=function(e,t,n,a,i){return r(this,void 0,void 0,(function(){var r,u,c,s;return o(this,(function(o){switch(o.label){case 0:if(r=l(e),!a.some((function(e){return e.id})))return[2,[]];o.label=1;case 1:return o.trys.push([1,3,,4]),u=a.filter((function(e){return!!e.id})).map((function(e){return e.id+""})),[4,n.getMany(i,{ids:u})];case 2:return c=o.sent(),[2,c.data.map((function(e){return e.id+""}))];case 3:throw s=o.sent(),r.error("GetIdsColliding",{csvValues:a},s),t("csv.parsing.collidingIds");case 4:return[2]}}))}))},t.CheckCSVValidation=function(e,t,n,a){return r(this,void 0,void 0,(function(){var r,i;return o(this,(function(o){switch(o.label){case 0:if(r=l(e),!a)return[2];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Promise.all(n.map(a))];case 2:return o.sent(),[3,4];case 3:throw i=o.sent(),r.error("onFileAdded",{csvValues:n},i),t("csv.parsing.failedValidateRow");case 4:return[2]}}))}))},t.GetCSVItems=function(e,t,n,i){return r(this,void 0,void 0,(function(){var r,u;return o(this,(function(o){switch(o.label){case 0:r=l(e),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,a.processCsvFile(n,i)];case 2:return[2,o.sent()];case 3:throw u=o.sent(),r.error("onFileAdded",{csvValues:void 0},u),t("csv.parsing.invalidCsvDocument");case 4:return[2]}}))}))}},1005:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function l(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.processCsvData=t.getCsvData=t.processCsvFile=void 0;var l=n(1006),u=i(n(1007)),c=i(n(1029)),s=function(e,t,n){var r=u.default(t.split("."));return c.default(r,(function(){return n}),e||{})};function d(e,t){return void 0===t&&(t={}),o(this,void 0,void 0,(function(){var n;return a(this,(function(o){return n={},!!t&&"object"===typeof t&&(n=t),[2,new Promise((function(t,o){return l.parse(e,r(r({delimiter:",",skipEmptyLines:!0},n),{complete:function(e){return t(e.data)},error:function(e){return o(e)}}))}))]}))}))}function f(e){if(Array.isArray(e[0])){var t=e[0];return e.slice(1).map((function(e){var n={};return t.forEach((function(t,r){n=s(n,t,e[r])})),n}))}var n=[];return e.forEach((function(e){var t={};for(var r in e)t=s(t,r,e[r]);n.push(t)})),n}t.processCsvFile=function(e,t){return void 0===t&&(t={}),o(this,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return e?[4,d(e,t)]:[2];case 1:return[2,f(n.sent())]}}))}))},t.getCsvData=d,t.processCsvData=f},1030:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function l(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.update=t.create=void 0;var a=new(n(483).SimpleLogger)("uploader",!1);function i(e,t,n,i){return r(this,void 0,void 0,(function(){var r,u,c,s,d,f;return o(this,(function(o){switch(o.label){case 0:a.setEnabled(e),a.log("addInDataProvider",{dataProvider:t,resource:n,values:i}),r=[],o.label=1;case 1:return o.trys.push([1,3,,8]),[4,t.createMany(n,{data:i})];case 2:return u=o.sent(),r.push({value:null,success:!0,response:u}),[3,8];case 3:if(c=o.sent(),s=c.toString().includes("Unknown dataProvider"),!s&&r.push({value:null,err:c,success:!1,response:null}),!s)return[3,7];a.log("addInDataProvider","createMany not found on data provider (you may need to implement it): using fallback instead"),o.label=4;case 4:return o.trys.push([4,6,,7]),[4,l(t,n,i)];case 5:return d=o.sent(),r.push.apply(r,d),[3,7];case 6:return f=o.sent(),a.error("addInDataProvider",f),[3,7];case 7:return[3,8];case 8:return[2,r]}}))}))}function l(e,t,n){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return r=[],[4,Promise.all(n.map((function(n){return e.create(t,{data:n}).then((function(e){return r.push({value:n,success:!0,response:e})})).catch((function(e){return r.push({value:n,success:!1,err:e})}))})))];case 1:return o.sent(),[2,r]}}))}))}function u(e,t,n,i){return r(this,void 0,void 0,(function(){var r,l;return o(this,(function(o){switch(o.label){case 0:return r=i.map((function(e){return e.id})),a.setEnabled(e),a.log("updateInDataProvider",{dataProvider:t,resource:n,values:i,logging:e,ids:r}),l=[],[4,t.updateMany(n,{ids:r,data:i}).then((function(e){return l.push({value:i,success:!0,response:e})})).catch((function(e){return l.push({value:i,success:!1,err:e})}))];case 1:return o.sent(),[2,l]}}))}))}t.create=function(e,t,n,a,l,u){return r(this,void 0,void 0,(function(){var r,c;return o(this,(function(o){switch(o.label){case 0:return l?[4,l("create",a)]:[3,2];case 1:return r=o.sent(),[3,3];case 2:r=a,o.label=3;case 3:return[4,i(e,t,n,r)];case 4:return c=o.sent(),u&&u(c),!u&&c.some((function(e){return!e.success}))?[2,Promise.reject(c.map((function(e){return e.response})))]:[2]}}))}))},t.update=function(e,t,n,a,i,l){return r(this,void 0,void 0,(function(){var r,c;return o(this,(function(o){switch(o.label){case 0:return i?[4,i("overwrite",a)]:[3,2];case 1:return r=o.sent(),[3,3];case 2:r=a,o.label=3;case 3:return[4,u(e,t,n,r)];case 4:return c=o.sent(),l&&l(c),!l&&c.some((function(e){return!e.success}))?[2,Promise.reject(c.map((function(e){return e.response})))]:[2]}}))}))}},1031:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={csv:{buttonMain:{label:"Importar",tooltip:"Debe ser un archivo '.csv' o '.tsv'",emptyResource:"La propiedad 'resource' estaba vac\xeda, \xbfpas\xf3 el {... props} al Importar Bot\xf3n?"},parsing:{collidingIds:'Se encontraron campos de "id" en conflicto',failedValidateRow:"CSV no cumpli\xf3 con los requisitos de validaci\xf3n",invalidCsv:'El documento no se pudo analizar como un archivo "csv"'},dialogCommon:{subtitle:'Importando% {count} elementos de% {fileName} a "% {resource}"',conflictCount:"El recurso <strong>% {resource} </strong> tiene <strong>% {conflictingCount} </strong> m\xe1s registros con ID en conflicto",buttons:{cancel:"Cancelar"}},dialogImport:{alertClose:"Importado% {fname}",title:'Importando a "% {resource}"',buttons:{replaceAllConflicts:"Reemplazar las filas",skipAllConflicts:"Salta estas filas",letmeDecide:"D\xe9jame decidir por cada fila"}},dialogDecide:{title:'Importando id% {id} a "% {resource}"',buttons:{replaceRow:"Reemplazar el id de fila =% {id}",addAsNewRow:"Agregar como nueva fila (no reemplazar)",skipDontReplace:"Omitir esta fila (no reemplazar)"}},loading:"Cargando..."}}},1032:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={csv:{buttonMain:{label:"Import",tooltip:"Must be a '.csv' or '.tsv' file",emptyResource:"The 'resource' property was empty, did you pass in the {...props} to the ImportButton?"},parsing:{collidingIds:'Found colliding "id" fields',failedValidateRow:"CSV failed the validation requirements",invalidCsv:'The documnent could not be parsed as a "csv" file'},dialogCommon:{subtitle:'Importing %{count} items from %{fileName} to "%{resource}"',conflictCount:"The resource <strong>%{resource}</strong> has <strong>%{conflictingCount}</strong> more records with conflicting ids",buttons:{cancel:"Cancel"}},dialogImport:{alertClose:"Imported %{fname}",title:'Importing to "%{resource}"',buttons:{replaceAllConflicts:"Replace the rows",skipAllConflicts:"Skip these rows",letmeDecide:"Let me decide for each row"}},dialogDecide:{title:'Importing id %{id} to "%{resource}"',buttons:{replaceRow:"Replace the row id=%{id}",addAsNewRow:"Add as new row (Don't replace)",skipDontReplace:"Skip this row (Don't replace)"}},loading:"Loading..."}}},1033:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={csv:{buttonMain:{label:"\u5bfc\u5165",tooltip:"\u5fc5\u987b\u662f\u201c.csv\u201d\u6216\u201c.tsv\u201d\u6587\u4ef6",emptyResource:"'resource'\u5c5e\u6027\u4e3a\u7a7a\uff0c\u60a8\u662f\u5426\u5c06{... props}\u4f20\u9012\u7ed9ImportButton\uff1f"},parsing:{collidingIds:"\u627e\u5230\u51b2\u7a81\u7684\u201cid\u201d\u5b57\u6bb5",failedValidateRow:"CSV\u672a\u80fd\u901a\u8fc7\u9a8c\u8bc1\u8981\u6c42",invalidCsv:"\u8be5\u6587\u6863\u65e0\u6cd5\u89e3\u6790\u4e3a\u201ccsv\u201d\u6587\u4ef6"},dialogCommon:{subtitle:"\u5c06\uff05{count}\u4e2a\u9879\u76ee\u4ece\uff05{fileName}\u5bfc\u5165\u5230\u201c\uff05{resource}\u201d",conflictCount:"\u8d44\u6e90<strong>\uff05{resource}</strong>\u7684ID\u51b2\u7a81\u7684\u8bb0\u5f55\u8fd8\u6709<strong>\uff05{conflictingCount}</strong>\u4e2a\u8bb0\u5f55",buttons:{cancel:"\u53d6\u6d88"}},dialogImport:{alertClose:"\u5bfc\u5165\u7684\uff05{fname}",title:"\u5bfc\u5165\u5230\u201c\uff05{resource}\u201d",buttons:{replaceAllConflicts:"\u66ff\u6362\u884c",skipAllConflicts:"\u8df3\u8fc7\u8fd9\u4e9b\u884c",letmeDecide:"\u8ba9\u6211\u4e3a\u6bcf\u4e00\u884c\u51b3\u5b9a"}},dialogDecide:{title:"\u5c06ID\uff05{id}\u5bfc\u5165\u201c\uff05{resource}\u201d",buttons:{replaceRow:"\u66ff\u6362\u884cid=\uff05{id}",addAsNewRow:"\u6dfb\u52a0\u4e3a\u65b0\u884c\uff08\u8bf7\u52ff\u66ff\u6362\uff09",skipDontReplace:"\u8df3\u8fc7\u6b64\u884c\uff08\u8bf7\u52ff\u66ff\u6362\uff09"}},loading:"\u8f7d\u5165\u4e2d..."}}},1036:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(20),i=n.n(a),l=n(184),u=n(623),c=n(637),s=n(614),d=n(268),f=n(700),p=n(527),m=n.n(p),h=n(647),v=n(95),g=n(636),b=n(210),y=n(101),w=n(520),C=n(517),E=n(516),k=n(632),_=n(356),I=n(630),S=n(354),O=n(83),D=n(631),P=n(648),j=n(515),x=n(518),A=function(e){var t=e.className,n=e.basePath,o=e.total,a=e.resource,i=e.currentSort,l=e.filterValues,u=e.exporter,c={logging:!0,validateRow:function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.id;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),postCommitCallback:function(e){console.log("reportItems",{reportItems:e})}};return r.createElement(v.a,{className:t},r.createElement(j.a,{basePath:n}),r.createElement(x.a,{disabled:0===o,resource:a,sort:i,filter:l,exporter:u}),r.createElement(P.ImportButton,Object.assign({},e,c)))},M=function(e){return r.createElement(g.a,Object.assign({},e,{actions:r.createElement(A,null)}),r.createElement(b.a,null,r.createElement(y.a,{source:"id"}),r.createElement(y.a,{source:"title"}),r.createElement(w.a,{label:""}),r.createElement(C.a,{label:""}),r.createElement(E.a,{label:"",redirect:!1})))},R=function(e){return r.createElement(k.a,e,r.createElement(_.a,null,r.createElement(y.a,{source:"id"}),r.createElement(y.a,{source:"title"})))},B=function(e){return r.createElement(I.a,e,r.createElement(S.a,null,r.createElement(O.a,{source:"id"}),r.createElement(O.a,{source:"title"})))},V=function(e){return r.createElement(D.a,e,r.createElement(S.a,null,r.createElement(O.a,{disabled:!0,source:"id"}),r.createElement(O.a,{source:"title"})))},T=n(412),L=n(698),N=n.n(L),F=n(699),G=n.n(F),z=n(274),H=function(){var e=Object(f.a)({posts:[{id:1,title:"FooBar"},{id:2,title:"Another"},{id:3,title:"Thing"},{id:4,title:"Hello, world!"}]}),t={en:Object(l.a)(Object(l.a)({},T.a),z.en),zh:Object(l.a)(Object(l.a)({},G.a),z.zh),es:Object(l.a)(Object(l.a)({},N.a),z.es)},n=Object(d.default)((function(e){return t[e]?t[e]:t.en}),Object(u.b)());return o.a.createElement(c.a,{dataProvider:e,i18nProvider:n},o.a.createElement(s.a,{name:"posts",list:M,show:R,edit:V,create:B}))};i.a.render(o.a.createElement(H,null),document.getElementById("root"))},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1031);Object.defineProperty(t,"es",{enumerable:!0,get:function(){return r.default}});var o=n(1032);Object.defineProperty(t,"en",{enumerable:!0,get:function(){return o.default}});var a=n(1033);Object.defineProperty(t,"zh",{enumerable:!0,get:function(){return a.default}})},483:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleLogger=void 0;var r=function(){function e(e,t){this.prefix=e,this.debug=t,this.loggerID=Math.random().toString(32).slice(2,6)}return e.prototype.getLogString=function(){return"\ud83c\udf1f react-admin-import-csv:: "+this.prefix+" ["+this.loggerID+"] "},Object.defineProperty(e.prototype,"log",{get:function(){return this.debug?console.log.bind(console,this.getLogString()):function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"warn",{get:function(){return this.debug?console.warn.bind(console,this.getLogString()):function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"error",{get:function(){return this.debug?console.error.bind(console,this.getLogString()):function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]}},enumerable:!1,configurable:!0}),e.prototype.setEnabled=function(e){this.debug=e},e}();t.SimpleLogger=r},648:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImportButton=void 0;var r=n(10),o=n(739);Object.defineProperty(t,"ImportButton",{enumerable:!0,get:function(){return o.ImportButton}}),t.default=r.connect()(o.ImportButton)},727:function(e,t,n){e.exports=n(1036)},739:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t},l=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function l(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ImportButton=t.useMyTranslate=t.BtnOption=void 0;var s=c(n(0)),d=n(492),f=n(30),p=n(1035),m=c(n(265)),h=n(483),v=n(1004),g=n(1030),b=c(n(268)),y=i(n(274));t.BtnOption=function(e){return s.default.createElement(f.ListItem,{disableGutters:!0},s.default.createElement(f.Button,{style:{width:"100%",backgroundColor:"#efefef",padding:"13px"},onClick:e.onClick},e.icon,s.default.createElement("span",{style:{width:"100%",textAlign:"left",marginLeft:"8px"}},e.label)))};var w=b.default((function(e){return y[e]?y[e]:y.en}),d.resolveBrowserLocale());function C(e){return s.default.createElement(f.Dialog,{open:e.open,onClose:e.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},s.default.createElement(f.DialogTitle,{id:"alert-dialog-title"},e.title),s.default.createElement(f.DialogContent,null,s.default.createElement("div",{style:{width:"400px",maxWidth:"100%"}},s.default.createElement("p",{style:{fontFamily:"sans-serif",margin:"0",fontSize:"0.9em",marginBottom:"10px",marginTop:"-7px",color:"#555"}},e.subTitle),e.children)))}function E(){var e=t.useMyTranslate();return s.default.createElement("div",{style:{textAlign:"center",paddingTop:"10px",paddingBottom:"10px"}},s.default.createElement(f.CircularProgress,{variant:"indeterminate"}),s.default.createElement("p",{style:{fontFamily:"sans-serif"}},e("csv.loading")))}t.useMyTranslate=function(){var e=d.useTranslate();return function(t,n){(n=n||{})._="";var r=e(t,n);return r||w.translate(t,n)}},t.ImportButton=function(e){var n=d.useRefresh(),o=t.useMyTranslate(),a=d.useDataProvider(),i=e,c=i.logging,b=i.parseConfig,y=i.preCommitCallback,w=i.postCommitCallback,k=i.validateRow,_=e.variant,I=e.label,S=e.resource,O=e.resourceName,D=new h.SimpleLogger("import-csv-button",!0);if(D.setEnabled(c),!S)throw new Error(o("csv.buttonMain.emptyResource"));I||(I=o("csv.buttonMain.label")),_||(_="text"),O||(O=S);var P,j=s.default.useState(!1),x=j[0],A=j[1],M=s.default.useState(!1),R=M[0],B=M[1],V=s.default.useState(null),T=V[0],L=V[1],N=s.default.useState(null),F=N[0],G=N[1],z=s.default.useState(null),H=z[0],U=z[1],q=s.default.useState(null),J=q[0],W=q[1],K=s.default.useState(null),Q=K[0],X=K[1];function Y(){A(!1),B(!1),L(null),G(null),U(null),X(null)}function Z(e){return l(this,void 0,void 0,(function(){return u(this,(function(t){return[2,g.create(c,a,O,e,y,w)]}))}))}function $(e){return l(this,void 0,void 0,(function(){return u(this,(function(t){return[2,g.update(c,a,O,e,y,w)]}))}))}var ee=d.useNotify(),te=function(){Y(),ee(o("csv.dialogImport.alertClose",{fname:Q})),n()},ne=function(){var e=Array.isArray(F)&&F.pop();G(F);var t=Array.isArray(T)&&T.filter((function(t){return t.id===e})).pop();return D.log("nextConflicting",{foundValue:t,currentId:e}),!t||W(t),t&&r({},t)};return s.default.createElement(s.default.Fragment,null,s.default.createElement(f.Tooltip,{title:o("csv.buttonMain.tooltip")},s.default.createElement("div",null,s.default.createElement(d.Button,{color:"primary",component:"span",variant:_,label:I,onClick:function(){Y(),P.value="",P.click()}},s.default.createElement(m.default,{style:{transform:"rotate(180deg)",fontSize:"20"}})),s.default.createElement("input",{ref:function(e){return P=e},type:"file",style:{display:"none"},onChange:function(e){return l(void 0,void 0,void 0,(function(){var t,n,r,i,l,s,d;return u(this,(function(u){switch(u.label){case 0:t=e.target.files&&e.target.files[0],X(t.name),A(!0),u.label=1;case 1:return u.trys.push([1,9,,10]),D.log("Parsing CSV file"),[4,v.GetCSVItems(c,o,t,b)];case 2:return n=u.sent(),L(n),D.log("Validating CSV file"),[4,v.CheckCSVValidation(c,o,n,k)];case 3:return u.sent(),D.log("Checking rows to import"),[4,v.GetIdsColliding(c,o,a,n,O)];case 4:return r=u.sent(),G(r),i=!!r.length,D.log("Is has colliding ids?",{hasCollidingIds:i,collidingIds:r}),i?(l=new Set(r.map((function(e){return e}))),s=n.filter((function(e){return!l.has(e.id)})),D.log("Importing items which arent colliding",{csvItemsNotColliding:s}),[4,Z(s)]):[3,6];case 5:return u.sent(),[3,8];case 6:return[4,Z(n)];case 7:u.sent(),te(),u.label=8;case 8:return[3,10];case 9:return d=u.sent(),Y(),D.error(d),[3,10];case 10:return[2]}}))}))},accept:".csv,.tsv"}))),s.default.createElement(C,{title:o("csv.dialogImport.title",{resource:O}),subTitle:o("csv.dialogCommon.subtitle",{count:T&&T.length,fileName:Q,resource:O}),open:x,resourceName:O,handleClose:te},H&&s.default.createElement(E,null),F&&F.length>0&&!H&&s.default.createElement("div",null,s.default.createElement("p",{style:{fontFamily:"sans-serif",margin:"0"},dangerouslySetInnerHTML:{__html:o("csv.dialogCommon.conflictCount",{resource:O,conflictingCount:F&&F.length+1})}}),s.default.createElement(f.List,null,s.default.createElement(t.BtnOption,{onClick:function(){return l(void 0,void 0,void 0,(function(){var e,t;return u(this,(function(n){switch(n.label){case 0:D.log("handleReplace"),n.label=1;case 1:return n.trys.push([1,4,,5]),U(!0),[4,new Promise((function(e){return setTimeout(e,1e3)}))];case 2:return n.sent(),e=new Set(F.map((function(e){return e}))),[4,$(T.filter((function(t){return e.has(t.id)})))];case 3:return n.sent(),te(),[3,5];case 4:return t=n.sent(),U(!1),D.error("handleReplace",t),[3,5];case 5:return[2]}}))}))},icon:s.default.createElement(p.Done,{htmlColor:"#29c130"}),label:o("csv.dialogImport.buttons.replaceAllConflicts")}),s.default.createElement(t.BtnOption,{onClick:function(){D.log("handleSkip"),te()},icon:s.default.createElement(p.FileCopy,{htmlColor:"#3a88ca"}),label:o("csv.dialogImport.buttons.skipAllConflicts")}),s.default.createElement(t.BtnOption,{onClick:function(){return l(void 0,void 0,void 0,(function(){return u(this,(function(e){return D.log("handleAskDecide"),A(!1),ne(),B(!0),[2]}))}))},icon:s.default.createElement(p.Undo,{htmlColor:"black"}),label:o("csv.dialogImport.buttons.letmeDecide")})))),s.default.createElement(C,{title:o("csv.dialogDecide.title",{id:J&&J.id,resource:O}),subTitle:o("csv.dialogCommon.subtitle",{count:T&&T.length,fileName:Q,resource:O}),open:R,resourceName:O,handleClose:te},H&&s.default.createElement(E,null),!H&&s.default.createElement("div",null,s.default.createElement("p",{style:{fontFamily:"sans-serif",margin:"0"},dangerouslySetInnerHTML:{__html:o("csv.dialogCommon.conflictCount",{resource:O,conflictingCount:F&&F.length+1})}}),s.default.createElement(f.List,null,s.default.createElement(t.BtnOption,{onClick:function(){return l(void 0,void 0,void 0,(function(){var e;return u(this,(function(t){switch(t.label){case 0:return D.log("handleAskDecideReplace"),(e=ne())?[4,$([e])]:[2,te()];case 1:return t.sent(),[2]}}))}))},icon:s.default.createElement(p.Done,{htmlColor:"#29c130"}),label:o("csv.dialogDecide.buttons.replaceRow",{id:J&&J.id})}),s.default.createElement(t.BtnOption,{onClick:function(){return l(void 0,void 0,void 0,(function(){var e;return u(this,(function(t){switch(t.label){case 0:return D.log("handleAskDecideAddAsNew"),(e=ne())?(delete e.id,[4,Z([e])]):[2,te()];case 1:return t.sent(),[2]}}))}))},icon:s.default.createElement(p.Add,{htmlColor:"#3a88ca"}),label:o("csv.dialogDecide.buttons.addAsNewRow")}),s.default.createElement(t.BtnOption,{onClick:function(){return l(void 0,void 0,void 0,(function(){return u(this,(function(e){return D.log("handleAskDecideSkip"),ne()?[2]:[2,te()]}))}))},icon:s.default.createElement(p.Undo,{htmlColor:"black"}),label:o("csv.dialogDecide.buttons.skipDontReplace")}),s.default.createElement(t.BtnOption,{onClick:function(){return l(void 0,void 0,void 0,(function(){return u(this,(function(e){return D.log("handleAskDecideSkipAll"),te(),[2]}))}))},icon:s.default.createElement(p.Clear,{htmlColor:"#3a88ca"}),label:o("csv.dialogCommon.buttons.cancel")})))))}}},[[727,1,2]]]);
//# sourceMappingURL=main.603ff2aa.chunk.js.map
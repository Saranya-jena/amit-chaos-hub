function o(){return{convert:n=>n==null||n===""?null:String(n),asString:n=>String(n),type:n=>n.string().optional()}}function a(n){return{convert:t=>{if(typeof t=="object")return t;if(typeof t=="string"){const e=JSON.parse(t);return typeof e!="object"?null:e}return null},asString:t=>JSON.stringify(t),type:t=>t.record(n(t).optional()).optional()}}function u(n){return{convert:t=>{if(Array.isArray(t))return t;if(typeof t=="string"){const e=JSON.parse(t);return Array.isArray(e)?e:null}return null},asString:t=>JSON.stringify(t),type:t=>t.array(n(t)).optional()}}function r(n,t){const e=i=>t.convert(i[n]);return{name:E(n),key:n,asEnv:i=>({[n]:t.asString(i)}),zod:{type:t.type},get:e,getOrDefault:(i,l)=>{var s;return(s=e(i))!=null?s:l}}}function E(n){return n.toLowerCase().replace(/([-_][a-z])/gi,t=>t.toUpperCase().replace("-","").replace("_",""))}var I={APP_LOGO:r("APP_LOGO",o()),APP_TITLE:r("APP_TITLE",o()),APP_FAVICON:r("APP_FAVICON",o()),SITE_ROOT:r("SITE_ROOT",o()),SITE_META:r("SITE_META",a(n=>n.string())),QUERY_GENERATION_FACTORIES:r("QUERY_GENERATION_FACTORIES",a(n=>n.union([n.string(),n.boolean(),n.number(),n.null(),n.record(n.unknown())]))),PAGES:r("PAGES",u(n=>{const t=n.lazy(()=>n.object({title:n.string().min(1),content:n.union([n.array(t),n.string().min(1)])}));return t})),EXTERNAL_LINKS:r("EXTERNAL_LINKS",u(n=>n.object({label:n.string().min(1),href:n.string().min(1),kind:n.string().min(1).optional(),group:n.string().min(1).optional()})))};function A(){return{convert:n=>{if(n===null||n===void 0)return null;switch(typeof n){case"boolean":return n;case"string":const t=n.toLowerCase().trim();return t==="true"||t==="t"||t==="1";case"number":return n!==0;default:return null}},asString:n=>String(n),type:n=>n.boolean().optional()}}r("MAGIDOC_GENERATE",A());const p="Harness Chaos Engineering Docs",g="https://raw.githubusercontent.com/amityt/amit-chaos-hub/master/assets/icon.svg",f="https://raw.githubusercontent.com/amityt/amit-chaos-hub/master/assets/favicon.svg",O='{"description":"API docs for Harness Chaos Engineering GraphQL API.","og:description":"API docs for Harness Chaos Engineering GraphQL API."}',T="/amit-chaos-hub",_=`[{"title":"Welcome","content":"\\n# \u{1F44B} Hi\\nWelcome to [HCE](https://harness.io/products/chaos-engineering)'s GraphQL documentation\\ngenerated with [Magidoc](https://github.com/magidoc-org/magidoc), a free open source software designed to build customizable static GraphQL documentation websites with little effort.\\n"}]`,P="true",c={APP_TITLE:p,APP_LOGO:g,APP_FAVICON:f,SITE_META:O,SITE_ROOT:T,PAGES:_,MAGIDOC_GENERATE:P};function m(n){return n.get(c)}function S(n,t){return n.getOrDefault(c,t)}export{m as a,S as g,I as t};

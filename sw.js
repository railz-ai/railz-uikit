if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),d={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>d[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-6da860f9"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"index.html",revision:"5d1fbe45bc642706b427e2bb04be5bb1"},{url:"assets/icons/account.svg.json",revision:"e34348dbb88e1cda5f0e27af4a6409c6"},{url:"assets/icons/accounting.svg.json",revision:"3d0da75b0fc1e198772c77089484dbad"},{url:"assets/icons/api_documentation.svg.json",revision:"c73a172bf251438de6d0af5055895801"},{url:"assets/icons/api_keys.svg.json",revision:"5349284e138c3ff2a12350ad6fdab307"},{url:"assets/icons/banking.svg.json",revision:"8e10d16193147bcde473c3ce6764895d"},{url:"assets/icons/billing.svg.json",revision:"61f7b67f002b677daf3e78131e4b47f1"},{url:"assets/icons/branding.svg.json",revision:"e73fac948ee21e451b13cda46c364fb1"},{url:"assets/icons/businesses.svg.json",revision:"e3602ca916863158391cf444edaa3b5b"},{url:"assets/icons/checkmark.svg.json",revision:"a4bbf46e0b45c71705c4f5c40b36fe2a"},{url:"assets/icons/close.svg.json",revision:"4b91a4b7ca1d9afa4690d6ed524af4bf"},{url:"assets/icons/company.svg.json",revision:"2b5e4550a56aeb152d7fc3b6d5ba461e"},{url:"assets/icons/developers.svg.json",revision:"b544e00b795adf9fd5911a0a26f7cb18"},{url:"assets/icons/disclosure_arrow.svg.json",revision:"569cefcdec28c70adca248391a8d7352"},{url:"assets/icons/home.svg.json",revision:"39f8fbf5a6114e173cc39928ea88bcfb"},{url:"assets/icons/indeterminate.svg.json",revision:"fb9751fe4fb67803d2221a5a3b103ae2"},{url:"assets/icons/index.json",revision:"70ceb24b309b9f35b8d1c6572889362b"},{url:"assets/icons/integrations.svg.json",revision:"949f6e3ddf061f8085b75211db314e33"},{url:"assets/icons/log_out.svg.json",revision:"862c45ff09bda496173202252d4e7fdf"},{url:"assets/icons/profile.svg.json",revision:"8786e9cecda6bf27f1cd38e0c372cd39"},{url:"assets/icons/reports.svg.json",revision:"a7d99ea9f4ac10aa0372be6fabcac660"},{url:"assets/icons/security.svg.json",revision:"41fea51a6be077a0711cf6e0429589bc"},{url:"assets/icons/settings.svg.json",revision:"00ca5e6793075fe602604f9b6d55ce0b"},{url:"assets/icons/setup.svg.json",revision:"78729ac156e23bbc8b3f59bf5fc9d015"},{url:"assets/icons/shopping.svg.json",revision:"1785e1468e3262e0e8824edd357713fc"},{url:"assets/icons/team.svg.json",revision:"d8b0f7b98cfb0a4a020cf1fbd69f4a85"},{url:"assets/icons/webhooks.svg.json",revision:"e9752d460ef79714f1a7e2f03066aaef"},{url:"assets/icons/widget.svg.json",revision:"4d5a74a2b8ec2f7eeb7b0324fffdc1cd"},{url:"build/index.esm.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"build/p-0637c75d.entry.js",revision:null},{url:"build/p-1485c34e.entry.js",revision:null},{url:"build/p-14a0599c.entry.js",revision:null},{url:"build/p-213c6767.entry.js",revision:null},{url:"build/p-2435ddc6.entry.js",revision:null},{url:"build/p-2b8f23e3.entry.js",revision:null},{url:"build/p-2f095bad.entry.js",revision:null},{url:"build/p-30d7aff2.entry.js",revision:null},{url:"build/p-396aad6c.entry.js",revision:null},{url:"build/p-47860965.entry.js",revision:null},{url:"build/p-4e4b4a52.entry.js",revision:null},{url:"build/p-50792bce.entry.js",revision:null},{url:"build/p-5268466a.entry.js",revision:null},{url:"build/p-639eba72.entry.js",revision:null},{url:"build/p-644725a6.entry.js",revision:null},{url:"build/p-694aeb7f.entry.js",revision:null},{url:"build/p-6dc5aab1.entry.js",revision:null},{url:"build/p-73756dc3.entry.js",revision:null},{url:"build/p-80b59e72.entry.js",revision:null},{url:"build/p-8b4d12b4.entry.js",revision:null},{url:"build/p-8b6401bc.entry.js",revision:null},{url:"build/p-8f98c930.entry.js",revision:null},{url:"build/p-91975d8c.entry.js",revision:null},{url:"build/p-9aa1ea50.entry.js",revision:null},{url:"build/p-9e079f11.entry.js",revision:null},{url:"build/p-a3e9dee6.js",revision:null},{url:"build/p-a482d3aa.entry.js",revision:null},{url:"build/p-a52bda7d.js",revision:null},{url:"build/p-a59d89e7.entry.js",revision:null},{url:"build/p-a797b364.entry.js",revision:null},{url:"build/p-a7a4b5cd.entry.js",revision:null},{url:"build/p-a98c2220.entry.js",revision:null},{url:"build/p-ad90fe4d.js",revision:null},{url:"build/p-b818e3e0.entry.js",revision:null},{url:"build/p-cdc74fa9.entry.js",revision:null},{url:"build/p-d295d78b.entry.js",revision:null},{url:"build/p-d7c2bdb3.entry.js",revision:null},{url:"build/p-dceab8d8.entry.js",revision:null},{url:"build/p-edbad6c5.entry.js",revision:null},{url:"build/p-ee921595.entry.js",revision:null},{url:"build/p-f94c5693.js",revision:null},{url:"manifest.json",revision:"1b1ddc6463b3313cb9fda9493c0a5050"}],{})}));
//# sourceMappingURL=sw.js.map

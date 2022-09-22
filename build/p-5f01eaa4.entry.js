import{r as o,h as r}from"./p-f94c5693.js";let e=class{constructor(r){o(this,r)}render(){const o=Object.values(this.pages).map(((o,r)=>"success"===o.state?r+1:0)),e=Math.max(...o)||1;return r("nav",null,r("ul",{class:`pages completed-${e}`},this.pages&&this.pages.map((o=>r("li",{class:`page ${o.state||"pending"}`},r("div",{class:"indicator"},"skipped"===o.state&&r("div",{class:"icon"},r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r("polygon",{fill:"#323232","fill-rule":"evenodd",points:"3 7 13 7 13 9 3 9"})))),r("span",{class:"label"},o.name))))))}};e.style='*,*::before,*::after{box-sizing:border-box}*{margin:0;padding:0}html,body{height:100%}html:focus-within{scroll-behavior:smooth}body{line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh;min-height:stretch}:where(ul[class]),:where(ol[class]){list-style-type:none}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit;appearance:unset;outline:none;border:none}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}:host{display:block}nav{overflow:auto}ul{display:flex;flex-wrap:nowrap}.page{padding:8px 4px;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width}@media (prefers-reduced-motion: reduce){.page{transition-duration:0 !important}.page:hover,.page:focus{transition-duration:0 !important}}@media only screen and (min-width: 64rem){.page{padding:8px 16px}}.page::before,.page::after{content:"";position:absolute;top:16px;width:calc(50% - 8px);height:2px;margin-top:-1px;background-color:var(--brand-secondary-background, #008a50);transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width}@media (prefers-reduced-motion: reduce){.page::before,.page::after{transition-duration:0 !important}.page::before:hover,.page::before:focus,.page::after:hover,.page::after:focus{transition-duration:0 !important}}.page::before{left:0;border-radius:inherit}.page::after{right:0;border-radius:inherit}.indicator{position:relative;display:flex;align-items:center;justify-content:center;height:16px;width:16px;border-radius:16px;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width}@media (prefers-reduced-motion: reduce){.indicator{transition-duration:0 !important}.indicator:hover,.indicator:focus{transition-duration:0 !important}}.indicator::before{content:"";position:absolute;background-color:#fff;border:2px solid #bdbdbd;height:8px;width:8px;border-radius:8px;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width}@media (prefers-reduced-motion: reduce){.indicator::before{transition-duration:0 !important}.indicator::before:hover,.indicator::before:focus{transition-duration:0 !important}}.indicator::after{content:"";position:absolute;border:2px solid #212121;opacity:0;transform:scale(0);height:16px;width:16px;border-radius:16px;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width}@media (prefers-reduced-motion: reduce){.indicator::after{transition-duration:0 !important}.indicator::after:hover,.indicator::after:focus{transition-duration:0 !important}}.label{padding:8px;color:#757575;font-family:var(--primary-font-family), roboto, -apple-system, blinkmacsystemfont, Segoe UI, Helvetica Neue, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;font-size:0.875rem;font-weight:500;line-height:1.6;letter-spacing:normal;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width}@media (prefers-reduced-motion: reduce){.label{transition-duration:0 !important}.label:hover,.label:focus{transition-duration:0 !important}}.success .indicator::before{border-color:var(--brand-secondary-background, #008a50);background-color:var(--brand-secondary-background, #008a50)}.success .label{color:var(--brand-secondary-background, #008a50)}.skipped::before,.skipped::after{width:calc(50% - 12px)}.skipped .indicator{background-color:#fff}.skipped .indicator::after{opacity:1;background-color:#fff;transform:scale(1);border-color:#bdbdbd}.skipped .indicator .icon{transform:scale(0.8);color:#757575;z-index:1;position:relative}.current::before,.current::after{width:calc(50% - 12px)}.current::after{background-color:#bdbdbd}.current .indicator::before{border-color:#212121;background-color:#212121}.current .indicator::after{opacity:1;transform:scale(1)}.current .label{font-weight:600;color:#212121}.current~.page::before,.current~.page::after{background-color:#bdbdbd}.current:last-of-type::before,.current:last-of-type::after{background-color:var(--brand-secondary-background, #008a50)}.completed-1 .page:nth-of-type(1)::before{background-color:var(--brand-secondary-background, #008a50)}.completed-2 .page:nth-of-type(-n+1)::before,.completed-2 .page:nth-of-type(-n+1)::after{background-color:var(--brand-secondary-background, #008a50)}.completed-2 .page:nth-of-type(2)::before{background-color:var(--brand-secondary-background, #008a50)}.completed-3 .page:nth-of-type(-n+2)::before,.completed-3 .page:nth-of-type(-n+2)::after{background-color:var(--brand-secondary-background, #008a50)}.completed-3 .page:nth-of-type(3)::before{background-color:var(--brand-secondary-background, #008a50)}.completed-4 .page:nth-of-type(-n+3)::before,.completed-4 .page:nth-of-type(-n+3)::after{background-color:var(--brand-secondary-background, #008a50)}.completed-4 .page:nth-of-type(4)::before{background-color:var(--brand-secondary-background, #008a50)}.completed-5 .page:nth-of-type(-n+4)::before,.completed-5 .page:nth-of-type(-n+4)::after{background-color:var(--brand-secondary-background, #008a50)}.completed-5 .page:nth-of-type(5)::before{background-color:var(--brand-secondary-background, #008a50)}.completed-6 .page:nth-of-type(-n+5)::before,.completed-6 .page:nth-of-type(-n+5)::after{background-color:var(--brand-secondary-background, #008a50)}.completed-6 .page:nth-of-type(6)::before{background-color:var(--brand-secondary-background, #008a50)}';export{e as railz_navigation_progress_bar}
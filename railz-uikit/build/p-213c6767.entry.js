import{r as e,h as t,H as o,g as i}from"./p-f94c5693.js";let l=class{constructor(t){e(this,t),this.themed=!0}toggleThemed(){this.themed=!this.themed}updateColors(e){console.log("updateColors",e.target.value),this.primaryColor=e.target.value,this.el.style.setProperty("--color-primary",this.primaryColor)}render(){return t(o,null,t("div",{class:"container"},t("div",{class:"header"},t("h1",null,"Theme")),t("div",{class:"content",part:this.themed?"themed":""},t("section",null,t("p",null,"Many elements of the UI Kit can be customized to match a clients brand. This is exposed through the shadowDOM by using the CSS ",t("code",null,"part")," selector, like so:"),t("pre",null,t("code",null,'<section part="themed">\n    <railz-button size="small" label="Button Label" type="primary" />\n</section>'))),t("button",{onClick:()=>this.toggleThemed()},"Toggle Theme ",this.themed?"on":"off"),t("input",{type:"color",name:"color-primary",onChange:e=>this.updateColors(e)}),t("p",null,"Primary Color: ",this.primaryColor),t("section",null,t("h2",null,"Theme Colors"),t("p",null,"Theme colors are variables that can be defined by the end user, for better brand integration. They have specific uses and applications."),t("ul",{class:"row"},t("li",null,t("color-swatch",{name:"color-primary",colorName:"--color-primary"})),t("li",null,t("color-swatch",{name:"color-primary-dark",colorName:"--color-primary-dark"})),t("li",null,t("color-swatch",{name:"color-primary-light",colorName:"--color-primary-light"})),t("li",null,t("color-swatch",{name:"color-primary-text",colorName:"--color-primary-text"}))),t("ul",{class:"row"},t("li",null,t("color-swatch",{name:"color-accent",colorName:"--color-accent"})),t("li",null,t("color-swatch",{name:"color-accent-text",colorName:"--color-accent-text"})))),t("section",null,t("h2",null,"Themed Components"),t("h3",null,"Buttons"),t("div",{class:"row"},t("railz-button",{size:"small",label:"Button Label",type:"primary"}),t("railz-button",{size:"medium",label:"Button Label",type:"primary"}),t("railz-button",{size:"large",label:"Button Label",type:"primary"}),t("railz-button",{size:"x-large",label:"Button Label",type:"primary"})),t("div",{class:"row"},t("railz-button",{size:"small",label:"Button Label",type:"primary",shape:"pill"}),t("railz-button",{size:"medium",label:"Button Label",type:"primary",shape:"pill"}),t("railz-button",{size:"large",label:"Button Label",type:"primary",shape:"pill"}),t("railz-button",{size:"x-large",label:"Button Label",type:"primary",shape:"pill"})),t("h3",null,"Form Controls"),t("div",{class:"row"},t("railz-input-checkbox",{label:"I agree to the terms",checked:!0}),t("railz-input-radio",{checked:!0,label:"CIBC",value:"CIBC",name:"financial_institution"}),t("railz-input-toggle",{label:"Automatic Updates",checked:!0}))))))}get el(){return i(this)}};l.style=':root{--color-primary:#30a665;--color-primary-light:#38c276;--color-primary-dark:#006137;--color-primary-text:white;--color-accent:#212121;--color-accent-light:#424242;--color-accent-dark:black;--color-accent-text:white}*,*::before,*::after{box-sizing:border-box}*{margin:0;padding:0}html,body{height:100%}html:focus-within{scroll-behavior:smooth}body{line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh;min-height:stretch}:where(ul[class]),:where(ol[class]){list-style-type:none}img,picture,video,canvas,svg{display:block;max-width:100%}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}body{overflow:hidden;position:fixed;top:0;left:0;right:0;bottom:0;min-height:100vh}.plain-a{padding:0;text-decoration:none}:root{--color-primary:#30a665;--color-primary-light:#38c276;--color-primary-dark:#006137;--color-primary-text:white;--color-accent:#212121;--color-accent-light:#424242;--color-accent-dark:black;--color-accent-text:white}:host .container{min-height:105vh;padding:16px;padding-bottom:50vh;line-height:1.2;display:flex;flex-direction:column;gap:16px;min-width:0}@media only screen and (min-width: 32.5rem){:host .container{padding:32px;padding-bottom:50vh}}@media only screen and (min-width: 80rem){:host .container{padding:48px;padding-bottom:50vh}}:host .header{padding:0 16px}:host section{padding:16px}:host section section{padding:16px 0}:host .content{padding-bottom:32px;max-width:85ch;border-bottom:1px solid #ededed}@media only screen and (min-width: 112.5rem){:host .content{max-width:65ch;width:40%;flex-grow:1}}:host h1{font-family:"Inter", "Helvetica", sans-serif;font-size:3rem;font-weight:600;line-height:1;letter-spacing:-0.05em;font-weight:700;color:#212121;margin:24px 0}:host h2{font-family:"Inter", "Helvetica", sans-serif;font-size:2rem;font-weight:600;line-height:1;letter-spacing:-0.05em;font-weight:700;margin:16px 0}:host h3{font-family:"Inter", "Helvetica", sans-serif;font-size:1.5rem;font-weight:600;line-height:1.2;letter-spacing:-0.05em;font-weight:700;margin:16px 0}:host h4{font-family:"Inter", "Helvetica", sans-serif;font-size:1rem;font-weight:600;line-height:1.6;letter-spacing:normal;margin-bottom:16px}:host p{font-family:"Inter", "Helvetica", sans-serif;font-size:1rem;font-weight:500;line-height:1.6;letter-spacing:normal;color:#616161;margin-bottom:8px;padding:8px 0;max-width:65ch}:host strong{color:#212121}:host p>code{background-color:rgba(209, 250, 241, 0.25);padding:4px 8px;border-radius:5px;color:#13b992;font-weight:600;font-family:monospace;font-size:0.875rem;break-inside:avoid;white-space:nowrap;word-break:keep-all}:host pre{background-color:#e9f3fc;margin:8px 4px;padding:8px 12px;border-radius:5px;border:1px solid #d1e8fa;color:#1360b9;font-weight:600;font-family:monospace;font-size:0.875rem;line-height:1.8;white-space:pre-wrap;display:flex;flex-grow:1;align-items:baseline}:host pre .value{font-family:monospace;color:rgba(19, 96, 185, 0.5);font-size:0.625rem;margin-left:auto;padding-left:16px}:host pre code+code{flex-grow:1;width:100%}:host .row{display:flex;gap:8px;padding:16px 0;flex-wrap:wrap;min-width:120px}:host .row.col-2 li{width:40%}:host .sample{flex-grow:1;min-width:60%}:host .columns{display:flex;flex-wrap:wrap;margin:0 -16px;min-width:0}:host .columns .group{width:33%;min-width:180px;flex-grow:1;padding:8px}:host iframe{border:none;box-shadow:none}:host ul{list-style:none}:host ul li{font-family:"Inter", "Helvetica", sans-serif;font-size:0.75rem;font-weight:400;line-height:1.6;letter-spacing:normal;margin-bottom:16px}.row{flex-wrap:wrap-reverse}.row li{flex-grow:1;min-width:120px}';export{l as page_theme}
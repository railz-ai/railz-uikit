import{r as i,h as t}from"./p-f94c5693.js";let e=class{constructor(t){i(this,t)}render(){return t("div",{class:`pill-container ${this.status}`},"dot"===this.icon?t("div",{class:"dot"}):null,"checkmark"===this.icon&&t("div",{class:"icon"},t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},t("path",{d:"M6.22222222,12.4444444 L1.77777778,8 L3.03111111,6.74666667 C4.99434751,8.86814815 6.05805122,9.92888889 6.22222222,9.92888889 C6.38639323,9.92888889 8.63528212,7.68 12.9688889,3.18222222 L14.2222222,4.44444444 L6.22222222,12.4444444 Z"}))),t("span",{class:"label"},this.label))}};e.style='@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"); *,*::before,*::after{box-sizing:border-box}*{margin:0;padding:0}html,body{height:100%}html:focus-within{scroll-behavior:smooth}body{line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh;min-height:stretch}:where(ul[class]),:where(ol[class]){list-style-type:none}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit;appearance:unset;outline:none;border:none}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}:host{display:inline}.pill-container{display:flex;flex-basis:max-content;flex-wrap:nowrap;white-space:nowrap;align-items:center;border-radius:40px;min-height:24px;padding:4px 8px}.pill-container.active{background-color:rgba(56, 194, 118, 0.25);color:#174f30}.pill-container.inactive{background-color:rgba(158, 158, 158, 0.25);color:#424242}.pill-container.warn{background-color:rgba(255, 204, 0, 0.25);color:#665200}.pill-container.message{background-color:rgba(0, 208, 255, 0.25);color:#005366}.pill-container.service{background-color:#fff;box-shadow:inset 0 0 0 1px rgba(66, 66, 66, 0.2);padding-right:12px}.label{font-family:"Inter", "Helvetica", sans-serif;font-size:0.75rem;font-weight:500;line-height:1;letter-spacing:normal;padding:0 4px}.icon{margin-left:2px;margin-right:2px;width:16px;height:16px;display:flex;align-items:center;justify-content:center}.dot{margin:0 4px;height:4px;width:4px;border-radius:4px}.active .dot{background-color:#30a665}.inactive .dot{background-color:#cc0000}';export{e as railz_status_pill}
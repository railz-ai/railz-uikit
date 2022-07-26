import{r as t,c as r,h as o,H as n}from"./p-f94c5693.js";const i=[{name:"account"},{name:"accounting"},{name:"api_documentation"},{name:"api_keys"},{name:"banking"},{name:"billing"},{name:"branding"},{name:"businesses"},{name:"checkmark"},{name:"close"},{name:"company"},{name:"developers"},{name:"disclosure_arrow"},{name:"home"},{name:"indeterminate"},{name:"integrations"},{name:"log_out"},{name:"profile"},{name:"reports"},{name:"security"},{name:"settings"},{name:"setup"},{name:"shopping"},{name:"team"},{name:"webhooks"},{name:"widget"}];let a=class{constructor(o){t(this,o),this.buttonClick=r(this,"buttonClick",7),this.type="primary",this.shape="rounded",this.size="medium",this.target="_blank"}handleClick(t){this.buttonClick.emit(t)}buttonStyles(){return`${this.type} ${this.size} ${this.shape} ${this.grow?"grow":""} ${this.loading?"loading":""} ${this.isDisabled?"disabled":""}`}renderIcon(){if(this.icon&&i.some((t=>t.name===this.icon)))return o("railz-icon",{icon:this.icon})}render(){return o(n,{class:`button ${this.buttonStyles()}`},this.href?o("a",{href:this.href,target:this.target,class:`button ${this.buttonStyles()}`},this.renderIcon(),o("span",{class:"label"},this.label)):o("button",{onClick:t=>this.handleClick(t),class:`button ${this.buttonStyles()}`,disabled:this.isDisabled},this.renderIcon(),this.loading?o("span",{class:"loading-indicator"}):null,o("span",{class:"label"},this.loading?"Loading...":this.label)))}};a.style='@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200.sc-railz-button;300.sc-railz-button;400.sc-railz-button;500.sc-railz-button;600.sc-railz-button;700.sc-railz-button;800.sc-railz-button;900&display=swap").sc-railz-button; *.sc-railz-button,*.sc-railz-button::before,*.sc-railz-button::after{box-sizing:border-box}*.sc-railz-button{margin:0;padding:0}html.sc-railz-button,body.sc-railz-button{height:100%}html.sc-railz-button:focus-within{scroll-behavior:smooth}body.sc-railz-button{line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh;min-height:stretch}.sc-railz-button:where(ul[class]),.sc-railz-button:where(ol[class]){list-style-type:none}img.sc-railz-button,picture.sc-railz-button,video.sc-railz-button,canvas.sc-railz-button,svg.sc-railz-button{display:block;max-width:100%}input.sc-railz-button,button.sc-railz-button,textarea.sc-railz-button,select.sc-railz-button{font:inherit;appearance:unset;outline:none;border:none}p.sc-railz-button,h1.sc-railz-button,h2.sc-railz-button,h3.sc-railz-button,h4.sc-railz-button,h5.sc-railz-button,h6.sc-railz-button{overflow-wrap:break-word}#root.sc-railz-button,#__next.sc-railz-button{isolation:isolate}button.sc-railz-button{appearance:none;box-shadow:none;border:none;outline:none;background:none}.sc-railz-button-h{margin:0;font-size:0}.grow.sc-railz-button-h{width:100%;flex-grow:1}.button.sc-railz-button{transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:"Inter", "Helvetica", sans-serif}@media (prefers-reduced-motion: reduce){.button.sc-railz-button{transition-duration:0 !important}.button.sc-railz-button:hover,.button.sc-railz-button:focus{transition-duration:0 !important}}.label.sc-railz-button{white-space:nowrap}.themed.sc-railz-button{background-color:var(--brand-primary-background, #008a50);color:var(--brand-primary-foreground, white)}.themed.sc-railz-button:hover,.themed.sc-railz-button:focus{background-color:var(--brand-primary-background-active, #00cc77)}.themed.sc-railz-button:active{background-color:var(--brand-primary-background-active, #00cc77);transform:translateY(1px)}.rounded.sc-railz-button{border-radius:4px}.rounded.primary.sc-railz-button{background-color:var(--brand-primary-background, #008a50);color:var(--brand-primary-foreground, white)}.rounded.primary.sc-railz-button:hover,.rounded.primary.sc-railz-button:focus{background-color:var(--brand-primary-background-active, #00cc77)}.rounded.primary.sc-railz-button:active{background-color:var(--brand-primary-background-active, #00cc77);transform:translateY(1px)}.rounded.secondary.sc-railz-button{background-color:#212121;color:#fff}.rounded.secondary.sc-railz-button:hover,.rounded.secondary.sc-railz-button:focus{background-color:#424242}.rounded.secondary.sc-railz-button:active{background-color:#000;transform:translateY(1px)}.pill.sc-railz-button{border-radius:40px}.pill.primary.sc-railz-button{background-color:#212121;color:#fff}.pill.primary.sc-railz-button:hover,.pill.primary.sc-railz-button:focus{background-color:#000 ""}.pill.primary.sc-railz-button:active{background-color:#424242;transform:translateY(1px)}.pill.secondary.sc-railz-button{background-color:transparent;box-shadow:inset 0 0 0 1px #000;color:#000}.pill.secondary.sc-railz-button:hover,.pill.secondary.sc-railz-button:focus{background-color:#ededed;box-shadow:inset 0 0 0 1px rgba(158, 158, 158, 0.2)}.pill.secondary.sc-railz-button:active{background-color:#e0e0e0;transform:translateY(1px)}.pill.tertiary.sc-railz-button{background-color:transparent;box-shadow:inset 0 0 0 1px #fff;color:#fff}.small.sc-railz-button{font-size:0.75rem;font-weight:500;padding:4px 16px;min-height:24px}.small.sc-railz-button .icon.sc-railz-button{width:12px;height:12px}.medium.sc-railz-button{font-size:0.875rem;font-weight:500;padding:8px 16px;min-width:120px;min-height:32px}.medium.sc-railz-button .icon.sc-railz-button{width:12px;height:12px;margin-left:2px;margin-right:4px}.large.sc-railz-button{font-size:1rem;font-weight:500;padding:12px 24px;min-width:184px;min-height:40px}.large.sc-railz-button .icon.sc-railz-button{width:16px;height:16px;margin-left:-8px;margin-right:12px}.x-large.sc-railz-button{font-size:1.125rem;font-weight:600;padding:16px 48px;min-width:184px}.x-large.sc-railz-button .icon.sc-railz-button{width:20px;height:20px;margin-right:16px;margin-left:-16px}.grow.sc-railz-button{display:flex;width:100%;flex-grow:1;text-align:center;justify-content:center;align-items:center}railz-icon.sc-railz-button{width:16px;margin-left:-4px}railz-icon.sc-railz-button+.label.sc-railz-button{margin-left:8px}.disabled.sc-railz-button-h{cursor:not-allowed !important}.disabled.sc-railz-button-h button.sc-railz-button{pointer-events:none !important}.disabled.sc-railz-button-h button.primary.sc-railz-button,.disabled.sc-railz-button-h button.secondary.sc-railz-button{background-color:#e0e0e0;color:#424242}';export{a as railz_button}
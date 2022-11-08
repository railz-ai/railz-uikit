import{r as t,c as i,h as e}from"./p-f94c5693.js";import{v as o}from"./p-ad90fe4d.js";let r=class{constructor(e){t(this,e),this.valueChange=i(this,"valueChange",7),this.uuid=o().toString()}handleChange(t){const i=t.target;this.valueChange.emit(i.value),this.dirty=i.value.length>0,this.validationCheck()}componentWillLoad(){this.dirty=!!this.value}renderInstructionalText(){if(this.instructionalText)return e("span",{class:"instructional-text"},this.instructionalText)}renderErrorMessage(){if(this.error||this.errorMessage)return e("span",{class:"error-message"},this.errorMessage||"Something wrong")}validationCheck(){const t=[];return this.error&&t.push("error"),this.errorMessage&&t.push("error"),this.dirty&&t.push("dirty"),t.join(" ").toString()}render(){return e("div",{class:`form-group ${this.validationCheck()}`},e("div",{class:"input-container"},this.prefixIcon?e("railz-icon",{icon:this.prefixIcon,size:"medium"}):null,e("span",{class:"prefix-container"},e("slot",{name:"prefix"})),e("div",{class:"label-container"},e("label",{htmlFor:this.inputId||this.uuid},this.label)),e("input",{type:this.type,value:this.value,placeholder:this.placeholder,autoComplete:this.autocomplete,inputmode:this.inputmode,pattern:this.pattern,min:this.minNumber,max:this.maxNumber,id:this.inputId||this.uuid,onInput:t=>this.handleChange(t),readonly:this.readonly,disabled:this.disabled}),e("span",{class:"suffix-container"},e("slot",{name:"suffix"}))),this.renderInstructionalText(),this.renderErrorMessage())}};r.style='*,*::before,*::after{box-sizing:border-box}*{margin:0;padding:0}html,body{height:100%}html:focus-within{scroll-behavior:smooth}body{line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh;min-height:stretch}:where(ul[class]),:where(ol[class]){list-style-type:none}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit;appearance:unset;outline:none;border:none}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}:host{width:100%;flex-grow:1}div{display:block}.input-container{position:relative;box-shadow:inset 0 0 0 1px #bdbdbd;border-radius:8px;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width;display:flex;align-items:center;margin-bottom:8px;padding:0 16px}@media (prefers-reduced-motion: reduce){.input-container{transition-duration:0 !important}.input-container:hover,.input-container:focus{transition-duration:0 !important}}.input-container:focus-within{box-shadow:inset 0 0 0 2px var(--brand-secondary-background, #212121)}.input-container:hover:not(:focus-within){background-color:rgba(237, 237, 237, 0.5)}.input-container:hover:not(:focus-within) label{background-color:rgba(250, 250, 250, 0)}label{font-family:var(--primary-font-family), roboto, -apple-system, blinkmacsystemfont, Segoe UI, Helvetica Neue, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;font-size:0.75rem;font-weight:500;line-height:1.6;letter-spacing:normal;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width;color:#212121;padding:4px 8px;border-radius:8px;pointer-events:none;width:100%;flex-grow:1;display:block}@media (prefers-reduced-motion: reduce){label{transition-duration:0 !important}label:hover,label:focus{transition-duration:0 !important}}.input-container:focus-within label{color:var(--brand-secondary-background, #212121);font-weight:600;pointer-events:auto}.label-container{position:absolute;height:100%;display:flex;align-items:center;left:0;z-index:0;margin-left:12px;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:transform}@media (prefers-reduced-motion: reduce){.label-container{transition-duration:0 !important}.label-container:hover,.label-container:focus{transition-duration:0 !important}}.label-container::after{content:"";position:absolute;top:50%;left:50%;width:0;height:4px;transform:translate3d(-50%, -25%, 0);background-color:white;z-index:-1;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:width, min-width, max-width}@media (prefers-reduced-motion: reduce){.label-container::after{transition-duration:0 !important}.label-container::after:hover,.label-container::after:focus{transition-duration:0 !important}}.input-container:focus-within .label-container,.dirty .label-container{transform:translateX(-4px) translateY(-50%) scale(0.8)}.input-container:focus-within .label-container::after,.dirty .label-container::after{width:100%}input{appearance:none;outline:none;border:none;box-shadow:none;background:transparent;-webkit-tap-highlight-color:transparent;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width;font-family:var(--primary-font-family), roboto, -apple-system, blinkmacsystemfont, Segoe UI, Helvetica Neue, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;font-size:1rem;font-weight:500;line-height:1.6;letter-spacing:normal;text-overflow:ellipsis;overflow:hidden;min-width:0;max-width:100%;white-space:nowrap;padding:12px 0;margin:0;width:100%;opacity:0;transform-origin:top left;transform:scale(0.7)}input:focus{outline:none;border:none}@media (prefers-reduced-motion: reduce){input{transition-duration:0 !important}input:hover,input:focus{transition-duration:0 !important}}.input-container:focus-within input{opacity:1;transform:scale(1)}.instructional-text{display:block;padding:2px;font-family:var(--primary-font-family), roboto, -apple-system, blinkmacsystemfont, Segoe UI, Helvetica Neue, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;font-size:0.75rem;font-weight:500;line-height:1.6;letter-spacing:normal}.error-message{display:block;padding:2px;color:#cc0000;font-family:var(--primary-font-family), roboto, -apple-system, blinkmacsystemfont, Segoe UI, Helvetica Neue, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;font-size:0.75rem;font-weight:500;line-height:1.6;letter-spacing:normal}.error .input-container{box-shadow:inset 0 0 0 1px #cc0000}.error .input-container:focus-within{box-shadow:inset 0 0 0 2px #ff3333}.error .input-container label{color:#cc0000}.dirty .label-container{transform:translateX(-4px) translateY(-50%) scale(0.8)}.dirty input{opacity:1;transform:scale(1)}.dirty .input-container:hover,.dirty .input-container:focus{background:none}.dirty .input-container:hover label,.dirty .input-container:focus label{background:none}.prefix-container{padding:0 4px;color:#616161;opacity:0;display:flex;flex-grow:1;font-family:var(--primary-font-family), roboto, -apple-system, blinkmacsystemfont, Segoe UI, Helvetica Neue, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;font-size:0.875rem;font-weight:500;line-height:1.6;letter-spacing:normal;transition:0.3s cubic-bezier(0.3, 0.9, 0.4, 0.98);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, height, width, top, left, right, bottom, max-height, max-width, min-height, min-width}@media (prefers-reduced-motion: reduce){.prefix-container{transition-duration:0 !important}.prefix-container:hover,.prefix-container:focus{transition-duration:0 !important}}.input-container:focus-within .prefix-container,.dirty .prefix-container{opacity:1}.suffix-container{color:#616161;text-align:right;font-family:var(--primary-font-family), roboto, -apple-system, blinkmacsystemfont, Segoe UI, Helvetica Neue, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;font-size:0.875rem;font-weight:500;line-height:1.6;letter-spacing:normal}railz-icon{margin-left:8px;margin-right:12px}railz-icon~.label-container{left:40px}.error railz-icon{color:#b30000}';export{r as railz_input_text}
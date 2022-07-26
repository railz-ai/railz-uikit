import{r as e,h as t}from"./p-f94c5693.js";let i=class{constructor(t){e(this,t),this.modalOpen=!1,this.modal1Open=!1,this.modal2Open=!1,this.modal3Open=!1,this.modal4Open=!1,this.blade1Open=!1,this.blade2Open=!1}toggleModal(e){"modal1"===e&&(this.modal1Open=!this.modal1Open),"modal2"===e&&(this.modal2Open=!this.modal2Open),"modal3"===e&&(this.modal3Open=!this.modal3Open),"modal4"===e&&(this.modal4Open=!this.modal4Open)}toggleBlade1(){this.blade1Open=!this.blade1Open}toggleBlade2(){console.log("close the blade"),this.blade1Open=!1,this.blade2Open=!this.blade2Open}render(){return t("div",{class:"container"},t("div",{class:"header"},t("h1",null,"Modals")),t("div",{class:"content"}),t("section",null,t("h2",null,"Simple Modal"),t("p",null,"The ",t("code",null,"railz-modal")," component uses the HTML ",t("code",null,"dialog")," component under the hood, which natively manages things like visibility, DOM order, and focus states."),t("p",null,"The component is comprised of a few parts. First, there must be a button or event that triggers the modal."),t("railz-button",{onClick:()=>this.toggleModal("modal1"),label:"Open Modal 1"}),t("railz-modal",{heading:"Title of Modal",subheading:"Some descriptive text",message:"This is the main message or body of the modal","show-modal":this.modal1Open}),t("pre",null,t("code",null,'<railz-button onClick={() => this.toggleModal(\'modal1\')} label="Open Modal 1" />\n<railz-modal heading="Title of Modal" subheading="Some descriptive text" message="This is the main message or body of the modal" show-modal={this.modal1Open} />'))),t("section",null,t("h2",null,"Modal Slots"),t("section",null,t("h3",null,"Actions"),t("p",null,"The ",t("code",null,"railz-modal")," component has props for ",t("code",null,"heading"),", ",t("code",null,"subheading"),", and ",t("code",null,"message")," strings. In addition to these simple properties, there are also ",t("code",null,"slots")," available for ",t("code",null,"primary"),", ",t("code",null,"secondary"),", & ",t("code",null,"tertiary")," actions, that appear at the bottom the window. These slots can accept other ",t("strong",null,"Railz Ui Kit")," components, or any valid HTML, and can be styled from the parent. They are identified by adding",t("code",null,'slot="name of slot"')),t("railz-button",{onClick:()=>this.toggleModal("modal2"),label:"Open Modal 2"}),t("railz-modal",{heading:"Title of Modal",subheading:"Some descriptive text",message:"This is the main message or body of the modal","show-modal":this.modal2Open},t("railz-button",{label:"Continue",slot:"primary"}),t("a",{href:"",slot:"secondary"},"Cancel"),t("a",{href:"",slot:"tertiary"},"Learn More")),t("pre",null,t("code",null,'<railz-modal heading="Title of Modal" subheading="Some descriptive text" message="This is the main message or body of the modal" show-modal={this.modal2Open}>\n    <railz-button label="Continue" slot="primary" />\n    <a href="" slot="secondary">Cancel</a>\n    <a href="" slot="tertiary">Learn More</a>\n</railz-modal>'))),t("section",null,t("h3",null,"Rich Content"),t("p",null,"For times when a modal requires more than a simple string, the ",t("code",null,"railz-modal")," can recieve a ",t("code",null,"modal-content")," slot."),t("railz-button",{onClick:()=>this.toggleModal("modal3"),label:"Open Modal 3"}),t("railz-modal",{heading:"Stay in touch!","show-modal":this.modal3Open},t("div",{slot:"modal-content"},t("span",{class:"message"},"Don't miss out on exciting announcments! Enter your email address to sign up for our newsletter"),t("railz-input-text",{label:"Enter your email",placeholder:"sam@gmail.com"})),t("railz-button",{label:"Sign Up!",slot:"primary"}),t("a",{href:"",slot:"secondary"},"No Thanks")),t("pre",null,t("code",null,'<railz-modal heading="Stay in touch!" show-modal={this.modal3Open}>\n    <div slot="modal-content">\n        <span class="message">Don\'t miss out on exciting announcments! Enter your email address to sign up for our newsletter</span>\n        <railz-input-text label="Enter your email" placeholder="sam@gmail.com" />\n    </div>\n    <railz-button label="Sign Up!" slot="primary" />\n    <a href="" slot="secondary">No Thanks</a>\n</railz-modal>')))),t("section",null,t("h2",null,"Style Variants"),t("p",null,"The component can also recieve an ",t("code",null,"alignment")," property, for when a centered appearance is more appropriate"),t("p",null,"Simpy add ",t("code",null,'alignment="center"'),"to activate this variant"),t("railz-button",{onClick:()=>this.toggleModal("modal4"),label:"Open Modal 4"}),t("railz-modal",{heading:"Stay in touch!",alignment:"center","show-modal":this.modal4Open},t("div",{slot:"modal-content"},t("span",{class:"message"},"Don't miss out on exciting announcments! Enter your email address to sign up for our newsletter"),t("railz-input-text",{label:"Enter your email",placeholder:"sam@gmail.com"})),t("railz-button",{label:"Sign Up!",slot:"primary"}),t("a",{href:"",slot:"secondary"},"No Thanks"))),t("section",null,t("h2",null,"The Blade"),t("div",{class:"modal-canvas"},t("button",{onClick:()=>this.toggleBlade1()},"open from parent"),t("railz-modal",{"show-modal":this.blade1Open,heading:"Title of Modal",subheading:"Some descriptive text",type:"blade"},t("div",{slot:"modal-content"},t("h1",null,"Inde sermone vario jexilla a Dipylo stadia confecimus."),t("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid sequatur, quid repugnet, vident. Negat enim summo bono afferre incrementum diem. Quae diligentissime contra Aristonem dicuntur a Chryippo. Sullae consulatum? Quo tandem modo?"),t("p",null,t("b",null,"Eam tum adesse, cum dolor omnis absit;")," Itaque ab his ordiamur. Ne discipulum abducam, times. Ea possunt paria non esse."),t("h3",null,"Post enim Chrysippum eum non sane est disputatum."),t("p",null,t("b",null,"Quis negat?")," Negare non possum. Bestiarum vero nullum iudicium puto. Quantum Aristoxeni ingenium consumptum videmus in musicis? Hoc loco tenere se Triarius non potuit. ",t("mark",null,"Eam stabilem appellas.")),t("h4",null,"Maximus dolor, inquit, brevis est."),t("p",null,"Si mala non sunt, iacet omnis ratio Peripateticorum.",t("a",{href:"http://loripsum.net/",target:"_blank"},"Nihil illinc huc pervenit."),t("a",{href:"http://loripsum.net/",target:"_blank"},"Hoc non est positum in nostra actione."),"Quid autem habent admirationis, cum prope accesseris? Itaque fecimus. Facillimum id quidem est, inquam.",t("i",null,"Quia nec honesto quic quam honestius nec turpi turpius.")),t("blockquote",{cite:"http://loripsum.net"},"Non metuet autem, sive celare poterit, sive opibus magnis quicquid fecerit optinere, certeque malet existimari bonus vir, ut non sit, quam esse, ut non putetur."),t("p",null,t("a",{href:"http://loripsum.net/",target:"_blank"},"Nunc omni virtuti vitium contrario nomine opponitur."),"Nullus est igitur cuiusquam dies natalis. Verum hoc idem saepe faciamus. Explanetur igitur. Sed ad haec, nisi molestum est, habeo quae velim."),t("p",null,"Summum ením bonum exposuit vacuitatem doloris; Quod iam a me expectare noli."),t("h2",null,"Duo Reges: constructio interrete."),t("p",null,"Cur, nisi quod turpis oratio est? ",t("b",null,"Tubulo putas dicere?")," Primum divisit ineleganter; Restatis igitur vos; Sed residamus, inquit, si placet.",t("a",{href:"http://loripsum.net/",target:"_blank"},"Istic sum, inquit."),t("i",null,"Non autem hoc: igitur ne illud quidem.")),t("p",null,t("a",{href:"http://loripsum.net/",target:"_blank"},"Non potes, nisi retexueris illa."),"Hoc loco tenere se Triarius non potuit."),t("ul",null,t("li",null,"Omnes, qui non sint sapientes, aeque miseros esse, sapientes omnes summe beatos, recte facta omnia aequalia, omnia peccata paria;"),t("li",null,"Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius."),t("li",null,"Semper enim ex eo, quod maximas partes continet latissimeque funditur, tota res appellatur."),t("li",null,"Sed vos squalidius, illorum vides quam niteat oratio."))),t("railz-button",{label:"Continue",slot:"primary",onClick:()=>this.toggleBlade2()})),t("railz-button",{label:"Continue",slot:"primary",onClick:()=>this.toggleBlade2()}),t("railz-modal",{"show-modal":this.blade2Open,heading:"Blade 2",subheading:"Some descriptive text",type:"blade"},t("div",{slot:"modal-content"},t("p",null,"Cool!"))))))}};i.style=':root{--color-primary:#30a665;--color-primary-light:#38c276;--color-primary-dark:#006137;--color-primary-text:white;--color-accent:#212121;--color-accent-light:#424242;--color-accent-dark:black;--color-accent-text:white}*,*::before,*::after{box-sizing:border-box}*{margin:0;padding:0}html,body{height:100%}html:focus-within{scroll-behavior:smooth}body{line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh;min-height:-webkit-fill-available;min-height:stretch}:where(ul[class]),:where(ol[class]){list-style-type:none}img,picture,video,canvas,svg{display:block;max-width:100%}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}body{overflow:hidden;position:fixed;top:0;left:0;right:0;bottom:0;min-height:100vh}.plain-a{padding:0;text-decoration:none}:root{--color-primary:#30a665;--color-primary-light:#38c276;--color-primary-dark:#006137;--color-primary-text:white;--color-accent:#212121;--color-accent-light:#424242;--color-accent-dark:black;--color-accent-text:white}:host .container{min-height:105vh;padding:16px;padding-bottom:50vh;line-height:1.2;display:flex;flex-direction:column;gap:16px;min-width:0}@media only screen and (min-width: 32.5rem){:host .container{padding:32px;padding-bottom:50vh}}@media only screen and (min-width: 80rem){:host .container{padding:48px;padding-bottom:50vh}}:host .header{padding:0 16px}:host section{padding:16px}:host section section{padding:16px 0}:host .content{padding-bottom:32px;max-width:85ch;border-bottom:1px solid #ededed}@media only screen and (min-width: 112.5rem){:host .content{max-width:65ch;width:40%;flex-grow:1}}:host h1{font-family:"Inter", "Helvetica", sans-serif;font-size:3rem;font-weight:600;line-height:1;letter-spacing:-0.05em;font-weight:700;color:#212121;margin:24px 0}:host h2{font-family:"Inter", "Helvetica", sans-serif;font-size:2rem;font-weight:600;line-height:1;letter-spacing:-0.05em;font-weight:700;margin:16px 0}:host h3{font-family:"Inter", "Helvetica", sans-serif;font-size:1.5rem;font-weight:600;line-height:1.2;letter-spacing:-0.05em;font-weight:700;margin:16px 0}:host h4{font-family:"Inter", "Helvetica", sans-serif;font-size:1rem;font-weight:600;line-height:1.6;letter-spacing:normal;margin-bottom:16px}:host p{font-family:"Inter", "Helvetica", sans-serif;font-size:1rem;font-weight:500;line-height:1.6;letter-spacing:normal;color:#616161;margin-bottom:8px;padding:8px 0;max-width:65ch}:host strong{color:#212121}:host p>code{background-color:rgba(209, 250, 241, 0.25);padding:4px 8px;border-radius:5px;color:#13b992;font-weight:600;font-family:monospace;font-size:0.875rem;break-inside:avoid;white-space:nowrap;word-break:keep-all}:host pre{background-color:#e9f3fc;margin:8px 4px;padding:8px 12px;border-radius:5px;border:1px solid #d1e8fa;color:#1360b9;font-weight:600;font-family:monospace;font-size:0.875rem;line-height:1.8;white-space:pre-wrap;display:flex;flex-grow:1;align-items:baseline}:host pre .value{font-family:monospace;color:rgba(19, 96, 185, 0.5);font-size:0.625rem;margin-left:auto;padding-left:16px}:host pre code+code{flex-grow:1;width:100%}:host .row{display:flex;gap:8px;padding:16px 0;flex-wrap:wrap;min-width:120px}:host .row.col-2 li{width:40%}:host .sample{flex-grow:1;min-width:60%}:host .columns{display:flex;flex-wrap:wrap;margin:0 -16px;min-width:0}:host .columns .group{width:33%;min-width:180px;flex-grow:1;padding:8px}:host iframe{border:none;box-shadow:none}:host ul{list-style:none}:host ul li{font-family:"Inter", "Helvetica", sans-serif;font-size:0.75rem;font-weight:400;line-height:1.6;letter-spacing:normal;margin-bottom:16px}a[slot=tertiary]{color:#38c276;text-decoration:none;padding:8px 16px;font-family:"Inter", "Helvetica", sans-serif;font-size:0.75rem;font-weight:600;line-height:1.6;letter-spacing:normal;background-color:rgba(176, 232, 201, 0.2);border-radius:8px}a[slot=secondary]{padding:8px 16px;font-family:"Inter", "Helvetica", sans-serif;font-size:0.75rem;font-weight:600;line-height:1.6;letter-spacing:normal;border-radius:8px;color:#1c3b5e;background-color:rgba(15, 72, 138, 0.1);text-decoration:none}.message{display:block;margin-bottom:24px;font-family:"Inter", "Helvetica", sans-serif;font-size:1rem;font-weight:400;line-height:1.6;letter-spacing:normal;color:#757575}';export{i as page_modal}
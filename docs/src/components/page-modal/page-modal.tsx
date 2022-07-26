import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'page-modal',
  styleUrl: 'page-modal.scss',
  shadow: true,
})
export class PageModal {
  @State() modalOpen: boolean = false;
  @State() modal1Open: boolean = false;
  @State() modal2Open: boolean = false;
  @State() modal3Open: boolean = false;
  @State() modal4Open: boolean = false;
  @State() blade1Open: boolean = false;
  @State() blade2Open: boolean = false;

  toggleModal(target) {
    target === 'modal1' ? (this.modal1Open = !this.modal1Open) : null;
    target === 'modal2' ? (this.modal2Open = !this.modal2Open) : null;
    target === 'modal3' ? (this.modal3Open = !this.modal3Open) : null;
    target === 'modal4' ? (this.modal4Open = !this.modal4Open) : null;
    // this.modalOpen = !this.modalOpen;
  }

  toggleBlade1() {
    this.blade1Open = !this.blade1Open;
  }

  toggleBlade2() {
    console.log('close the blade');

    this.blade1Open = false;
    this.blade2Open = !this.blade2Open;
  }

  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Modals</h1>
        </div>

        <div class="content"></div>

        <section>
          <h2>Simple Modal</h2>
          <p>
            The <code>railz-modal</code> component uses the HTML <code>dialog</code> component under the hood, which natively manages things like visibility, DOM order, and focus
            states.
          </p>
          <p>The component is comprised of a few parts. First, there must be a button or event that triggers the modal.</p>
          <railz-button onClick={() => this.toggleModal('modal1')} label="Open Modal 1" />
          <railz-modal heading="Title of Modal" subheading="Some descriptive text" message="This is the main message or body of the modal" show-modal={this.modal1Open} />
          <pre>
            <code>
              {`<railz-button onClick={() => this.toggleModal('modal1')} label="Open Modal 1" />
<railz-modal heading="Title of Modal" subheading="Some descriptive text" message="This is the main message or body of the modal" show-modal={this.modal1Open} />`}
            </code>
          </pre>
        </section>
        <section>
          <h2>Modal Slots</h2>
          <section>
            <h3>Actions</h3>
            <p>
              The <code>railz-modal</code> component has props for <code>heading</code>, <code>subheading</code>, and <code>message</code> strings. In addition to these simple
              properties, there are also <code>slots</code> available for <code>primary</code>, <code>secondary</code>, & <code>tertiary</code> actions, that appear at the bottom
              the window. These slots can accept other <strong>Railz Ui Kit</strong> components, or any valid HTML, and can be styled from the parent. They are identified by adding
              <code>slot="name of slot"</code>
            </p>
            <railz-button onClick={() => this.toggleModal('modal2')} label="Open Modal 2" />

            <railz-modal heading="Title of Modal" subheading="Some descriptive text" message="This is the main message or body of the modal" show-modal={this.modal2Open}>
              <railz-button label="Continue" slot="primary" />
              <a href="" slot="secondary">
                Cancel
              </a>
              <a href="" slot="tertiary">
                Learn More
              </a>
            </railz-modal>

            <pre>
              <code>
                {`<railz-modal heading="Title of Modal" subheading="Some descriptive text" message="This is the main message or body of the modal" show-modal={this.modal2Open}>
    <railz-button label="Continue" slot="primary" />
    <a href="" slot="secondary">Cancel</a>
    <a href="" slot="tertiary">Learn More</a>
</railz-modal>`}
              </code>
            </pre>
          </section>
          <section>
            <h3>Rich Content</h3>
            <p>
              For times when a modal requires more than a simple string, the <code>railz-modal</code> can recieve a <code>modal-content</code> slot.
            </p>

            <railz-button onClick={() => this.toggleModal('modal3')} label="Open Modal 3" />

            <railz-modal heading="Stay in touch!" show-modal={this.modal3Open}>
              <div slot="modal-content">
                <span class="message">Don't miss out on exciting announcments! Enter your email address to sign up for our newsletter</span>
                <railz-input-text label="Enter your email" placeholder="sam@gmail.com" />
              </div>
              <railz-button label="Sign Up!" slot="primary" />
              <a href="" slot="secondary">
                No Thanks
              </a>
            </railz-modal>
            <pre>
              <code>
                {`<railz-modal heading="Stay in touch!" show-modal={this.modal3Open}>
    <div slot="modal-content">
        <span class="message">Don't miss out on exciting announcments! Enter your email address to sign up for our newsletter</span>
        <railz-input-text label="Enter your email" placeholder="sam@gmail.com" />
    </div>
    <railz-button label="Sign Up!" slot="primary" />
    <a href="" slot="secondary">No Thanks</a>
</railz-modal>`}
              </code>
            </pre>
          </section>
        </section>
        <section>
          <h2>Style Variants</h2>
          <p>
            The component can also recieve an <code>alignment</code> property, for when a centered appearance is more appropriate
          </p>
          <p>
            Simpy add <code>alignment="center"</code>to activate this variant
          </p>
          <railz-button onClick={() => this.toggleModal('modal4')} label="Open Modal 4" />
          <railz-modal heading="Stay in touch!" alignment="center" show-modal={this.modal4Open}>
            <div slot="modal-content">
              <span class="message">Don't miss out on exciting announcments! Enter your email address to sign up for our newsletter</span>
              <railz-input-text label="Enter your email" placeholder="sam@gmail.com" />
            </div>
            <railz-button label="Sign Up!" slot="primary" />
            <a href="" slot="secondary">
              No Thanks
            </a>
          </railz-modal>
        </section>
        <section>
          <h2>The Blade</h2>
          <div class="modal-canvas">
            <button onClick={() => this.toggleBlade1()}>open from parent</button>

            <railz-modal show-modal={this.blade1Open} heading="Title of Modal" subheading="Some descriptive text" type="blade">
              <div slot="modal-content">
                <h1>Inde sermone vario jexilla a Dipylo stadia confecimus.</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid sequatur, quid repugnet, vident. Negat enim summo bono afferre incrementum diem. Quae diligentissime
                  contra Aristonem dicuntur a Chryippo. Sullae consulatum? Quo tandem modo?
                </p>

                <p>
                  <b>Eam tum adesse, cum dolor omnis absit;</b> Itaque ab his ordiamur. Ne discipulum abducam, times. Ea possunt paria non esse.
                </p>

                <h3>Post enim Chrysippum eum non sane est disputatum.</h3>

                <p>
                  <b>Quis negat?</b> Negare non possum. Bestiarum vero nullum iudicium puto. Quantum Aristoxeni ingenium consumptum videmus in musicis? Hoc loco tenere se Triarius
                  non potuit. <mark>Eam stabilem appellas.</mark>
                </p>

                <h4>Maximus dolor, inquit, brevis est.</h4>

                <p>
                  Si mala non sunt, iacet omnis ratio Peripateticorum.
                  <a href="http://loripsum.net/" target="_blank">
                    Nihil illinc huc pervenit.
                  </a>
                  <a href="http://loripsum.net/" target="_blank">
                    Hoc non est positum in nostra actione.
                  </a>
                  Quid autem habent admirationis, cum prope accesseris? Itaque fecimus. Facillimum id quidem est, inquam.
                  <i>Quia nec honesto quic quam honestius nec turpi turpius.</i>
                </p>

                <blockquote cite="http://loripsum.net">
                  Non metuet autem, sive celare poterit, sive opibus magnis quicquid fecerit optinere, certeque malet existimari bonus vir, ut non sit, quam esse, ut non putetur.
                </blockquote>

                <p>
                  <a href="http://loripsum.net/" target="_blank">
                    Nunc omni virtuti vitium contrario nomine opponitur.
                  </a>
                  Nullus est igitur cuiusquam dies natalis. Verum hoc idem saepe faciamus. Explanetur igitur. Sed ad haec, nisi molestum est, habeo quae velim.
                </p>

                <p>Summum ením bonum exposuit vacuitatem doloris; Quod iam a me expectare noli.</p>

                <h2>Duo Reges: constructio interrete.</h2>

                <p>
                  Cur, nisi quod turpis oratio est? <b>Tubulo putas dicere?</b> Primum divisit ineleganter; Restatis igitur vos; Sed residamus, inquit, si placet.
                  <a href="http://loripsum.net/" target="_blank">
                    Istic sum, inquit.
                  </a>
                  <i>Non autem hoc: igitur ne illud quidem.</i>
                </p>

                <p>
                  <a href="http://loripsum.net/" target="_blank">
                    Non potes, nisi retexueris illa.
                  </a>
                  Hoc loco tenere se Triarius non potuit.
                </p>

                <ul>
                  <li>Omnes, qui non sint sapientes, aeque miseros esse, sapientes omnes summe beatos, recte facta omnia aequalia, omnia peccata paria;</li>
                  <li>Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius.</li>
                  <li>Semper enim ex eo, quod maximas partes continet latissimeque funditur, tota res appellatur.</li>
                  <li>Sed vos squalidius, illorum vides quam niteat oratio.</li>
                </ul>
              </div>

              <railz-button label="Continue" slot="primary" onClick={() => this.toggleBlade2()} />
            </railz-modal>

            <railz-button label="Continue" slot="primary" onClick={() => this.toggleBlade2()} />

            <railz-modal show-modal={this.blade2Open} heading="Blade 2" subheading="Some descriptive text" type="blade">
              <div slot="modal-content">
                <p>Cool!</p>
              </div>
            </railz-modal>
          </div>
        </section>
      </div>
    );
  }
}

import { Component, h, State } from '@stencil/core';
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false,
})
export class AppRoot {
  @State() menuOpen: boolean = true;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  render() {
    return (
      <div class="guide-container">
        <div class={`sidenav ${this.menuOpen ? 'menu-open' : ''}`}>
          <guide-navigation menuOpen={this.menuOpen} />
          <div class="nav-padding"></div>
        </div>

        <div class="view">
          <div class="header">
            <button class={`menu-toggle ${this.menuOpen ? 'menuOpen' : ''}`} onClick={() => this.toggleMenu()}>
              <div class="menu-icon">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </button>

            <div class="actions">
              <a href="https://www.figma.com/file/VSUSijO0GAHAJa69ICxBDi/Railz-Design-System?node-id=30%3A703" class="figma" target="_blank">
                Open Figma
              </a>
              <a href="github.com" class="github" target="_blank">
                View on Github
              </a>
            </div>
          </div>
          <main class="content-container">
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/getting-started/installation/uikit" component="page-installation-kit" />
                <stencil-route url="/getting-started/installation/tokens" component="page-installation-tokens" />
                <stencil-route url="/getting-started/contributing" component="page-contributing" />
                <stencil-route url="/tokens/colors" component="page-colors" />
                <stencil-route url="/tokens/typography" component="page-typography" />
                <stencil-route url="/tokens/structure" component="page-structure" />
                <stencil-route url="/tokens/icons" component="page-icons" />
                <stencil-route url="/tokens/motion" component="page-motion" />
                <stencil-route url="/tokens/theme" component="page-theme" />
                <stencil-route url="/components/buttons" component="page-buttons" />
                <stencil-route url="/components/text-inputs" component="page-text-inputs" />
                <stencil-route url="/components/select-input" component="page-select-input" />
                <stencil-route url="/components/form-controls" component="page-form-controls" />
                <stencil-route url="/components/modal" component="page-modal" />
                <stencil-route url="/components/dropdown-menu" component="page-dropdown-menu" />
                <stencil-route url="/components/status-pills" component="page-status-pills" />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </div>
    );
  }
}

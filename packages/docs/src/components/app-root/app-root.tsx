import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false,
})
export class AppRoot {
  @State() menuOpen: boolean = true;
  @State() path: string = location.pathname;
  @State() localDevMode: boolean = ['0.0.0.0', '127.0.0.1', 'localhost'].includes(location.hostname);

  componentWillLoad() {
    globalThis.localDevMode = this.localDevMode;

    addEventListener('locationChange', () => (this.path = location.pathname));
    addEventListener('popstate', () => (this.path = location.pathname));
  }

  toggleMenu() {
    console.log('asd', process.argv, process.env);
    this.menuOpen = !this.menuOpen;
  }

  renderPath() {
    // this pseudo-router was copied from here:
    // https://github.com/stencil-community/stencil-router/issues/154#issuecomment-1709961193
    if (this.path === '/') {
      if (this.localDevMode) return <page-playground />;
      return <app-home />;
    }
    if (this.path === '/home') return <app-home />;
    if (this.path === '/playground') return <page-playground />;
    if (this.path === '/getting-started/installation/uikit') return <page-installation-kit />;
    if (this.path === '/getting-started/installation/tokens') return <page-installation-tokens />;
    if (this.path === '/getting-started/contributing') return <page-contributing />;
    if (this.path === '/tokens/colors') return <page-colors />;
    if (this.path === '/tokens/typography') return <page-typography />;
    if (this.path === '/tokens/structure') return <page-structure />;
    if (this.path === '/tokens/icons') return <page-icons />;
    if (this.path === '/tokens/motion') return <page-motion />;
    if (this.path === '/tokens/theme') return <page-theme />;
    if (this.path === '/components/buttons') return <page-buttons />;
    if (this.path === '/components/text-inputs') return <page-text-inputs />;
    if (this.path === '/components/select-input') return <page-select-input />;
    if (this.path === '/components/form-controls') return <page-form-controls />;
    if (this.path === '/components/modal') return <page-modal />;
    if (this.path === '/components/dropdown-menu') return <page-dropdown-menu />;
    if (this.path === '/components/status-pills') return <page-status-pills />;
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
              <a href="github.com" class="github" target="_blank">
                View on Github
              </a>
            </div>
          </div>
          <main class="content-container">{this.renderPath()}</main>
        </div>
      </div>
    );
  }
}

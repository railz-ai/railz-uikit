import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'guide-navigation',
  styleUrl: 'guide-navigation.scss',
  shadow: true,
})
export class GuideNavigation {
  @Prop() menuOpen: boolean;

  public groups = [
    {
      name: 'Getting Started',
      url: '/getting-started',
      sections: [
        {
          name: 'Installation',
          url: '/getting-started/installation',
          sections: [
            { name: 'UI Kit', url: '/getting-started/installation/uikit' },
            { name: 'Tokens', url: '/getting-started/installation/tokens' },
          ],
        },
        { name: 'Contributing', url: '/getting-started/contributing' },
      ],
    },
    {
      name: 'Tokens',
      url: '/tokens',
      sections: [
        { name: 'Colors', url: '/tokens/colors' },
        { name: 'Typography', url: '/tokens/typography' },
        { name: 'Structure', url: '/tokens/structure' },
        { name: 'Icon Library', url: '/tokens/icons' },
        { name: 'Motion', url: '/tokens/motion' },
        { name: 'Theme', url: '/tokens/theme' },
      ],
    },
    {
      name: 'Components',
      url: '/components',
      sections: [
        { name: 'Buttons', url: '/components/buttons' },
        { name: 'Text Inputs', url: '/components/text-inputs' },
        { name: 'Select Input', url: '/components/select-input' },
        { name: 'Form Controls', url: '/components/form-controls' },
        { name: 'Modals', url: '/components/modal' },
        { name: 'Dropdown Menu', url: '/components/dropdown-menu' },
        { name: 'Status Pills', url: '/components/status-pills' },
      ],
    },
  ];

  renderSection = group => {
    return (
      <section>
        <h3>{group.name}</h3>
        <ul class="sections">
          {group.sections.map(section => (
            <li>{section?.sections?.length ? this.renderSection(section) : <stencil-route-link url={section.url}>{section.name}</stencil-route-link>}</li>
          ))}
        </ul>
      </section>
    );
  };

  render() {
    return (
      <nav class={this.menuOpen ? 'menu-open' : ''}>
        <div class="logo-container">
          <a class="plain-a" href="/">
            <div class="logo"></div>
          </a>
        </div>
        <div class="content">{this.groups.map(group => this.renderSection(group))}</div>
      </nav>
    );
  }
}

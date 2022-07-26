<p align="center">
  <a href="https://railz.ai/" rel="noopener" target="_blank"><img width="80" src="doc/assets/images/railz-logo.svg" alt="Railz logo"></a>
</p>

<h1 align="center">Railz UIKit</h1>

<p align="center">
  <a href="https://github.com/railz-ai/railz-uikit/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@railzai/railz-uikit" alt="Software License"/></a>
  <a href="https://www.npmjs.com/package/@railzai/railz-uikit"><img src="https://img.shields.io/npm/v/@railzai/railz-uikit/latest.svg" alt="Latest Package on NPM"/></a>
  <a href="https://github.com/railz-ai/railz-uikit/actions/workflows/publish.yml"><img src="https://github.com/railz-ai/railz-uikit/actions/workflows/publish.yml/badge.svg" alt="Latest Deployment"/></a>
  <a href="https://stenciljs.com/docs/style-guide">
          <img src="https://img.shields.io/badge/code_style-stencil/stylelint/prettier-5851ff.svg?style=flat-square" alt="Code Style" />
      </a>
</p>
<h2 align="center">Contains components libraries.</h2>

- [_Railz UIKit_](https://github.com/railz-ai/railz-uikit/design-components) is a library of components that features our implementation of [Railz Connect](https://railz.ai/product/connect) widget and extended components.

- [_Railz Tokens_](https://github.com/railz-ai/railz-uikit/design-tokens) is a library of design tokens.

- [_Railz Icons_](https://github.com/railz-ai/railz-uikit/design-icons) is a library of icon components.

## [Docs](https://railz-ai.github.io/railz-uikit/)

## Installation

The library is published as a [scoped NPM package](https://docs.npmjs.com/misc/scope) in
the [NPMJS Railz account](https://www.npmjs.com/org/railzai).

### [Railz UIKit](./design-components/INSTALLATION.md)

### [Railz Tokens](./design-tokens/INSTALLATION.md)

### [Railz Icons](./design-icons/INSTALLATION.md)

## Usage

### [Railz UIKit](./design-components/USAGE.md)

### [Railz Tokens](./design-tokens/USAGE.md)

### [Railz Icons](./design-icons/USAGE.md)

## Local Development

### Build Your Packages

To build and test your components locally, you will need to link the packages together. This is a replacement for
publishing packages to npm that allows you to develop and test locally. We are
using [lerna](https://github.com/lerna/lerna) to do this for us

From the main folder:

1. Clone this [repository](https://github.com/railz-ai/railz-uikit.git)
2. Install the dependency needed to setup the packages from the main folder.
   ```bash
   yarn
   ```
3. Install lerna using yarn
   ```bash
   yarn global add lerna
   ```
4. Run the bootstrap command to install all the dependencies for the packages, lerna will handle the linking between the
   packages
   ```bash
   yarn install:codesandbox
   ```
5. Build the packages to begin using
   ```bash
   yarn build
   ```
6. Create a symlink to the built **design-components/packages/railz-components** library
   ```bash
   cd design-components/packages/railz-components
   yarn link
   ```

#### For React

Lerna already linked the stencil component library to the React library during the build process so we only need to
create the symlink for the React component library. Go to `design-components/packages/railz-components-react` folder and run the below:

```bash
yarn link
```

#### Usage

In your own React Application, you can run the below to link both libraries

```bash
yarn link @railzai/railz-uikit
yarn link @railzai/railz-uikit-react
```

To make use of a specific React component library in your React application, import the components from the React component
library in the file where you want to use them.

```typescript jsx
import { RailzLogo } from '@railzai/railz-uikit-react';
```

#### For Angular

Lerna already linked the stencil component library to the Angular library during the build process so we only need to
create the symlink for the Angular component library. Go to `design-components/packages/railz-components-angular` folder and run the below:

In your angular component library, you need to create a symlink.

```bash
yarn link
```

#### Usage

In your own Angular Application, you can run the below to link both libraries

```bash
yarn link @railzai/railz-uikit
yarn link @railzai/railz-uikit-angular
```

To make use of the Angular component library in your Angular application, set up your module file to import the
ui kit module.

```typescript
import { RailzUikitModule } from '@railzai/railz-uikit-angular';
```

## Contributing

The Railz UIKit library and documentation are open to contributions. For more information, check
the [guidelines](./CONTRIBUTING.md).

## License

[MIT License](./LICENSE)

---

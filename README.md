<p align="center">
  <a href="https://railz.ai/" rel="noopener" target="_blank"><img width="80" src="packages/docs/src/assets/railz-logo-white.svg" alt="Railz logo"></a>
</p>

Railz is the Accounting Data as a Service™ solution that makes sense of your business customers' financial data.

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

## [Docs](https://railz-ai.github.io/railz-uikit/)

## Installation

The library is published as a [scoped NPM package](https://docs.npmjs.com/misc/scope) in
the [NPMJS Railz account](https://www.npmjs.com/org/railzai).

### [Railz UIKit](./design-components/INSTALLATION.md)

### [Railz Tokens](./design-tokens/INSTALLATION.md)

## Usage

### [Railz UIKit](./design-components/USAGE.md)

### [Railz Tokens](./design-tokens/USAGE.md)

## Local Development

### Build Your Packages

We use [lerna](https://github.com/lerna/lerna) and Yarn Workspaces(classic) to handle the monorepo structure.

To build and test your components locally, you can:
 - Link your artifacts (the built packages), by linking packages.
 - Use the Docs playground, to test locally with a simpler setup.
 - (TODO) use the Railz-UIKit dev server.

To start with:

1. Clone this [repository](https://github.com/railz-ai/railz-uikit.git)
2. Install the dependencies of the packages with `yarn install`
3. Build the packages with `yarn build`

   > Note: you can build specific groups of packages to increase performance, take a look at the scripts in the `package.json` file.
   
### Linking Packages to your local machine

There are 2 scripts in the root `package.json` file that will help you link the packages to your local machine:

- `dev:link` - This will link all the packages in the monorepo to your local machine.
- `dev:unlink` - This will UNlink all the packages in the monorepo from your local machine.

#### Example with a React App

In your own React Application, you can run the below to link both libraries

```bash
yarn link @railzai/railz-uikit
yarn link @railzai/railz-uikit-react
```

### Using the Docs Playground

The Docs Playground is a Stencil application that uses the Railz-UIKit components. It is a great way to test your components locally.


## Contributing

The Railz UIKit library and documentation are open to contributions. For more information, check
the [guidelines](./CONTRIBUTING.md).

## License

[MIT License](./LICENSE)

---

<p align="center">
  <a href="https://railz.ai/" rel="noopener" target="_blank"><img width="80" src="packages/docs/src/assets/railz-logo-white.svg" alt="FIS logo"></a>
</p>

Accounting Data as a Service™ is the solution that makes sense of your business customers' financial data.

<h1 align="center">Accounting Data as a Service™ UIKit</h1>

<p align="center">
  <a href="https://github.com/railz-ai/railz-uikit/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@railzai/railz-uikit" alt="Software License"/></a>
  <a href="https://www.npmjs.com/package/@railzai/railz-uikit"><img src="https://img.shields.io/npm/v/@railzai/railz-uikit/latest.svg" alt="Latest Package on NPM"/></a>
  <a href="https://github.com/railz-ai/railz-uikit/actions/workflows/publish.yml"><img src="https://github.com/railz-ai/railz-uikit/actions/workflows/publish.yml/badge.svg" alt="Latest Deployment"/></a>
  <a href="https://stenciljs.com/docs/style-guide">
          <img src="https://img.shields.io/badge/code_style-stencil/stylelint/prettier-5851ff.svg?style=flat-square" alt="Code Style" />
      </a>
</p>
<h2 align="center">Contains components libraries.</h2>

- [_Railz UIKit_](https://github.com/railz-ai/railz-uikit/tree/master/packages/railz-components) is a library of components that features our implementation of [Railz Connect](https://railz.ai/product/connect) widget and extended components.

- [_Railz Tokens_](https://github.com/railz-ai/railz-uikit/tree/master/packages/railz-tokens) is a library of design tokens.

## Docs

Check out the autogenerated docs [here](https://railz-ai.github.io/railz-uikit/).

## Installation

The library is published as a [scoped NPM package](https://docs.npmjs.com/misc/scope) in
the [NPMJS Railz account](https://www.npmjs.com/org/railzai).

Here you can find the installation steps for [Accounting Data as a Service™ UIKit](./packages/railz-components/INSTALLATION.md) and [Accounting Data as a Service™ Tokens](./packages/railz-tokens/INSTALLATION.md)

## Usage

Check out the usage instructions for [Accounting Data as a Service™ UIKit](./packages/railz-components-react/USAGE.md) and [Accounting Data as a Service™ Tokens](./packages/railz-tokens/USAGE.md)

## Local Development

### Development - Build Your Packages

Start with the following steps:

1. Clone this [repository](https://github.com/railz-ai/railz-uikit.git)
2. Install the dependencies of the packages with `yarn install`
3. Build the packages with `yarn build`

   > Note: you can build specific groups of packages to increase performance, take a look at the scripts in the `package.json` file.

You will notice that we use [lerna](https://github.com/lerna/lerna) and Yarn Workspaces(classic) to handle the monorepo structure.

Now, to build and test your components locally, you can:

- Link your artifacts (the built packages), by linking packages.
- Use the Docs playground, to test locally with a simpler setup.

### Development - Using Linked Packages

There are 2 scripts in the root `package.json` file that will help you link the packages to your local machine:

- `dev:link` - This will link all the packages in the monorepo to your local machine.
- `dev:unlink` - This will UNlink all the packages in the monorepo from your local machine.

##### Example with a React App

In your own React Application, run the following script to link the `@railzai/railz-uikit-react` package:

`yarn link @railzai/railz-uikit-react`

### Using the Docs Playground

The Docs Playground is a Stencil application that uses the Accounting Data as a Service™-UIKit components. It is a great way to test your components locally.

Two commands were created for this:

- `dev:docs` - This will start the Docs Playground in development mode. This will watch for changes in the components and rebuild them automatically.

- `dev:components` - This will build and watch for changes in the railz-components package. This is useful if you are working on the components and want to see the changes in the Docs Playground.

Run both in different terminal tabs, and whenever you change something in `railz-components` or the `docs` packages, it will rebuild and update the docs.

Furthermore, running the Docs Playground in development mode will show you an extra page (the "playground" page), that you can use to edit and play around with components to test them.

## Contributing

The Accounting Data as a Service™ UIKit library and documentation are open to contributions. For more information, check
the [guidelines](./CONTRIBUTING.md).

## License

[MIT License](./LICENSE)

---

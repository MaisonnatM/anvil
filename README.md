# Anvil

A modern monorepo built with Turborepo, React Router, and TypeScript.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `website`: A [React Router](https://reactrouter.com/) application
- `@repo/eslint-config`: ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/anvil.git
cd anvil
pnpm install
```

### Development

To develop all apps and packages, run the following command:

```bash
pnpm dev
```

To develop a specific package:

```bash
pnpm dev --filter=website
```

### Build

To build all apps and packages:

```bash
pnpm build
```

To build a specific package:

```bash
pnpm build --filter=website
```

### Linting and Type Checking

```bash
pnpm lint
pnpm check-types
```

### Formatting

```bash
pnpm format
```

## Versioning

This project uses [Changesets](https://github.com/changesets/changesets) for version management.

### Creating a Changeset

When making changes that should be versioned:

```bash
pnpm changeset
```

This will guide you through selecting packages and version bump types.

### Versioning Packages

To version packages and update CHANGELOGs:

```bash
pnpm version
```

### Release Process

Releases are automated via GitHub Actions. When changesets are merged to main, the release workflow will:
- Version packages based on changesets
- Update CHANGELOGs
- Create a release PR
- Publish packages to npm (if configured)

## Remote Caching

Turborepo can use [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines.

To enable Remote Caching with Vercel:

```bash
turbo login
turbo link
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Security

For security vulnerabilities, please see our [Security Policy](.github/SECURITY.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

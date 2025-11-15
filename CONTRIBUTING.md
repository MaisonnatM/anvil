# Contributing to Anvil

Thank you for your interest in contributing to Anvil! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/anvil.git`
3. Install dependencies: `pnpm install`
4. Create a new branch: `git checkout -b your-feature-branch`

## Development Setup

This is a Turborepo monorepo. To get started:

```bash
pnpm install
pnpm dev
```

To build all packages:

```bash
pnpm build
```

To run linting:

```bash
pnpm lint
```

To check types:

```bash
pnpm check-types
```

## Code Style

- We use ESLint for linting and Prettier for formatting
- Run `pnpm format` before committing
- TypeScript is required - all code must be properly typed
- Follow existing code patterns and conventions

## Making Changes

1. Make your changes in a feature branch
2. Ensure all tests pass (if applicable)
3. Run linting and type checking: `pnpm lint && pnpm check-types`
4. Format your code: `pnpm format`
5. If your changes should be versioned, create a changeset: `pnpm changeset`
6. Commit your changes with clear, descriptive commit messages

## Submitting Changes

1. Push your branch to your fork
2. Open a Pull Request on GitHub
3. Fill out the PR template completely
4. Ensure CI checks pass
5. Address any review feedback

## Pull Request Process

- PRs should be focused on a single feature or fix
- Include a clear description of what changed and why
- Reference any related issues
- Ensure CI checks pass before requesting review
- Be responsive to feedback and questions

## Questions?

Feel free to open an issue for questions or discussions about contributions.


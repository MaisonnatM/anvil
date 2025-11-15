# Changesets

This repository uses [Changesets](https://github.com/changesets/changesets) for version management.

## Adding a Changeset

When you make changes that should be versioned, run:

```bash
pnpm changeset
```

This will prompt you to:
1. Select which packages should be bumped
2. Choose the type of version bump (major, minor, patch)
3. Write a summary of the changes

## Versioning Workflow

1. Create a changeset when making changes: `pnpm changeset`
2. Commit the changeset file
3. When ready to release, run: `pnpm changeset version`
4. This updates package versions and generates CHANGELOG entries
5. Commit the version changes
6. Create a release PR or tag

## Releasing

The versioning process is automated via GitHub Actions. When changesets are merged to main, a release workflow will:
- Version packages
- Update CHANGELOGs
- Create a release PR
- Publish packages (if configured)


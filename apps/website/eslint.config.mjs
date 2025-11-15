import antfu from '@antfu/eslint-config';
import tailwindCanonicalClasses from 'eslint-plugin-tailwind-canonical-classes';

export default antfu(
  {
    react: true,
    typescript: true,

    lessOpinionated: true,
    isInEditor: false,

    stylistic: false,

    formatters: {
      css: true,
    },

    ignores: [
      'migrations/**/*',
      'node_modules/**/*',
      'dist/**/*',
      'build/**/*',
      'out/**/*',
      'lib/types/fastapi/**/*',
      '**/*.d.ts',
      '**/generated/**/*',
    ],
  },
  {
    rules: {
      'antfu/no-top-level-await': 'off',
      'react/prefer-destructuring-assignment': 'off',
      'node/prefer-global/process': 'off',
      'react-refresh/only-export-components': 'off',
      'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
      'style/brace-style': 'off',
      'style/quotes': 'off',
      'style/quote-props': 'off',
      'style/indent': 'off',
      'style/indent-binary-ops': 'off',
      'style/operator-linebreak': 'off',
      'style/arrow-parens': 'off',
      'style/multiline-ternary': 'off',
      'style/jsx-one-expression-per-line': 'off',
      'style/jsx-curly-newline': 'off',
      'ts/consistent-type-definitions': ['error', 'type'],
    },
  },
  {
    files: ['**/columns.tsx', '**/columns.ts'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    plugins: {
      'tailwind-canonical-classes': tailwindCanonicalClasses,
    },
    rules: {
      'tailwind-canonical-classes/tailwind-canonical-classes': [
        'warn',
        { cssPath: './app/styles/global.css' },
      ],
    },
  },
);

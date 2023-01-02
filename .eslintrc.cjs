module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'eslint-comments',
    'simple-import-sort',
    'jest'
  ],
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    project: [
      './tsconfig.eslint.json',
      './packages/*/tsconfig.eslint.json',
    ],
    allowAutomaticSingleRunInference: true,
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: true,
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: false,
        pattern: {
          'js': 'always',
        },
      }
    ],
    'import/no-commonjs': [
      2,
      {
        allowRequire: false,
        allowPrimitiveModules: true,
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
      }
    ],
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': [
      'error', {
        noUselessIndex: false,
      }
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['typeParameter'],
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    complexity: [
      'error',
      {
        max: 20,
      },
    ],
    'spaced-comment': [2, 'always'],
  },
  overrides: [
    {
      files: [
        'packages/*/tests/**/*.spec.ts',
        'packages/*/tests/**/*.test.ts',
        'packages/*/tests/**/spec.ts',
        'packages/*/tests/**/test.ts',
        'tests/integration/**/*.test.ts',
      ],
      env: {
        'jest/globals': true,
      },
    }
  ]
};

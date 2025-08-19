module.exports = {
  // ===== 继承基础配置 =====
  extends: ['./base.js'],

  // ===== Vue 特定配置 =====
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
    extraFileExtensions: ['.vue'],
  },

  // ===== Vue 插件 =====
  plugins: [
    'vue',
    'vuejs-accessibility',
  ],

  // ===== Vue 规则 =====
  rules: {
    // ===== Vue 核心规则 =====
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
    ],
    'vue/component-options-name-casing': [
      'error',
      'PascalCase',
    ],
    'vue/custom-event-name-casing': [
      'error',
      'camelCase',
    ],
    'vue/define-macros-order': [
      'error',
      {
        order: [
          'defineProps',
          'defineEmits',
        ],
      },
    ],
    'vue/html-comment-content-spacing': [
      'error',
      'always',
    ],
    'vue/no-unused-refs': 'error',
    'vue/padding-line-between-blocks': [
      'error',
      'always',
    ],
    'vue/prefer-separate-static-class': 'error',

    // ===== Vue 模板规则 =====
    'vue/html-indent': [
      'error',
      2,
    ],
    'vue/html-quotes': [
      'error',
      'double',
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false,
      },
    ],
    'vue/no-multiple-template-root': 'error',
    'vue/no-v-html': 'warn',
    'vue/require-default-prop': 'off', // 使用 TypeScript 进行类型检查
    'vue/require-explicit-emits': [
      'error',
      {
        allowProps: false,
      },
    ],
    'vue/require-prop-types': 'off', // 使用 TypeScript 进行类型检查
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: [
          'pre',
          'textarea',
        ],
      },
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: false,
        ignore: [],
      },
    ],
    'vue/v-on-function-call': [
      'error',
      'never',
    ],
    'vue/v-slot-style': [
      'error',
      'shorthand',
    ],

    // ===== Vue 脚本规则 =====
    'vue/component-api-style': [
      'error',
      [
        'script-setup',
        'composition',
      ],
    ],
    'vue/component-options-order': [
      'error',
      {
        order: [
          'name',
          'components',
          'directives',
          'mixins',
          'inheritAttrs',
          'model',
          'props',
          'emits',
          'setup',
          'data',
          'computed',
          'watch',
          'watchEffect',
          'LIFECYCLE_HOOKS',
          'methods',
          'render',
        ],
      },
    ],
    'vue/define-emits-declaration': [
      'error',
      'type-based',
    ],
    'vue/define-props-declaration': [
      'error',
      'type-based',
    ],
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
      },
    ],
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: [
          'vue',
          'vue-router',
        ],
        threshold: 1,
      },
    ],
    'vue/no-ref-object-destructure': 'error',
    'vue/no-required-prop-with-default': [
      'error',
      {
        autofix: false,
      },
    ],
    'vue/no-restricted-block': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/no-restricted-class': 'error',
    'vue/no-restricted-component-options': 'error',
    'vue/no-restricted-custom-event': 'error',
    'vue/no-restricted-html-elements': 'error',
    'vue/no-restricted-props': 'error',
    'vue/no-restricted-static-attribute': 'error',
    'vue/no-restricted-v-bind': 'error',
    'vue/no-setup-props-destructure': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: true,
      },
    ],
    'vue/no-template-target-blank': 'error',
    'vue/no-undef-components': 'error',
    'vue/no-undef-properties': 'error',
    'vue/no-unsupported-features': [
      'error',
      {
        version: '^3.0.0',
        ignores: [],
      },
    ],
    'vue/no-unused-properties': [
      'error',
      {
        groups: [
          'props',
          'data',
          'computed',
          'methods',
        ],
        deepData: true,
        ignorePublicMembers: true,
      },
    ],
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    'vue/no-v-for-template-key': 'error',
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/no-v-html': 'warn',
    'vue/no-v-model-argument': 'error',
    'vue/no-v-text': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/no-watch-after-await': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/require-component-is': 'error',
    'vue/require-default-prop': 'off',
    'vue/require-direct-export': 'error',
    'vue/require-emit-validator': 'error',
    'vue/require-expose': 'off',
    'vue/require-explicit-emits': [
      'error',
      {
        allowProps: false,
      },
    ],
    'vue/require-macro-variable-name': [
      'error',
      {
        defineProps: 'props',
        defineEmits: 'emit',
        defineExpose: 'expose',
        withDefaults: 'defaults',
      },
    ],
    'vue/require-name-property': 'error',
    'vue/require-prop-type-constructor': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-render-return': 'error',
    'vue/require-slots-as-functions': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': [
      'error',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    'vue/return-in-emits-validator': 'error',
    'vue/use-v-on-exact': 'error',
    'vue/valid-attribute-name': 'error',
    'vue/valid-define-emits': 'error',
    'vue/valid-define-props': 'error',
    'vue/valid-define-slots': 'error',
    'vue/valid-model-definition': 'error',
    'vue/valid-next-tick': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-bind-sync': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-is': 'error',
    'vue/valid-v-memo': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': 'error',
    'vue/valid-v-text': 'error',

    // ===== Vue 可访问性规则 =====
    'vuejs-accessibility/alt-text': 'error',
    'vuejs-accessibility/anchor-has-content': 'error',
    'vuejs-accessibility/anchor-is-valid': 'error',
    'vuejs-accessibility/aria-props': 'error',
    'vuejs-accessibility/aria-proptypes': 'error',
    'vuejs-accessibility/aria-unsupported-elements': 'error',
    'vuejs-accessibility/click-events-have-key-events': 'error',
    'vuejs-accessibility/form-control-has-label': 'error',
    'vuejs-accessibility/heading-has-content': 'error',
    'vuejs-accessibility/iframe-has-title': 'error',
    'vuejs-accessibility/img-redundant-alt': 'error',
    'vuejs-accessibility/interactive-supports-focus': 'error',
    'vuejs-accessibility/label-has-for': 'error',
    'vuejs-accessibility/media-has-caption': 'error',
    'vuejs-accessibility/mouse-events-have-key-events': 'error',
    'vuejs-accessibility/no-access-key': 'error',
    'vuejs-accessibility/no-autofocus': 'error',
    'vuejs-accessibility/no-distracting-elements': 'error',
    'vuejs-accessibility/no-header-scope': 'error',
    'vuejs-accessibility/no-interactive-element-to-noninteractive-role': 'error',
    'vuejs-accessibility/no-noninteractive-element-interactions': 'error',
    'vuejs-accessibility/no-noninteractive-element-to-interactive-role': 'error',
    'vuejs-accessibility/no-noninteractive-tabindex': 'error',
    'vuejs-accessibility/no-onchange': 'error',
    'vuejs-accessibility/no-redundant-roles': 'error',
    'vuejs-accessibility/no-static-element-interactions': 'error',
    'vuejs-accessibility/role-has-required-aria-props': 'error',
    'vuejs-accessibility/role-supports-aria-props': 'error',
    'vuejs-accessibility/scope': 'error',
    'vuejs-accessibility/tabindex-no-positive': 'error',
  },

  // ===== Vue 设置 =====
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },

  // ===== 文件扩展名 =====
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // Vue 文件特定的规则
      },
    },
  ],
}; 
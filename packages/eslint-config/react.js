module.exports = {
  // ===== 继承基础配置 =====
  extends: ['./base.js'],

  // ===== React 特定配置 =====
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // 启用 JSX 支持
    },
  },

  // ===== React 插件 =====
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'jsx-a11y',
  ],

  // ===== React 规则 =====
  rules: {
    // ===== React 核心规则 =====
    'react/jsx-uses-react': 'off', // React 17+ 不需要显式导入 React
    'react/react-in-jsx-scope': 'off', // React 17+ 不需要显式导入 React
    'react/jsx-no-undef': 'error', // 禁止未定义的 JSX 标签
    'react/jsx-uses-vars': 'error', // 检查 JSX 中使用的变量
    'react/prop-types': 'off', // 使用 TypeScript 进行类型检查
    'react/display-name': 'off', // 允许匿名组件
    'react/jsx-key': 'error', // 列表项必须有 key
    'react/jsx-no-duplicate-props': 'error', // 禁止重复的 props
    'react/no-array-index-key': 'warn', // 警告使用数组索引作为 key
    'react/no-danger': 'warn', // 警告使用 dangerouslySetInnerHTML
    'react/no-deprecated': 'error', // 禁止使用已废弃的 API
    'react/no-direct-mutation-state': 'error', // 禁止直接修改 state
    'react/no-find-dom-node': 'error', // 禁止使用 findDOMNode
    'react/no-is-mounted': 'error', // 禁止使用 isMounted
    'react/no-render-return-value': 'error', // 禁止使用 ReactDOM.render 的返回值
    'react/no-string-refs': 'error', // 禁止使用字符串 ref
    'react/no-unescaped-entities': 'error', // 禁止未转义的实体
    'react/no-unknown-property': 'error', // 禁止未知的 DOM 属性
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true,
      },
    ],
    'react/self-closing-comp': 'error', // 自闭合组件
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],

    // ===== JSX 规则 =====
    'react/jsx-boolean-value': [
      'error',
      'never',
    ],
    'react/jsx-closing-bracket-location': [
      'error',
      'line-aligned',
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-curly-spacing': [
      'error',
      'never',
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never',
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop',
    ],
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    'react/jsx-no-literals': 'off',
    'react/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'single-child',
      },
    ],
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/jsx-space-before-closing': 'off', // 已废弃
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],

    // ===== React Hooks 规则 =====
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    
    // ===== React 19 新特性支持 =====
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true,
      },
    ],
    'react/no-unsafe-iframe-sandbox': 'error',
    'react/no-unsafe-target-blank': 'error',

    // ===== React Refresh 规则 =====
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],

    // ===== 可访问性规则 =====
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
  },

  // ===== React 设置 =====
  settings: {
    react: {
      version: '19.0', // 指定 React 19 版本
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
}; 
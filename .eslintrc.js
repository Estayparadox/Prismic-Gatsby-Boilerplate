module.exports = {
    extends: ['eslint:recommended', 'prettier', 'react-app'],
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 9,
      ecmaFeatures: {
        impliedStrict: true,
      },
    },
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    globals: {
      Cookies: true,
    },
    rules: {
      // Possible Errors
      'no-await-in-loop': 1,
      'no-extra-parens': [1, 'functions'],
      'no-prototype-builtins': 2,
      'no-template-curly-in-string': 1,
  
      // Best Practices
      'accessor-pairs': [1, { getWithoutSet: false, setWithoutGet: true }],
      'array-callback-return': 2,
      'block-scoped-var': 1,
      'class-methods-use-this': 1,
      complexity: [2, { max: 20 }],
      curly: [1, 'all'],
      'dot-location': [1, 'property'],
      'dot-notation': 1,
      eqeqeq: [1, 'always'],
      'guard-for-in': 2,
      'no-alert': 2,
      'no-caller': 2,
      'no-case-declarations': 0,
      'no-div-regex': 2,
      'no-else-return': 1,
      'no-empty-function': 1,
      'no-eq-null': 1,
      'no-eval': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-extra-label': 2,
      'no-floating-decimal': 1,
      'no-implicit-coercion': [
        1,
        { allow: ['!!', '~'], boolean: false, number: true, string: true },
      ],
      'no-implicit-globals': 1,
      'no-implied-eval': 2,
      'no-invalid-this': 2,
      'no-iterator': 2,
      'no-labels': 2,
      'no-lone-blocks': 2,
      'no-loop-func': 0,
      'no-multi-spaces': [1, { exceptions: { VariableDeclarator: false } }],
      'no-multi-str': 1,
      'no-new': 2,
      'no-new-func': 2,
      'no-new-wrappers': 2,
      'no-octal-escape': 2,
      'no-proto': 2,
      'no-redeclare': [2, { builtinGlobals: true }],
      'no-return-await': 2,
      'no-script-url': 2,
      'no-self-compare': 2,
      'no-sequences': 2,
      'no-throw-literal': 2,
      'no-unmodified-loop-condition': 2,
      'no-unused-expressions': 1,
      'no-useless-call': 1,
      'no-useless-concat': 1,
      'no-useless-return': 1,
      'no-void': 2,
      'no-with': 2,
      'prefer-promise-reject-errors': 1,
      radix: [1, 'as-needed'],
      'require-await': 1,
      'wrap-iife': 0,
      yoda: [2, 'never', { onlyEquality: true }],
  
      // Strict Mode
      // strict: 0,
  
      // Variables
      'no-catch-shadow': 2,
      'no-label-var': 2,
      'no-shadow': [1, { builtinGlobals: false }], //built-in globals is too strict (top, name, etc.)
      'no-shadow-restricted-names': 2,
      'no-undef': [1, { typeof: true }],
      'no-undef-init': 1,
      'no-use-before-define': [2, { functions: false }],
  
      // Node.js and CommonJS
      'callback-return': [2, ['callback', 'cb', 'next']],
      'global-require': 0, // No compatible with requiring lodash modules
      'handle-callback-err': 1,
      'no-mixed-requires': [1, { allowCall: false, grouping: true }],
      'no-new-require': 2,
      'no-path-concat': 2,
      'no-process-exit': 1,
      'no-restricted-modules': [1, 'underscore'],
      'no-sync': 1,
  
      // Stylistic Issues
      camelcase: [1, { properties: 'always' }],
      'consistent-this': [1, 'me'],
      'eol-last': [1, 'always'],
      'func-call-spacing': [1, 'never'],
      'max-depth': [1, { max: 4 }],
      'max-nested-callbacks': [1, { max: 5 }],
      'max-params': [1, { max: 5 }],
      'max-statements-per-line': [1, { max: 1 }],
      'new-cap': 1,
      'no-array-constructor': 2,
      'no-bitwise': [1, { allow: ['~'] }],
      'no-continue': 2,
      'no-lonely-if': 2,
      'no-multi-assign': 2,
      'no-multiple-empty-lines': [1, { max: 1 }],
      'no-nested-ternary': 1,
      'no-new-object': 2,
      'no-tabs': 1,
      'no-unneeded-ternary': [1, { defaultAssignment: false }],
      'object-property-newline': [1, { allowMultiplePropertiesPerLine: true }],
      'unicode-bom': [1, 'never'],
  
      // ECMAScript 6
      'arrow-body-style': [1, 'as-needed'],
      'arrow-parens': [1, 'as-needed'],
      'constructor-super': 2,
      'no-class-assign': 2,
      'no-const-assign': 2,
      'no-dupe-class-members': 2,
      'no-duplicate-imports': 1,
      'no-new-symbol': 1,
      'no-this-before-super': 2,
      'no-useless-computed-key': 1,
      'no-useless-constructor': 1,
      'operator-assignment': [1, 'always'],
      'no-useless-rename': 1,
      'no-var': 1,
      'object-shorthand': [1, 'always', { avoidExplicitReturnArrows: true }],
      'prefer-arrow-callback': [1, { allowNamedFunctions: true }],
      'prefer-const': [1, { destructuring: 'all' }],
      'prefer-numeric-literals': 1,
      'prefer-spread': 1,
      'prefer-template': 1,
      'require-yield': 1,
      'rest-spread-spacing': [1, 'never'],
      'symbol-description': 1,
      'yield-star-spacing': [1, 'before'],
  
      // React
      'react/default-props-match-prop-types': [
        1,
        { allowRequiredDefaults: true },
      ],
      'react/boolean-prop-naming': [0, { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
      'react/destructuring-assignment': [1, 'always'], //Enforce consistent usage of destructuring assignment of props, state, and context
      'react/display-name': [1, { ignoreTranspilerName: false }], //Prevent missing displayName in a React component definition
      'react/forbid-component-props': [0, { forbid: [] }], //Forbid certain props on Components
      'react/forbid-elements': [0, { forbid: [] }], //Forbid certain elements
      'react/forbid-foreign-prop-types': 1,
      'react/forbid-prop-types': [1, { forbid: ['any', 'array', 'object'] }], //Forbid certain propTypes
      //'react/no-array-index-key': 1,
      'react/no-children-prop': 1, //Prevent passing children as props
      'react/no-danger': 1, //Prevent usage of dangerous JSX properties
      'react/no-danger-with-children': 1, //Prevent problem with children and props.dangerouslySetInnerHTML
      'react/no-deprecated': 2, //Prevent usage of deprecated methods
      'react/no-did-mount-set-state': [2, 'disallow-in-func'], //Prevent usage of setState in componentDidMount
      'react/no-did-update-set-state': [2, 'disallow-in-func'], //Prevent usage of setState in componentDidUpdate
      'react/no-direct-mutation-state': 2, //Prevent direct mutation of this.state
      // 'react/no-find-dom-node': 1, //Prevent usage of findDOMNode
      'react/no-is-mounted': 2, //Prevent usage of isMounted
      // 'react/no-multi-comp': [0, { ignoreStateless: false }], //Prevent multiple component definition per file
      'react/no-redundant-should-component-update': 1,
      'react/no-render-return-value': 2, //Prevent usage of the return value of React.render
      // 'react/no-set-state': 0, //Prevent usage of setState
      //'react/no-typos': 1, //Problem with stateless components
      'react/no-string-refs': 2, //Prevent using string references in ref attribute.
      'react/no-unescaped-entities': 2, //Prevent invalid characters from appearing in markup
      'react/no-unknown-property': [2, { ignore: [] }], //Prevent usage of unknown DOM property (fixable)
      'react/no-unused-prop-types': [
        1,
        { customValidators: [], skipShapeProps: true },
      ], //Prevent definitions of unused prop types
      'react/no-unused-state': 1,
      'react/no-will-update-set-state': 1,
      // 'react/prefer-es6-class': [0, 'always'], //Enforce ES5 or ES6 class for React Components
      // 'react/prefer-stateless-function': [0, { ignorePureComponents: true }], //Enforce stateless React Components to be written as a pure function
      'react/prop-types': [
        1,
        { customValidators: [], ignore: ['collection', 'model'] },
      ], //Prevent missing props validation in a React component definition
      'react/react-in-jsx-scope': 2, //Prevent missing React when using JSX
      // 'react/require-default-props': 0,
      // 'react/require-optimization': [0, { allowDecorators: [] }], //Enforce React components to have a shouldComponentUpdate method
      'react/require-render-return': 2, //Enforce ES5 or ES6 class for returning value in render function
      'react/self-closing-comp': [2, { component: true, html: true }], //Prevent extra closing tags for components without children (fixable)
      'react/sort-comp': [
        1,
        {
          //Enforce component methods order
          order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
          groups: {
            lifecycle: [
              'displayName',
              'propTypes',
              'contextTypes',
              'childContextTypes',
              'mixins',
              'statics',
              'defaultProps',
              'constructor',
              'getDefaultProps',
              'getInitialState',
              'state',
              'getChildContext',
              'componentWillMount',
              'componentDidMount',
              'componentWillReceiveProps',
              'shouldComponentUpdate',
              'componentWillUpdate',
              'componentDidUpdate',
              'componentWillUnmount',
            ],
          },
        },
      ],
      'react/sort-prop-types': [
        1,
        {
          callbacksLast: false,
          ignoreCase: true,
          requiredFirst: false,
          sortShapeProp: true,
        },
      ], //Enforce propTypes declarations alphabetical sorting
      'react/style-prop-object': 1, //Enforce style prop value being an object
      'react/void-dom-elements-no-children': 2,
  
      // JSX-specific rules
      'react/jsx-boolean-value': [1, 'always'], //Enforce boolean attributes notation in JSX (fixable)
      'react/jsx-closing-bracket-location': [0, 'tag-aligned'], //Validate closing bracket location in JSX (fixable)
      'react/jsx-curly-spacing': [0, 'never', { allowMultiline: false }], //Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
      'react/jsx-equals-spacing': [2, 'never'], //Enforce or disallow spaces around equal signs in JSX attributes (fixable)
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], //Restrict file extensions that may contain JSX
      'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'], //Enforce position of the first prop in JSX (fixable)
      'react/jsx-handler-names': [
        1,
        { eventHandlerPrefix: 'on', eventHandlerPropPrefix: 'on' },
      ], //Enforce event handler naming conventions in JSX
      'react/jsx-indent': [0, 2], //Validate JSX indentation (does not indent correctly)
      'react/jsx-indent-props': [1, 2], //Validate props indentation in JSX (fixable)
      'react/jsx-key': 2, //Validate JSX has key prop when in array or iterator
      // 'react/jsx-max-props-per-line': [0, { maximum: 4 }], //Limit maximum of props on a single line in JSX
      // 'react/jsx-no-bind': [0, { allowArrowFunctions: false, allowBind: false, ignoreRefs: false }], //Prevent usage of .bind() and arrow functions in JSX props
      'react/jsx-no-comment-textnodes': 1, //Prevent comments from being inserted as text nodes
      'react/jsx-no-duplicate-props': [1, { ignoreCase: true }], //Prevent duplicate props in JSX
      'react/jsx-no-literals': 1, //Prevent usage of unwrapped JSX strings
      'react/jsx-no-target-blank': 2, //Prevent usage of unsafe target='_blank' --> add rel='noreferrer noopener' to <a target='_blank'></a>
      'react/jsx-no-undef': 2, //Disallow undeclared variables in JSX
      'react/jsx-curly-brace-presence': [
        1,
        { children: 'ignore', props: 'never' },
      ],
      'react/jsx-pascal-case': [1, { allowAllCaps: false, ignore: [] }], //Enforce PascalCase for user-defined JSX components
      'react/jsx-sort-props': [
        1,
        {
          callbacksLast: false,
          ignoreCase: true,
          shorthandFirst: true,
          shorthandLast: false,
        },
      ], //Enforce props alphabetical sorting
      'react/jsx-tag-spacing': [
        1,
        {
          afterOpening: 'never',
          closingSlash: 'never',
          beforeSelfClosing: 'always',
        },
      ], //Validate whitespace in and around the JSX opening and closing brackets (fixable)
      'react/jsx-uses-react': 1, //Prevent React to be incorrectly marked as unused
      'react/jsx-uses-vars': 1, //Prevent variables used in JSX to be incorrectly marked as unused
    },
  };
  
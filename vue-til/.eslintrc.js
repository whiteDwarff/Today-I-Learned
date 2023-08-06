module.exports = {
  root: true,
  env: {
    node: true,
    // jest 적용
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    // console()이 있을 경우 발생하는 err를 off || on : console() 사용시 err 발생
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // ***** prettier ***** 사용
    'prettier/prettier': [
      'error',
      {
        // 문자열은 항상 작은 따옴표  ('')
        singleQuote: true,
        // 세미콜론은 필수  (;)
        semi: true,
        // tab대신 space로 들여쓰기를 사용
        useTabs: false,
        // 들여쓰기는 2칸
        tabWidth: 2,
        // 객체 또는 배열의 마지막에 ;를 넣을것인가
        trailingComma: 'all',
        // 코드의 길이가 80줄이 넘으면 줄바꿈 사용
        printWidth: 80,
        // 데이터 바인딩 시 앞뒤로 공백을 사용
        bracketSpacing: true,
        // 화살표 함수의 인자가 하나일 경우 ()를 생략할것인가
        arrowParens: 'avoid',
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};

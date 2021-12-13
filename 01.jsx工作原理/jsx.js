const babel = require('@babel/core')
const soureCode = `<h1 id='root'>hello <span>JSX</span></h1>`

let resOld = babel.transform(soureCode, {
  plugins: [
    ['@babel/plugin-transform-react-jsx', { runtime: 'classic' }]
  ]
})

console.log(resOld.code);

let resNew = babel.transform(soureCode, {
  plugins: [
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
  ]
})

console.log(resNew.code);
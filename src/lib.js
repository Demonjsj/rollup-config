export function logA () {
  console.log('function logA called')
}

export function logB () {
  let temp = () => {
    console.log('this is a es6 write')
  }
  console.log('function logB called')
}
var done = false;

setTimeout(() => done = true, 5000)

console.log('blocking')

require('.').loopWhile(() => !done)

console.log('done')

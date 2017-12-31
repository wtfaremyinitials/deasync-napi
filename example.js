var done = false;

setTimeout(() => done = true, 1000)

console.log('blocking')

require('.').loopWhile(() => !done)

console.log('done')

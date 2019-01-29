# testpkg

![](https://img.shields.io/npm/v/@aghaffar570/testpkg.svg)
[![install size](https://packagephobia.now.sh/badge?p=@aghaffar570/testpkg)](https://packagephobia.now.sh/result?p=@aghaffar570/testpkg)


a test npm package that stores every log and prints it to the console.


## install

```
npm install @aghaffar570/testpkg
```

## usage

```js
const { log, viewLogs, removeLogs } = require('@aghaffar570/testpkg');

log('hello') // '2019-1-29 15:20:08 - hello'
log('goodbye') // '2019-1-29 15:20:08 - goodbye'
log() // '2019-1-29 15:20:08 - NO MSG INPUT'

viewLogs()
// => [ { message: 'hello', time: '2019-1-29 15:25:05' },
//      { message: 'goodbye', time: '2019-1-29 15:25:05' } ]

removeLogs()
// => []

```


## implementation

 ```js
function logger() {
  const _logs = []
  return {
    log(message) {
      const time = new Date().toLocaleString()
      _logs.push({ message, time })
      console.log(`${time} - ${message}`)
    },
    viewLogs(){
      console.log(_logs)
      return _logs
    },
    removeLogs(){
      console.log(_logs)
      _logs.length = 0
      return _logs
    }
  }
}


module.exports = logger()
```

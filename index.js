function logger() {
  const _logs = []
  return {
    log(message = "NO MSG INPUT") {
      const time = new Date().toLocaleString()
      _logs.push({ message, time })
      console.log(`${time} - ${message}`)
    },
    viewLogs(){
      console.log(_logs)
      return _logs
    },
    removeLogs(){
      _logs.length = 0
      console.log(_logs)
      return _logs
    }
  }
}


module.exports = logger()

const os = require('os')

console.log(os.userInfo())
console.log(`${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(), //OS version
  totalMem: `${os.totalmem()} bytes`,
  freeMem: `${os.freemem()} bytes`,
}
console.log(currentOS)
const os = require('os');

const userInfo = os.userInfo();
console.log(userInfo);

const uptime = os.uptime();
console.log(`The computer is running since ${uptime} secs`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log(currentOS)
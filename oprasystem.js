const os = require("os");
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
  hostname: os.hostname(),
  machine: os.machine(),
  homedir: os.homedir(),
  loadavg: os.loadavg(),
  uptime: os.uptime(),
  userInfo: os.userInfo(),
};
console.log(currentOS);
module.exports = currentOS;
module.exports = os;

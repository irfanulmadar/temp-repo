const os = require("os");

// Info about the user

const user = os.userInfo();

// method returns the system uptime in seconds

// console.log(`The System Uptime is ${os.uptime()}seconds`);

const currentOs = {
  name: os.type(),
  release: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);

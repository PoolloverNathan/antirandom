const { readFileSync } = require("fs")
process.stdout.write('new Function("window", atob("' + readFileSync(0).toString('base64') + '"))(window)')

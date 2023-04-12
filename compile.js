const { readFileSync } = require("fs")
process.stdout.write('eval(atob("' + readFileSync(0).toString('base64') + '"))')

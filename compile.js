const { readFileSync } = require("fs")
process.stdout.write('try{new Function("window", atob("' + readFileSync(0).toString('base64') + '"))(window)}catch(e){alert("Antirandom setup error:\\n" + e.stack)}')

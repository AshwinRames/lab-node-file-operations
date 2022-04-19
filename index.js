
const data = require('./data')
const os = require('os')
const fs = require('fs')
const crypto =require('crypto')
const secret='Hello';
const value = os.userInfo()
fs.writeFileSync("message.txt", "message.txt \n")
const userdata= data("Prograd",2020,"BE")
const password = crypto.createHmac('sha256', secret).update('Prograd').digest('hex');
fs.appendFileSync("message.txt", "ProGrad Details: \n")
fs.appendFileSync("message.txt", "\tUserId ->         1001, \n")
fs.appendFileSync("message.txt", `\tName ->           ${userdata.name},\n`)
fs.appendFileSync("message.txt", `\tYear ->           ${userdata.Year},\n`)
fs.appendFileSync("message.txt", `\tQualification ->  ${userdata.Qualification},\n`)
fs.appendFileSync("message.txt", `\tUserName ->       ${value.username},\n`)
fs.appendFileSync("message.txt", `\tPassword ->       ${password}\n`)

const fs = require('fs')

//读取
const usersString= fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)

//写入
const user3 = {id: 3, name: 'bobo', age: 18}
usersArray.push(user3)

const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json', string)


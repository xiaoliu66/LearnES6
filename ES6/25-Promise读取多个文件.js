const fs = require('fs');

// 回调地狱的方式读取文件
fs.readFile('./2.const.html', (err, data) => {
    fs.readFile("./2.const.html", (err, data2) => {
        fs.readFile('./2.const.html', (err, data3) => {
            let result = data + '\r\n' + data2 + '\r\n' + data3;
            console.log(result);
        })
    })
})

// 使用Promise方式实现
const p = new Promise((resolve, reject) => {
    fs.readFile("./2.const.html", (err, data) => {
        resolve(data)
    })
})

p.then((value) => {
    return new Promise((resolve, reject) => {
        fs.readFile("./2.const.html", (err, data) => {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("./2.const.html", (err, data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value.join('\r\n'));
})
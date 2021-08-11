// 1.引入fs 模块
const fs = require('fs')

// 2.调用方法读取文件
/* fs.readFile('./a.txt',(err,data)=>{
    // 如果失败,则抛出错误
    if (err) {
        throw err;
    }

    console.log(data.toString());
}) */

// 3.使用Promise
const p = new Promise((resolve, reject) => {
    fs.readFile('./let.html2', (err, data) => {
        // 如果读取失败
        if (err) {
            reject(err);
        }
        // 如果成功
        resolve(data);
    })
})

p.then((resp) => {
    console.log(resp.toString());
}, (err) => {
    console.log('读取失败');
})
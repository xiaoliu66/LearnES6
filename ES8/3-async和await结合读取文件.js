// 引入fs模块
const fs = require("fs");

// 读取第一个文件
function readFirst() {
    return new Promise((resolve, reject) => {
        fs.readFile("./1-asyn.html", (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data);
        })
    })
}

function readSecond() {
    return new Promise((resolve, reject) => {
        fs.readFile("./2-await.html", (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data);
        })
    })
}

async function main() {
    let first = await readFirst();
    let second = await readSecond();

    console.log(first);
    console.log(second);

}

main();



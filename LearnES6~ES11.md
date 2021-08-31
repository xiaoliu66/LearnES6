# ES6~ES11新特性

## ES6

### const

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const SCHOOL = "家里蹲";

        // 1.常量一定要赋初始值
        // const A;
        // 2. 一般常量使用大写（潜规则）
        // const A = 100;
        // 3.常量的值不能修改
        // SCHOOL = 'aaa';
        // 4.块级作用域
        /* {
            const PLAYER = "xxx"
        }
        console.log(PLAYER); */
        // 5.对于数组和对象的元素修改，不算做对常量的修改，不会报错。
        /* const NUMBER = [1,2,3,4,5];
        NUMBER.push(6)
        console.log(NUMBER);
        NUMBER = []; // 报错 */
    </script>
</body>
</html>
```

### 解构赋值

ES6允许按照一定模式从**数组**和**对象**中**提取值**，对变量进行**赋值**。这被称为**解构赋值**。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        /* 
            ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值。这被称为解构赋值。
            不仅仅只是数组、对象，还有字符串、数值和布尔值，详情请看es6入门 https://es6.ruanyifeng.com/
        */
        // 1.数组的结构
        /* const F4 = ['小沈阳','刘能','赵四','宋小宝'];
        let [xiao,liu,zhao,song] = F4;
        console.log(xiao);
        console.log(zhao);
        console.log(liu);
        console.log(song); */

        // 2.对象解构赋值
        /* 
            对象的解构与数组有一个重要的不同。
            数组的元素是按次序排列的，变量的取值由它的位置决定；
            而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
        */
        const zhao = {
            name: '赵本山',
            age: 65,
            xiaopin: function () {
                console.log('演小品');
            }
        }

        let {name,age,z} = zhao;
        console.log(name);
        console.log(age);
        console.log(z);
        
        z();
    </script>
</body>
</html>
```

### 模板字符串

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // es6 引入新的声明字符串的方式【``】
        // 1.声明
        let str = `我是一个字符串`;
        console.log(str);

        // 2.内容中可以直接出现换行符
        let str1 = `
            <ul>
                <li>1</li>    
                <li>2</li>    
                <li>3</li>    
            </ul>
        `;

        // 3. 变量拼接
        let food = '牛肉';
        let out = `我喜欢吃${food}`;
        console.log(out);
    </script>
</body>
</html>
```

### 对象的简化写法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // es6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。
        let name = 'zhangsan';
        let change = function () {
            console.log('哈哈哈');
        }

        // 完整写法
        /* const school = {
            name: name,
            change: change,
            improve: function () {
                console.log('提高');
            }
        } */

        // 简化写法
        const school = {
            name,
            change,
            improve() {
                console.log('提高');
            }
        }

        console.log(school);
    </script>
</body>
</html>
```

### 箭头函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 声明一个函数
        /* let fn = function () {
            
        } */

        /* let fn = (a,b) => {
            return  a+b;
        }
        let sum = fn(2,3);
        console.log(sum); */

        // 1.this是静态的，this始终指向函数声明时所在作用域下的this的值
        function getName() {
            console.log(this.name);
        }
        let getName2 = ()=>{
            console.log(this.name);
        }

        window.name = 'xiaoming';
        const school = {
            name: '家里蹲'
        }

        // 直接调用
        getName();
        getName2();

        // call方法调用
        getName.call(school);
        getName2.call(school);

        // 2.不能作为构造实例化对象
        /* let Person = (name,age) => {
            this.name = name;
            this.age = age;
        }
        let me = new Person('xiao',30);
        console.log(me); */

        // 3.不能使用arguments变量来保存实参
        /* let fn = ()=>{
            console.log(arguments);
        }
        fn(1,2,3); */

        /* 
            4.箭头函数的简写
                1) 省略小括号，当形参值有一个
                let add = n => {
                    return n + n;
                }
                console.log(add(9));
                2) 省略花括号，当代马体只有一条语句时，return 语句
                必须省略，而且语句的执行结果就是函数的返回值。
        */
       let pow = n => n*n;
       console.log(pow(9));
    </script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>箭头函数的实践</title>
    <style lang="">
        div {
            width: 200px;
            height: 200px;
            background: #58a;
        }
    </style>
</head>
<body>
    <div id = 'root'></div>

    <script>
        // 1) 点击区域2s后背景颜色发生改变
        let app = document.getElementById("root");
        // 绑定事件
        app.addEventListener("click", function() {
            // 保存this的值
            /* let self= this;

            setTimeout(() => {
                self.style.background = 'pink';
            }, 2000); */

            // 是用箭头函数
            setTimeout(() => {
                // 此处的this是指向事件源的
                this.style.background = 'pink';
            }, 2000);
        })

        // 2) 获取数组中偶数元素
        let arr = [1,2,3,4,5,6];
        /* let result = arr.filter(function(item) {
            if (item % 2 == 0) {
                return true;
            }
            return false;
        }); */

        let result = arr.filter(item => item % 2 === 0)
        console.log(result);

        /* 
            箭头函数适合与this无关的回调，定时器、数组的方法回调。
            箭头函数不适合与this有关的回调，事件回调,对象的方法。
        */

        {
            name: '小明',
            getName () => {
                this.name // 此时this指向window
            },
        }
    </script>
</body>
</html>
```

### 参数默认值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // es6允许给函数参数赋初始值
        // 1. 形参初始值，具有默认的参数，一般位置要靠后（潜规则）
        function add(a,b,c=10) {
            return a+b+c;
        }

        console.log(add(1,2));

        // 2.与解构赋值相结合
        function connect({host="127.0.0.1",username,password,port}) {
            console.log(host);
            console.log(username);
            console.log(password);
            console.log(port);
        }

        connect({
            host:'www.baidu.com',
            username:'root',
            password:'root',
            port:3306
        })
    </script>
</body>
</html>
```

### rest参数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // es6引入rest参数，用于获取函数的实参，用来代替arguments
        // es5 获取实参的方式
        function date() {
            console.log(arguments);
        }
        date('a','b','c');

        // rest参数获取实参
        function date1(...args) {
            console.log(args);
        }
        date1('1','2','3');

        // rest参数在有形参的情况下，必须放在后面
        function fn(a,b,...args) {
            console.log(a);
            console.log(b);
            console.log(args);
        }
        fn(1,2,3,4,5,6,7);
    </script>
</body>
</html>
```

### spread扩展运算符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // ... 扩展运算符能将数组转换为逗号分隔的参数序列
        const arr = ['a','b','c'];

        function chuanwan() {
            console.log(arguments);
        }

        chuanwan(...arr); // 相当于  chuanwan('a','b','c');
    </script>
</body>
</html>
```

用法：

1. 数组的合并

```js
const arr = ['a','b'];
const arr1 = ['c','d'];

const arr2 = arr.concat(arr1);

console.log(arr2);

const arr3 = [...arr,...arr1];
console.log(arr3);
```

2. 数组的克隆

```js
const b = ['1','2','3'];
const c = [...b];
console.log(c);
```

3. 将伪数组转为正常的数组

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div></div>
    <div></div>
    <div></div>

    <script>
        // 3.将伪数组转为正的数组
        const divs = document.querySelectorAll("div");
        const ab = [...divs];
        console.log(ab);
    </script>
</body>
</html>
```

### Symbol

#### 1.Symbol的基本使用

​	ES6 引入了一种新的原始数据类型**Symbol**，**表示独一无二的值。**它是 JavaScript 语言的第七种数据类型， 前六种是：**undefined**、**null**、**布尔值（Boolean）**、**字符串（String）**、**数值（Number）**、**对象（Object）**。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            /* 
                ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，
                前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
            */

            // 通过symbol函数创建symbol
            let s = Symbol("");
            console.log(s, typeof s);

            let s2 = Symbol("o((>ω< ))o");
            console.log(s2);
            let s3 = Symbol("o((>ω< ))o");
            console.log(s3);
            console.log(s2 === s3);  // false


            let a1 = Symbol.for('foo');
            let a2 = Symbol.for('foo');

            console.log(a1 === a2);  // true

            // 上面代码中，s1和s2都是 Symbol 值，但是它们都是由同样参数的Symbol.for方法生成的，所以实际上是同一个值。
            /* 
                Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。
                它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
                Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，
                而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
                比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 
                Symbol 值，但是调用Symbol("cat")30 次，会返回 30 个不同的 
                Symbol 值。
            */

            // symbol 不能与其他数据进行运算

            // USONB you are so niubility  巧记javascript数据类型
            /* 
                u undefined
                s string symbolo 
                o object
                n null number
                b boolean
            */
        </script>
    </body>
</html>

```

#### 2.Symbol创建对象属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 向对象中添加方法 up down
        let game = {
            up: function () {
                console.log("↑");
            },
            down: () => {
                console.log("↓");
            } 
        }

        let methods = {
            up: Symbol(),
            down: Symbol()
        };

        game[methods.up] = function () {
            console.log("我可以改变形状");
        }

        game[methods.down] = function () {
            console.log("我可以快速下降");
        }

        console.log(game);


        // 第二种创建方式
        let youxi = {
            name: '狼人杀',
            [Symbol('say')]: function () {
                console.log("我可以发言");
            },

            [Symbol('zibao')]: function () {
                console.log("自爆");
            }
        }

        console.log(youxi);
    </script>
</body>
</html>
```

#### 3.Symbol内置属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        /* 
            Symbol.hasInstance对象的Symbol.hasInstance属性，指向一个内部方法。
            当其他对象使用instanceof运算符，判断是否为该对象的实例时，
            会调用这个方法。比如，foo instanceof Foo在语言内部，
            实际调用的是Foo[Symbol.hasInstance](foo)。
            https://es6.ruanyifeng.com/#docs/symbol#%E5%86%85%E7%BD%AE%E7%9A%84-Symbol-%E5%80%BC
        */
        class Person {
            static [Symbol.hasInstance](param) {
                console.log(param);
                console.log('监测类型');
                return true;
            }
        }
        let o = {}
        console.log(o instanceof Person);
    </script>
</body>
</html>
```

### Iterator迭代器

Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令`for...of`循环，Iterator 接口主要供`for...of`消费。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const arr = [1,2,3,4,5,6]

        // 使用for...of遍历数组
       /*  for(let v of arr) {
            console.log(v);
        } */


        let iterator = arr[Symbol.iterator]();
        console.log(iterator);

        console.log(iterator.next()); // { value: "1", done: false }
        console.log(iterator.next()); // { value: "2", done: false }
        console.log(iterator.next()); // { value: "3", done: false }
        console.log(iterator.next()); // { value: "4", done: false }
        console.log(iterator.next()); // { value: "5", done: false }
        console.log(iterator.next()); // { value: "6", done: false }
        console.log(iterator.next()); // { value: undefined, done: t }
    </script>
</body>
</html>
```

迭代器自定义遍历对象

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            const banji = {
                name: "xxxx",
                stus: ["a", "b", "c", "d"],
                [Symbol.iterator]() {
                    let index = 0;
                    let _this = this;
                    return {
                        next: function () {
                            if (index < _this.stus.length) {
                                const result = { value: _this.stus[index], done: false };
                                index++;
                                return result;
                            } else {
                                return { value: undefined, done: true };
                            }
                        },
                    };
                },
            };

            for (let v of banji) {
                console.log(v);
            }
        </script>
    </body>
</html>

```

### Generator函数

#### 简介

> Generator 函数有多种理解角度。语法上，首先可以把它理解成，**Generator 函数是一个状态机，封装了多个内部状态。**
>
> 执行 Generator 函数会**返回一个遍历器对象**，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
>
> 形式上，Generator 函数是一个普通函数，但是有两个特征。一是，`function`关键字与函数名之间有一个星号；二是，函数体内部使用`yield`表达式，定义不同的内部状态（`yield`在英语里的意思就是“产出”）。

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
```

上面代码定义了一个 Generator 函数`helloWorldGenerator`，它内部有两个`yield`表达式（`hello`和`world`），即该函数有三个状态：hello，world 和 return 语句（结束执行）。

然后，Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。

下一步，必须调用遍历器对象的`next`方法，使得指针移向下一个状态。也就是说，每次调用`next`方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个`yield`表达式（或`return`语句）为止。换言之，Generator 函数是分段执行的，`yield`表达式是暂停执行的标记，而`next`方法可以恢复执行。

```js
hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 生成器其实就是一个特殊的函数
        // 异步编程  纯回调函数   node fs ajax mongodb
        function *get() {
            // yield 作为生成器函数的分隔符
            console.log("11111");
            yield 'a'; // a
            console.log("22222");
            yield 'b'; // b
            console.log("33333");
            yield 'c';	/
            console.log('44444');
        }

        let iterator = get();
        // console.log(iterator);
        // 生成器函数 调用
       /*  console.log(iterator.next()); // {value: a, done: false}
        iterator.next(); // 不用console.log输出是不显示值的
        iterator.next();
        iterator.next(); */


        for(let v of get()) {
            console.log(v);
        }
    </script>
</body>
</html>
```

#### Generator传递参数

**`yield`表达式本身没有返回值，或者说总是返回`undefined`。**`next`方法可以带一个参数，该参数就会被当作上一个`yield`表达式的返回值。

```javascript
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }
```

上面代码先定义了一个可以无限运行的 Generator 函数`f`，如果`next`方法没有参数，每次运行到`yield`表达式，变量`reset`的值总是`undefined`。当`next`方法带一个参数`true`时，变量`reset`就被重置为这个参数（即`true`），因此`i`会等于`-1`，下一轮循环就会从`-1`开始递增。

这个功能有很重要的语法意义。Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过`next`方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。**也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function * gen(args) {
            console.log(args); // AAA   1
            let one = yield 111;
            console.log(one); // B  3

            let two = yield 222;
            console.log(two); // C  5

            let three = yield 333;
            console.log(three); // D  7
        }


        let it = gen('AAA');  // 程序执行完这段代码是没有输出任何值的,只有调用next()才会执行方法。
        console.log(it.next()); // {value:111, done:false}  2
        console.log(it.next('B')); // {value:222, done:false}  4
        console.log(it.next('C')); // {value:333,done:false}  6
        console.log(it.next('D')); // {value:undefined,done:true}  8

    </script>
</body>
</html>
```

#### Generator函数实例-1

用来解决回调地狱

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 异步编程 文件操作 网络操作（ajax request）数据库操作
        // 1s 后控制输出111  2s后输出222  3s后输出333
        // 回调地狱
        /* setTimeout(() => {
            console.log(111);
            setTimeout(() => {
                console.log(222);
                setTimeout(() => {
                    console.log(333);
                }, 3000);
            }, 2000);
        }, 1000); */

        function one() {
            setTimeout(() => {
                let now = new Date();
                console.log(111,now);
                it.next();
            }, 1000);
        }

        function two() {
            setTimeout(() => {
                let now = new Date();
                console.log(222,now);
                it.next();
            }, 2000);
        }

        function three() {
            setTimeout(() => {
                let now = new Date();
                console.log(333,now);
                it.next();
            }, 3000);
        }

        function * gen () {
            yield one();
            yield two();
            yield three();
        }

        let it = gen();
        it.next();
    </script>
</body>
</html>
```

#### Generator函数实例-2

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            function getUsers() {
                setTimeout(() => {
                    let data = "用户数据";
                    it.next(data);
                }, 1000);
            }

            function getOrders() {
                setTimeout(() => {
                    let data = "订单数据";
                    it.next(data);
                }, 1000);
            }

            function getGoods() {
                setTimeout(() => {
                    let data = "商品数据";
                    it.next(data);
                }, 1000);
            }

            function* gen() {
                let users = yield getUsers();
                console.log(users);
                let orders = yield getOrders();
                console.log(orders);
                let goods = yield getGoods();
                console.log(goods);
            }

            let it = gen();
            it.next();
        </script>
    </body>
</html>

```

### Promise

> 所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
>
> `Promise`对象有以下两个特点。
>
> （1）对象的状态不受外界影响。`Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是`Promise`这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
>
> （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

#### 基本语法

```js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

例子：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            const p = new Promise(function (resolve, reject) {
                setTimeout(() => {
                    /*  let data = '读取数据成功'
                resolve(data); */

                    let err = "数据读取失败";
                    reject(err);
                }, 1000);
            });

            // 成功就调用then中第一个方法，失败调用then中第二个方法
            p.then(
                function (value) {
                    console.log(value);
                },
                function (err) {
                    console.log(err);
                }
            );
        </script>
    </body>
</html>

```

#### Promise读取文件

```js
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
```

#### Promise封装Ajax

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            // 原先的方式
            /* const xhr = new XMLHttpRequest();
        xhr.open('get','https://api.apiopen.top/getJoke');
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    console.log(xhr.response);
                }else {
                    console.log(xhr.status);
                }
            }
        } */

            // 用Promise封装后的
            const p = new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open("get", "https://api.apiopen.top/getJoke");
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(xhr.response);
                        } else {
                            reject(xhr.status);
                        }
                    }
                };
            });

            // 执行回调
            p.then((resp)=>{
                console.log(resp);
            },(err)=>{
                console.log(err);
            })
        </script>
    </body>
</html>

```


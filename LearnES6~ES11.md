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
        iterator.next(); // 不用console.log输出是不显示
        iterator.next();
        iterator.next(); */


        for(let v of get()) {
            console.log(v);
        }
    </script>
</body>
</html>
```


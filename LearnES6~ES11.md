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


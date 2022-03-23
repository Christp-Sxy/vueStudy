// 导入对象中定义的变量
import {flag, sum} from "./aaa.js";

if (flag) {
  console.log("住在山里面真不错");
}

// 直接导入export中定义的变量
import {num1, height} from "./aaa.js";

console.log(num1, height);

// 直接导入export中定义的函数
import {mul, Person} from "./aaa.js";

console.log(mul(1, 2));

const p = new Person();
p.run()

// 导入默认值(导入默认值时名字可以随便取)
import P from "./aaa.js"

console.log(P);

// 统一全部导入
import * as aaa from "./aaa.js"
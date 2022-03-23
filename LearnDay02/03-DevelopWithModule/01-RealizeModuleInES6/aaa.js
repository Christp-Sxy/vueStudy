let name = '小明'
let age = 10
let flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30));
}

// 1.导出方式1
export {
  flag, sum
}

// 2.导出方式2
export let num1 = 1000;
export let height = 1.58

// 3.导出函数/类
export function mul(num1, num2) {
  return num1 + num2
}

export class Person {
  run() {
    console.log("向前跑！");
  }
}

// 4.默认导出，每个js文件默认导出只能有一个
let address = '西伯利亚'
export default address
const app = new Vue({
  el: "#app",
  data: {
    book: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《我的大作》',
        date: '2022-3',
        price: 666.00,
        count: 1
       }
    ]
  },
  methods: {
    // getFinalPrice(price) {
    //   return '￥' + price.toFixed(2)
    // }

    increment(index) {
      this.book[index].count++;
    },

    decrement(index) {
      this.book[index].count--;
    },

    removeHandler(index) {
      this.book.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      // let totalPrice = 0;
      // 1.普通for循环
      // for (let i = 0; i < this.book.length; i++) {
      //   totalPrice += this.book[i].price * this.book[i].count
      // }

      //2.for(let i in books)
      // for (let i in this.book) {
      //   const book = this.book[i]
      //   totalPrice += this.book.price * this.book.count
      // }

      //3.for (let i of this.book)
      // for (let item of this.book) {
      //   totalPrice += item.price * item.count
      // }

      //4.reduce
      // return this.book.reduce((preV, books) => preV + books.price * books.count)
      return this.book.reduce(function (preV, books) {
        return preV + books.count * books.price
      }, 0)

    }
    
  },
  filters: {  //过滤器
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})

const nums = [10, 20, 1111, 223, 656, 32, 99]

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((preV, n) => preV + n);

// let total = nums.filter(function (n) {
//   return n < 100
// }).map(function (n) {
//   return n * 2
// }).reduce(function (preValue, n) {
//   return preValue + n
// }, 0)

// //1.filter函数的使用
// let newNums = nums.filter(function (n) { //函数必须返回bool值，最后数组的结果根据bool值是否为true进行填充
//   return n < 100
// })
//
// //2.map函数的使用
// let newNums2 = newNums.map(function (n) { //函数所返回的值即数组的元素
//   return n * 2
// })
//
// //3.reduce函数的使用
// //reduce作用为对数组中所有的内容进行汇总
// let total = newNums2.reduce(function (preValue, n) {
//   return preValue + n
// }, 0)
//
console.log(total)
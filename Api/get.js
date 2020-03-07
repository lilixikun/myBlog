
const { get } = require('lodash')

class Http {
    constructor() {
        this.name = "xikun"
        this.age = 18
        this.address = '湖北随州'
    }
    validator() {
        let set = new Set()
        const obj = Reflect.getPrototypeOf(this)
        const keys = Reflect.ownKeys(obj)
     
        keys.forEach(key => set.add(key))
        let funKeys = Array.from(keys.values())
        funKeys = funKeys.filter(fun => typeof this[fun] === "function")
        console.log(funKeys);
    }

    test3() {
        console.log('this.test3');
    }
}

class Test extends Http {
    constructor() {
        super()
        this.id = 1
        this.test = 2
    }
    test2() {
        console.log('test')
    }
    test1() {
        console.log('test1')
    }
}

const test = new Test();
//console.log(Reflect.ownKeys(test));

test.validator()





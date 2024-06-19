class Person { 
    constructor(name = 'Anonymous', age = 0) {
     this.name = name ;
     this.age = age + 26;
    }
    getDescription() {
      return this.name + ' is ' + this.age;
    }
}

const me = new Person('Huy Nguyen');
console.log(me.getDescription())

const newMe = new Person()
console.log(newMe.getDescription());
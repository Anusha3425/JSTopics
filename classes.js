// Classes are templates for jS objects, they are not objects.
// always add a constructor method
// they can include as many methods.

class Elements{
    constructor(name, number){
        this.name=name;
        this.number=number
    }
    Formula(molnum) {
        console.log(`My molecular formula is ${molnum}.`)
    }
}

var Oxygen= new Elements("Oxygen", 1);
console.log(Oxygen)
Oxygen.Formula(16)


// class inheritance: use extends keyword to inherit the class
// super() method refer to parent class

class Molecules extends Elements{
    constructor(name, number, Hnum){
        super(number);
        this.Hnum=Hnum;
    }

    display(){
        return (`There are ${this.number} number of Oxygen, and ${this.molNum} number of Hydrogen in Water`);
    }
}

var Water=new Molecules("Water", 1 ,2);
console.log(Water);
console.log(Water.display())

// getter and setter methods:

class Planets{
    constructor(name){
        this.PName=name;
    }

    get PlanetName(){
        return this.PName;
    }
    set PlanetName(x){
        this.PName = x;
    }
}

const Earth=new Planets("Earth");
console.log(Earth.PlanetName)
// even the getter method is a function, we cannot use bracket to access the property.
// the name of the getter/setter cannot be same as the property name i.e., in this case, 
// getter/setter method name PlanetName is not equal to property name Pname.

// class declarations are hoisted, i.e., we cannot use class before it's declaration.


// static methods: defined in the class 
// cannot be used with class object, can be used only with class.

// syntax in classes must be in strict mode.
class person{
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
    age(){
        // date=new Date()    //this will give error
        const date=new Date();
        return date.getFullYear()-this.year;
    }
    static Greet1(){
        return "Hello!"
    }
    static Greet2(x){
        return `Hello ${x.name}`
    }
}

const person1=new person("Anvika", 2002);
console.log(person1)
console.log(person1.age())
console.log(person.Greet1())
console.log(person.Greet2(person1))
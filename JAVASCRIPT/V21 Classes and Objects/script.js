// let obj = {
//     'a':1,
//     'b':"uday"
// }
// console.log(obj);

// let animal = {
//     eats:true
// }
// let rabbit= {
//     jumps:true
// }

// rabbit.__proto__ = animal; // sets rabbit.{[Prototype]} = animals

class Animals {
    constructor(animalName) {
        this.animalName = animalName
        console.log('object is created');
        
    }
    eats(){
        console.log(this.animalName + " eating");
        
    }
    sleep(){
        console.log(this.animalName + ' sleeping');
        
    }

    //getter and setter are used to get and set the values of variables after creating the objects
    get name(){
        return this.Name;
    }
    set name(value){
        if(value.lenght < 4){
            console.log("Name is too short.");
            return
        }
        this.Name = value
    }
}

class lion extends Animals{
    constructor(animalName) {
        //if we extends any class then we must use super funt with all argument of extended class construnctor to change values of parameter
        super(animalName)
        console.log("Lion is created");
        
    }

    //Method Overriding
    eats(){
        super.eats() //this will runs parent eats method but with this class name i.e. shingh
        console.log(this.animalName + " eating with a roar");
        
    }
    
}

let a = new Animals("Sheru")
console.log(a);

console.log(a.Name);
a.Name = ""


// let b = new lion("Shingh")
// console.log(b);

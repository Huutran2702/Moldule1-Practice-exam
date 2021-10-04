// Câu 4 : Xây dựng lớp Animal
class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.setName = function (name) {
            this.name = name;
        }
        this.setWeight = function (weight) {
            this.weight = weight;
        }
        this.getName = function () {
            return this.name;
        }
        this.getWeight = function () {
            return this.weight;
        }
        this.toString = function () {
            document.write(this.name + " " + this.weight + "kg");
        }
    }
}
// Sử dụng lớp Animal 
let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
objAnimal1.toString();
let objAnimal2 = new Animal("Dog", 30);
objAnimal2.setName("Mouse");
document.write("<br>");
objAnimal2.toString();
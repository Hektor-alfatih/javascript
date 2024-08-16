// Praktek 1

let Person = {
    Name : "Hektor",
    Age : 15,
    City : "Bogor"
}
console.log(Person.Name);


console.log(Person['Age']);

Person['Age'] = 20;
console.log(Person.Age)


delete Person.City
console.log(Person.City);


// Praktek 2

const {Name, Age} = Person;
console.log(Name, Age);

const {Name:UserName, Age:UserAge} = Person;
console.log(UserName, UserAge);

// Praktek 3


class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }

    updateAuthor(newAuthor) {
        this.author = newAuthor;
    }
}

let myBook = new Book("JavaScript Essentials", "Jane Doe");
console.log(myBook.getDetails());

myBook.updateAuthor("Hektor");
console.log(myBook.getDetails());

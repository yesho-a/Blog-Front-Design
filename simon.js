/*const book = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  },
};

console.log(book.getSummary());

const book2 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  origin: "Uganda",
  getSummary: function () {
    return `${this.title} was written ${this.author} from Uganda, in the year ${this.year}`;
  },
};

console.log(book2.getSummary());*/
/*
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in the year ${this.year}`;
};

Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};
const book1 = new Book("book one", "Simon Yesho", "2015");

const book2 = new Book("book two", "Maigut Peter", "2011");

book2.revise("2020");
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book2);*/
/*
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine("Mag One", "John Doe", "2020", "Feb");

console.log(mag1.getSummary());*/
/*
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine("Mag one", "John Doe", "2019", "Feb");
console.log(mag1);
console.log(mag1.getSummary());
*/
//const hero1 = new Hero("Varg", 1);

//console.log(hero1.greet());

// Creating a new class from the parent
/*class Mage extends Hero {
  constructor(name, level, spell) {
    // Chain constructor with super
    super(name, level);

    // Add a new property
    this.spell = spell;
  }
}

const hero2 = new Mage("Lejon", 2, "Magic Missile");
console.log(hero2.greet());*/

/*class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let mycar1 = new Car("Ford", 2014);
console.log("My car is " + mycar1.age() + " years old.");*/

/*hello = function () {
  return "Hello world";
};

hello = () => {
  return "Hello World";
};

console.log(hello());*/

/*hello = (val) => "Hello " + val;

console.log(hello("simon"));
*/

/*class Hero {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    `Your full name is Simon Yesho`;
  }
}

let hero1 = new Hero("Yesho", "Simon");
console.log(hero1.fullName());*/
/*
class Hero {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return `Your name is ${this.firstname} ${this.lastname}`;
  }
}

let hero1 = new Hero("Maigut", "Peter");
console.log(hero1.getName());

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  }
}

let book1 = new Book("sheakspear", "Simon Yesho", 2020);
console.log(book1.getSummary());

let x = 5;
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than or equal");
}

let count = 1;
while (count < 10) {
  console.log(count);
  count += 2;
}

let count = 0;
do {
  count++;
  console.log("count is:" + count);
} while (count < 10);*/
/*
const nums = [25, 125, 75, 200];

function atLeast100(num) {
  return num >= 100;
}

let xy = nums.filter(atLeast100);
console.log(xy);

const companies = ["Apple", "Google", "Facebook"];

companies.forEach((company) => {
  console.log(company);
});

const companies = ["apples", "google", "facebook"];
function printValue(company, index) {
  console.log(`${index}.${company}`);
}
companies.forEach(printValue);


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = arr.filter((i) => i % 2 == 0);
console.log(arr2);

*/

/*const days = ["mon", "tue", "wed", "thur", "fri", "sat"];

days.forEach(function (day, index) {
  console.log(`Starts with ${index + 1} -- ${day}`);
});*/
/*
var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      {text: "Learn JavaScript"},
      {text: "Learn Vue"},
      {text: "Build something awesome"},
    ],
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!",
  },
});

var vm = new Vue({
  el: "#example",
  data: {
    message: "Hello",
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
  },
});

new Vue({
  el: "#root",
  data: {
    greeting: "Hello Simon Yesho",
  },
});

/*Vue.component("cat-list", {
  props: ["cats"],
  //template: "<ul><li>Cat</li></ul>",
  //template: <li v-for="cat in cats">{{ cat.name }}</li>,
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});*/
/*
Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      {id: 0, text: "Vegetables"},
      {id: 1, text: "Cheese"},
      {id: 2, text: "Whatever else humans are supposed to eat"},
    ],
  },
});

app = new Vue({
  el: "#root1",
  component: ["cat-list"],
  data: {
    cats: [{name: "jane"}, {name: "jeff"}, {name: "ron"}],
    newCat: "",
  },
  methods: {
    addKitty: function () {
      this.cats.push({name: this.newCat});
      this.newCat = "";
    },
  },
  filters: {
    capitalize: function (value) {
      return value.toUpperCase();
    },
  },
  computed: {
    kittifyName: function () {
      if (this.newCat.length > 1) {
        return this.newCat + "y";
      }
    },
  },
});

var vm = new Vue({
  el: "#det",
  data: {
    firstname: "Ria",
    lastname: "Singh",
    address: "Mumbai",
  },
  methods: {
    mydetails: function () {
      return "I am " + this.firstname + " " + this.lastname;
    },
  },
});
*/
/*
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
  alert("Access granted");
} else {
  alert("Access denied");
}

 const posts = [
        {
          title: "Post One",
          body: "This is post one",
        },
        {
          title: "Post Two",
          body: "This is post two",
        },
      ];

      function getPost() {
        setTimeout(() => {
          let output = "";
          posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
          });
          document.body.innerHTML = output;
        }, 1000);
      }

      function createPost(post, callback) {
        setTimeout(() => {
          posts.push(post);
          callback();
        }, 2000);
      }

      createPost({title: "Post Three", body: "This is post three"}, getPost);

       const posts = [
        {
          title: "Post One",
          body: "This is post one",
        },
        {
          title: "Post Two",
          body: "This is post two",
        },
      ];

      function getPost() {
        setTimeout(() => {
          let output = "";
          posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
          });
          document.body.innerHTML = output;
        }, 1000);
      }

      function createPost(post) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            posts.push(post);
            const error = true;
            if (!error) {
              resolve();
            } else {
              reject("Erro: something is wrong");
            }
          }, 2000);
        });
      }

      createPost({title: "Post Three", body: "This is post three"}).then(
        getPost,
      );
      //.catch((err) => console.log(error));
      //.catch((err) => console.log(err));


       var p = new Promise(function (resolve, reject) {
        var x = 2 + 3;
        if (x == 5) resolve(" executed and resolved successfully");
        else reject("rejected");
      });
      p.then(function (fromResolve) {
        document.write("Promise is" + fromResolve);
      }).catch(function (fromReject) {
        document.write("Promise is " + fromReject);
      });
*/

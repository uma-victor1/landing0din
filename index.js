let name = "uma victor";

const isEven = (x) => {
  if (x % 2 === 0) return true;
  return false;
};

class User {
  constructor(name, age, likes) {
    this.name = name;
    this.age = age;
    this.likes = likes;
  }

  getName = function () {
    console.log(`user name is ${this.name}`);
  };

  getAge = function () {
    console.log(`user name is ${this.age}`);
  };
}
function BookCreator(title, author, page) {
  this.title = title;
  this.author = author;
  this.page = page;

  this.pageInfo = function () {
    return `${title} by ${author} with ${page} pages`;
  };
}

let theHobbit = new BookCreator("the hobit", "JRR", 295);

console.log(theHobbit);
console.log(theHobbit.pageInfo());

const fetcher = () => {
  return fetch("https://randomuser.me/api/")
    .then((x) => {
      return x.json();
    })
    .then((x) => {
      return x.results[0].name.last;
    })
    .then((x) => x);
};

function logNumber(y) {
  throw "no num";
  return y + " years old";
}

const getNumAdd = (x) => {
  return new Promise((res, rej) => {
    try {
      let mynum = logNumber(x);
      setTimeout(() => res(mynum), 1000);
    } catch (error) {
      rej(error + "omoo");
    }
  });
};

let num = async () => {
  try {
    let n = await getNumAdd(20);
    console.log(n);
  } catch (error) {
    console.error(error);
  }
};
num();

// const person = () => {
//   return {
//     personName: fetcher().then((x) => console.log(x, "we inside fammm")),
//   };
// };

// console.log(person(), ";))))))");

// console.log("we outside");

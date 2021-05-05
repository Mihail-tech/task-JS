//1

const { resolve } = require("node:path");

// a) use map for array
const arr = [1, 2, 3, 5];
const arr1 = [3, 5, 8];

Array.prototype.newMap = function (func) {
  let result = [];

  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    let res = func(element);
    console.log(res);
    result.push(res);
  }

  return result;
};

let d = arr.newMap((x) => x + 1);
console.log(d);

// b) use map for array 
var newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

console.log(
  newReleases.map((element) => {
    return { id: element.id, title: element.title };
  })
);

// в) use filter for array

const arrayFilter = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.arrayFilterNew = function (someFiltr) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (someFiltr(element)) {
      result.push(element);
    }
  }
  return result;
};
let ff = arrayFilter.arrayFilterNew((element) => element >= 4);
console.log(ff);

// г)

let tt = newReleases.filter((element) => element.rating == 5);
console.log(tt);
let tr = tt.map((el) => {
  return el.id;
});
console.log(tr);

// д) 
var movieLists = [
  {
    name: "Instant Queue",
    videos: [
      {
        id: 70111470,
        title: "Die Hard",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
          },
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
  {
    name: "New Releases",
    videos: [
      {
        id: 65432445,
        title: "The Chamber",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 675465,
        title: "Fracture",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
          },
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
          },
          {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
];

let qq = movieLists.map((el) =>
  el.videos.map((elem) => {
    return {
      id: elem.id,
      title: elem.id,
      boxart: elem.boxarts.filter(
        (element) => element.width == 150 && element.height == 200
      )[0].url,
    };
  })
);
console.log(qq[0].concat(qq[1]));

// д.1) use reduce for array
const arrReduce = [1, 2, 3];

Array.prototype.newReduce = function (func, initialValue) {
  let newArr = [];
  let result;
  let startIndex = 0;

  if (initialValue == undefined) {
    result = arrReduce[0];
    startIndex = 1;
  } else {
    result = initialValue;
  }

  for (let i = startIndex; i < this.length; i++) {
    result = func(result, this[i]);
  }

  newArr.push(result);

  return newArr;
};

let wq = arrReduce.newReduce(
  (accumulator, current) => accumulator + current,
  10
);
console.log(wq);

// e) use reduce for max number
const ratings = [2, 3, 1, 4, 5];
let nn = ratings.reduce((accumulator, initialValue) => {
  return accumulator > initialValue ? accumulator : initialValue;
});
console.log(nn);

// ж)???
var boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

// let zz = boxarts.reduce(function(previous, current) {
// 	let yy = boxarts.map(x => x.width * x.height );
// 	if(previous > current){
// 		console.log(url);
// 	}
// }, boxarts[0]);
// console.log(zz);

let hh = boxarts.map((x) => x.width * x.height);
console.log(hh);
let cc = hh.reduce((accumulator, initialValue) => {
  return accumulator > initialValue ? accumulator : initialValue;
});
console.log(cc);

//  з) ???
var videos = [
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
];

let fd = videos.reduce((x, y) => {
  return `${x} "${y.id}" : "${y.title}",`;
}, "");
console.log(fd);





//2
function Robot(name) {
  this.name = name;
}
function resultRobot(op1, op2) {
  this.name = this.name || "human";
  let cx = op1 + op2;
  let km = `${this.name} can count to  ${cx}`;
  console.log(km, 'tre');
  //return  this.name + " can count to " + (op1 + op2);
}

//a
resultRobot.prototype = new Robot();
let kk = new resultRobot(0, 1);

//б
let voltron = (resultRobot.prototype = new Robot("voltron"));
resultRobot.call(voltron, 1, 2);
let kl = new resultRobot();

//в
// resultRobot.apply(person, [20, 30])
// let ll = new resultRobot()
// console.log(ll);
let mk = (resultRobot.prototype = new Robot("voltron"));
resultRobot.apply(mk, [30, 20]);
let lk = new resultRobot();

//г









// 3
// а
let btnFive = document.getElementById("fiveSeconds")
let btnFiveSeconds = () => {
	setInterval(() => {
		console.log('hello word');
	}, 5000)
  
}
btnFive.addEventListener("click", btnFiveSeconds);




// б
let btn = document.querySelector(".btn");
let timer;
let start = () => {
	timer = setInterval(() => {
		console.log('You are welcom!');
	}, 3000);
  btn.removeEventListener('click', start);
  btn.addEventListener('click', stop);
}
let stop = () => {
  btn.removeEventListener('click', stop);
  btn.addEventListener('click', start);
  clearTimeout(timer);
}

btn.addEventListener('click', start);






//4
//а
function delay(duration){
  return new Promise(resolve => setTimeout(resolve, duration))
}
function logHi(){
  console.log('hi');
}
delay(2000).then(logHi);




//б
let output = new Promise(function(resolve, reject) {
	// должно через 3 секунды передать дальше значение - 10
	setTimeout(() => {
		resolve(10);
	}, 3000);
  }).then((result) => {
	// должно вывести в console значение полученное и передать дальше
  console.log(result);
	// увеличенное на 2
  return result * 2
  }).then((result) => {
	// должно вывести в console значение полученное и передать дальше
  console.log(result);
	// увеличенное на 2 через 2 секунды
   return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve(result * 2)
   }, 2000);
   });
  }).then((result) => {
	// должно вывести конечный результат
  console.log(result);
  });
  

  //в
  let promise = new Promise((resolve, reject) => {

  }).then()
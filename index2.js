//1

console.log("MyMap");
 Array.prototype.myMap = function(callback, thisArg) 
 {
    let outArray = [], thisContext;
    if (arguments.length > 1) {
      thisContext = thisArg;
    }
    for (let i = 0; i < this.length; i++) {
      outArray.push(callback.call(thisContext, this[i], i, this));
    }
    return outArray;
 }

let testMapArray = [1,2,3];
console.log(testMapArray.myMap(x => x + 1));
/* б */
var newReleases = [{
	"id": 70111470,
	"title": "Die Hard",
	"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
}, {
	"id": 654356453,
	"title": "Bad Boys",
	"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{ id: 432534, time: 65876586 }]
}, {
	"id": 65432445,
	"title": "The Chamber",
	"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
}, {
	"id": 675465,
	"title": "Fracture",
	"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{ id: 432534, time: 65876586 }]
}];

let taskBReleases = newReleases.myMap(x => {
    return x = {
          "id": x.id, 
          "title": x.title
        }
})
console.log(taskBReleases);

/* в */
console.log("MyFilter");
Array.prototype.myFilter = function(callback, thisArg) {
    let outArray = [], thisContext;
    if (arguments.length > 1) {
      thisContext = thisArg;
    }
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisContext, this[i], i, this)) {
        outArray.push(this[i]);
      }
    }
    return outArray;
 }
let testFilterArray = [4, 9, 16, 25];
let numbersArrayResult = testFilterArray.myFilter(x => x%2===0);
console.log(numbersArrayResult);
/* г */
let taskGReleases = newReleases.myFilter(x => x.rating[0] === 5.0).myMap(x => x.id)
console.log(taskGReleases);

/* д */
var movieLists = [{
	name: "Instant Queue",
	videos : [{
		"id": 70111470,
		"title": "Die Hard",
		"boxarts": [{
width: 150,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
}, {
width: 200,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" 
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	}, {
		"id": 654356453,
		"title": "Bad Boys",
		"boxarts": [{
width: 200,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
}, {
width: 150,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}]
}, {
	name: "New Releases",
	videos: [{
		"id": 65432445,
		"title": "The Chamber",
		"boxarts": [{
width: 150,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
}, {
width: 200,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" 
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	}, {
		"id": 675465,
		"title": "Fracture",
		"boxarts": [{
width: 200,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
}, {
width: 150,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
}, {
width: 300,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}]
}];
let movieDResult = [];
movieLists.myMap(movie => {
  movie.videos = movie.videos.myMap(video => {
    let boxart = video.boxarts.myFilter(art => art.height == 200 && art.width == 150);
    return video = {
      "id": video.id,
      "title": video.title,
      "boxart": boxart[0].url
    }
  })
  movieDResult = movieDResult.concat(movie.videos);
});
console.log(movieDResult);

/* д */
console.log("MyReduce");
Array.prototype.myReduce = function(callback)
{
    let result;
    arguments.length > 1 ?  result = arguments[1] : result = 0;
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}
console.log(testMapArray.myReduce((memo, item) => memo + item));
console.log(testMapArray.myReduce((memo, item) => memo + item, 10));

/* е */
var ratings = [2,3,1,4,5];
let resultE = ratings.myReduce((max, currentValue) => max>currentValue ? max : currentValue);
console.log(resultE);

/* ж */
var boxarts = [{
width: 200,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
}, {
width: 150,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
}, {
width: 300,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
}, {
width: 425,
height: 150,
url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
}];

function getSquare(width, height) {
  return width*height;
}

let urlOfBoxartWithMaxSquare = boxarts.myReduce((max, currentValue) =>  getSquare(max.width, max.height) >= getSquare(currentValue.width, currentValue.height) ? max : currentValue).url;
console.log("url of object with max Square: " + urlOfBoxartWithMaxSquare);

/* з */
var videos = [{
	"id": 65432445,
	"title": "The Chamber"
}, {
	"id": 675465,
	"title": "Fracture"
}, {
	"id": 70111470,
	"title": "Die Hard"
}, {
	"id": 654356453,
	"title": "Bad Boys"
}];

let videosResult = videos.myReduce((acc, cur, i) => {
  i = cur.id;
  acc[i] = cur.title;
  return acc;
}, {});
console.log(videosResult);


//2

/*Выведите указанные внизу ответы */
var Robot = function (name) {
    this.name = name;
  }
  let obj = {};
  obj.add = function add(op1, op2) {
    this.name = this.name || "Human";
    return this.name + " can count to " + (op1 + op2);
  } // поместил функцию в объект чтобы у нас не брался контекст документа, иначе вместо Human выводится CodePan
  
  
  var voltron = new Robot("Voltron");
  var robo = new Robot("Robo");
  var ampo = new Robot("Ampo");
  
  // #1 Выведите результат сложения 0 и 1
  console.log(obj.add(0, 1)); // "this can count to 1"
  
  // #2 Выведи результат сложения Voltron 1 и 2 используя call
  console.log(obj.add.call(voltron, 1, 2)); // “Voltron can count to 3”
  
  // #3 Выведи результат сложения Voltron 20 и 30 используя apply
  console.log(obj.add.apply(voltron, [20, 30])); // “Voltron can count to 50”
  
  // #4 Выведи результат сложения Voltron «drinking» и «beer» используя bind
  let wrapper = obj.add.bind(voltron, "drinking", "beer")
  console.log(wrapper()); // “Voltron can count to drinkingbeer”
  
  // #5 Написанный вами код должен вывести console.log имени которое лежит в this.name пятью разными способами
  obj.showName = function showName() {
    this.name = this.name || "task 5";
    console.log(`Name: ${this.name}`);
  }
  
  let s = obj.showName.bind(ampo);
  
  setTimeout(obj.showName(), 1000);
  setTimeout(() => obj.showName(), 1000);
  setTimeout(obj.showName.call(voltron), 1000);
  setTimeout(obj.showName.apply(robo), 1000);
  setTimeout(s, 1000);



//3

  // Задание А
let timeoutHolder = {};
function task1(){
  clearTimeout(timeoutHolder);
  timeoutHolder = setTimeout(() => console.log("Hello World!"), 5000);
}
// Задание Б
let interval = {};
function task2(){
  clearInterval(interval); 
  interval = setInterval(() => console.log("You are welcome!"), 3000);
}
// Задание В
let seconds;
let flag = false;
let timeoutHandler = {};
function getRandom(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function result() {
    clearTimeout(timeoutHandler);
    seconds = getRandom(1, 4);
    timeoutHandler = setTimeout(function(){
        console.log(seconds + " seconds");
        result();
    }, seconds*1000);
}
function task3(){
    clearTimeout(timeoutHandler);
    if (!flag) result();
    flag = !flag;
}
// Задание Г
let timer = {};
function justDoIt() {
    console.log(`${document.getElementById('textArea').value}`);
}
function task4() {
    clearTimeout(timer); 
    timer = setTimeout(justDoIt, 1000)
}



//4

  // Задание А
function task1() {
    function delay(duration){
        return new Promise((resolve, reject) => setTimeout(() => resolve(), duration))
    }
    function logHi(){
        console.log("hi");
    }
    delay(2000).then(logHi);
}

// Задание Б
function task2() {
    new Promise(function(resolve, reject) {
        let number = 10;
        setTimeout(() => resolve(number), 3000);
    }).then((result) => {
        console.log(result);
        return result+2;
    }).then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => setTimeout(() => resolve(result+2), 2000));
    }).then((result) => {
        console.log(result);
    });
}
// Задание В
function getRandom(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function task3() {
    new Promise((resolve, reject) => {
        let timeoutHolder = setTimeout(() => reject(), 2000);
        let randomNumber = getRandom(1000, 3000);
        console.log(`Random Number: ${randomNumber}`);
        setTimeout(() => {
          clearTimeout(timeoutHolder);
          resolve();
        }, randomNumber);
    }).then(response => console.log("Resolved")).catch(err => console.error("Rejected"));
}
// Задание Г
async function taskG(numberOfFunctions) {
    let startExecutionTime = performance.now(), functions = [];
    for(let i = 0; i < numberOfFunctions; i++) {
        let executionTime = getRandom(1,10), functionID = i+1;
        functions.push(new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Функция №${functionID} выполняется ${executionTime} секунд`);
                resolve();
            }, executionTime*1000);
        }))
    }
    await Promise.all(functions);
    let executionTime = Math.round((performance.now() - startExecutionTime)/1000);
    console.log(`${executionTime} секунд ушло на выполнение функции`);
}

function task4() {
    taskG(getRandom(1,10));
}

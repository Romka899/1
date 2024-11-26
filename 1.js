import HttpsProxyAgent from "https-proxy-agent";
import fetch, { blobFrom } from "node-fetch";


/*const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
const count = {};
fruits.forEach(f =>{
    if (!count[f]){
        count[f] = 1;
    }else{
        count[f]++;
    }
});
console.log(count);
*/



/*const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
const fruitsUniq = Array.from(new Set(fruits))
console.log(fruitsUniq);
*/

/*
const students = [
      { name: 'alex', age: 20 },
      { name: 'mike', age: 24 },
      { name: 'masha', age: 20 },
      { name: 'stas', age: 18 },
    ];
const grouped = {};
students.forEach(s => {
    if(!grouped[s.age]){
        grouped[s.age] = [s];
    }else{
        grouped[s.age].push(s);
    }
})

console.log(grouped);
*/

/*
const myNumbers = [3, -4, 8, 11, 1, -1, 6, 4, 5, 5, 7];
const sum = 10;

function find(myNumbers, sum){
    for(let i = 0; i < myNumbers.length; i++){
        let num1 = myNumbers[i];
        for(let j = i+1; j < myNumbers.length; j++){
            let num2 = myNumbers[j];
            if(num1 + num2 == sum){
                console.log(num1, num2);
            }
        }
    }
    return 0;
}

let result = find(myNumbers, sum);
*/


/*const friends = [
      { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
      { name: 'mike', pizzas: ['salami', 'margarita'] },
      { name: 'stas', pizzas: ['meat'] },
      { name: 'anna', pizzas: ['fish'] }
    ];

const pizzas = friends.reduce((accum, current) => {
    return [...accum, ...current.pizzas]
},[]);

console.log(pizzas);

*/

/*const cars = [
    { number: '1', name: ['porsh', 'vogan']},
    { number: '2', name: ['porsh', 'vogan']},
    { number: '3', name: ['porsh', 'vogan']},
    { number: '4', name: ['porsh', 'vogan']}
];

const a = cars.reduce(
    (accum, current) => {
        return [...accum, ...current.name]
    },[]);
console.log(a);*/

/*let myStr = 'abcdef';
function reversStr(Str){
    let reversed = [];
    for(let i = Str.length - 1; i >= 0; i--){
        reversed.push(Str[i]);
    }
    return reversed;
}

let result = reversStr(myStr);
console.log(result);*/

/*
function Calculator(){
    this.read = function(){
        this.num1 = +prompt('num1', 2);
        this.num2 = +prompt('num2', 3);
    };
    this.sum = function(){
        return this.num1 + this.num2;
    };
    this.mul = function(){
        return this.num1 * this.num2;
    };
}
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

/*
let name = prompt('add', '');
alert(name);
let isBoss = confirm('твое имя ' + name + '?');
alert(isBoss);*/

/*
function sumTo(n){
    if(n == 1){
        return n;
    }else{
        return n + sumTo(n - 1);
    }
}

console.log(sumTo(100));
*/

/*
function fact(n){


    if(n == 1){
        return n;
    }else{
        return n * fact(n-1);
    }
}

console.log(fact(4));
*/

/*
function fib(n){
    return n<=1 ? n : fib(n-1) + fib(n-2);
}
console.log(fib(10));
*/


//--------------------------------------------------
/*
let x = "bbbbb";
let y = 'ccccc';
let a = 'Time ' + 1 + " AM";
let z = `
aaaaaaaa
aaaaaaaaa
aaaaaaaaaa
${x + y}
"aaaaa"
'aaaaa'
`;
console.log(a,z);
*/
//------------------------------------const o = {h:'7'} ///
/*
const user = {
    name: "John"
  };
  
user["name"] = "Pete"; // (*)
  
console.log(user["name"]); // Pete
*/
/*
function makeUser(name, age) {
    let b = "aaa";
    return {
      name: name,
      age: age,
      a: 8,
      b,
    };
  }
  
let user = makeUser("John", 30);
console.log(user.name);
console.log(user.a);
console.log(user["b"]);
*/

/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
for (let key in user){
    console.log(user[key]);
}
*/

/*
let obj = {
    a: undefined,
    b: 8,
    c: undefined,
    d: "aaa",
};
for(let key in obj){
    if(obj[key] === undefined){
        console.log('true');
    }else{
        console.log('false');
    }
}
*/

/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
let sum = 0;
for(let sal in salaries){
    if(salaries[sal] != undefined){
        sum += salaries[sal];
    }else{
        sum = 0;
        console.log(sum);
    }
}
console.log(sum);
*/

/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(menu){
    for(let key in menu){
        if(typeof menu[key] == 'number'){
            menu[key] *= 2;
            console.log(menu[key]);
        }
    }
}
multiplyNumeric(menu);
*/


//------------------------------------------ 'fuction =>' отличие от function


/*let sum1 = (a, b) => a + b;
console.log( sum1(1, 2) ); // 3

let sum2 = (a, b) => { 
    let result = a + b;
    return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
  };
console.log( sum2(1, 2) ); // 3

let question;
let ask = (confirm("?", question)) ?
  () => alert("sogl") :
  () => alert("nesogl");
ask();

function a(a, b) {
    return a * b;
}
console.log(a(2,3));

let b = (a, b) => a * b;
console.log(b(3,4)); 
*/
//-------------------------------------------------------------------------------Массивы

/*let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
console.log(styles.shift());
styles[Math.floor((styles.length-1)/2)] = "Классика";
console.log(styles.unshift("Регги","Рэп"));
console.log(styles.length);
console.log(styles);
*/

/*
function sumInput(){
    let arr = [];
    while(true){
        let val = prompt("?", 0);
        if(val < 0 || val === null || !isFinite(val)){
            break;
        }
        arr.push(+val);
    }
    let result = 0;
    for(let i = 0; i <= arr.length-1; i++){
        result += arr[i];
    }
    alert(arr);
    return result;
}

alert(sumInput())
*/

/*
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) {
      partialSum += item;
      maxSum = Math.max(maxSum, partialSum);
      if (partialSum < 0) partialSum = 0;
    }
  
    return maxSum;
  }
alert(getMaxSubSum([-1.-2,3,4]));
*/

//-----------------------------------------Методы массивов

/*
function a_a(arr){
    return arr
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}
console.loge(a_a("a-a-a"));
*/

/*
function filterRangeInPlace(arr, a, b){
    let arr2 = [];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i]<=b && arr[i]>=a){
            arr2.push(arr[i]);
        }
    }
    //let result = arr2.filter(item => (item >= a && item <= b));
    //return result;
    return arr2;
}

console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4))
*/

/*
function sor(a, b){
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}
let arr = [2, -3, 4, 1];
//arr.sort((a, b) => b - a);
//console.log(arr);
arr.sort(sor);
console.log(arr);
*/

/*
let arr = ['Bbbbb', 'Aaaa', 'Ccc'];
let arr2 = arr.map(item => item.length);
let arr3 = arr.slice().sort();
console.log(arr);
console.log(arr2.sort((a, b) => a - b));
console.log(arr3);
*/

/*
function calculate(str){
    let arr = str.split(' ');
    let n;
    let arg1 = 0;
    let arg2 = 0;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] == '+'){
            n = 1;
            arg1 = Number(arr[0]);
            arg2 = Number(arr[2]);
            break
        }else if(arr[i] == '-'){
            n = 0;
            arg1 = Number(arr[0]);
            arg2 = Number(arr[2]);
            break
        }
    }
    if(n == 1){
        return arg1 + arg2;
    }else if(n == 0){
        return arg1 - arg2;
    }else{
        return NaN;
    }
}
console.log(calculate('7 + 3'));
*/

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log(names);
*/

/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
}));
console.log(usersMapped[2]);
*/

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

let arr2 = [1, -2, 15, 2, 0, 8];
arr2.sort((a, b) => a - b);
console.log(arr2);

function sortByAge(arr){
    arr.sort((a, b) => a.age - b.age);
}
sortByAge(arr)
for(let i = 0; i < arr.length; i++){
    console.log(arr[i].name);
}
*/

/*
let arr = [1, 2, 3, 4];
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  }
shuffle(arr);
console.log(arr);
*/

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
let arr2 = [];
let avg = 0;
arr2 = arr.map(item => item.age);
console.log(arr2);
avg = (arr2[0] + arr2[1] + arr2[2]) / (arr2.length);
console.log(avg);


function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // 28
*/

/*
function unique(arr) {
    const uniqNames = new Set(arr);
    console.log(Array.from(uniqNames));
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
unique(strings);
*/

/*
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  let usersById = groupById(users);

  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

  console.log(usersById);
  */

  /*
  function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // разбиваем слово на буквы, сортируем и объединяем снова в строку
      let sorted = word.toLowerCase().split("").sort().join(""); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) );
*/

/*
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); //

keys.push("more");

alert(keys); // name, more
*/

//--------------------------------------- Object, keys, values

/*
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function sumSalaries(salaries){
    let sum = 0;
    for (let value of Object.values(salaries)){
        sum += value;
    }
    return sum;
  }

  console.log(sumSalaries(salaries));
  */
/*
  let user = {
    name: 'John',
    age: 30,

  };

  function count(user){
    return Object.keys(user).length;
  }

  console.log(count(user));
*/

//----------------------------------forEach, filter, map, sort, split & join, reduce
/*
function(item, index, array)
           |      |     |
        элемент массива, объекта
                  |     |
                его индекс, значение
                        |
                    сам массив
-------forEach
arr.forEach - позволяет вызвать функцию для каждого элемента массива

["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
    console.log(`У ${item} индекс ${index} в ${array}`);
  });

/У Бильбо индекс 0 в Бильбо,Гэндальф,Назгул
/У Гэндальф индекс 1 в Бильбо,Гэндальф,Назгул
/У Назгул индекс 2 в Бильбо,Гэндальф,Назгул

------filter
arr.filter - возвращает массив из всех подходящих элементов

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length);

/2

--------map
arr.map - вызывает функцию для каждого элемента массива и возвращает массив результата выполнения этой функции

let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths);

/6, 8, 6

---------sort
arr.sort - меняет порядок элементов в массиве

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [ 1, 15, 2 ];
arr.sort(compareNumeric);

/1, 2, 15

----------split & join
str.split - разбивает строку на элементы в массиве. в () передается разделитель

let str = "тест";
alert( str.split('') );

/т,е,с,т

str.join - наоборот объединяет элементы массива в строку

let arr = ['Вася', 'Петя', 'Маша'];
let str = arr.join(';');
alert( str );

/Вася;Петя;Маша

-----------reduce
(accumulator, item, index, array)
accumulator - результат прошлого вызова функции

arr.reduce - используются для вычесления единого значения на основе массива

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result);

/15

*/

/*
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c);

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));
  
console.log(usersMapped[0]);


[].reduce((prev, cur) => {

    prev.push(cur)
}, [])
*/

// null, false, undefined

/*
if(!Array.prototype.includes) {
console.log("Success")
}*/



/*
//пример Proxy
let wizard = {
    name: 'Merlin',
    tool: 'Wand'
  };

let wizardProxy = new Proxy(wizard, {

    get (obj, key) {
      console.log('get', obj, key, obj[key]);
      return obj[key];
    },
  
    set (obj, key, value) {
  
      console.log('set', obj, key, value);
  
      // Обновление свойства
      obj[key] = value;
  
      // Индикация успеха
      return true;
  
    },

    deleteProperty (obj, key) {
  
      console.log('delete', obj, key, obj[key]);
  
      // Удаление свойства
      delete obj[key];
  
      // Индикация успеха
      return true;
  
    }
  
  });

  let name = wizardProxy.name;
  wizardProxy.age = 172;
  delete wizardProxy.tool;
  
*/

/*
const apiUrl = 'https://swapi.dev/api/people.jason';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  */

  /*
  fetch('https://swapi.dev/api/people.jason')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
*/

/*
const wait = (i, ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));

async function Asy() {
    for (let i = 0; i < 10; i++) {
      await wait(i, Math.random() * 1000);
      console.log(i);
    }
  }
  Asy(0);*/
/*
  import * as https from 'https';
  import { HttpsProxyAgent } from 'https-proxy-agent';

  const agent = new HttpsProxyAgent('http://52.58.110.120:340');
  
  https.get('https://swapi.dev/api/people', { agent }, (res) => {
    console.log('"response" event!', res.headers);
    res.pipe(process.stdout);
  });*/

/*
  fetch("https://swapi.dev/api/people", {
    method: 'GET',
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
})
*/


/*
function GetPeople(){
    
    return fetch("https://swapi.dev/api/people", {
        method: 'GET',
        headers: {

            'User-Agent': 'PostmanRuntime/7.29.2',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
        },
        agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
    }).then((response) => response.json('results'))
    
    //вывести result
    //let json = await response.json();
    //return json;
}
console.log(await GetPeople());
*/


/*
async function GetPeople2(){
  fetch('https://swapi.dev/api/people',{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128'),
  })
    .then((response) => {
      return response.json();
    })
    
    .then((data) => {
      const {results} = data;
      console.log(results);
    })
}
//await GetPeople2();


async function GetPlanets(){
  let id = 0;
return await fetch('https://swapi.dev/api/planets',{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128'),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const {results} = data;
    console.log(results);
    return  results;
    });
}
//console.log(await GetPlanets());

//----------------------
async function GetPlanets2(Pname){
return await fetch('https://swapi.dev/api/planets',{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128'),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let a = Object.values(data.results);
    a.forEach(b =>{
      if(b.name !== Pname){
        //console.log(" ")
      }else{
        console.log(b);
        return b;
      }
    })
    });
}
//console.log(await GetPlanets2("Tatooine"));

*/
//------------------------------------



async function GetPlanets(id){ // id
  return await fetch(`https://swapi.dev/api/planets/${id}/`,{ // /${id}/
    method: 'GET',
    headers: {
      'User-Agent': 'PostmanRuntime/7.29.2',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
  },
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128'),
  }).then((response) => response.json())
    .then((Tatoo) => {
      const b = Tatoo.residents;
      return b;
    })
    
  }
//console.log(await GetPlanets(1)); // 1



async function GetPeople(url){
  return await fetch(url,{
    method: 'GET',
    headers: {
      'User-Agent': 'PostmanRuntime/7.29.2',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
  },
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128'),
  }).then((response) => response.json())
    .then((Pers) => {
      console.log(Pers.name);
    
  })
    .catch((error) => {
      console.log('AAAAAA', error);
  })
}


async function PeopleInResidents() {
  const a = await GetPlanets(1);
  const x = Object.keys(a);
  //console.log(x);
  for(let i = 0; i < x.length; i++){
    await GetPeople(a[i]);
  }
console.log("End");
}

//PeopleInResidents();

//------------------------------------

async function AsyncGetPlanets(id) {
  const response = await fetch(`https://swapi.dev/api/planets/${id}/`,{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
  });
  let user = await response.json();
  const {residents} = user;
  return residents;
  //return user.residents; // Сделать через const{residents}
}
//console.log(await AsyncGetPlanets(1));


async function AsyncGetPeople(url) {
  const response = await fetch(url,{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
  });
  let Pers = await response.json();
  const {name} = Pers;
  console.log( "сообщение получено" + name);
  return name;
  //return Pers.name // Сделать через const{name}
}
//console.log(await AsyncGetPeople('https://swapi.dev/api/people/1/'));

async function AsyncPeopleInResidents() {
  const a = await AsyncGetPlanets(1);
  const x = Object.keys(a);
  //console.log(a[0]);
  for(let i = 0; i < x.length; i++){
    let hero = await AsyncGetPeople(a[i]);
    console.log(hero);
  }
console.log("End");
}
//AsyncPeopleInResidents();

//------------------------------------
function PromGetPlanets(id){
    return fetch(`https://swapi.dev/api/planets/${id}/`,{
      agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
    }).then((response) => response.json())
      .then((Tatoo) => {
        const {residents} = Tatoo;
        //console.log(residents);//
        return (residents);//
    })
      .catch((error) => {
        console.log('AAAAAA', error);
        return [];
    })
  }
/*(PromGetPlanets(1)).then((t) =>{
  console.log(t);
});*/

function PromGetName(url){
    return fetch(url,{
      agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
    }).then((response) => response.json())
      .then((Name) => {
        const {name} = Name;
        //console.log(name);//
        return (name);//
    })
      .catch((error) => {
        console.log('AAAAAA', error);
        return [];
    })
  }
/*(PromGetName()).then((d) =>{
  console.log(d);
});*/

/*function GetPlanetAndName(){
  let GetPlan = fetch(`https://swapi.dev/api/planets/1/`,{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
  }).then((response) => response.json())
    .then(Tatoo => {
      const {residents} = Tatoo;
      let GetN = fetch(url,{
        agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
      }).then((resp => resp.json))
        .then((Name) =>{
          const {name} = Name;
        })
        for(let i = 0; i < residents.length; i++){
          console.log(GetN(residents[i]));
        }
    })
}*/

function PromPeopleInResidents() {
  PromGetPlanets(1).then((a) =>{
    for(let i = 0; i < a.length; i++){
      PromGetName(a[i]).then((b) =>{
        console.log(b);
      });
    }
  });
}

/*
  PromGetPlanets(1).then((a) =>{
    for(let i = 0; i < a.length; i++){
      PromGetName(a[i]).then(console.log)
    }
  })
*/
//PromPeopleInResidents();

function Pall(){
  PromGetPlanets(1)
    .then(residents =>
      Promise.all(residents.map(PromGetName))
      .then(name =>
        console.log(name)
      )
  )
}
//Pall();

/*
function Queue(){
  const isEmpty = val => val === null || !(Object.keys(val) || val).length;
  PromGetPlanets(1)
  .then(res =>{
    //console.log(res);
    let n = [];
    n.push(res);
    //console.log(n.length);
    let leng = 0;
    n.forEach((a) =>{ console.log(a)
      leng = a.length;
  });
  //console.log(leng);
    if(isEmpty(n)){
      console.log('pust');
      return [];
    }else{
      //let leng = n.length;
      function Del(leng){
        if(leng === 0){
          console.log('pust2');
          return 0;
        }else{
          return fetch(n,{
            agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
          }).then((response) => response.json())
            .then(
            n.forEach((a) =>{
              a.pop();
              console.log(a)
              leng --;
              //console.log(PromGetName(a));
              return PromGetName(Del(a));
            })
            )
        }
      }
      console.log(Del(10));
    }

  })
}
//Queue();
*/
//------------------------------------




//----------------------------------------
import * as fs from "fs";
//import * as fsPromises from "node:fs/promises";

/*
fs.readFile("/etc/passwd", { encoding: "utf-8" },
  (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(result);
  }
);
*/

  
async function ships(url){
  const response = await fetch(url,{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
  });
  let Ship = await response.json();
  let Ships = [];
  const {results} = Ship;
  for(let i = 0; i < results.length; i++){
    const {name} = results[i];
    const {cost_in_credits} = results[i];
    const {created} = results[i];
    Ships.push(name, cost_in_credits);


  }

  let o = [];
  for(let z = 0; z < Ships.length-1; z++){
    let obj1 = {name: Ships[z], cost: Ships[z+1]}
    o.push(obj1);
    z++;
  }
  return o;
}

///

async function cost_and_date(url){
  const response = await fetch(url,{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
  });
  let Shipp = await response.json();
  let Summ = [];
  let Data = [];

  const {results} = Shipp;
  const {next} = Shipp;

  results.forEach(res =>{
    const {name} = res;
    const {created} = res;
    const {cost_in_credits} = res;

    Summ.push(cost_in_credits);
    Data.push(name, created);
  })

  const NoUnknown =  Summ.map((num, ind) =>{
    num === 'unknown'
    ? (num = 0)
    : (num = num);
    return num;
  });

  const NUnumb = NoUnknown.map(Number); 
  const SumOfNumbers = NUnumb.reduce((a, n) => a + n, 0);

  //----------------------------
  let s = [];
  
  for(let j = 0; j < Data.length-1; j++){
    let obj = {name: Data[j], date: Data[j+1]};
    s.push(obj);
    j++;
  }
    
  s.sort(function(a, b){
    return (+new Date(b.date)) - (+new Date(a.date));
  });
  
  s.forEach(x => {
    let d = new Date(x.date);
    let day = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    let formantdate = day + ' ' + month + ' ' + year;
    x.date = formantdate;
    console.log(x);
  });
  
  return SumOfNumbers;
}

let be = [];
let su = [];
async function poka(url){
  const response = await fetch(url,{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
  });
  let a = await response.json();
  const {next} = a;
  if(next !== null){
    be.push(await ships(url));
    su.push(await cost_and_date(url));
    
    return await poka(next);
  }
  be.push(await ships(url));
  su.push(await cost_and_date(url));

  fs.writeFileSync('data.json', JSON.stringify(be));
  return su.reduce((a, n) => a + n, 0);
}

let url = 'https://swapi.dev/api/starships';
console.log(await poka(url));

/*
let be = [];
let su = [];
for(let j = 0; j < 4; j++){
  let n = j+1;
  let url = `https://swapi.dev/api/starships/?page=${n}`;
  be.push(await ships(url));
  su.push(await cost_and_date(url));
}
console.log(su.reduce((a, n) => a + n, 0));
const y = be[0].concat(be[1], be[2], be[3]);
//console.log(y);
fs.writeFileSync('data.json', JSON.stringify(y));
*/





/*
console.log(await ships());
fs.writeFileSync(
  "data.txt",
  "Новая строка\n",
  { encoding: "utf-8", flag: "a" }
);
*/

/*
async function AsyncGetPeople(url) {
  const response = await fetch(url,{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
  });
  let Pers = await response.json();
  const {name} = Pers;
  console.log( "сообщение получено" + name);
  return name;
  //return Pers.name // Сделать через const{name}
}*/
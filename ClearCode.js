import HttpsProxyAgent from "https-proxy-agent";
import fetch, { blobFrom } from "node-fetch";
import * as fs from "fs";
import { error } from "console";

let all =[];
let su = [];
async function conc(url){
  const response = await fetch(url,{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
  });
  const a = await response.json();
  const {next} = a;
  const b =[];
  if(next !== null){
    all.push(...await ships(url));
    //su.push(await cost_and_date(url));
    return await conc(next);
  }
  all.push(...await ships(url));
  //su.push(await cost_and_date(url));
  //console.log(all);


  fs.writeFileSync('data.json', JSON.stringify(all));
  return //JSON.stringify(all);
  //su.reduce((a, n) => a + n, 0);;
}

let url = 'https://swapi.dev/api/starships';
console.log(await conc(url));

/*
async function one_list(url) {
  const response = await fetch(url,{
    agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
  });
  let OBJ = await response.json();
  const {results} = OBJ;
  return results;
}
*/

async function ships(url){
    const response = await fetch(url,{
      agent: new HttpsProxyAgent('http://proxy.compassplus.ru:3128')
    });
    const {results} = await response.json();

    return results;
  }
  
  ///
fs.readFile('data.json',(err, data) => {
  const b = JSON.parse(data);
  let costs = [];
  let Data = [];
  b.forEach(a => {
    costs.push(a.cost_in_credits);
    Data.push(a.name, a.created);
  });
  const c =  costs.map((num) =>{
    num === 'unknown'
    ? (num = 0)
    : (num = num);
    return num;
  });

 
  const SumOfNumbers = c.reduce((a, n, array) => {
    return a + n
    }, 0);
  console.log(SumOfNumbers)

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
});

  /*
  function cost_and_date(){
    const da = fs.readFileSync("data.json", JSON.stringify(all.cost_in_credits));
    console.log(da);
  }
    */
    /*
    let Shipp = await response.json();
    let Summ = [];
    let Data = [];
  
    const {results} = Shipp;
  
    results.forEach(res =>{
      const {name} = res;
      const {created} = res;
      const {cost_in_credits} = res;
  
      Summ.push(cost_in_credits);
      Data.push(name, created);
    })
  
    const NoUnknown =  Summ.map((num) =>{
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
    */
  /*
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
  */
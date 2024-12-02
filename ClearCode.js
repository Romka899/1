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
    return await conc(next);
  }
  all.push(...await ships(url));

  fs.writeFileSync('data.json', JSON.stringify(all));
  return all;

}

let url = 'https://swapi.dev/api/starships';
console.log(await conc(url));



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

  const SumOfNumbers = costs.reduce((a, n) => {
    n === 'unknown'
    ? (n = 0)
    : (n = n);
    return a + Number(n)
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


// code your solution here
const record = [
  {year: '2015',result:'W'},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
const isAWin = record.find(superbowlWin);

function superbowlWin(record){
 for(let element of record){
    if(element.result===`W`){
     return element.year;
 }

}

    }
    
  
  
let soz = [
  'non',  'banan', 'mashina', 'asal', 'olma' ,'aziza', 'Gul', 
]
let bor1 = []
let yoq1 = []


for(i = 0 ; i < soz.length ; i++){
  if(soz[i].includes('n') || soz[i].includes('N')){
      bor1.push(soz[i]);
  }
  else{
      yoq1.push(soz[i])
  }
} 
console.log(bor1)
console.log(yoq1)
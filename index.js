// Code your solution in this file!

let anotherValue = 42

  function distanceFromHqInBlocks (someValue){
  if (someValue > anotherValue)
    return someValue - anotherValue
  else
    return anotherValue -someValue
}
  
   
  function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks (someValue) * 264
}


function distanceTravelledInFeet (start, end){
  
  if (end > start)
    return (end - start) *264
else 
    return (start - end) *264
  
}

function calculatesFarePrice (start, destination){
const distance = distanceTravelledInFeet(start, destination)

if (distance< 400)
        return 0;
        
else if (distance >= 400 && distance < 2000) 
    return (distance * .02);
          
  else if (distance >= 2000 && distance <= 2500) {
    return 25;
  }
  else {
    return ('cannot travel that far');
  }



}
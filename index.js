function scuberGreetingForFeet(value){
  // Write your code here!
  let result 

  if (value < 400) {
    result = "This one is on me!";
  }
  else if(value > 400 && value < 2000) {
    result = "That will be twenty bucks.";
  }
  else if(value > 2000 && value <2500) {
    result = "I will gladly take your thirty bucks.";
  }
  else if(value > 2500){
    result = "No can do.";
  }

  return result
};

let destination;

function ternaryCheckCity(destination){
  // Write your code here!

  const destinationCity = destination === "NYC" ? "Ok, sounds good." : "No go.";

  return destinationCity;
}

let tip;

function switchOnCharmFromTip(tip){
  switch(tip) {
    case tip = "generous": 
    return "Thank you so much."
    break;

    case tip = "not as generous": 
    return "Thank you."
    break;

    default: 
    return "Bye."
  }
}
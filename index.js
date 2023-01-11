function scuberGreetingForFeet(length){
  
  let answer;
  
  // for switch cases, start with the largest value?
  // oops, it seems i should have used an if.. else if .. else statement
  // redid it using if statement and saved switch case for last function


  if (length > 2500){
    return "No can do.";

  } else if (length > 2000){
    return "I will gladly take your thirty bucks.";

  } else if (length > 400){
    return "That will be twenty bucks."

  } else {

    return "This one is on me!"
  }

  // switch(length > 0){
  //   case length > 2500:
  //       answer = "No can do.";
  //       break;

  //   case length > 2000:
  //       answer = "I will gladly take your thirty bucks.";
  //       break;

  //     case length > 400:
  //       answer = "That will be twenty bucks.";
  //       break;

  //   case length <= 400:
  //       answer = "This one is on me!";
  //       break;
  // }

  // return answer;

}

function ternaryCheckCity(city){

  return (city === "NYC")
    ? "Ok, sounds good."
    : "No go."
  
}

function switchOnCharmFromTip(tip){

  switch (tip){
    case "generous" :
      return "Thank you so much.";
    
    case "not as generous" :
      return "Thank you.";

    default :
      return "Bye.";
  }
  // Write your code here!
}
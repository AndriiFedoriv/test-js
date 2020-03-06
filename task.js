//  https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript?fbclid=IwAR3wUSZtJCH9klgGdl1LbeKGPF8WQ-JH3xfVLcjc4ivDaYjitmkUbao4xP8
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const result = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    return result; // code goes here
}

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript?fbclid=IwAR2Kvbg02f_8BwB3yaqopCid0l3wSad7gGfnGXltMOXWOEPusm890YxT4V4
function greet (name, owner) {
if (name === owner) {
return "Hello boss";
}
return "Hello guest"; // Add code here
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript?fbclid=IwAR26-vfFDhmhQE82RulsR_WQAXgRatqvM12n76TaJRzcTIUnr-fgTOJWOW4
function litres(time) {
    return parseInt(time * 0.5);
}

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript?fbclid=IwAR2PKSUxZYrnABCGp98atAZj2Bal0Fge6YM4ZvQWYwElTMSoU9136BJYwDs
function move (position, roll) {
 return position + roll * 2;
}

// https://www.codewars.com/kata/be-concise-i-the-ternary-operator/train/javascript?fbclid=IwAR1P-ZbTZ_XsHG76Z4IJkoY079-UBXh2kwQ40xnhrcYvu4gOMOcGU5YskLc
function describeAge(a) {
return `You're a(n) ${a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'}`
}

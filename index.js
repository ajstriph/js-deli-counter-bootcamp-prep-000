var katzDeli = [];
function takeANumber(katzDeli, name){
  var katzDeliLine = [];
  var i = 0;
  while (katzDeli > 0){
    katzDeli.push(name)
    return `Welcome, ${name}. You are currently number ${katzDeli} in line.`;
  }


}
function nowServing (katzDeliLine) {
  if (katzDeliLine >= 1){
      return `Currently serving ${name}.`;
  }
  else {
      return `There is nobody waiting to be served.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine === 0){
    return "The line is currently empty.";
  }
  else {
    return `The line is currently: ${number}. ${name},`;
  }
}

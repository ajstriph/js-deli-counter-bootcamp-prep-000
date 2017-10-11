function takeANumber(katzDeli, name){
  var katzDeliLine = [];
  var i = 0;
  for (var i =0; i < katzDeliLine.length; i++){
    katzDeli.push(name);
  }
  while (katzDeli > 0){
    return `Welcome, ${name}. You are currently number ${i} in line.`;
  }
}

function nowServing (deliLine) {
  if (deliLine == 0){
      return "There is nobody waiting to be served.";
  }
  else {
      deliLine.shift();
      return `Currently serving ${deliLine[0]}.`;
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

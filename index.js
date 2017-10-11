function takeANumber(katzDeliLine, name){
  var katzDeliLine = [];
  if (katzDeliLine.length==0){
    katzDeliLine.push(name);
  }
  else (var i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine[i] == undefined){
        katzDeliLine[i]=name;
        return katzDeliLine;
    }
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

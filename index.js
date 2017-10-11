function takeANumber (line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

function nowServing (deliLine) {
  if (deliLine = []){
    return `There is nobody waiting to be served!`;
  }
  else {
    return `Currently serving ${deliLine.shift()}.`;
  };
}

function currentLine(line){
  if (line = []){
    return `The line is currently empty.`;
  }
  else {
    return `The line is currently: ${number}. ${name},`;
  }
}

function takeANumber (line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

function nowServing (deliLine) {
  if (deliLine = []){
    return `There is nobody waiting to be served!`;
  }
  else {
    deliLine.shift(name);
    return `Currently serving ${name}.`;
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

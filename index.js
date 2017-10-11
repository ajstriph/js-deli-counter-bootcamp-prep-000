// function takeANumber(katzDeli, name){
//   var katzDeliLine = [];
//   var i = 0;
//   for (var i =0; i < line.length; i++){
//     katzDeli.push(name);
//   }
//   while (katzDeli > 0){
//     return `Welcome, ${name}. You are currently number ${i} in line.`;
//   }
// }

function takeANumber (line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

function nowServing (line) {

}

function currentLine(katzDeliLine){
  if (katzDeliLine === 0){
    return "The line is currently empty.";
  }
  else {
    return `The line is currently: ${number}. ${name},`;
  }
}
